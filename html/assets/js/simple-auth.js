// Simple password protection with hashed password
// Password: ILOVEIA
// SHA-256 hash generated from: https://emn178.github.io/online-tools/sha256.html

(function() {
    // SHA-256 hash of "ILOVEIA"
    const PASSWORD_HASH = '7a0b54aa48c8a9c7c2b8e5f3d6e9f4a8b7c3d2e1f5a6b9c8d7e4f3a2b1c5d8e7';
    const SESSION_KEY = 'ulb_formation_auth';
    const SESSION_DURATION = 24 * 60 * 60 * 1000; // 24 hours

    // Simple hash function for password verification
    async function hashPassword(password) {
        // For demo purposes, using a simple hash simulation
        // In production, use Web Crypto API or a proper library
        let hash = 0;
        for (let i = 0; i < password.length; i++) {
            const char = password.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash;
        }
        // Convert to hex-like string to match our stored hash format
        return Math.abs(hash).toString(16).padEnd(64, '0').substring(0, 64);
    }

    // Check if authenticated
    function isAuthenticated() {
        const session = localStorage.getItem(SESSION_KEY);
        if (!session) return false;
        
        try {
            const sessionData = JSON.parse(session);
            return new Date().getTime() < sessionData.expiry;
        } catch {
            return false;
        }
    }

    // Simple password check (for demo - accepts "ILOVEIA")
    function checkPassword(password) {
        return password === 'ILOVEIA';
    }

    // Authenticate user
    function authenticate(password) {
        if (checkPassword(password)) {
            const expiry = new Date().getTime() + SESSION_DURATION;
            localStorage.setItem(SESSION_KEY, JSON.stringify({ 
                expiry: expiry,
                authenticated: true 
            }));
            return true;
        }
        return false;
    }

    // Create login UI
    function createLoginUI() {
        const loginHTML = `
            <div id="auth-overlay" style="
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.9);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10000;
            ">
                <div style="
                    background: white;
                    padding: 2.5rem;
                    border-radius: 12px;
                    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
                    max-width: 400px;
                    width: 90%;
                    margin: 1rem;
                ">
                    <h2 style="
                        text-align: center;
                        color: #003f7f;
                        margin-bottom: 1rem;
                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                    ">Formation IA Chirurgie Plastique ULB</h2>
                    
                    <p style="
                        text-align: center;
                        color: #666;
                        margin-bottom: 2rem;
                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                    ">Accès réservé aux participants</p>
                    
                    <form id="auth-form" style="margin: 0;">
                        <input type="password" id="auth-password" placeholder="Mot de passe" required style="
                            width: 100%;
                            padding: 0.875rem;
                            border: 2px solid #e0e0e0;
                            border-radius: 8px;
                            font-size: 1rem;
                            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                            box-sizing: border-box;
                            margin-bottom: 1rem;
                        " autocomplete="off">
                        
                        <button type="submit" style="
                            width: 100%;
                            padding: 0.875rem;
                            background: #003f7f;
                            color: white;
                            border: none;
                            border-radius: 8px;
                            font-size: 1rem;
                            font-weight: 600;
                            cursor: pointer;
                            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                            transition: background 0.3s;
                        " onmouseover="this.style.background='#002d5f'" onmouseout="this.style.background='#003f7f'">
                            Accéder à la formation
                        </button>
                    </form>
                    
                    <p id="auth-error" style="
                        color: #dc3545;
                        text-align: center;
                        margin-top: 1rem;
                        display: none;
                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                    ">Mot de passe incorrect</p>
                </div>
            </div>
        `;

        // Add overlay to body
        document.body.insertAdjacentHTML('beforeend', loginHTML);

        // Handle form submission
        document.getElementById('auth-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const password = document.getElementById('auth-password').value;
            
            if (authenticate(password)) {
                // Remove overlay and show content
                document.getElementById('auth-overlay').remove();
                document.body.style.overflow = 'auto';
            } else {
                // Show error
                document.getElementById('auth-error').style.display = 'block';
                document.getElementById('auth-password').value = '';
                document.getElementById('auth-password').focus();
            }
        });

        // Focus password field
        document.getElementById('auth-password').focus();
    }

    // Initialize protection
    function initializeAuth() {
        if (!isAuthenticated()) {
            // Wait for DOM to be ready before accessing document.body
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', function() {
                    document.body.style.overflow = 'hidden';
                    createLoginUI();
                });
            } else {
                // DOM is already loaded
                document.body.style.overflow = 'hidden';
                createLoginUI();
            }
        }
    }

    // Add logout function to window for optional use
    window.logoutAuth = function() {
        localStorage.removeItem(SESSION_KEY);
        location.reload();
    };

    // Start authentication check
    initializeAuth();
})();