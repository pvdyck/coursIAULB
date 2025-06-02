# 🚀 Deployment Guide - ULB Medical AI Training Site

## Overview
This is a fully static HTML website that can be deployed on any web server or static hosting service.

## File Structure
```
html/
├── index.html              # Main landing page
├── programme.html          # Program overview
├── sessions/              # All 4 training sessions
├── resources/             # Glossary, prompts, guides
├── exercises/             # Exercise index
├── evaluation/            # Evaluation grids
├── groupes/              # WhatsApp collaboration
└── assets/               # CSS, JS, images
```

## Deployment Options

### 1. GitHub Pages (Free)
```bash
# Push to GitHub repository
git add .
git commit -m "Deploy ULB training site"
git push origin main

# Enable GitHub Pages in Settings > Pages
# Select source: Deploy from branch (main)
# URL: https://[username].github.io/[repo-name]/
```

### 2. Netlify (Free tier available)
```bash
# Drag and drop the html/ folder to netlify.com
# Or use CLI:
npm install -g netlify-cli
netlify deploy --dir=html
netlify deploy --prod --dir=html
```

### 3. Vercel (Free tier available)
```bash
npm install -g vercel
cd html
vercel
```

### 4. Traditional Web Server
```bash
# Upload all files via FTP/SFTP to your web server
# Ensure index.html is in the root directory
# Set proper permissions (755 for directories, 644 for files)
```

### 5. Local Testing
```bash
# Python 3
cd html
python -m http.server 8000

# Node.js
npx http-server html -p 8000

# PHP
cd html
php -S localhost:8000
```

## Pre-deployment Checklist

- [ ] Test all navigation links
- [ ] Verify responsive design on mobile
- [ ] Check print styles work correctly
- [ ] Test search functionality
- [ ] Validate all forms and interactions
- [ ] Ensure no broken images
- [ ] Verify HTTPS is enabled
- [ ] Test on multiple browsers

## URL Structure
The site uses relative URLs, so it can be deployed to any subdirectory:
- `https://domain.com/` - Root deployment
- `https://domain.com/formation/` - Subdirectory deployment

## Performance Optimization
- All assets are optimized for web
- No external dependencies (fully self-contained)
- Minimal JavaScript for fast loading
- CSS is split for better caching

## Browser Support
- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Android)

## Security Considerations
- No server-side code (static only)
- No database or user data storage
- All external links use rel="noopener"
- Content Security Policy ready

## Maintenance
To update content:
1. Edit the relevant HTML file
2. Test locally
3. Deploy using chosen method
4. Clear cache if needed

## Contact
For technical support: formation.ia@ulb.be