# Vercel Speed Insights Setup Guide

## ✅ What's Been Done

### 1. **Vercel Configuration (`vercel.json`)**
- Configured to serve files from `html/` directory as root
- Enabled both Analytics and Speed Insights
- Added security headers (X-Frame-Options, X-Content-Type-Options, etc.)

### 2. **Speed Insights Script (`html/assets/js/vercel-speed-insights.js`)**
- Created comprehensive Speed Insights integration
- Measures Core Web Vitals (LCP, FID, CLS)
- Custom performance metrics tracking
- Automatic initialization on production

### 3. **Updated All HTML Files**
- Added Speed Insights script to all 29 HTML files
- Script loads before closing `</body>` tag
- Disabled in development (localhost)

### 4. **Package.json Created**
- Basic configuration for Vercel deployment
- Development server script included

## 🚀 Deployment Steps

### 1. **Install Vercel CLI** (if not already installed)
```bash
npm install -g vercel
```

### 2. **Deploy to Vercel**
```bash
# From project root (/Users/pvdyck/Dev/coursIA)
vercel

# Follow prompts:
# - Link to existing project or create new
# - Confirm settings from vercel.json
# - Deploy
```

### 3. **Production Deployment**
```bash
vercel --prod
```

## 📊 Viewing Speed Insights Data

### 1. **Vercel Dashboard**
- Go to [vercel.com/dashboard](https://vercel.com/dashboard)
- Select your project
- Navigate to "Analytics" → "Speed Insights"

### 2. **Metrics Available**
- **Core Web Vitals**
  - LCP (Largest Contentful Paint)
  - FID (First Input Delay)
  - CLS (Cumulative Layout Shift)
  - TTFB (Time to First Byte)
  
- **Custom Metrics**
  - Page Load Time
  - DOM Render Time
  - DNS Lookup Time
  - TCP Connection Time

### 3. **Real User Monitoring (RUM)**
- Data collected from actual users
- Geographic distribution
- Device type breakdown
- Performance trends over time

## 🛠️ Configuration Options

### Environment Variables (Optional)
If you need to configure Speed Insights differently:

```bash
# In Vercel Dashboard → Settings → Environment Variables
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your-analytics-id
```

### Custom Events
To track custom events in your code:

```javascript
// Example: Track form submissions
if (window.SpeedInsights) {
  window.SpeedInsights.track('form-submitted', {
    formType: 'consultation',
    duration: responseTime
  });
}
```

## 📈 Performance Optimization Tips

Based on Speed Insights data, consider:

1. **Image Optimization**
   - Convert to WebP format
   - Implement lazy loading
   - Use responsive images

2. **Resource Hints**
   ```html
   <link rel="preconnect" href="https://fonts.gstatic.com">
   <link rel="dns-prefetch" href="https://va.vercel-scripts.com">
   ```

3. **Critical CSS**
   - Inline critical CSS
   - Defer non-critical styles

4. **JavaScript Optimization**
   - Defer non-critical scripts
   - Use async for independent scripts

## 🔍 Monitoring Checklist

After deployment, monitor:

- [ ] Speed Insights dashboard populating with data
- [ ] Core Web Vitals scores (aim for "Good" rating)
- [ ] Page-specific performance issues
- [ ] Geographic performance variations
- [ ] Mobile vs Desktop performance

## 🚨 Troubleshooting

### No Data Showing
1. Ensure site is deployed to production
2. Check browser console for errors
3. Verify scripts are loading (Network tab)
4. Allow 10-15 minutes for initial data

### Script Errors
- Check that paths are correct (`/assets/js/...`)
- Ensure no Content Security Policy blocking
- Verify Vercel project is properly configured

### Performance Issues
- Use Speed Insights to identify bottlenecks
- Focus on largest contentful paint elements
- Optimize based on real user data

## 📞 Support

- [Vercel Documentation](https://vercel.com/docs/speed-insights)
- [Web Vitals Guide](https://web.dev/vitals/)
- [Vercel Support](https://vercel.com/support)