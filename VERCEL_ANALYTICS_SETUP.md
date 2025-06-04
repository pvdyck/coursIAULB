# Vercel Analytics Setup Guide

## Method 1: Automatic (Recommended if deploying on Vercel)

When you deploy to Vercel and enable Analytics, the tracking script is automatically injected. No code changes needed!

## Method 2: Manual Integration

### Step 1: Install Vercel Analytics package (if using build tools)
```bash
npm install @vercel/analytics
```

### Step 2: Add to your HTML files

Add this before the closing `</body>` tag in all your HTML files:

```html
<!-- Vercel Analytics -->
<script defer src="/_vercel/insights/script.js"></script>
```

Or if you need to add it manually with the website ID:

```html
<!-- Vercel Analytics -->
<script>
  window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
</script>
<script defer src="https://va.vercel-scripts.com/v1/script.js"></script>
```

### Step 3: For a static HTML site like yours

Since you have multiple HTML files, you can either:

1. **Add to each file individually** (most reliable)
2. **Use a build script** to inject it automatically
3. **Include via your existing navigation.js**

## Recommended Approach for Your Project

Add this to the end of each HTML file, just before `</body>`:

```html
<!-- Vercel Analytics - Auto-injected when deployed on Vercel -->
<script defer src="/_vercel/insights/script.js"></script>
</body>
</html>
```

## To Add to All Files Automatically:

Here's a script that will add Vercel Analytics to all your HTML files:

```bash
# Add analytics script to all HTML files
find ./html -name "*.html" -type f -exec sed -i '' '/<\/body>/i\
<!-- Vercel Analytics -->\
<script defer src="\/_vercel\/insights\/script.js"><\/script>' {} \;
```

## Tracking Custom Events

Once analytics is set up, you can track custom events:

```javascript
// Track custom events
window.va?.('event', { name: 'button_clicked', data: { button: 'submit' } });
```

## Privacy Considerations

Vercel Analytics is privacy-friendly:
- No cookies required
- GDPR compliant
- No personal data collected
- Aggregated metrics only

## Testing

1. Deploy to Vercel
2. Enable Analytics in project settings
3. Visit your site
4. Check Analytics tab in Vercel dashboard (data appears after a few minutes)

## Notes for Your Project

Since your project has many HTML files in different directories:
- `/html/index.html`
- `/html/sessions/*.html`
- `/html/exercises/*.html`
- `/html/resources/*.html`
- `/html/groupes/*.html`
- `/html/slides/*.html`
- `/html/evaluation/*.html`

You'll need to add the analytics script to each file, or use the automated approach above.