// ULB Medical - Navigation JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const mobileToggle = document.querySelector('.mobile-nav-toggle');
    const sidebarNav = document.querySelector('.sidebar-nav');
    
    if (mobileToggle && sidebarNav) {
        mobileToggle.addEventListener('click', function() {
            sidebarNav.classList.toggle('active');
            const isActive = sidebarNav.classList.contains('active');
            mobileToggle.textContent = isActive ? 'Fermer le menu' : 'Ouvrir le menu';
            mobileToggle.setAttribute('aria-expanded', isActive);
        });
    }
    
    // Active Navigation Highlighting
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link, .sidebar-nav a');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (currentPath.includes(linkPath) && linkPath !== 'index.html') {
            link.classList.add('active');
        }
    });
    
    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Progress Bar Animation on Scroll
    const progressBars = document.querySelectorAll('.progress-bar');
    
    const animateProgressBars = () => {
        progressBars.forEach(bar => {
            const rect = bar.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
            
            if (isVisible && !bar.classList.contains('animated')) {
                bar.classList.add('animated');
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            }
        });
    };
    
    window.addEventListener('scroll', animateProgressBars);
    animateProgressBars(); // Initial check
    
    // Table of Contents Generation
    const toc = document.querySelector('.toc');
    const headings = document.querySelectorAll('h2, h3');
    
    if (toc && headings.length > 0) {
        const tocList = document.createElement('ul');
        let currentLevel = 2;
        let currentList = tocList;
        
        headings.forEach((heading, index) => {
            const level = parseInt(heading.tagName.charAt(1));
            const id = heading.id || `heading-${index}`;
            heading.id = id;
            
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.href = `#${id}`;
            link.textContent = heading.textContent;
            listItem.appendChild(link);
            
            if (level > currentLevel) {
                const subList = document.createElement('ul');
                currentList.lastElementChild.appendChild(subList);
                currentList = subList;
            } else if (level < currentLevel) {
                currentList = currentList.parentElement.parentElement;
            }
            
            currentList.appendChild(listItem);
            currentLevel = level;
        });
        
        toc.appendChild(tocList);
    }
    
    // Print Functionality
    const printButton = document.querySelector('.btn-print');
    if (printButton) {
        printButton.addEventListener('click', function() {
            window.print();
        });
    }
    
    // Accessibility: Skip Link Focus
    const skipLink = document.querySelector('.skip-link');
    if (skipLink) {
        skipLink.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.setAttribute('tabindex', '-1');
                target.focus();
            }
        });
    }
    
    // Card Hover Effects
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // External Link Indicators
    document.querySelectorAll('a[href^="http"]').forEach(link => {
        if (!link.href.includes(window.location.hostname)) {
            link.classList.add('external-link');
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
});

// Utility function for adding loading states
function showLoading(element) {
    element.classList.add('loading');
    element.innerHTML = '<div class="spinner"></div>';
}

function hideLoading(element, content) {
    element.classList.remove('loading');
    element.innerHTML = content;
}

// Export functions for use in other scripts
window.navigationUtils = {
    showLoading,
    hideLoading
};