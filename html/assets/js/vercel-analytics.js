// Vercel Analytics Script
// This file handles the loading of Vercel Analytics
// Place this script in all HTML pages before closing </body> tag

// Option 1: Using Vercel's automatic injection (recommended)
// If your site is deployed on Vercel, analytics will be automatically injected

// Option 2: Manual injection for testing or non-Vercel deployments
(function() {
    // Only load in production or if explicitly enabled
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        console.log('Vercel Analytics disabled in development');
        return;
    }
    
    // Load Vercel Analytics
    const script = document.createElement('script');
    script.src = 'https://va.vercel-scripts.com/v1/script.js';
    script.defer = true;
    script.dataset.websiteId = 'YOUR_WEBSITE_ID'; // This will be auto-filled by Vercel
    document.head.appendChild(script);
})();