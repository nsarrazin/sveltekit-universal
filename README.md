# Sveltekit Universal

<img width="1321" alt="Screenshot 2024-07-11 at 18 42 19" src="https://github.com/nsarrazin/sveltekit-universal/assets/25119303/c8fc67c5-c4ce-4ab1-bc28-1b8c4577cc8a">
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
(requires rust toolchain locally)

```bash
npx tauri dev
```

### Capacitor
(will require you to have either an iOS or an android emulator locally)

```bash
npx cap sync
npx cap run android # or ios
```

## Tauri build

```bash
npx tauri build
```

## Run production node server

```bash
npm run build:node
node build-node/index.js
```
