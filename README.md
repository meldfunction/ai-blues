# How to Not Get the AI Blues

A static site exploring practical paths for navigating AI disruption without losing your mind.

## Setup for GitHub Pages

### Deploy to GitHub Pages

This repository is ready for GitHub Pages deployment:

1. Push all files to your GitHub repository
2. Go to Settings → Pages in your repository
3. Under "Source", select "Deploy from a branch"
4. Select "main" branch and "/" (root) folder
5. Click Save
6. Your site will be live at `https://yourusername.github.io/ai-blues/` within a few minutes

**Note**: The `.nojekyll` file is included to ensure GitHub Pages serves all files correctly.

### Local Development

1. Clone or download this repository
2. Open `index.html` in a modern web browser
3. Or use a simple local server:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Or Node.js
   npx serve
   ```
4. Navigate to `http://localhost:8000`

## File Structure

```
ai-blues/
├── index.html          # Main HTML structure
├── styles.css          # All styles (responsive, accessible)
├── data.js            # Content organized as structured data
├── components.js      # Reusable UI components
├── router.js          # Hash-based routing for SPA
├── app.js             # Main application logic
├── .nojekyll          # GitHub Pages configuration
└── README.md          # This file
```

## Features

- **Three Entry Points**: Anxiety-based, discovery-based, or understanding-based
- **Interactive Diagnostic**: Quiz that routes to personalized paths
- **Discovery Section**: The missing piece - how to see needs before they're obvious
- **Profession-Specific Paths**: Tech worker, business owner, parent/caregiver (more coming)
- **Responsive Design**: Works on mobile, tablet, desktop
- **Accessible**: WCAG compliant, keyboard navigable
- **No Build Step**: Pure HTML/CSS/JS - works immediately

## Adding Content

### To add a new profession path:

1. Open `data.js`
2. Add new entry to `SITE_DATA.paths`:
```javascript
'middle-manager': {
    title: "Middle Manager Path",
    profile: "...",
    aiBlues: "...",
    // ... rest of structure
}
```

3. Open `router.js`
4. Add route:
```javascript
'middle-manager': () => Components.pathPage(SITE_DATA.paths['middle-manager'])
```

### To add a new page:

1. Open `components.js`
2. Add new component function
3. Add route in `router.js`
4. Add nav link in `index.html` (optional)

## Customization

- **Colors**: Edit CSS variables in `styles.css` (line 11-18)
- **Typography**: Edit font families in CSS variables (line 20-21)
- **Content**: Edit `data.js` - all text content is there
- **Layout**: Edit `components.js` for HTML structure

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- No external dependencies
- Total size: ~50KB (uncompressed)
- Fast initial load
- Smooth client-side navigation

## Accessibility

- Semantic HTML
- ARIA labels where needed
- Keyboard navigation
- Screen reader friendly
- High contrast text
- Skip to main content link

## License

Feel free to use and modify for your own purposes.

## Future Enhancements

- [ ] Add remaining profession paths
- [ ] Complete systems view page
- [ ] Complete amish wisdom page
- [ ] Complete signal networks page
- [ ] Add search functionality
- [ ] Add print styles
- [ ] Add dark mode
- [ ] Add analytics (optional)

## Contributing

This is a living document. To add content:
1. Fork the repository
2. Make changes to relevant files
3. Submit a pull request

## Contact

Questions or suggestions? Open an issue on GitHub.
