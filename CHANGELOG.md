# Changelog

All notable changes to the Ruler project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.0.1] - 2026-03-02

### Added
- Initial project setup with Electron framework
- Core desktop ruler application with transparent overlay
- Draggable window interface for repositioning ruler on screen
- Cross-platform support:
  - macOS with `.icns` icon
  - Windows with `.ico` icon
  - Linux with `.png` icon
- HTML entry point with ruler image display
- CSS styling with window dragging capability
- Comprehensive project documentation in README.md
- Code comments with author details in all source files:
  - main.js: Electron main process with detailed window configuration
  - index.html: HTML structure with accessibility enhancements
  - ruler.css: Stylesheet with CSS documentation
- .gitignore file with Node.js and Electron build exclusions
- npm start script for quick application launch
- Build instructions for distribution packaging

### Features
- **Transparent Overlay**: Non-intrusive ruler displayed directly over screen
- **Fixed Dimensions**: 1300×100 pixel window optimized for horizontal ruler
- **Draggable Interface**: Click and drag to reposition ruler anywhere
- **Frameless Design**: Clean appearance without system window decorations
- **Cross-Platform**: Works on macOS, Windows, and Linux
- **Lightweight**: Minimal resource usage with image-based design
- **Always-On-Top**: Frameless window stays on top for easy access

### Project Structure
```
ruler/
├── main.js
├── index.html
├── package.json
├── README.md
├── CHANGELOG.md
├── .gitignore
├── LICENSE
├── css/
│   └── ruler.css
└── images/
    ├── ruler.png
    ├── ruler-icon.icns
    ├── ruler-icon.ico
    └── ruler-icon.png
```

## Planned Features (Future Versions)

### [0.1.0] - Planned
- Interactive pixel measurement tools
- Keyboard shortcuts for quick positioning
- Multiple ruler orientations (horizontal/vertical toggle)
- Window pinning and snapping features
- User preferences/settings panel

### [0.2.0] - Planned
- Color picker integration
- Ruler mark interaction and annotations
- Screen position display
- Custom ruler styling options
- Zoom levels for precise measurement

### [0.3.0] - Planned
- Unit conversion (pixels, inches, centimeters)
- Measurement history
- Screenshot annotation
- Multi-monitor support
- Custom ruler themes

---

## Notes for Contributors

- **Author**: Muhammad Shamim
- **License**: MIT
- **Repository**: https://github.com/MuhammadShamim/ruler.git
- **Node.js Version**: 6.9.4 LTS or higher
- **Main Dependencies**: Electron

### Development Commands
- `npm install` - Install dependencies
- `npm start` - Run the application
- `npm install -g electron-packager` - Install packaging tool
- Build commands documented in README.md
