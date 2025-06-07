// Vercel Speed Insights Script
// This script integrates Vercel Speed Insights for performance monitoring
// Include this along with vercel-analytics.js

(function() {
    // Skip in development
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        console.log('Vercel Speed Insights disabled in development');
        return;
    }
    
    // Inject Speed Insights
    // Method 1: Using @vercel/speed-insights vanilla JS
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@vercel/speed-insights@1.0.12/dist/index.js';
    script.onload = function() {
        // Initialize Speed Insights when script loads
        if (window.SpeedInsights) {
            window.SpeedInsights.init();
        }
    };
    document.head.appendChild(script);
    
    // Method 2: Alternative using inline script (if CDN fails)
    // This will be automatically injected by Vercel when deployed
})();

// Performance monitoring helper functions
window.measurePageLoad = function() {
    if (window.performance && window.performance.timing) {
        const timing = window.performance.timing;
        const pageLoadTime = timing.loadEventEnd - timing.navigationStart;
        const dnsTime = timing.domainLookupEnd - timing.domainLookupStart;
        const tcpTime = timing.connectEnd - timing.connectStart;
        const requestTime = timing.responseEnd - timing.requestStart;
        const domRenderTime = timing.domComplete - timing.domLoading;
        
        console.log('Page Performance Metrics:');
        console.log(`Total Page Load: ${pageLoadTime}ms`);
        console.log(`DNS Lookup: ${dnsTime}ms`);
        console.log(`TCP Connection: ${tcpTime}ms`);
        console.log(`Request Time: ${requestTime}ms`);
        console.log(`DOM Render: ${domRenderTime}ms`);
        
        // Send custom metrics to Speed Insights if available
        if (window.SpeedInsights && window.SpeedInsights.track) {
            window.SpeedInsights.track('page-load', pageLoadTime);
            window.SpeedInsights.track('dom-render', domRenderTime);
        }
    }
};

// Measure Core Web Vitals
window.measureWebVitals = function() {
    if ('PerformanceObserver' in window) {
        // Largest Contentful Paint (LCP)
        const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            console.log('LCP:', lastEntry.startTime);
            if (window.SpeedInsights && window.SpeedInsights.track) {
                window.SpeedInsights.track('lcp', lastEntry.startTime);
            }
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        
        // First Input Delay (FID)
        const fidObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry) => {
                const fid = entry.processingStart - entry.startTime;
                console.log('FID:', fid);
                if (window.SpeedInsights && window.SpeedInsights.track) {
                    window.SpeedInsights.track('fid', fid);
                }
            });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });
        
        // Cumulative Layout Shift (CLS)
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
                if (!entry.hadRecentInput) {
                    clsValue += entry.value;
                }
            }
            console.log('CLS:', clsValue);
            if (window.SpeedInsights && window.SpeedInsights.track) {
                window.SpeedInsights.track('cls', clsValue);
            }
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
    }
};

// Run measurements when page is fully loaded
window.addEventListener('load', function() {
    setTimeout(function() {
        window.measurePageLoad();
        window.measureWebVitals();
    }, 0);
});