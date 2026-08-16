# Music System — How Audio, Metadata & Playback Are Wired

How "Raat 2 Baje" plays music, where the track data comes from, and how every
part connects. The whole site is **plain HTML / CSS / JavaScript with no build
step, no framework, no bundler** — it runs directly from `file://`.

---

## 1. Stack at a glance

| File | Role |
|---|---|
| `playlist.js` | **Data only.** Defines `window.PLAYLISTS` — every playlist & track. |
| `index.html` | Markup + embedded CSS: hero identity (`#sceneLayer`), status row (clock, online), player dock (`#playerBar`), hidden YouTube div. Loads scripts in order. |
| `app.js` | **Engine.** Reads `PLAYLISTS` into one flat library, drives the hidden YouTube player, random next / history prev, UI, seek, media session, and the GSAP motion layer (parallax + lit-window glow). |

> Orphans on disk (not loaded anywhere): `player.html` (rejected standalone demo),
> `three-scene.js` (early Three.js experiment), `EH_song\` (old duplicate). Safe to
> delete if you don't want them.

Script load order in `index.html` (bottom of `<body>`):

```html
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
<script src="playlist.js"></script>
<script src="app.js"></script>
```

`playlist.js` runs first so `window.PLAYLISTS` exists before `app.js` boots.

---

## 2. Where the music comes from ("the repo")

There is **no hosted repo / API server**. Audio is served by **YouTube** through
its public **IFrame Player API**. The project is just a front-end playlist
player that drives YouTube videos in a hidden 1×1 player.

The track catalog itself was hand-built from these sources (documented in the
`playlist.js` header):

- **YouTube Music official uploads** — fetched with `ytmusicapi` (Python), the
  source of the verified video IDs and metadata.
- **hindigeetmala.net** — used to cross-check/curate the Hindi film-song lists.
- **Cover art**: not scraped separately — it is derived directly from the
  YouTube ID via the standard thumbnail URL:
  `https://i.ytimg.com/vi/<youtubeId>/hqdefault.jpg`.

Every `youtubeId` was **verified embeddable** by calling the YouTube **oEmbed**
endpoint and checking for HTTP 200, so the video actually plays inside the
hidden embed (some videos are embed-disabled and were excluded).

> Note: `EH_song\` in the project folder is an old duplicate — **not used** by
> the site.

---

## 3. The data model (`playlist.js`)

Structure: an array of playlists, each with a name and an array of tracks.

```js
window.PLAYLISTS = [
  {
    name: "EH · Hamari Adhuri Kahani",
    tracks: [
      {
        "title": "Title Track (From \"Hamari Adhuri Kahani\")",
        "artist": "Emraan Hashmi · Hamari Adhuri Kahani",
        "youtubeId": "f3FFOBrMmdg",
        "cover": "https://i.ytimg.com/vi/f3FFOBrMmdg/hqdefault.jpg"
      }
      // ...more tracks
    ]
  }
  // ...more playlists (55 total, 550 tracks)
];
```

Every track needs exactly four fields:

| Field | Meaning |
|---|---|
| `title` | Song display name |
| `artist` | Artist / film label shown under the title |
| `youtubeId` | The 11-char YouTube video ID (the audio source) |
| `cover` | Album-art URL (thumbnails derived from the ID) |

To add a song: copy a track object, put a real, embeddable video ID in
`youtubeId`, and re-verify it (see §7). No other file needs changing.

---

## 4. How metadata gets wired into the UI

1. `app.js` grabs the data: `const PLAYLISTS = window.PLAYLISTS;`
2. It flattens **every track from every playlist into one flat library**:

   ```js
   const ALL_TRACKS = [];
   PLAYLISTS.forEach((pl) => {
     pl.tracks.forEach((t) => { ALL_TRACKS.push({ track: t }); });
   });
   ```

3. `currentEntry()` resolves the currently-selected track straight from the flat
   library: `return ALL_TRACKS[currentFlatIndex];`
4. `renderTrackMeta()` pushes that track into the DOM:

   - `el('trackTitle').textContent = track.title`
   - `el('trackArtist').textContent = track.artist`
   - If `track.cover` exists → sets `coverImg.src` and adds class `has-cover`
     (shows the real thumbnail; otherwise the fallback gradient + music-note
     icon stays visible).
   - Calls `updateMediaSession()`.

5. The player markup is the `#playerBar` glass card in `index.html`. All IDs
   `app.js` touches (`el('...')`) exist on that card:
   `trackTitle`, `trackArtist`, `coverThumb`, `coverImg`, `prevBtn`, `playBtn`,
   `playIcon`, `pauseIcon`, `nextBtn`, `seekBar`, `curTime`, `durTime`.
   The hero/identity layer is class-based: `.scene-layer` wrapper holding
   `.hero-bg`, `.grain`, `.topbar`, `.wordmark-zone`, `.window-lit`
   (lit-window glow), plus the `#clock` and `#onlineCount` ID targets.

   **Composition (UI-UX pass):** `.wordmark-zone` is centered at `top:24%`
   (22% mobile, 15% + compacted identity on `max-height:540px` landscape);
   `.player-float` is dead-center (`top:50%`, `translate(-50%,-50%)`) so title
   block and player read as one vertical stack with air between. Glass system:
   `--glass-bg:rgba(13,18,28,0.40)`, `--glass-blur:20px` with a white
   top-light gradient + `saturate(170%)`; when `playing` the card warms with an
   amber wash + glow. Focus rings on every control (incl. `:focus-visible` on
   `.seek`), all target hits ≥36px (44px play, 42px mobile), reduced-motion
   kills pulse/spin/glow/entrance-translate. Entrance = subtle stagger
   (`gsap.from` on `.wordmark-zone` children, y≤14, ~0.5s, `power2.out`).

---

## 5. The playback engine (how audio is actually played)

### 5.1 Hidden YouTube player

- `app.js` injects the YouTube API script:

  ```js
  tag.src = "https://www.youtube.com/iframe_api";
  document.head.appendChild(tag);
  ```

- The API fires the global callback `onYouTubeIframeAPIReady`, which creates a
  1×1 hidden player attached to a tiny `<div id="yt-hidden-player">` in
  `index.html`:

  ```js
  ytPlayer = new YT.Player('yt-hidden-player', {
    videoId: track.youtubeId,
    playerVars: { autoplay: 0, controls: 0, disablekb: 1, playsinline: 1 },
    events: { onReady, onStateChange, onError }
  });
  ```

- Playing a track = `ytPlayer.loadVideoById(currentEntry().track.youtubeId)`
  (see `playCurrentTrack()`, `app.js:329`).
- `onStateChange`: `ENDED → playNext()`, `PLAYING → setPlayingUI(true)`,
  `PAUSED → setPlayingUI(false)`.
- `onError` (blocked/unavailable video) → the ID is added to a session
  `blockedIds` set, and playback slides to the next track after a short delay.
  The random picker avoids blocked IDs, so a handful of broken uploads can't
  make the radio stutter or skip-loop.

### 5.4 Never-stop reliability

The engine actively refuses to halt on a bad track:

- **Failure blocklist** — any video that errors is remembered for the session
  (`blockedIds`); `randomIndex()` only picks from IDs that haven't failed. If
  everything is blocked it clears the set and uses the whole library.
- **Start watchdog** — after `loadVideoById`, a 12 s timer checks the player
  actually reaches a settled state. A video stuck in `UNSTARTED`/`BUFFERING`
  is handed off to the next track instead of freezing the radio. It re-arms
  itself while paused so a wedged video can't break a later play attempt.
- **Frozen-clock detection** — the 1 s progress loop counts consecutive
  seconds the clock doesn't move while the player claims `PLAYING`; after 20 s
  it advances to the next track.
- **Double-advance guard** — a `loadToken` + `skipScheduled` flag ensure a
  single failure (which can fire multiple events) only advances once.

### 5.2 Fallback simulation (no YouTube = the UI still works)

If the API script fails (`onerror`) or never becomes ready within 5 s, the app
silently drops into **simulated playback**: a fake clock (`simTime`,
`simDuration = 245`) drives the same UI — titles, progress bar, times, auto
next — so the demo never looks broken offline or behind an adblocker.
`usingFallback` guards all real-player calls.

### 5.3 Progress / seek

A 1-second `setInterval` polls `ytPlayer.getCurrentTime()` / `getDuration()`,
then updates `curTime`, `durTime`, `seekBar.value`, and the `--seek` CSS custom
property, which drives the seek bar's gradient fill (via
`background-image: linear-gradient(... var(--seek,0%))`).

Dragging the bar (or using ←/→ keys, or OS `seekto`) calls
`ytPlayer.seekTo(seconds, true)`.

---

## 6. Everything else that connects

| Piece | How it connects |
|---|---|
| **Random next** | `playNext()` picks a non-repeating random index via `randomIndex()` from the flat `ALL_TRACKS`, skipping any ID on the session failure blocklist; `history` (capped at 50) records every auto-advance. |
| **Previous** | `playPrev()` pops the last entry from `history` so "prev" steps back through the random shuffle; falls back to the current track when empty. |
| **Play / Pause / Prev / Next** | Buttons on `#playerBar` → `togglePlay()`, `playPrev()`, `playNext()`. |
| **Media Session** | `navigator.mediaSession.metadata` = `{ title, artist, album: "Raat 2 Baje", artwork }` → **lock-screen / OS media controls** (play, pause, next, prev, seek) on phones & desktop. |
| **Keyboard** | `Space` = play/pause, `←`/`→` = seek ∓5 s. |
| **Library browser** | `#libraryBtn` (top bar) opens a glass modal (`#libraryModal`) listing **every track in one flat list** — search filters by title/artist; clicking a row (or pressing Enter in the search) plays that song, and Next keeps playing randomly from there. `Esc`, backdrop click, or ✕ closes it. Exact duplicate tracks (same title + artist + video) are dropped at flatten time. |
| **Clock & listener counter** | `#clock` (real local time) and `#onlineCount` (simulated, drifts ±3 around 214 every 4 s). |
| **Motion layer** | GSAP entrance fades, pointer parallax drift on `.hero-bg`/`.grain`/`.wordmark-zone`/`.topbar` (fine pointers only), play/pause pulse on the cover, and the `.window-lit` glow that class-toggles `lit` (breathing light) while a track plays. All gated by `prefers-reduced-motion`. |

### Simple data flow

```
playlist.js ──> window.PLAYLISTS ──> app.js
                                       │  ALL_TRACKS (flat) + currentFlatIndex
                                       ├──> renderTrackMeta() ──> player DOM (#playerBar)
                                       └──> ytPlayer.loadVideoById(id) ──> YouTube audio
                                                 │  1s progress loop
                                                 └──> seekBar / curTime / durTime / --seek
```

---

## 7. Adding a new song (checklist)

1. Open `playlist.js`, find (or create) the target playlist object.
2. Insert a track object: `{ title, artist, youtubeId, cover }`.
3. Set `cover` to `https://i.ytimg.com/vi/<youtubeId>/hqdefault.jpg`.
4. **Verify the ID is embeddable** (the rule the existing data follows):

   ```text
   GET https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=<youtubeId>&format=json
   ```

   A `200` response = safe to embed. `401`/`403` = embed-disabled, pick another upload.
5. Reload `index.html` (hard refresh: `Ctrl+F5`) and confirm it plays.
