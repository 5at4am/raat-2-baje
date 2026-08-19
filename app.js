(function(){
  "use strict";
  /* ============ PLAYER MOTION LAYER (GSAP) ============
     Entrance, hover tilt + parallax, play/pause pulse.
     Exposes window.__playerUI for app.js:
       .setPlaying(bool)   — run/stop pulse + cover glow
       .swapMeta()         — animate title/artist on track change
     All loops are paused timelines; nothing runs unless the
     real engine says the track is playing. */
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = matchMedia('(hover:hover) and (pointer:fine)').matches;
  const bar = document.getElementById('playerBar');
  if(!window.gsap || !bar) return;

  const playBtn = bar.querySelector('#playBtn');
  const coverThumb = bar.querySelector('#coverThumb');
  const meta = bar.querySelector('.track-meta');

  /* ---------- entrance (subtle) ----------
     Reduced-motion renders the final state immediately: fade only.
     Otherwise a gentle staggered reveal — small y offsets so it
     reads as a fade, not a slide. */
  if(reduced){
    gsap.from(bar, { opacity: 0, duration: 0.3, ease: 'power2.out', clearProps: 'opacity' });
  } else {
    gsap.from(bar, { y: 14, opacity: 0, duration: 0.5, ease: 'power2.out', delay: 0.1, clearProps: 'transform,opacity' });
    const wm = document.querySelector('.wordmark-zone');
    if(wm){
      gsap.from(wm.children, {
        opacity: 0, y: 10, duration: 0.5, ease: 'power2.out',
        delay: 0.18, stagger: 0.05, clearProps: 'transform,opacity'
      });
    }
  }

  /* ---------- scene parallax (fine pointers only) ----------
     Subtle per-layer drift on mouse move. No 3D tilt/rotation —
     the scene no longer tilts, so the music player stays put. */
  if(fine && !reduced){
    let moveRaf = null;
    /* `.wordmark-zone` is centered with a CSS percentage translate;
       tweening x/y would flatten that % into px and break the centering,
       so claim it with GSAP's xPercent/yPercent first. */
    gsap.set('.wordmark-zone', { x: 0, y: 0, xPercent: -50, yPercent: -50 });
    /* each layer drifts at its own depth as the cursor moves:
       background counters hardest, foreground glides lightly */
    const layers = {
      '.hero-bg':       { x: -26, y: -18 },
      '.grain':         { x: -12, y: -8 },
      '.wordmark-zone': { x: 16,  y: 10 },
      '.topbar':        { x: 8,   y: 5 }
    };
    const onMove = (e) => {
      if(moveRaf) return;
      moveRaf = requestAnimationFrame(() => {
        moveRaf = null;
        const nx = (e.clientX / innerWidth) * 2 - 1;
        const ny = (e.clientY / innerHeight) * 2 - 1;
        Object.keys(layers).forEach((sel) => {
          gsap.to(sel, {
            x: nx * layers[sel].x, y: ny * layers[sel].y,
            duration: 1.3, ease: 'power2.out', overwrite: 'auto'
          });
        });
      });
    };
    const onLeave = () => {
      Object.keys(layers).forEach((sel) => {
        gsap.to(sel, { x: 0, y: 0, duration: 1.5, ease: 'power2.out', overwrite: 'auto' });
      });
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerleave', onLeave, { passive: true });
  }

  /* ---------- playback pulse (looped, paused) ---------- */
  const pulse = gsap.timeline({ paused: true, repeat: -1, yoyo: true })
    .to(playBtn,    { scale: 1.06, duration: 0.8, ease: 'sine.inOut' });

  /* the lit window above the title glows while music plays */
  const windowLit = document.querySelector('.window-lit');

  function setPlaying(playing){
    if(playing){
      pulse.play();
      gsap.to(coverThumb, { boxShadow: '0 0 26px 0 rgba(242,168,92,0.28)', duration: 0.6, ease: 'power2.out' });
      if(windowLit) windowLit.classList.add('lit');
    } else {
      pulse.pause();
      gsap.to(coverThumb, { boxShadow: '0 0 0 0 rgba(242,168,92,0)', duration: 0.5, ease: 'power2.out' });
      if(windowLit) windowLit.classList.remove('lit');
    }
  }

  /* ---------- play button press feedback ---------- */
  playBtn.addEventListener('click', () => {
    if(reduced) return;
    gsap.fromTo(playBtn, { scale: 0.88 }, { scale: 1, duration: 0.3, ease: 'back.out(2.5)' });
  });

  /* ---------- track meta swap on next/prev ---------- */
  function swapMeta(){
    if(reduced || !meta) return;
    gsap.fromTo(meta,
      { y: 9, opacity: 0.4 },
      { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out' });
  }

  window.__playerUI = { setPlaying, swapMeta };
})();

(function(){
  "use strict";

  /* ============ DATA ============
     Tracks live in playlist.js (real, verified, embeddable
     YouTube IDs), loaded before this script. They are flattened
     into one single library — no playlist categories. */
  const PLAYLISTS = window.PLAYLISTS;

  let currentFlatIndex = 0;
  let isPlaying = false;
  let ytPlayer = null;
  let ytReady = false;
  let progressTimer = null;
  let fallbackTimer = null;

  /* reliability: keep playback moving no matter what a single track does */
  let loadToken = 0;            /* bumped on every load; guards double-advance */
  let skipScheduled = false;    /* prevents one failure from advancing twice   */
  let loadPending = false;      /* a new video is loading; ignore stray PAUSED */
  let stallTimer = null;        /* watchdog: video never starts -> auto-next   */
  let lastProgressAt = 0;       /* last getCurrentTime() while PLAYING         */
  let frozenCount = 0;          /* consecutive seconds the clock didn't move   */
  const blockedIds = new Set(); /* youtubeIds that failed to play this session */

  /* persistent skip log: records songs that actually failed to start in THIS
     browser (real ground truth — automation can't reproduce ad serving, so
     only failures observed here are worth removing). Loaded on boot so a
     future run can avoid re-testing the same dead songs. */
  const SKIP_LOG_KEY = 'raat2baje_skips';
  let skipLog = [];
  try {
    const saved = JSON.parse(localStorage.getItem(SKIP_LOG_KEY) || '[]');
    if(Array.isArray(saved)) skipLog = saved.filter((e) => e && e.id);
  } catch (e) { /* storage unavailable */ }
  const logSkip = (id) => {
    if(!id || skipLog.some((e) => e.id === id)) return;
    skipLog.push({ id, title: (currentEntry() || {}).track ? currentEntry().track.title : '', at: Date.now() });
    if(skipLog.length > 200) skipLog = skipLog.slice(-200);
    try { localStorage.setItem(SKIP_LOG_KEY, JSON.stringify(skipLog)); } catch (e) { /* ignore */ }
  };

  /* fallback simulated playback so the UI/demo still works
     when the YouTube API can't load (offline preview, blocked network) */
  let simTime = 0;
  let simDuration = 245;
  let usingFallback = false;

  /* one flat library: every track from every playlist, no categories.
     Exact duplicates (same title, artist, and video) are dropped. */
  const ALL_TRACKS = [];
  PLAYLISTS.forEach((pl) => {
    pl.tracks.forEach((t) => {
      if(ALL_TRACKS.some((e) =>
        e.track.title === t.title &&
        e.track.artist === t.artist &&
        e.track.youtubeId === t.youtubeId)) return;
      ALL_TRACKS.push({ track: t });
    });
  });

  /* history of played tracks so "previous" steps back through random */
  const history = [];

  const el = (id) => document.getElementById(id);

  /* graceful fallback if the playlist data didn't load */
  if(!ALL_TRACKS.length){
    el('trackTitle').textContent = 'No tracks loaded';
    el('trackArtist').textContent = 'playlist.js missing or failed';
    el('playBtn').setAttribute('disabled', 'true');
    return;
  }

  /* resolve the currently-selected track */
  function currentEntry(){
    return ALL_TRACKS[currentFlatIndex];
  }

  /* ============ CLOCK ============ */
  function tickClock(){
    const d = new Date();
    let h = d.getHours();
    const m = d.getMinutes().toString().padStart(2,'0');
    const ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12; if(h === 0) h = 12;
    el('clock').textContent = `${h}:${m} ${ampm}`;
  }
  tickClock();
  setInterval(tickClock, 15000);

  /* ============ ONLINE COUNTER (simulated presence) ============ */
  let online = 214;
  el('onlineCount').textContent = online;
  setInterval(() => {
    online += Math.floor(Math.random()*7) - 3;
    if(online < 40) online = 40;
    el('onlineCount').textContent = online;
  }, 4000);

  /* ============ PWA INSTALL ============ */
  let deferredPrompt = null;
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    el('installBtn').style.display = 'inline-flex';
  });
  el('installBtn').addEventListener('click', async () => {
    if(!deferredPrompt) return;
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt = null;
    el('installBtn').style.display = 'none';
  });

  /* ============ LIBRARY (browse / search / play any song) ============ */
  const libraryModal = el('libraryModal');
  const libraryClose = el('libraryClose');
  const librarySearch = el('librarySearch');
  const songListEl = el('songList');
  const libraryCount = el('libraryCount');

  function openLibrary(){
    libraryModal.classList.add('open');
    librarySearch.value = '';
    renderLibrary('');
    librarySearch.focus();
  }
  function closeLibrary(){
    libraryModal.classList.remove('open');
  }
  function renderLibrary(filter){
    const q = filter.trim().toLowerCase();
    const matches = ALL_TRACKS.map((e, i) => ({ entry: e, i }))
      .filter(({ entry }) => !q ||
        entry.track.title.toLowerCase().includes(q) ||
        entry.track.artist.toLowerCase().includes(q));
    libraryCount.textContent = q
      ? `${matches.length} / ${ALL_TRACKS.length} songs`
      : `${ALL_TRACKS.length} songs`;
    songListEl.textContent = '';
    const frag = document.createDocumentFragment();
    matches.forEach(({ entry, i }) => {
      const li = document.createElement('li');
      li.className = 'song-row' + (i === currentFlatIndex ? ' now-playing' : '');
      li.dataset.index = i;

      const num = document.createElement('span');
      num.className = 'song-num';
      num.textContent = String(i + 1).padStart(3, '0');

      const meta = document.createElement('span');
      meta.className = 'song-meta';
      const title = document.createElement('span');
      title.className = 'song-title';
      title.textContent = entry.track.title;
      const artist = document.createElement('span');
      artist.className = 'song-artist';
      artist.textContent = entry.track.artist;
      meta.append(title, artist);

      li.append(num, meta);
      frag.appendChild(li);
    });
    songListEl.appendChild(frag);
  }

  function playTrackAt(index){
    currentFlatIndex = index;
    playCurrentTrack();
    if(ytReady && ytPlayer && ytPlayer.playVideo){
      ytPlayer.unMute();
      ytPlayer.playVideo();
      startProgressLoop();
    }
    closeLibrary();
  }

  libraryModal.addEventListener('click', (e) => { if(e.target === libraryModal) closeLibrary(); });
  libraryClose.addEventListener('click', closeLibrary);
  librarySearch.addEventListener('input', () => renderLibrary(librarySearch.value));
  librarySearch.addEventListener('keydown', (e) => {
    if(e.key === 'Enter'){
      const first = songListEl.querySelector('li[data-index]');
      if(first) playTrackAt(parseInt(first.dataset.index, 10));
    }
  });
  songListEl.addEventListener('click', (e) => {
    const li = e.target.closest('li[data-index]');
    if(li) playTrackAt(parseInt(li.dataset.index, 10));
  });
  el('libraryBtn').addEventListener('click', openLibrary);

  /* ============ FORMAT TIME ============ */
  function fmt(sec){
    if(!isFinite(sec) || sec < 0) sec = 0;
    const m = Math.floor(sec/60);
    const s = Math.floor(sec%60).toString().padStart(2,'0');
    return `${m}:${s}`;
  }

  /* ============ LOAD TRACK META INTO UI ============ */
  function renderTrackMeta(){
    const track = currentEntry().track;
    el('trackTitle').textContent = track.title;
    el('trackArtist').textContent = track.artist;
    el('trackTitle').setAttribute('title', track.title);

    const thumb = el('coverThumb');
    const img = el('coverImg');
    if(track.cover){
      img.src = track.cover;
      img.alt = track.artist;
      thumb.classList.add('has-cover');
    } else {
      img.removeAttribute('src');
      thumb.classList.remove('has-cover');
    }
    updateMediaSession();
  }

  /* ============ MEDIA SESSION (lock-screen / OS media controls) ============ */
  function updateMediaSession(){
    if(!('mediaSession' in navigator)) return;
    const track = currentEntry().track;
    const cover = track.cover || '';
    navigator.mediaSession.metadata = new MediaMetadata({
      title: track.title || 'Unknown',
      artist: track.artist || 'Unknown',
      album: 'Raat 2 Baje',
      artwork: cover
        ? [{ src: cover, sizes: '320x180', type: 'image/jpeg' },
           { src: cover, sizes: '120x90', type: 'image/jpeg' }]
        : []
    });
  }

  function setupMediaSession(){
    if(!('mediaSession' in navigator)) return;
    const ms = navigator.mediaSession;
    const hasYt = () => ytReady && ytPlayer;
    ms.setActionHandler('play', () => { if(hasYt()){ ytPlayer.unMute(); ytPlayer.playVideo(); setPlayingUI(true); startProgressLoop(); } });
    ms.setActionHandler('pause', () => { if(hasYt()){ ytPlayer.pauseVideo(); setPlayingUI(false); } });
    ms.setActionHandler('previoustrack', () => playPrev());
    ms.setActionHandler('nexttrack', () => playNext());
    ms.setActionHandler('seekbackward', (d) => seekBy(-(d && d.seekOffset ? d.seekOffset : 10)));
    ms.setActionHandler('seekforward', (d) => seekBy(d && d.seekOffset ? d.seekOffset : 10));
    ms.setActionHandler('seekto', (d) => {
      if(!d || d.seekTime == null) return;
      if(hasYt() && ytPlayer.getDuration){
        const dur = ytPlayer.getDuration();
        ytPlayer.seekTo(Math.max(0, Math.min(dur, d.seekTime)), true);
      }
    });
  }

  /* ============ YOUTUBE IFRAME API ============ */
  function loadYouTubeAPI(){
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    // if the API script itself is blocked (adblocker / offline), drop to
    // the silent simulation immediately instead of waiting out the timer
    tag.onerror = () => { if(!ytReady) enableFallbackMode(); };
    document.head.appendChild(tag);

    // give it a window to initialise; fall back to simulated playback if it
    // doesn't load in time. Cleared as soon as the real player is ready.
    fallbackTimer = setTimeout(() => {
      if(!ytReady) enableFallbackMode();
    }, 5000);
  }

  window.onYouTubeIframeAPIReady = function(){
    const track = currentEntry().track;
    ytPlayer = new YT.Player('yt-hidden-player', {
      height: '1', width: '1',
      videoId: track.youtubeId,
      playerVars: { autoplay: 0, controls: 0, disablekb: 1, playsinline: 1 },
      events: {
        onReady: () => {
          ytReady = true;
          clearTimeout(fallbackTimer);
          usingFallback = false;
          if(ytPlayer.unMute) ytPlayer.unMute();
          // if the user started playback while we were still in fallback,
          // hand off to the real audio source now
          if(isPlaying){ loadCurrentIntoPlayer(); }
        },
        onStateChange: onPlayerStateChange,
        onError: () => { advanceAfterFailure(currentEntry().track.youtubeId, true); }
      }
    });
  };

  /* load the current track into the (ready) YouTube player and arm the
     "did it actually start?" watchdog so a stuck video can't freeze the radio */
  function loadCurrentIntoPlayer(){
    const token = ++loadToken;
    skipScheduled = false;
    loadPending = true;
    clearTimeout(stallTimer);
    ytPlayer.loadVideoById(currentEntry().track.youtubeId);
    armStallWatchdog(token);
  }

  /* watchdog: if a track is expected to play but never reaches a settled
     state, hand off to the next one. While the user is paused it just
     re-arms itself so a wedged video can't break a later play attempt. */
  function armStallWatchdog(token){
    clearTimeout(stallTimer);
    stallTimer = setTimeout(() => {
      if(token !== loadToken) return;      // a newer load already replaced this one
      if(!isPlaying){ armStallWatchdog(token); return; }
      const st = ytPlayer && ytPlayer.getPlayerState ? ytPlayer.getPlayerState() : -1;
      if(st !== YT.PlayerState.PLAYING && st !== YT.PlayerState.PAUSED){
        advanceAfterFailure(currentEntry().track.youtubeId, false);
      }
    }, 12000);
  }

  /* a track failed to start (or froze): remember the bad ID for this session,
     keep the "playing" look, and slide to the next track on a short delay */
  function advanceAfterFailure(id, permanent){
    if(permanent && id){
      blockedIds.add(id);
      logSkip(id);
    }
    loadToken++;                       /* invalidate the old load's watchdog   */
    clearTimeout(stallTimer);
    if(skipScheduled) return;          /* already advancing — don't double-skip */
    skipScheduled = true;
    setPlayingUI(true);
    stallTimer = setTimeout(() => {
      skipScheduled = false;
      playNext();
    }, 700);
  }

  function onPlayerStateChange(evt){
    if(evt.data === YT.PlayerState.PLAYING){
      loadPending = false;
      clearTimeout(stallTimer);
      setPlayingUI(true);
      startProgressLoop();
    } else if(evt.data === YT.PlayerState.PAUSED){
      if(loadPending) return;   /* transient pause while a new video loads */
      setPlayingUI(false);
    } else if(evt.data === YT.PlayerState.ENDED){
      playNext();
    }
  }

  function enableFallbackMode(){
    usingFallback = true;
    simTime = 0;
  }

  /* ============ PROGRESS LOOP ============ */
  function startProgressLoop(){
    clearInterval(progressTimer);
    frozenCount = 0;
    progressTimer = setInterval(() => {
      if(!isPlaying) return;

      let cur, dur;
      if(!usingFallback && ytPlayer && ytPlayer.getCurrentTime){
        cur = ytPlayer.getCurrentTime();
        dur = ytPlayer.getDuration() || simDuration;

        /* stuck-playing detection: state says PLAYING but the clock never
           moves -> the audio is wedged, so hand off to the next track */
        if(ytPlayer.getPlayerState && ytPlayer.getPlayerState() === YT.PlayerState.PLAYING){
          if(Math.abs(cur - lastProgressAt) < 0.001){ frozenCount++; }
          else { frozenCount = 0; }
          if(frozenCount >= 20){
            frozenCount = 0;
            advanceAfterFailure(currentEntry().track.youtubeId, false);
            return;
          }
          lastProgressAt = cur;
        }
      } else {
        simTime += 1;
        if(simTime >= simDuration) { playNext(); return; }
        cur = simTime; dur = simDuration;
      }

      const pct = dur ? Math.min(100, cur/dur*100) : 0;
      el('curTime').textContent = fmt(cur);
      el('durTime').textContent = fmt(dur);
      el('seekBar').value = pct;
      el('seekBar').style.setProperty('--seek', pct + '%');
    }, 1000);
  }

  /* ============ TRANSPORT CONTROLS ============ */
  /* toggles the play/pause UI: button icons, player glow, media-session state */
  function setPlayingUI(playing){
    isPlaying = playing;
    el('playerBar').classList.toggle('playing', playing);
    el('playIcon').style.display = playing ? 'none' : 'block';
    el('pauseIcon').style.display = playing ? 'block' : 'none';
    el('playBtn').setAttribute('aria-label', playing ? 'Pause music' : 'Play music');
    if('mediaSession' in navigator){
      navigator.mediaSession.playbackState = playing ? 'playing' : 'paused';
    }
    if(window.__playerUI) window.__playerUI.setPlaying(playing);
  }

  function playCurrentTrack(){
    renderTrackMeta();
    if(window.__playerUI) window.__playerUI.swapMeta();
    simTime = 0;
    lastProgressAt = 0;
    frozenCount = 0;
    el('seekBar').value = 0;
    el('seekBar').style.setProperty('--seek', '0%');
    el('curTime').textContent = '0:00';

    if(ytReady && ytPlayer && ytPlayer.loadVideoById){
      loadCurrentIntoPlayer();
    } else {
      setPlayingUI(true);
      startProgressLoop();
    }
  }

  function togglePlay(){
    if(ytReady && ytPlayer){
      const state = ytPlayer.getPlayerState ? ytPlayer.getPlayerState() : -1;
      if(state === 1){ ytPlayer.pauseVideo(); setPlayingUI(false); }
      else { ytPlayer.unMute(); ytPlayer.playVideo(); setPlayingUI(true); startProgressLoop(); }
    } else {
      setPlayingUI(!isPlaying);
      if(isPlaying) startProgressLoop();
    }
  }
  el('playBtn').addEventListener('click', togglePlay);

  /* next is always random (never repeats the current track) and steers clear
     of any video that failed to play this session, so broken uploads can't
     make the radio stutter; previous steps back through the recent history */
  function randomIndex(){
    if(ALL_TRACKS.length < 2) return 0;
    let pool = ALL_TRACKS
      .map((e, i) => i)
      .filter(i => i !== currentFlatIndex && !blockedIds.has(ALL_TRACKS[i].track.youtubeId));
    if(!pool.length){
      // everything is blocked right now → forget failures and use the whole library
      blockedIds.clear();
      pool = ALL_TRACKS.map((e, i) => i).filter(i => i !== currentFlatIndex);
    }
    return pool[Math.floor(Math.random() * pool.length)];
  }

  function playNext(){
    history.push(currentFlatIndex);
    if(history.length > 50) history.shift();
    currentFlatIndex = randomIndex();
    playCurrentTrack();
  }
  function playPrev(){
    if(history.length){
      currentFlatIndex = history.pop();
    } else {
      currentFlatIndex = randomIndex();
    }
    playCurrentTrack();
  }
  el('nextBtn').addEventListener('click', playNext);
  el('prevBtn').addEventListener('click', playPrev);

  /* ============ SEEK ============ */
  el('seekBar').addEventListener('change', () => {
    const pct = el('seekBar').value / 100;
    el('seekBar').style.setProperty('--seek', (pct*100) + '%');
    if(!usingFallback && ytPlayer && ytPlayer.getDuration){
      const dur = ytPlayer.getDuration();
      ytPlayer.seekTo(dur * pct, true);
    } else {
      simTime = simDuration * pct;
    }
  });

  /* ============ KEYBOARD SHORTCUTS ============ */
  function seekBy(delta){
    let dur, cur;
    if(!usingFallback && ytPlayer && ytPlayer.getDuration){
      dur = ytPlayer.getDuration();
      cur = ytPlayer.getCurrentTime() + delta;
      cur = Math.max(0, Math.min(dur, cur));
      ytPlayer.seekTo(cur, true);
    } else {
      simTime = Math.max(0, Math.min(simDuration, simTime + delta));
      cur = simTime; dur = simDuration;
    }
    const pct = dur ? cur/dur*100 : 0;
    el('curTime').textContent = fmt(cur);
    el('seekBar').value = pct;
    el('seekBar').style.setProperty('--seek', pct + '%');
  }

  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape' && libraryModal.classList.contains('open')){ closeLibrary(); return; }
    const tag = (document.activeElement && document.activeElement.tagName) || '';
    if(tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'BUTTON') return;
    if(e.key === ' ' || e.code === 'Space'){
      e.preventDefault();
      togglePlay();
    } else if(e.key === 'ArrowRight'){
      e.preventDefault();
      seekBy(5);
    } else if(e.key === 'ArrowLeft'){
      e.preventDefault();
      seekBy(-5);
    }
  });

  /* ============ INIT ============ */
  setupMediaSession();
  renderTrackMeta();
  loadYouTubeAPI();

  // safety: if YT API script itself fails (network blocked entirely),
  // still let the fallback kick in via the timeout above.
})();
