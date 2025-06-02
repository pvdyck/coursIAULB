// ULB Medical - Search Functionality

class SearchEngine {
    constructor() {
        this.searchIndex = [];
        this.searchInput = null;
        this.searchResults = null;
        this.searchButton = null;
        this.searchOverlay = null;
        
        this.init();
    }
    
    init() {
        // Create search UI elements
        this.createSearchUI();
        
        // Build search index
        this.buildSearchIndex();
        
        // Bind events
        this.bindEvents();
    }
    
    createSearchUI() {
        // Search button in header
        const navMain = document.querySelector('.nav-main');
        if (navMain) {
            const searchBtn = document.createElement('button');
            searchBtn.className = 'search-toggle btn btn-secondary';
            searchBtn.innerHTML = '🔍';
            searchBtn.setAttribute('aria-label', 'Rechercher');
            searchBtn.style.marginLeft = 'auto';
            navMain.appendChild(searchBtn);
            this.searchButton = searchBtn;
        }
        
        // Search overlay
        const overlay = document.createElement('div');
        overlay.className = 'search-overlay';
        overlay.innerHTML = `
            <div class="search-container">
                <div class="search-header">
                    <h2>Rechercher dans la formation</h2>
                    <button class="search-close" aria-label="Fermer la recherche">&times;</button>
                </div>
                <div class="search-input-wrapper">
                    <input type="search" 
                           class="search-input" 
                           placeholder="Rechercher (ex: rhinoplastie, ChatGPT, TFE...)"
                           aria-label="Rechercher dans le contenu">
                    <button class="search-submit btn btn-primary">Rechercher</button>
                </div>
                <div class="search-results">
                    <div class="search-results-content"></div>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);
        
        this.searchOverlay = overlay;
        this.searchInput = overlay.querySelector('.search-input');
        this.searchResults = overlay.querySelector('.search-results-content');
    }
    
    buildSearchIndex() {
        // Define searchable content
        this.searchIndex = [
            // Sessions
            {
                title: 'Session 1 : Fondements IA & ChatGPT',
                url: '/sessions/session1.html',
                content: 'ChatGPT maîtrise complète fondements IA sécurité données prompting rhinoplastie DIEP analyse images',
                category: 'Session'
            },
            {
                title: 'Session 2 : Découverte des Outils',
                url: '/sessions/session2.html',
                content: 'Claude Gemini Perplexity comparaison outils IA thinking mode recherche Google Scholar',
                category: 'Session'
            },
            {
                title: 'Session 3 : Workflows Publication',
                url: '/sessions/session3.html',
                content: 'workflows avancés publication PRS ASJ extended thinking figures professionnelles',
                category: 'Session'
            },
            {
                title: 'Session 4 : Transformation TFE',
                url: '/sessions/session4.html',
                content: 'transformation TFE publication soumission journal reviewers cover letter',
                category: 'Session'
            },
            
            // Resources
            {
                title: 'Glossaire IA Médical',
                url: '/resources/glossaire.html',
                content: 'LLM hallucination prompting token GPT modèle langage',
                category: 'Ressource'
            },
            {
                title: 'Bibliothèque de Prompts',
                url: '/resources/bibliotheque-prompts.html',
                content: 'prompts chirurgie plastique rhinoplastie DIEP consultation opératoire',
                category: 'Ressource'
            },
            {
                title: 'Grilles d\'Évaluation',
                url: '/evaluation/grilles.html',
                content: 'grilles évaluation comparaison outils éthique',
                category: 'Évaluation'
            },
            {
                title: 'WhatsApp Collaboration',
                url: '/groupes/whatsapp.html',
                content: 'WhatsApp groupes collaboration partage hashtags',
                category: 'Communauté'
            },
            
            // Exercises
            {
                title: 'Exercices Pratiques',
                url: '/exercises/index.html',
                content: 'exercices pratiques cas cliniques TFE transformation',
                category: 'Exercices'
            },
            
            // Techniques
            {
                title: 'Rhinoplastie et IA',
                url: '/sessions/session1.html#exercice-rhinoplastie',
                content: 'rhinoplastie analyse photos angles mesures céphalométriques',
                category: 'Technique'
            },
            {
                title: 'Reconstruction DIEP',
                url: '/sessions/session2.html#exercice-diep',
                content: 'DIEP reconstruction mammaire perforantes monitoring lambeaux',
                category: 'Technique'
            },
            {
                title: 'Scores PROM',
                url: '/resources/glossaire.html#prom',
                content: 'FACE-Q BREAST-Q ROE patient reported outcome measures',
                category: 'PROM'
            }
        ];
    }
    
    bindEvents() {
        // Toggle search overlay
        this.searchButton?.addEventListener('click', () => this.openSearch());
        
        // Close search
        const closeBtn = this.searchOverlay.querySelector('.search-close');
        closeBtn?.addEventListener('click', () => this.closeSearch());
        
        // Close on overlay click
        this.searchOverlay?.addEventListener('click', (e) => {
            if (e.target === this.searchOverlay) {
                this.closeSearch();
            }
        });
        
        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.searchOverlay.classList.contains('active')) {
                this.closeSearch();
            }
        });
        
        // Search on input
        this.searchInput?.addEventListener('input', debounce(() => {
            this.performSearch();
        }, 300));
        
        // Search on submit
        const submitBtn = this.searchOverlay.querySelector('.search-submit');
        submitBtn?.addEventListener('click', () => this.performSearch());
        
        // Search on Enter
        this.searchInput?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.performSearch();
            }
        });
    }
    
    openSearch() {
        this.searchOverlay.classList.add('active');
        this.searchInput.focus();
        document.body.style.overflow = 'hidden';
    }
    
    closeSearch() {
        this.searchOverlay.classList.remove('active');
        document.body.style.overflow = '';
        this.searchInput.value = '';
        this.searchResults.innerHTML = '';
    }
    
    performSearch() {
        const query = this.searchInput.value.toLowerCase().trim();
        
        if (!query) {
            this.searchResults.innerHTML = '<p class="search-empty">Entrez un terme de recherche...</p>';
            return;
        }
        
        // Search in index
        const results = this.searchIndex.filter(item => {
            const searchText = `${item.title} ${item.content}`.toLowerCase();
            return query.split(' ').every(term => searchText.includes(term));
        });
        
        // Display results
        if (results.length === 0) {
            this.searchResults.innerHTML = `
                <p class="search-empty">
                    Aucun résultat pour "<strong>${query}</strong>"
                </p>
                <p class="search-suggestion">
                    Suggestions : rhinoplastie, ChatGPT, TFE, DIEP, publication...
                </p>
            `;
        } else {
            const resultsHTML = results.map(result => `
                <div class="search-result-item">
                    <span class="search-result-category">${result.category}</span>
                    <h3 class="search-result-title">
                        <a href="${result.url}" onclick="searchEngine.closeSearch()">
                            ${this.highlightTerms(result.title, query)}
                        </a>
                    </h3>
                    <p class="search-result-excerpt">
                        ${this.getExcerpt(result.content, query)}
                    </p>
                </div>
            `).join('');
            
            this.searchResults.innerHTML = `
                <p class="search-results-count">
                    ${results.length} résultat${results.length > 1 ? 's' : ''} pour "<strong>${query}</strong>"
                </p>
                ${resultsHTML}
            `;
        }
    }
    
    highlightTerms(text, query) {
        const terms = query.split(' ');
        let highlighted = text;
        
        terms.forEach(term => {
            const regex = new RegExp(`(${term})`, 'gi');
            highlighted = highlighted.replace(regex, '<mark>$1</mark>');
        });
        
        return highlighted;
    }
    
    getExcerpt(content, query) {
        const terms = query.split(' ');
        const excerptLength = 150;
        let excerpt = content;
        
        // Find the first occurrence of any search term
        let firstIndex = content.length;
        terms.forEach(term => {
            const index = content.toLowerCase().indexOf(term);
            if (index !== -1 && index < firstIndex) {
                firstIndex = index;
            }
        });
        
        // Extract excerpt around the term
        const start = Math.max(0, firstIndex - 50);
        const end = Math.min(content.length, start + excerptLength);
        excerpt = content.substring(start, end);
        
        if (start > 0) excerpt = '...' + excerpt;
        if (end < content.length) excerpt += '...';
        
        return this.highlightTerms(excerpt, query);
    }
}

// Debounce utility
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Initialize search when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.searchEngine = new SearchEngine();
});

// Search styles
const searchStyles = `
<style>
.search-toggle {
    padding: 0.5rem !important;
    min-width: 40px;
    font-size: 1.2rem;
}

.search-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 9999;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 2rem;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
}

.search-overlay.active {
    opacity: 1;
    visibility: visible;
}

.search-container {
    background-color: var(--bg-primary);
    border-radius: var(--radius-lg);
    width: 100%;
    max-width: 800px;
    max-height: 80vh;
    display: flex;
    flex-direction: column;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    transform: translateY(-20px);
    transition: transform 0.3s ease;
}

.search-overlay.active .search-container {
    transform: translateY(0);
}

.search-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--spacing-lg);
    border-bottom: 1px solid var(--border-color);
}

.search-header h2 {
    margin: 0;
    color: var(--ulb-red-primary);
}

.search-close {
    background: none;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    color: var(--text-secondary);
    transition: color 0.2s ease;
}

.search-close:hover {
    color: var(--ulb-red-primary);
}

.search-input-wrapper {
    display: flex;
    gap: var(--spacing-md);
    padding: var(--spacing-lg);
}

.search-input {
    flex: 1;
    padding: var(--spacing-md);
    border: 2px solid var(--border-color);
    border-radius: var(--radius-md);
    font-size: 1rem;
    transition: border-color 0.2s ease;
}

.search-input:focus {
    outline: none;
    border-color: var(--ulb-red-primary);
}

.search-results {
    flex: 1;
    overflow-y: auto;
    padding: var(--spacing-lg);
    border-top: 1px solid var(--border-color);
}

.search-results-count {
    color: var(--text-secondary);
    margin-bottom: var(--spacing-lg);
}

.search-result-item {
    padding: var(--spacing-md);
    border-radius: var(--radius-md);
    margin-bottom: var(--spacing-md);
    background-color: var(--bg-secondary);
    transition: background-color 0.2s ease;
}

.search-result-item:hover {
    background-color: var(--bg-tertiary);
}

.search-result-category {
    display: inline-block;
    padding: 2px 8px;
    background-color: var(--ulb-red-primary);
    color: white;
    font-size: 0.75rem;
    border-radius: var(--radius-sm);
    margin-bottom: var(--spacing-xs);
}

.search-result-title {
    margin: var(--spacing-xs) 0;
    font-size: 1.1rem;
}

.search-result-title a {
    color: var(--text-primary);
    text-decoration: none;
}

.search-result-title a:hover {
    color: var(--ulb-red-primary);
}

.search-result-excerpt {
    color: var(--text-secondary);
    font-size: 0.9rem;
    margin: 0;
}

.search-result-excerpt mark {
    background-color: rgba(226, 32, 23, 0.2);
    color: var(--ulb-red-primary);
    font-weight: 600;
    padding: 0 2px;
}

.search-empty {
    text-align: center;
    color: var(--text-secondary);
    padding: var(--spacing-xl);
}

.search-suggestion {
    text-align: center;
    color: var(--text-muted);
    font-size: 0.9rem;
}

@media (max-width: 768px) {
    .search-overlay {
        padding: 0;
    }
    
    .search-container {
        max-width: none;
        max-height: 100vh;
        height: 100%;
        border-radius: 0;
    }
    
    .search-input-wrapper {
        flex-direction: column;
    }
}
</style>
`;

// Inject styles
document.head.insertAdjacentHTML('beforeend', searchStyles);