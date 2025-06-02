# Formation IA Chirurgie Plastique - Site Web Statique

## 🎯 Vue d'Ensemble

Site web statique complet pour la formation "De ChatGPT à PRS/ASJ : Transformez votre TFE en Publication avec l'IA" de l'Université Libre de Bruxelles - Faculté de Médecine.

## 🎨 Design System

Le site utilise le design officiel de la Faculté de Médecine de l'ULB :
- **Couleur principale** : Rouge ULB (#e22017)
- **Typographie** : Sans-serif moderne
- **Layout** : Responsive mobile-first
- **Accessibilité** : ARIA labels complets

## 📁 Structure des Fichiers

```
html/
├── index.html              # Page d'accueil
├── programme.html          # Vue d'ensemble du programme
├── sessions/
│   ├── session1.html      # Session 1 : ChatGPT (✅ Complète)
│   ├── session2.html      # Session 2 : Autres outils (À faire)
│   ├── session3.html      # Session 3 : Workflows (À faire)
│   └── session4.html      # Session 4 : TFE (À faire)
└── assets/
    ├── css/
    │   ├── ulb-medical.css    # Styles principaux ULB
    │   ├── responsive.css     # Styles responsive
    │   └── print.css          # Styles d'impression
    └── js/
        └── navigation.js      # Navigation interactive
```

## 🚀 Utilisation

### Ouvrir le site localement :
```bash
# Depuis le dossier html/
open index.html

# Ou avec un serveur local
python -m http.server 8000
# Puis naviguer vers http://localhost:8000
```

### Navigation :
- **Accueil** : Vue d'ensemble et accès rapide
- **Programme** : Détail des 4 sessions
- **Sessions** : Contenu détaillé de chaque session
- **Ressources** : Guides, prompts, templates (à implémenter)

## ✅ Fonctionnalités Implémentées

1. **Design ULB Medical** 
   - Palette de couleurs officielle
   - Header/Footer cohérents
   - Cards et composants UI

2. **Responsive Design**
   - Mobile-first approach
   - Navigation adaptative
   - Tables responsives

3. **Accessibilité**
   - Skip links
   - ARIA labels
   - Navigation au clavier

4. **Interactivité**
   - Progress bars animées
   - Navigation mobile toggle
   - Smooth scrolling

5. **Print-friendly**
   - CSS dédié pour l'impression
   - Mise en page optimisée
   - Suppression éléments UI

## 📋 État d'Avancement

### ✅ Complété :
- Infrastructure HTML/CSS/JS
- Page d'accueil
- Page programme
- Session 1 complète
- Navigation fonctionnelle
- Design responsive

### 🚧 À Faire :
- Sessions 2, 3, 4
- Pages ressources
- Pages exercices
- Fonction recherche
- Optimisation SEO

## 🛠️ Technologies Utilisées

- **HTML5** : Structure sémantique
- **CSS3** : Variables CSS, Grid, Flexbox
- **JavaScript** : Vanilla JS pour interactivité
- **Pas de dépendances** : Site 100% statique

## 📱 Compatibilité

- ✅ Chrome/Edge (dernières versions)
- ✅ Firefox (dernières versions)
- ✅ Safari (dernières versions)
- ✅ Mobile (iOS/Android)
- ✅ Mode sombre (media query)

## 🔒 Sécurité

- Pas de données sensibles
- Liens externes avec rel="noopener"
- Content Security Policy ready

## 📈 Performance

- Pas de frameworks lourds
- CSS/JS minifiables
- Images optimisables
- Score Lighthouse visé : 95+

---

*Site développé selon les standards web modernes et les guidelines ULB*
*Formation conçue selon les principes de charge cognitive optimale - Juin 2025*