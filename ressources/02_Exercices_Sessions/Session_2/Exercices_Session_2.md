# 🔬 Exercices Session 2 : Diagnostic et Décision Clinique

## 🎯 Objectifs de la Session
- Maîtriser le diagnostic différentiel multi-IA
- Créer des arbres décisionnels robustes
- Gérer l'incertitude clinique
- Développer la validation croisée

## 📋 Exercice 2.1 : Diagnostic Différentiel Complexe

### Cas Clinique Détaillé

```
Patiente : Femme de 32 ans, G2P1
Présentation : 
- Dyspnée progressive depuis 3 semaines
- Œdèmes des membres inférieurs bilatéraux
- Fatigue intense
- Prise de poids de 5 kg
- Accouchement il y a 3 mois

Antécédents :
- Grossesse et accouchement sans complication
- Pas d'antécédent cardiaque personnel
- Mère décédée d'insuffisance cardiaque à 45 ans

Examen clinique :
- TA : 110/70 mmHg
- FC : 110 bpm
- SpO2 : 94% en air ambiant
- Turgescence jugulaire
- B3 à l'auscultation
- Crépitants bilatéraux bases
```

### Instructions Multi-IA

**Phase 1 - Génération Indépendante (15 min)**
Soumettez le cas à chaque IA SÉPARÉMENT avec ce prompt :
```
Analyse ce cas clinique et fournis :
1. Diagnostic principal le plus probable
2. 5 diagnostics différentiels par ordre de probabilité
3. 3 examens complémentaires urgents
4. Justification pour chaque élément
```

**Phase 2 - Confrontation (10 min)**
Créez un tableau comparatif :
```markdown
| Critère | ChatGPT | Claude | Gemini | Consensus |
|---------|---------|---------|---------|-----------|
| Diag principal | | | | |
| DDx #1 | | | | |
| DDx #2 | | | | |
| Examens urgents | | | | |
```

**Phase 3 - Approfondissement (15 min)**
Pour les divergences, demandez à chaque IA :
```
[Autre IA] suggère [diagnostic X] pour ce cas.
Quelle est ton analyse de cette hypothèse ?
Points pour et contre ?
```

### Livrable Attendu
- Tableau comparatif complété
- Analyse des convergences/divergences
- Diagnostic consensus avec niveau de confiance
- Plan d'investigation final consolidé

## 🌳 Exercice 2.2 : Arbres Décisionnels Intelligents

### Scénario
Créez un arbre décisionnel pour : **Douleur abdominale aiguë aux urgences**

### Méthodologie en 3 Temps

**Temps 1 - ChatGPT (Créativité)**
```
Crée un arbre décisionnel complet pour l'approche 
d'une douleur abdominale aiguë aux urgences.
Inclus TOUS les scénarios possibles, même rares.
Format : diagramme textuel avec branches.
```

**Temps 2 - Claude (Structure)**
```
Voici un arbre décisionnel créé pour douleur abdominale.
[Coller résultat ChatGPT]

Restructure-le selon :
- Urgences vitales d'abord
- Critères de décision clairs
- Actions concrètes à chaque nœud
- Format standardisé
```

**Temps 3 - Gemini (Validation)**
```
Vérifie cet arbre décisionnel contre les dernières
guidelines internationales pour douleur abdominale
aiguë. Corrige les erreurs et ajoute les références.
[Coller résultat Claude]
```

### Production Finale
- Arbre décisionnel version finale
- Documentation des modifications
- Justification des choix
- Temps de création total

## ⚠️ Exercice 2.3 : Gestion de l'Incertitude

### Cas Ambigus à Tester

**Cas A - Zone grise diagnostique**
```
Patient 65 ans, toux chronique 6 semaines
- Tabac : 20 PA sevré il y a 10 ans  
- Amaigrissement : "peut-être 2-3 kg"
- Radio thorax : "infiltrat discret lobe supérieur droit"
- Pas de fièvre documentée
- CRP : 15 mg/L
```

**Cas B - Informations contradictoires**
```
Enfant 8 ans, douleurs articulaires migratrices
- Mère : "fièvre à 40°C plusieurs fois"
- Carnet santé : dernière T° notée 37.8°C
- Enfant : "j'ai mal partout"
- Examen : articulations normales
- ASLO : 250 UI/mL (N<200)
```

### Analyse Demandée
Pour chaque cas, documentez :
1. **Niveau de certitude** exprimé (1-10)
2. **Stratégies face à l'incertitude**
3. **Demandes de clarification**
4. **Approche prudentielle**
5. **Disclaimers médicaux**

### Grille d'Évaluation
```markdown
| Aspect | ChatGPT | Claude | Gemini |
|--------|---------|---------|---------|
| Reconnaît incertitude | /5 | /5 | /5 |
| Propose stratégies | /5 | /5 | /5 |
| Évite sur-interprétation | /5 | /5 | /5 |
| Communication risque | /5 | /5 | /5 |
```

## 🔍 Exercice 2.4 : Validation et Fact-Checking

### Affirmations à Vérifier

Soumettez ces affirmations aux 3 IA :

1. "L'aspirine est contre-indiquée dans la péricardite aiguë"
2. "Le score de Wells modifié a une sensibilité de 95% pour l'embolie pulmonaire"
3. "La metformine doit être arrêtée 48h avant un scanner avec contraste"
4. "Le syndrome de Guillain-Barré se manifeste toujours par une paralysie ascendante"

### Méthodologie de Validation

**Étape 1 :** Réponse initiale de chaque IA
**Étape 2 :** Demande de sources
```
Peux-tu citer les sources précises (études, guidelines) 
qui supportent ta réponse concernant [affirmation] ?
```
**Étape 3 :** Cross-validation
```
[Autre IA] affirme le contraire avec [source].
Comment réconcilier ces informations ?
```

### Rapport de Fact-Checking
- Tableau vérité finale
- Sources les plus fiables identifiées
- Stratégie de résolution des conflits
- Recommandations pour pratique

## 🏆 Challenge Session 2 : Diagnostic Marathon

### Le Défi
10 cas cliniques en 60 minutes - Meilleur score diagnostic

### Règles
1. Utiliser les 3 IA en parallèle
2. Maximum 6 minutes par cas
3. Réponse = diagnostic principal + 1 examen clé
4. Documentation du workflow utilisé

### Barème
- Diagnostic correct : 5 points
- Examen pertinent : 3 points  
- Workflow efficace : 2 points
- **Total possible : 100 points**

### Format de Soumission
```markdown
## Diagnostic Marathon - [Nom]
Temps total : XX minutes

### Cas 1
- Diagnostic : [réponse]
- Examen : [réponse]
- IA principale utilisée : [ChatGPT/Claude/Gemini]
- Confiance : [1-10]

[Répéter pour les 10 cas]

### Workflow Optimisé
[Description de votre méthode en 5 lignes max]

Score auto-évalué : XX/100
```

## 📊 Métriques de Performance Session 2

### KPIs à Tracker
- Temps moyen par diagnostic : _____ min
- Taux de convergence 3 IA : _____ %
- Hallucinations détectées : _____ 
- Diagnostics confirmés justes : _____ %

### Réflexion Finale
**Quelle IA pour quel type de cas ?**
- Cas simples : _____________
- Cas complexes : ___________
- Urgences : _______________
- Incertitude : _____________

## 📤 Soumission

Fichier à uploader :
`03_Travaux_Groupes/Groupe_[A/B/C]/Session2/[VotreNom]_S2.md`

**Deadline : Vendredi 16h00**

---

💡 **N'oubliez pas** : Partagez vos arbres décisionnels les plus innovants !

*Exercices Session 2 - Formation IA Médicale ULB v3.0*