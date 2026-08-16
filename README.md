# रात 2 बजे — Raat 2 Baje (Der Ho Gayi Radio)

> *Gulaab haath mein reh gaya, mohabbat raaste mein.*

A moody late-night music radio for the 2 AM crowd. Plain HTML / CSS / JS —
no build step, no framework, no bundler. Open `index.html` and it just plays.

## Features

- **550 tracks across 55 playlists** — the Emraan Hashmi film discography plus
  10 featured artists (Hamari Adhuri Kahani, Murder, Raja Natwarlal, …).
- **YouTube-powered audio** — a hidden 1×1 IFrame player streams every track
  via the public YouTube IFrame Player API. Every video ID was verified
  embeddable through YouTube's oEmbed endpoint before being included.
- **Glass player dock** — a liquid-glass pill player with a spinning vinyl
  cover, amber "lit window" glow while a track plays, and GSAP parallax that
  drifts the rainy-night scene with your cursor.
- **Random next / history prev** — non-repeating shuffle that remembers where
  you came from, so "previous" steps back through the shuffle.
- **Media Session support** — title / artist / artwork on lock screen and OS
  media controls (play, pause, next, prev, seek) on phones and desktop.
- **Keyboard shortcuts** — `Space` play/pause, `←` / `→` seek ∓5 s.
- **Offline-safe** — if the YouTube API is blocked or never loads, the UI
  silently falls back to simulated playback so the demo never looks broken.
- **Accessibility & reduced motion** — focus rings on every control, ≥36 px
  hit targets, and `prefers-reduced-motion` disables pulse, spin, glow, and
  entrance motion.

## Getting started

```
git clone https://github.com/5at4am/raat-2-baje.git
```

Then open `index.html` in a browser (double-click or `start index.html`).
No server, no install, no dependencies beyond GSAP (loaded from CDN).

## Project structure

| File | Role |
|---|---|
| `index.html` | Markup + embedded CSS: hero scene, top bar, glass player dock, hidden YouTube div |
| `playlist.js` | Data only — defines `window.PLAYLISTS`: every playlist and track |
| `app.js` | Engine — flattens playlists, drives the hidden YouTube player, random next / history prev, seek, Media Session, GSAP motion layer |
| `MUSIC-SYSTEM.md` | Deep dive on how audio, metadata, and playback are wired |
| `Image/` | Design references / artwork experiments |
| `three-scene.js` | Early Three.js experiment (orphaned, not loaded by the site) |

## How it works

There is no hosted API server — audio is served by **YouTube** through its
IFrame Player API. `playlist.js` runs first so `window.PLAYLISTS` exists,
then `app.js` flattens every track into one library and drives a hidden
1×1 player.

```
playlist.js ──> window.PLAYLISTS ──> app.js
                                       │  ALL_TRACKS (flat) + currentFlatIndex
                                       ├──> renderTrackMeta() ──> player DOM (#playerBar)
                                       └──> ytPlayer.loadVideoById(id) ──> YouTube audio
                                                 │  1s progress loop
                                                 └──> seekBar / curTime / durTime / --seek
```

Track catalog sources: **YouTube Music** official uploads (fetched with
`ytmusicapi`), cross-checked against **hindigeetmala.net**. Cover art is
derived from the YouTube ID via `https://i.ytimg.com/vi/<id>/hqdefault.jpg`.

## Adding a song

1. Open `playlist.js` and find (or create) the target playlist object.
2. Insert a track: `{ title, artist, youtubeId, cover }`.
3. Set `cover` to `https://i.ytimg.com/vi/<youtubeId>/hqdefault.jpg`.
4. Verify the ID is embeddable:

   ```
   GET https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=<youtubeId>&format=json
   ```

   A `200` response = safe to embed. `401`/`403` = embed-disabled — pick
   another upload.
5. Reload `index.html` (hard refresh `Ctrl+F5`) and confirm it plays.

Full detail on the data model, playback engine, and fallback simulation lives
in [`MUSIC-SYSTEM.md`](MUSIC-SYSTEM.md).

## License

Educational / demo project. Music belongs to its respective artists and
labels; audio streams from YouTube.
