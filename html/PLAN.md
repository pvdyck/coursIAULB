# Plan de Conversion HTML - Formation IA Médicale ULB

## Structure du Site Web Statique

### Architecture des Fichiers
```
html/
├── index.html                      # Page d'accueil avec navigation principale
├── programme.html                  # Vue d'ensemble du programme
├── sessions/
│   ├── session1.html              # Session 1: Fondements et Découverte
│   ├── session2.html              # Session 2: Découverte des Outils
│   ├── session3.html              # Session 3: Workflows et Publication
│   └── session4.html              # Session 4: Transformation Finale
├── resources/
│   ├── glossaire.html             # Glossaire IA Médical
│   ├── bibliotheque-prompts.html  # Bibliothèque de Prompts
│   ├── guides.html                # Guides et Best Practices
│   └── securite.html              # Sécurité et Conformité
├── exercises/
│   ├── session1-exercises.html    # Exercices Session 1
│   ├── session2-exercises.html    # Exercices Session 2
│   ├── session3-exercises.html    # Exercices Session 3
│   └── session4-exercises.html    # Exercices Session 4
├── groupes/
│   └── whatsapp.html              # Guide WhatsApp et Collaboration
├── evaluation/
│   └── grilles.html               # Grilles d'Évaluation
└── assets/
    ├── css/
    │   ├── ulb-medical.css        # Style principal ULB Médecine
    │   ├── print.css              # Styles d'impression
    │   └── responsive.css         # Styles responsive
    ├── js/
    │   ├── navigation.js          # Navigation interactive
    │   ├── search.js              # Fonction de recherche
    │   └── interactions.js        # Interactions UI
    ├── images/
    │   ├── ulb-logo.svg           # Logo ULB
    │   ├── medical-logo.svg       # Logo Faculté de Médecine
    │   └── illustrations/         # Illustrations du cours
    └── fonts/
        └── (polices ULB)          # Polices officielles
```

## Design System ULB Médecine

### Palette de Couleurs
- **Rouge Principal**: #e22017 (accent principal)
- **Rouge Hover**: #ce1d14
- **Rouge Foncé**: #ba1a12
- **Gris Texte**: #333333
- **Gris Clair**: #f5f5f5 (arrière-plans)
- **Blanc**: #ffffff (contenu principal)

### Typographie
- **Titres**: Sans-serif, bold, rouge ULB
- **Corps**: Sans-serif, regular, gris foncé
- **Code**: Monospace, fond gris clair

### Composants UI
1. **Header**
   - Logo ULB + Faculté de Médecine
   - Navigation principale horizontale
   - Breadcrumb pour la navigation

2. **Sidebar**
   - Navigation secondaire
   - Liens rapides vers ressources
   - Progression du cours

3. **Contenu Principal**
   - Cards pour les sections
   - Tables pour les grilles
   - Accordéons pour FAQ
   - Tabs pour organiser le contenu

4. **Footer**
   - Informations légales
   - Liens utiles
   - Contact

## Fonctionnalités Interactives

### Navigation
- Menu responsive (mobile/desktop)
- Breadcrumb dynamique
- Table des matières collapsible
- Navigation entre sessions

### Recherche
- Recherche globale dans tout le contenu
- Filtres par type de contenu
- Suggestions auto-complétées

### Accessibilité
- ARIA labels complets
- Navigation au clavier
- Mode contraste élevé
- Tailles de police ajustables

### Impression
- CSS spécifique pour l'impression
- Mise en page optimisée
- Suppression des éléments de navigation

## Conversion du Contenu

### Process de Conversion
1. Parser le Markdown
2. Appliquer les templates HTML
3. Intégrer les styles ULB
4. Ajouter la navigation
5. Optimiser pour SEO

### Templates HTML
- Template principal (layout)
- Template session
- Template exercice
- Template ressource
- Template évaluation

## Optimisations

### Performance
- Minification CSS/JS
- Images optimisées
- Lazy loading
- Cache browser

### SEO
- Méta tags appropriés
- Schema.org pour contenu éducatif
- Sitemap.xml
- URLs descriptives

### Responsive Design
- Mobile-first approach
- Breakpoints: 320px, 768px, 1024px, 1440px
- Touch-friendly interactions

## Phases de Développement

### Phase 1: Infrastructure (Actuelle)
- [x] Structure des dossiers
- [ ] CSS framework ULB
- [ ] Templates HTML de base

### Phase 2: Contenu Principal
- [ ] Page d'accueil
- [ ] Pages des 4 sessions
- [ ] Navigation fonctionnelle

### Phase 3: Ressources
- [ ] Pages d'exercices
- [ ] Guides et références
- [ ] Bibliothèque de prompts

### Phase 4: Interactivité
- [ ] JavaScript pour navigation
- [ ] Fonction de recherche
- [ ] Animations et transitions

### Phase 5: Finalisation
- [ ] Tests cross-browser
- [ ] Optimisation performance
- [ ] Documentation technique