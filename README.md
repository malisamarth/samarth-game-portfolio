# Samarth Mali — Game Developer Portfolio (v2)

Compact dark portfolio layout inspired by the supplied reference: profile header, two-column project cards, education, technical experience chips and a contrasting about panel.

## Run locally
```bash
npm install
npm run dev
```
Open the localhost URL printed by Vite.

## Build
```bash
npm run build
npm run preview
```

## Personalize before publishing
- Replace the generic GitHub, LinkedIn and itch.io URLs in `src/App.tsx` with your profile URLs.
- Add your PDF resume as `public/Samarth-Mali-Resume.pdf`.
- Replace CSS project illustrations with actual screenshots/gameplay captures.
- Review all project claims, statuses and dates.
- Update the About text if you prefer not to display your age.


## Add project screenshots and videos

In `src/projects.ts`, each project supports optional media fields:

```ts
images: [
  '/images/tank-wars-01.jpg',
  '/images/tank-wars-02.jpg'
],
videoUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID'
```

Place image files in `public/images/`. For a local MP4, put it in `public/videos/` and use `videoUrl: '/videos/tank-wars-demo.mp4'`. The project dialog automatically displays the gallery and video player. If no media is supplied, it shows a placeholder instead of a broken embed.


## Shared gameplay video
The supplied YouTube video is currently assigned as the video for every project: `https://www.youtube.com/embed/BBgzOvZJd4Q`. Replace individual `videoUrl` values in `src/projects.ts` with project-specific videos when available.


## Project media layout
Project screenshots and the gameplay video are presented in one horizontal, snap-scrolling media rail inside each project dialog. Add screenshot paths to `images` and the video URL to `videoUrl` in `src/projects.ts`.
