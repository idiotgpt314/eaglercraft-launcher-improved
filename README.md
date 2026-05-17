# Eaglercraft Launcher Improved

Desktop-packaged launcher for the local Eaglercraft HTML builds in this repository.

## Development

```bash
npm install
npm start
```

## Packaging

Linux:

```bash
npm run dist:linux
```

Windows:

```bash
npm run dist:win
```

macOS:

```bash
npm run dist:mac
```

## Notes

- Linux targets are configured for `AppImage`, `deb`, and `pacman`.
- Windows targets are configured for `nsis` installer and `portable`.
- macOS targets are configured for `dmg` and `zip`.
- macOS artifacts generally need to be built on macOS.
- The repository includes a GitHub Actions workflow to build each platform on the matching host OS.
