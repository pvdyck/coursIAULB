// Optional logout button that can be added to any page
// Include this script AFTER simple-auth.js if you want a logout button

(function() {
    function addLogoutButton() {
        // Check if user is authenticated (by checking if logoutAuth function exists)
        if (typeof window.logoutAuth === 'function') {
            const logoutBtn = document.createElement('button');
            logoutBtn.textContent = 'Déconnexion';
            logoutBtn.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                padding: 0.5rem 1rem;
                background: #dc3545;
                color: white;
                border: none;
                border-radius: 4px;
                cursor: pointer;
                z-index: 9999;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                font-size: 0.875rem;
                font-weight: 500;
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                transition: background 0.3s;
            `;
            
            logoutBtn.addEventListener('mouseover', function() {
                this.style.background = '#c82333';
            });
            
            logoutBtn.addEventListener('mouseout', function() {
                this.style.background = '#dc3545';
            });
            
            logoutBtn.addEventListener('click', function() {
                if (confirm('Voulez-vous vous déconnecter ?')) {
                    window.logoutAuth();
                }
            });
            
            document.body.appendChild(logoutBtn);
        }
    }
    
    // Add button when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', addLogoutButton);
    } else {
        addLogoutButton();
    }
})();