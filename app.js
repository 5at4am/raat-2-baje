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

  /* fallback simulated playback so the UI/demo still works
     when the YouTube API can't load (offline preview, blocked network) */
  let simTime = 0;
  let simDuration = 245;
  let usingFallback = false;

  /* one flat library: every track from every playlist */
  const ALL_TRACKS = [];
  PLAYLISTS.forEach((pl) => {
    pl.tracks.forEach((t) => { ALL_TRACKS.push({ track: t }); });
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
          if(isPlaying){ ytPlayer.loadVideoById(currentEntry().track.youtubeId); }
        },
        onStateChange: onPlayerStateChange,
        onError: () => { playNext(); }
      }
    });
  };

  function onPlayerStateChange(evt){
    if(evt.data === YT.PlayerState.ENDED){ playNext(); }
    if(evt.data === YT.PlayerState.PLAYING){ setPlayingUI(true); startProgressLoop(); }
    if(evt.data === YT.PlayerState.PAUSED){ setPlayingUI(false); }
  }

  function enableFallbackMode(){
    usingFallback = true;
    simTime = 0;
  }

  /* ============ PROGRESS LOOP ============ */
  function startProgressLoop(){
    clearInterval(progressTimer);
    progressTimer = setInterval(() => {
      if(!isPlaying) return;

      let cur, dur;
      if(!usingFallback && ytPlayer && ytPlayer.getCurrentTime){
        cur = ytPlayer.getCurrentTime();
        dur = ytPlayer.getDuration() || simDuration;
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
    el('seekBar').value = 0;
    el('seekBar').style.setProperty('--seek', '0%');
    el('curTime').textContent = '0:00';

    if(ytReady && ytPlayer && ytPlayer.loadVideoById){
      const track = currentEntry().track;
      ytPlayer.loadVideoById(track.youtubeId);
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

  /* next is always random (never repeats the current track);
     previous steps back through the recent history */
  function randomIndex(){
    if(ALL_TRACKS.length < 2) return 0;
    let idx;
    do { idx = Math.floor(Math.random() * ALL_TRACKS.length); } while(idx === currentFlatIndex);
    return idx;
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
