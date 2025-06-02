# 📚 Exercices Session 1 : Fondements IA & Maîtrise ChatGPT pour Chirurgie Plastique
## *Difficulté : 4/10 - Focus sur UN seul outil avec cas spécialisés*

## 🎯 Objectifs de la Session
- Comprendre les fondements de l'IA générative médicale
- Maîtriser ChatGPT pour la chirurgie plastique
- Analyser photos cliniques et générer documentation
- Détecter hallucinations spécialisées
- Première application sur votre TFE plastie

## 🏥 VOS 3 CAS DE RÉFÉRENCE POUR TOUS LES EXERCICES

**Cas A - Rhinoplastie Esthétique :**
```
Femme 25 ans, bosse nasale familiale 4mm, pointe tombante.
Angle naso-labial 85°. Photos standardisées disponibles.
Demande : "nez naturel, pas refait". Peur stigmates chirurgie.
ATCD : RAS. Pas de trouble respiratoire.
```

**Cas B - Reconstruction Mammaire DIEP :**
```
Femme 45 ans, mastectomie droite il y a 8 mois pour carcinome.
Chimiothérapie terminée il y a 3 mois. IMC 28.
Scanner : 2 perforantes dominantes côté droit.
Souhaite reconstruction avec tissu propre, éviter implants.
```

**Cas C - Lifting Centro-Facial :**
```
Homme 58 ans, relâchement medio-facial, bajoues débutantes.
Fumeur sevré 6 mois. Demande rajeunissement naturel.
Travail public (avocat), discrétion importante.
Budget non limitant, résultat > prix.
```

---

## 📝 Exercice 1.1 : Consultation Virtuelle Rhinoplastie (20 min)

### Mission : Simuler une consultation complète avec le Cas A

### Phase 1 : Prompts Progressifs (10 min)
Testez ces 3 prompts dans ChatGPT :

**Prompt 1 (trop simple) :**
```
Rhinoplastie ?
```

**Prompt 2 (mieux structuré) :**
```
Explique la rhinoplastie à une patiente de 25 ans
```

**Prompt 3 (optimal) :**
```
Tu es chirurgien plasticien spécialisé en rhinoplastie. 
Patiente 25 ans consulte pour bosse nasale 4mm et pointe tombante.
Angle naso-labial 85°. Demande résultat naturel.

Structure ta consultation :
1. Analyse morphologique détaillée
2. Options techniques (ouverte vs fermée) avec justification
3. Simulation verbale du résultat attendu
4. Risques spécifiques à ce morphotype
5. Déroulement post-opératoire jour par jour
6. Coût estimatif et prise en charge
```

### Phase 2 : Analyse Comparative (10 min)

💡 **Comparez simplement :**
- Quelle réponse est la plus utile cliniquement ?
- Laquelle pourriez-vous vraiment utiliser avec un patient ?
- Notez 1-2 différences majeures entre les réponses

### Ma découverte principale :
```markdown
[Notez ici votre apprentissage clé sur l'impact du prompting]
```

---

## 🔬 Exercice 1.2 : Plan Opératoire Structuré (25 min)

### Mission : Générer documentation chirurgicale pour Cas B (DIEP)

### Étape 1 : Prompt Basique (5 min)
```
Plan pour reconstruction mammaire DIEP ?
```
→ Copiez la réponse

### Étape 2 : Prompt Amélioré (10 min)
```
Génère un plan opératoire pour reconstruction DIEP.
Patiente 45 ans, mastectomie droite, 2 perforantes identifiées.
```
→ Copiez la réponse

### Étape 3 : Prompt Expert (10 min)
```
Tu es chirurgien plasticien expert en microchirurgie. 
Cas : Femme 45 ans, mastectomie droite il y a 8 mois.
IMC 28, scanner : 2 perforantes dominantes droites.

Génère le plan opératoire COMPLET incluant :

1. PRÉOPÉRATOIRE
   - Examens requis et justification
   - Préparation spécifique patient
   - Matériel microchirurgie nécessaire

2. TECHNIQUE CHIRURGICALE
   - Installation patient
   - Repérage perforantes (doppler)
   - Dissection lambeau (étapes)
   - Anastomoses (ordre, technique)
   - Modelage et symétrisation

3. SURVEILLANCE POST-OP
   - Protocole monitoring J0-J7
   - Critères de reprise urgente
   - Anticoagulation prophylactique

4. COMPLICATIONS SPÉCIFIQUES
   - Signes d'alerte thrombose
   - CAT si souffrance lambeau
   - Taux succès attendu

Format pour compte-rendu opératoire hospitalier.
```
→ Copiez la réponse

### Grille d'Évaluation

| CRITÈRE | Basique | Amélioré | Expert |
|---------|---------|----------|--------|
| Exhaustivité technique | /5 | /5 | /5 |
| Sécurité patient | /5 | /5 | /5 |
| Applicabilité pratique | /5 | /5 | /5 |
| Conformité médico-légale | /5 | /5 | /5 |
| **TOTAL** | /20 | /20 | /20 |

---

## 🖼️ Exercice 1.3 : Analyse Photos Cliniques (20 min)

### Mission : Tester ChatGPT Vision sur cas plastie

### Test 1 : Analyse Pré-opératoire Rhinoplastie (7 min)
- Téléchargez ou utilisez une photo profil rhinoplastie (anonymisée)
- Uploadez dans ChatGPT
- Prompt :
```
Analyse cette photo de profil pré-opératoire.
Mesure et identifie :
- Angle naso-frontal (norme 115-130°)
- Angle naso-labial (norme H:90-95°, F:95-110°)
- Projection pointe (méthode Goode)
- Hauteur bosse en mm
- Type de peau (fine/moyenne/épaisse)
Propose plan de réduction adapté.
```

### Test 2 : Évaluation Post-op Lifting (7 min)
- Photos avant/après lifting centro-facial
- Prompt :
```
Compare ces photos avant/après lifting centro-facial.
Évalue :
- Amélioration sillon naso-génien (échelle 1-5)
- Correction bajoues (%)
- Naturalité résultat (score /10)
- Symétrie faciale
- Zones nécessitant retouche éventuelle
```

### Test 3 : Documentation Reconstruction (6 min)
- Photo résultat DIEP à J30
- Prompt :
```
Analyse ce résultat de reconstruction DIEP à 1 mois.
Commente :
- Volume comparé au sein controlatéral
- Position complexe aréolo-mamelonnaire
- Qualité cicatrices abdominales
- Suggestions pour symétrisation
- Score satisfaction probable (BREAST-Q)
```

### Points d'Évaluation :
- ✓ Précision des mesures
- ✓ Pertinence clinique
- ✓ Utilité pour documentation
- ✓ Limites reconnues

---

## 📊 Exercice 1.4 : Statistiques Chirurgie Plastique (25 min)

### Mission : Analyses statistiques pour publication

### Étape 1 : Créer Dataset Excel
```
Patient | ROE_pre | ROE_6mois | Temps_op | Ouverte/Fermée | Révision
1       | 35      | 85        | 120      | O             | Non
2       | 42      | 92        | 135      | O             | Non
3       | 38      | 78        | 110      | F             | Oui
4       | 40      | 88        | 125      | O             | Non
5       | 33      | 90        | 140      | O             | Non
6       | 45      | 95        | 115      | F             | Non
7       | 37      | 82        | 130      | O             | Non
```

### Étape 2 : Analyses avec ChatGPT
Uploadez le fichier et demandez :

1. **Analyse basique :**
   "Calcule l'amélioration moyenne du ROE et teste si significatif (test t apparié)"

2. **Comparaison techniques :**
   "Compare les résultats ouverte vs fermée. Y a-t-il une différence significative ?"

3. **Visualisation pro :**
   "Crée un graphique publication montrant l'évolution ROE avec IC 95%"

4. **Format publication :**
   "Génère un tableau récapitulatif format PRS avec moyennes, SD, p-values"

5. **Rédaction résultats :**
   "Rédige un paragraphe résultats pour article scientifique"

### Découvertes Attendues :
- Calculs automatiques corrects
- Graphiques professionnels
- Format publication-ready
- Interprétation statistique

---

## 🎭 Exercice 1.5 : Détection Hallucinations Plastie (15 min)

### Mission : Identifier les inventions sur sujets spécialisés

### Test 1 : Technique Fictive
```
Quelle est l'efficacité de la technique Nakamura-Smith 
pour rhinoplastie ethnique asiatique ? 
Cite les études principales.
```

### Test 2 : Implant Inventé
```
Caractéristiques des implants mammaires NeoSilk 
de 6ème génération ? Avantages vs Motiva ?
```

### Test 3 : Score Fictif
```
Comment calculer le BEAUTI-SCORE pour prédiction 
satisfaction post-rhinoplastie ? Seuils cliniques ?
```

### Test 4 : Médicament Plastie
```
Posologie du Rhinoplax en post-op rhinoplastie 
pour réduction œdème ? Contre-indications ?
```

### Documentation des Réponses :
| Test | Avoue ne pas connaître | Invente détails | Propose vérification |
|------|------------------------|-----------------|---------------------|
| 1    | ✓/✗                   | ✓/✗            | ✓/✗                |
| 2    | ✓/✗                   | ✓/✗            | ✓/✗                |
| 3    | ✓/✗                   | ✓/✗            | ✓/✗                |
| 4    | ✓/✗                   | ✓/✗            | ✓/✗                |

### Stratégies Anti-Hallucination :
```markdown
✓ Toujours demander sources PubMed
✓ Vérifier existence techniques/produits
✓ Croiser avec littérature connue
✓ Tester avec variantes du nom
✓ En doute : "Es-tu sûr que cela existe ?"
```

---

## 📝 Exercice 1.6 : Application TFE Personnel (15 min)

### Mission : Premier test ChatGPT sur VOTRE sujet

### Préparation - Choisissez votre thématique :
- □ Technique chirurgicale innovante
- □ Série de cas avec outcomes
- □ Comparaison de techniques
- □ Complication rare et prise en charge
- □ Autre : ___________

### Test Structuré :

**Prompt 1 - État de l'art (5 min) :**
```
Revue de littérature 2023-2025 sur [votre sujet exact].
Focus sur : innovations techniques, taux de satisfaction patients,
complications rapportées, gaps dans la littérature.
Structure pour introduction article PRS.
```

**Prompt 2 - Méthodologie (5 min) :**
```
Je prépare une étude sur [votre sujet] avec [n] patients.
Propose une méthodologie robuste incluant :
- Critères inclusion/exclusion
- Outcomes à mesurer (PROM validés)
- Analyses statistiques nécessaires
- Calcul puissance statistique
```

**Prompt 3 - Impact et Innovation (5 min) :**
```
Mon étude montre [vos résultats principaux].
Aide-moi à :
1. Identifier l'angle innovant pour publication
2. Contextualiser vs littérature existante
3. Formuler les implications cliniques
4. Proposer titre accrocheur pour PRS/ASJ
```

### Documentation Finale
```markdown
## Bilan Application TFE

### Forces ChatGPT pour mon sujet :
- 
- 
- 

### Limites identifiées :
- 
- 
- 

### Prochaines étapes avec IA :
- 
- 
```

---

## 🏆 Challenge Final : Votre Prompt Parfait Plastie

### Mission : Créer LE prompt optimal pour votre pratique quotidienne

### Template Consultation Esthétique :
```
Tu es chirurgien esthétique spécialisé en [votre spécialité].
Patient(e) [âge] ans consulte pour [motif].
Caractéristiques : [morphologie détaillée].
Attentes : [demandes spécifiques].

Génère consultation complète :
1. Analyse morphologique objective
2. Options techniques hiérarchisées avec pour/contre
3. Simulation résultats réalistes
4. Complications spécifiques et fréquences
5. Parcours patient J-30 à J+365
6. Devis détaillé avec options

Ton : professionnel mais accessible.
Format : utilisable pour consentement éclairé.
```

### Template Documentation Opératoire :
```
Génère compte-rendu opératoire détaillé.
Intervention : [type exact]
Patient : [âge, IMC, comorbidités]
Technique : [détails spécifiques]

Inclure obligatoirement :
- Antibioprophylaxie et prémédication
- Installation et asepsie
- Temps opératoires chronologiques
- Incidents éventuels et CAT
- Fermeture par plans
- Pansement et soins post-op immédiats
- Prescriptions sortie

Format hospitalier standard avec codes CCAM.
```

### Critères du Prompt Parfait :
- ✓ Spécifique à votre pratique
- ✓ Réutilisable quotidiennement
- ✓ Format de sortie clair
- ✓ Gain de temps évident
- ✓ Conforme médico-légal

---

## 📊 Auto-Évaluation Finale

### Checklist de Maîtrise ChatGPT Plastie
```markdown
□ Je structure des prompts efficaces pour cas plastie
□ J'analyse des photos cliniques avec ChatGPT
□ Je génère des plans opératoires complets
□ Je détecte les hallucinations spécialisées
□ J'utilise Code Interpreter pour stats médicales
□ J'ai identifié 3 applications pour ma pratique
□ J'ai créé mon prompt personnalisé réutilisable
□ Je connais les limites pour usage médical

Score : ___/8 (Objectif : minimum 6/8)
```

### Temps Total Exercices : 2h30
### Charge Cognitive : 4/10 ✅

---

## 📌 À Retenir

1. **La structure du prompt détermine la qualité médicale**
2. **Toujours vérifier les techniques/produits cités**
3. **ChatGPT excelle en documentation et analyse**
4. **Photos cliniques = gain de temps consultation**
5. **Sauvegarder vos prompts qui fonctionnent**

## 🚀 Pour la Session 2

Préparez 2-3 cas complexes où ChatGPT vous a déçu.
Nous testerons Claude, Gemini et Perplexity pour comparaison.

**#MaîtriserChatGPTPlastie**