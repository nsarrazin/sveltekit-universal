# Sveltekit Universal

Run API endpoints, SSR, mobile & desktop from a single codebase.

We leverage two builds for this, one node and one static. The node build serves the API and SSR and the static build calls the node build for API and is used for mobile (capacitor) and desktop (tauri).

## Install dependencies

```bash
npm i
```

## Run dev mode

### Node adapter (serving API & SSR)

This is the default mode, you need to run this for the static adapters to work since they will call this server for API.

```bash
npm run dev:node
```

### Static adapter

This will not work unless you're also running the node adapter.

```bash
npm run dev:static
```

## Build & preview

Pretty much same as dev mode, preview will build & preview by default.

```bash
npm run preview:node
npm run preview:static
```

## Mobile & desktop dev

### Tauri dev

```bash
npx tauri dev
```

### Capacitor

```bash
npx cap sync
npx cap run android # or ios
```

## Tauri

### MacOS & Windows

tbd

### Linux

```bash
npx tauri build
chmod a+x ./src-tauri/target/release/bundle/appimage/sveltekit-universal_0.1.0_amd64.AppImage && ./src-tauri/target/release/bundle/appimage/sveltekit-universal_0.1.0_amd64.AppImage
```

## Run production node server

```bash
node build-node/index.js
```
