#!/bin/bash

# Script to add Vercel Speed Insights to all HTML files
# This script adds the speed insights script before the closing </body> tag

echo "Adding Vercel Speed Insights to all HTML files..."

# Find all HTML files
find . -name "*.html" -type f | while read -r file; do
    # Check if file already has speed insights
    if grep -q "vercel-speed-insights.js" "$file"; then
        echo "✓ $file already has Speed Insights"
    else
        # Check if file has </body> tag
        if grep -q "</body>" "$file"; then
            # Add Speed Insights script before </body>
            # First, add Analytics if not present
            if ! grep -q "vercel-analytics.js" "$file"; then
                sed -i.bak '/<\/body>/i\
    <!-- Vercel Analytics -->\
    <script src="/assets/js/vercel-analytics.js"></script>' "$file"
            fi
            
            # Add Speed Insights script
            sed -i.bak '/<\/body>/i\
    <!-- Vercel Speed Insights -->\
    <script src="/assets/js/vercel-speed-insights.js"></script>' "$file"
            
            echo "✓ Updated $file"
        else
            echo "⚠ $file has no </body> tag"
        fi
    fi
done

# Clean up backup files
find . -name "*.bak" -type f -delete

echo "Done! Speed Insights has been added to all HTML files."
echo ""
echo "Next steps:"
echo "1. Deploy to Vercel: vercel --prod"
echo "2. Visit your Vercel dashboard to see Speed Insights data"
echo "3. Speed Insights will automatically track Core Web Vitals"