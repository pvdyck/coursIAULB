# Authentication System Documentation

## Overview
This site is protected by a simple JavaScript-based authentication system. All HTML pages require a password to access.

## Password
The current password is: `ILOVEIA`

## How it works
1. When users visit any protected page, they see a login overlay
2. After entering the correct password, a session is created (valid for 24 hours)
3. Users can browse all pages without re-entering the password
4. The session is stored in browser localStorage

## Files
- `/assets/js/simple-auth.js` - Main authentication script
- `/assets/js/auth-logout-button.js` - Optional logout button
- `/test-auth.html` - Test page to verify authentication

## Adding to new pages
Add this before `</head>`:
```html
<!-- Authentication -->
<script src="assets/js/simple-auth.js"></script>
```

For subdirectories, adjust the path:
```html
<script src="../assets/js/simple-auth.js"></script>
```

## Adding logout button
To add a logout button to any page, include after the auth script:
```html
<script src="assets/js/auth-logout-button.js"></script>
```

## Testing locally
```bash
cd /Users/pvdyck/Dev/coursIA
python3 test_server.py
# Visit http://localhost:8000/test-auth.html
```

## Security notes
- This is client-side protection only
- Suitable for educational content, not sensitive data
- For production use, implement server-side authentication

## Troubleshooting
- Clear browser localStorage if having issues
- Check browser console for errors
- Ensure JavaScript is enabled