# Copilot Instructions for Ruler Project

## Project Overview
Ruler is a lightweight, cross-platform desktop application built with Electron that displays a transparent ruler overlay on your screen for measuring pixels and distances.

**Project Details:**
- **Author**: Muhammad Shamim
- **License**: MIT
- **Framework**: Electron
- **Language**: JavaScript (ES6+)
- **Node.js**: 6.9.4 LTS or higher

---

## Code Standards & Guidelines

### JavaScript/Node.js
- Use ES6+ syntax (arrow functions, const/let, template literals)
- Follow consistent naming conventions:
  - camelCase for variables and functions
  - PascalCase for classes and components
  - UPPER_SNAKE_CASE for constants
- Add JSDoc comments for all functions and classes
- Keep functions focused and single-purpose
- Use const by default, let when reassignment needed, avoid var

### HTML
- Use semantic HTML5 elements
- Include alt text for all images
- Maintain proper document structure
- Add comments for major sections

### CSS
- Use class-based selectors (avoid inline styles)
- Group related properties together
- Include comments explaining complex rules
- Maintain consistency with existing styles
- Use vendor prefixes for cross-browser compatibility (-webkit-, -ms-, etc.)

### Comments & Documentation
- **File Headers**: Always include author, license, and version info
- **Function Documentation**: Use JSDoc format with description, parameters, returns
- **Inline Comments**: Explain "why" not "what" - code should be self-explanatory
- **TODO Comments**: Use `// TODO:` for future enhancements with context

---

## Project Structure

```
ruler/
├── main.js                 # Electron main process
├── index.html              # HTML entry point
├── package.json            # Dependencies and scripts
├── README.md               # User documentation
├── CHANGELOG.md            # Version history
├── .gitignore              # Git exclusions
├── COPILOT_INSTRUCTIONS.md # This file
├── css/
│   └── ruler.css          # Application styles
└── images/
    ├── ruler.png          # Main ruler display
    ├── ruler-icon.icns    # macOS icon
    ├── ruler-icon.ico     # Windows icon
    └── ruler-icon.png     # Linux icon
```

---

## Development Workflow

### Setup
```bash
npm install          # Install dependencies
npm start           # Run application
npm run dev         # Run with logging
```

### Building
```bash
npm run build       # Build for all platforms
npm run build:mac   # Build macOS app
npm run build:win   # Build Windows app
npm run build:linux # Build Linux app
```

---

## Coding Practices

### When Suggesting Code:
1. ✅ **DO** maintain consistency with existing code style
2. ✅ **DO** include comprehensive comments with author context
3. ✅ **DO** follow the project's file structure
4. ✅ **DO** add JSDoc comments to new functions
5. ✅ **DO** consider cross-platform compatibility (macOS, Windows, Linux)
6. ✅ **DO** test suggestions for Electron-specific considerations

### When NOT to Suggest:
1. ❌ **DON'T** introduce new dependencies without justification
2. ❌ **DON'T** break backward compatibility without version bump
3. ❌ **DON'T** add features without updating CHANGELOG.md
4. ❌ **DON'T** use deprecated Electron APIs
5. ❌ **DON'T** ignore accessibility (alt text, semantic HTML, etc.)

---

## Feature Enhancement Guidelines

### Before Adding Features:
- Ensure alignment with project scope (desktop ruler overlay)
- Consider impact on performance (app should be lightweight)
- Plan cross-platform compatibility
- Update version number appropriately (semantic versioning)
- Document in CHANGELOG.md under appropriate version section

### New Feature Template:
```javascript
/**
 * [Feature Name]
 * 
 * Description: [What it does]
 * Dependencies: [Any new packages]
 * Platforms: [macOS/Windows/Linux/All]
 * 
 * Author: [Your Name]
 * Date: [YYYY-MM-DD]
 */

// Implementation...
```

---

## Electron-Specific Notes

### Window Configuration
- Window is transparent (transparent: true)
- No system frame (frame: false)
- Non-resizable (resizable: false)
- Fixed dimensions: 1300×100 px
- Uses `-webkit-app-region: drag` for dragging

### Lifecycle Events
- `app.on('ready')` - Create window on app ready
- `app.on('window-all-closed')` - Quit app on macOS, exit on other platforms
- `app.on('activate')` - Re-create window on macOS when dock icon clicked

### Platform-Specific Handling
Always consider macOS differences:
- macOS apps don't quit when all windows close
- Use `process.platform !== 'darwin'` to detect non-macOS
- Icon formats: .icns (macOS), .ico (Windows), .png (Linux)

---

## Testing Recommendations

### Before Committing:
- [ ] Test on macOS
- [ ] Test on Windows (if possible)
- [ ] Test on Linux (if possible)
- [ ] Verify window dragging works
- [ ] Check transparency renders correctly
- [ ] Confirm no console errors

---

## Documentation Standards

### README.md Updates
- Keep setup instructions clear and current
- Update feature list when adding new functionality
- Include screenshots/images where helpful
- Maintain installation steps for all platforms

### CHANGELOG.md Updates
- Add entry under "Unreleased" section initially
- Move to version section when released
- Follow format: Added/Changed/Fixed/Deprecated/Removed/Security
- Include author and date information

---

## Common Enhancements (Planned)

Refer to CHANGELOG.md for roadmap:
- **0.1.0**: Interactive measurement, keyboard shortcuts, orientation toggle
- **0.2.0**: Color picker, annotations, zoom levels
- **0.3.0**: Unit conversion, measurement history, multi-monitor support

---

## Reporting Issues

When suggesting fixes:
- Include root cause analysis
- Provide reproducible steps if bug-related
- Consider edge cases and cross-platform behavior
- Add comprehensive comments explaining the fix

---

## Questions to Ask When Assisting

1. Which platform(s) should this work on?
2. Could this impact app performance/lightweight nature?
3. Is this feature within the project scope?
4. Does this require new dependencies?
5. What's the semantic version bump needed?
6. How should this be documented?

---

## Version Information

**Current Version**: 0.0.1 (March 2, 2026)

For version bumping:
- **MAJOR**: Breaking changes or complete rewrites
- **MINOR**: New features that are backward compatible
- **PATCH**: Bug fixes and minor improvements

---

## Contact & Attribution

- **Author**: Muhammad Shamim
- **Repository**: https://github.com/MuhammadShamim/ruler.git
- **License**: MIT
- **Issues**: https://github.com/MuhammadShamim/ruler/issues

---

**Last Updated**: 2026-03-02
