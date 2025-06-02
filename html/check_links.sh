#\!/bin/bash

# Function to check if a file exists
check_file() {
    local link="$1"
    local from_file="$2"
    local from_dir=$(dirname "$from_file")
    
    # Skip mailto links and anchors
    if [[ "$link" == mailto:* ]] || [[ "$link" == *#* ]]; then
        return
    fi
    
    # Resolve relative paths
    if [[ "$link" == ../* ]]; then
        # Go up one directory from the file's location
        resolved_path=$(cd "$from_dir" && cd .. && pwd)/"${link#../}"
    elif [[ "$link" == /* ]]; then
        # Absolute path from html root
        resolved_path="/Users/pvdyck/Dev/coursIA/html$link"
    else
        # Relative to current file's directory
        resolved_path="$from_dir/$link"
    fi
    
    # Normalize the path
    resolved_path=$(echo "$resolved_path" | sed 's|/\./|/|g' | sed 's|//|/|g')
    
    if [ \! -f "$resolved_path" ]; then
        echo "BROKEN: $link in $from_file -> $resolved_path"
    fi
}

# Check all HTML files
for html_file in $(find . -name "*.html" -type f); do
    # Extract href links from this file
    grep -o 'href="[^"]*"' "$html_file" 2>/dev/null | sed 's/href="//g' | sed 's/"//g' | while read -r link; do
        # Skip external links and pure anchors
        if [[ "$link" \!= http* ]] && [[ "$link" \!= "#"* ]]; then
            check_file "$link" "$html_file"
        fi
    done
done
