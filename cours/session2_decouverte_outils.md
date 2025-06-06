⬅️ **[Retour Session 1](./session1_fondements_decouverte.md)**

# SESSION 2 : Découverte Individuelle des Outils IA
## *Durée : 3h30 | Format : Théorie fondamentale + Maîtrise individuelle + Comparaison stratégique*
### **🎯 Objectif : Comprendre les LLM puis découvrir les 3 autres outils individuellement avant de comparer**

---

### **🎯 OUVERTURE : Retour sur ChatGPT (10 min)**

#### **Partage d'Expériences**
- Tour de table rapide : meilleure découverte avec ChatGPT
- Hallucinations les plus surprenantes
- Application la plus utile trouvée
- Questions émergentes

#### **Objectif Session 2**
```
Aujourd'hui : Maîtrise individuelle de Claude, Gemini et Perplexity
→ 45 minutes par outil pour vraie compréhension
→ Comparaison uniquement après maîtrise
→ Focus TFE : Quel outil pour quelle partie de publication ?
```

---

## 🧠 COMPRENDRE LES LLM : THÉORIE FONDAMENTALE (20 min)

### Comment fonctionne un LLM ?

**Analogie médicale** : Imaginez un LLM comme un "super-résident" qui a lu tous les textes médicaux existants, mais qui n'a jamais examiné un patient.

#### 1. **Architecture neuronale**
- **Réseaux de neurones** : Similaires aux neurones biologiques, mais mathématiques
- **Couches profondes** : Comme les couches corticales, chaque niveau extrait des caractéristiques plus complexes
- **Attention mechanism** : Comme l'attention sélective humaine - le modèle "focus" sur les éléments pertinents du contexte

#### 2. **Représentation vectorielle**
```
Mot "pénicilline" → [0.2, -0.5, 0.8, ...] (vecteur à ~1500 dimensions)
```
- Chaque concept médical devient un point dans un espace multidimensionnel
- Concepts similaires = vecteurs proches (pénicilline ≈ amoxicilline)
- Relations préservées : "pénicilline - antibiotique + antifongique ≈ fluconazole"

#### 3. **Base de données vectorielle**
**Analogie** : Comme une bibliothèque où les livres sont rangés par similarité conceptuelle plutôt qu'alphabétiquement
- Recherche par proximité sémantique
- Retrouve les informations contextuellement pertinentes
- Plus rapide que la recherche textuelle classique

### Pourquoi les hallucinations ?

#### **Mécanisme des hallucinations**
1. **Interpolation statistique** : Le modèle "invente" en combinant des patterns connus
   - Comme un étudiant qui improvise une réponse plausible mais fausse
   
2. **Absence de vérité fondamentale** : 
   - Pas de connexion aux données factuelles en temps réel
   - Génère du texte "probable" pas nécessairement "vrai"

3. **Biais d'entraînement** :
   - Si 90% des textes disent X, le modèle favorisera X même si incorrect

#### **Types d'hallucinations en médecine**
- **Dosages inventés** : "Amoxicilline 850mg" (dose non-standard)
- **Études fictives** : Citations d'articles qui n'existent pas
- **Statistiques fabriquées** : "73.2% des patients..." sans source
- **Protocoles mélangés** : Fusion de guidelines différentes

### Implications pratiques

#### **Forces du LLM** ✅
- **Pattern recognition** : Excellent pour identifier des motifs complexes
- **Synthèse** : Combine efficacement des informations disparates
- **Reformulation** : Adapte le langage au contexte
- **Rapidité** : Traite l'information 1000x plus vite qu'un humain

#### **Limitations critiques** ❌
- **Pas de raisonnement causal** : Corrélation ≠ causation
- **Pas de jugement clinique** : Ne peut évaluer un patient réel
- **Pas de mise à jour continue** : Connaissance figée à la date d'entraînement
- **Pas de responsabilité** : Ne peut être tenu responsable médicalement

### Utilisation optimale en médecine

#### **Modèle mental correct**
```
LLM = Assistant de rédaction + Bibliothécaire + Traducteur
LLM ≠ Médecin + Oracle + Source de vérité
```

#### **Workflow sécurisé**
1. **Input** : Question précise avec contexte
2. **Processing** : LLM génère une réponse basée sur patterns
3. **Validation** : TOUJOURS vérifier avec sources primaires
4. **Application** : Utiliser comme point de départ, pas comme conclusion

### Points clés à retenir

1. **Probabiliste, pas déterministe** : Chaque réponse est un "lancer de dés pondéré"
2. **Contextuel** : La qualité dépend énormément du prompt
3. **Amplificateur** : Amplifie votre expertise, ne la remplace pas
4. **Outil** : Comme un stéthoscope - utile mais nécessite expertise pour interpréter

> 💡 **Règle d'or** : Un LLM est un excellent assistant mais un terrible médecin. Utilisez-le pour augmenter vos capacités, jamais pour les remplacer.

---

## 🤔 MODES DE PENSÉE ET FONCTIONNALITÉS AVANCÉES (15 min)

### Les différents "modes cognitifs" des LLM

**Analogie médicale** : Comme un médecin peut adopter différentes approches cognitives (diagnostic différentiel, raisonnement physiopathologique, thinking aloud), les LLM modernes ont différents modes de traitement.

### 1. **Mode Thinking (Réflexion approfondie)**

#### Comment ça fonctionne ?
```
Input → [Phase de réflexion interne] → Réponse structurée
         ↓
    - Analyse du problème
    - Exploration des angles
    - Vérification cohérence
    - Structuration réponse
```

#### Analogie clinique
- **Sans thinking** : Comme un diagnostic rapide aux urgences
- **Avec thinking** : Comme une RCP multidisciplinaire où on explore toutes les options

#### Cas d'usage médical
```markdown
❌ Sans thinking : "Prescrivez amoxicilline 1g x3/j"
✅ Avec thinking : "Considérant l'allergie pénicilline, les alternatives sont..."
                   → Analyse contrindications
                   → Évalue alternatives
                   → Propose protocole adapté
```

### 2. **Chain of Thought (Raisonnement étape par étape)**

#### Mécanisme
- Force le modèle à expliciter chaque étape de raisonnement
- Réduit les erreurs de "saut logique"
- Similaire au raisonnement clinique structuré

#### Exemple médical
```
Prompt : "Patient 65 ans, dyspnée progressive + œdèmes MI. Raisonnez étape par étape."

Réponse avec CoT :
1. Symptômes cardinaux → suggèrent insuffisance cardiaque
2. Âge + présentation → IC probable d'origine ischémique ou HTA
3. Examens prioritaires → ECG, RX thorax, BNP, écho
4. Traitement initial → diurétiques, position, O2 si besoin
```

### 3. **Modes de personnalité et expertise**

#### Principe : Activer différents "profils cognitifs"

| Mode | Utilisation | Exemple prompt |
|------|-------------|----------------|
| **Expert** | Contenu technique | "En tant que cardiologue interventionnel..." |
| **Pédagogue** | Explication patient | "Expliquez simplement l'angioplastie..." |
| **Critique** | Revue article | "Analysez critiquement cette étude..." |
| **Synthétique** | Résumés | "Résumez en 5 points clés..." |

### 4. **Temperature et créativité**

#### Concept technique
- **Temperature = 0** : Réponses déterministes, toujours les mêmes
- **Temperature = 1** : Réponses variées, plus créatives
- **Temperature = 2** : Réponses imprévisibles, potentiellement incohérentes

#### Application médicale
```
🧊 T=0 : Protocoles, guidelines, dosages
🌡️ T=0.7 : Rédaction articles, cas cliniques
🔥 T=1+ : Brainstorming, hypothèses recherche
```

### 5. **Mémoire et contexte**

#### Fenêtre de contexte (juin 2025)
- **GPT-4.1** : 1,000,000 tokens (~750,000 mots) - Sorti en avril 2025
- **GPT-4o** : 128,000 tokens (~96,000 mots) - Modèle précédent
- **Claude 4 Opus** : 200,000 tokens (~150,000 mots) - Sorti en mai 2025
- **Claude 4 Sonnet** : 200,000 tokens (~150,000 mots) - Sorti en mai 2025
- **Gemini 2.5 Pro** : 1,000,000 tokens (~750,000 mots) - 2M tokens bientôt

#### Implications pratiques
```
GPT-4o : "Analysez ces 20-30 pages de dossier médical"
Claude 4 : "Comparez ces 3 articles complets de PRS (40-50 pages)"
GPT-4.1/Gemini 2.5 : "Analysez cette thèse complète de 150 pages"
```

### 6. **Multimodalité**

#### Capacités actuelles
- **Texte → Texte** : Classique
- **Image → Texte** : Analyse radiographies, photos cliniques
- **Texte → Image** : Génération schémas, illustrations
- **Documents → Analyse** : PDF, tableaux, graphiques

#### Workflow multimodal type
```
1. Upload photo lésion cutanée
2. "Décrivez selon critères ABCDE"
3. Génère rapport structuré
4. Suggère diagnostic différentiel
```

### 7. **Prompting avancé : techniques essentielles**

#### Few-shot learning
```markdown
"Voici 3 exemples de comptes-rendus opératoires bien formatés :
[Exemple 1]
[Exemple 2]
[Exemple 3]
Maintenant, rédigez pour cette intervention :"
```

#### Role prompting
```markdown
"Vous êtes un anatomopathologiste senior analysant cette biopsie.
Considérez particulièrement les critères de malignité..."
```

#### Constraint prompting
```markdown
"Générez un abstract de 250 mots MAXIMUM incluant OBLIGATOIREMENT :
- Background (50 mots)
- Methods (75 mots)
- Results (75 mots)
- Conclusion (50 mots)"
```

### Points critiques pour la pratique médicale

#### ✅ **Quand utiliser thinking/CoT**
- Cas complexes multi-systèmes
- Diagnostic différentiel large
- Calculs de doses en situation complexe
- Analyse d'interactions médicamenteuses

#### ❌ **Quand éviter**
- Urgences vitales (trop lent)
- Questions simples directes
- Protocoles standardisés établis

### Exercice pratique : Comparer les modes

```markdown
Même cas clinique, 3 approches :

1. **Standard** : "Homme 55 ans, douleur thoracique. Diagnostic ?"
2. **Avec CoT** : "...raisonnez étape par étape"
3. **Avec thinking** : "...analysez en profondeur toutes les possibilités"

Observer :
- Profondeur d'analyse
- Pertinence clinique
- Temps de réponse
- Exhaustivité
```

> 🔬 **Concept clé** : Ces modes ne rendent pas l'IA "plus intelligente" - ils structurent mieux l'utilisation de ses capacités existantes, comme un protocole structure votre raisonnement clinique.

---

### **🧠 BLOC 1 : Claude - Le Précis et l'Éthique (35 min)**

#### **Introduction à Claude (10 min)**

**Identité Claude :**
- Créé par Anthropic
- Focus : Sécurité et précision
- Constitutional AI : Éthique intégrée
- Fenêtre : 200K tokens (≈150K mots!)

**Forces uniques :**
- 📝 Rédaction longue et structurée
- 🎯 Précision et nuance
- 🏛️ Raisonnement éthique
- 📊 Artifacts visuels
- 🧠 Thinking mode transparent

#### **🔄 EXERCICE 2.1 : Découverte Claude (15 min)**

**Test 1 : Rédaction compte-rendu opératoire**
```
"Je dois rédiger le compte-rendu opératoire d'une reconstruction 
mammaire par DIEP. Patiente 45 ans, mastectomie droite.
2 perforantes identifiées. Temps op : 6h30. 
Structure selon standards hospitaliers avec tous les détails techniques."
```

**Test 2 : Analyse article PRS**
- Uploader un article récent de PRS sur chirurgie reconstructrice
- Prompt : "Analyse critique pour publication similaire. Méthodologie, résultats BREAST-Q, limites."

**Points d'observation :**
- Structure et organisation
- Profondeur d'analyse

#### **🤔 EXERCICE 2.2 : Claude Thinking Mode (10 min)**

**Cas éthique chirurgie plastique :**
```
"Patiente 18 ans demande rhinoplastie pour 'nez ethnique' qu'elle 
veut 'européanisé'. Parents poussent pour l'opération.
Signes possibles de dysmorphophobie. Instagram influence ++.

Utilise ton mode thinking pour explorer les dimensions éthiques, 
psychologiques et professionnelles."
```

**Comparer :**
- Réponse standard vs thinking mode
- Nuances apportées
- Temps de réflexion

#### **📝 EXERCICE 2.3 : TFE avec Claude (10 min)**

**Application publication médicale :**
```
"Voici la section Méthodes de mon TFE sur [rhinoplastie/DIEP/fente].
Restructure-la selon les standards de Plastic and Reconstructive Surgery.
Inclus : flowchart patients, technique détaillée, mesures outcomes (ROE/BREAST-Q)."
```

**Évaluation Claude :**
```
CRITÈRE                | Score /5 | Notes
-----------------------|----------|-------
Précision restructuration |      |
Respect des guidelines    |      |
Clarté améliorée         |      |
Suggestions pertinentes   |      |
```

---

### **🌍 BLOC 2 : Gemini - L'Intégré Google (35 min)**

#### **Introduction à Gemini (10 min)**

**Identité Gemini :**
- Créé par Google DeepMind
- Intégration écosystème Google
- Multimodal natif
- Version : 1.5 Pro

**Forces uniques :**
- 🔍 Recherche Google native
- 📚 Google Scholar intégré
- 📊 Google Workspace
- 🌐 Information temps réel
- 👥 Collaboration native

#### **🔄 EXERCICE 2.4 : Découverte Gemini (15 min)**

**Test 1 : Recherche chirurgie plastique actualisée**
```
"Recherche les dernières études (2024-2025) sur la rhinoplastie 
de préservation vs structurelle. Taux satisfaction, complications, 
révisions. Cite sources PubMed et PRS."
```

**Test 2 : Intégration Workspace**
- Créer un Google Doc
- Utiliser Gemini dedans pour générer contenu
- Tester la collaboration

**Test 3 : Analyse avant/après multimodale**
- Uploader photos pré/post-op + compte-rendu
- "Analyse cohérence entre résultats visuels et description opératoire"
- Évaluer pertinence clinique

**Points d'observation :**
- Qualité des sources trouvées
- Actualité des informations
- Facilité d'intégration

#### **📊 EXERCICE 2.5 : Gemini pour Données (10 min)**

**Avec Google Sheets :**
1. Importer dataset médical
2. Utiliser Gemini pour :
   - Analyser tendances
   - Créer visualisations
   - Générer insights

**Prompt exemple :**
```
"Analyse ces scores FACE-Q pré/post lifting facial (n=50). 
Identifie facteurs prédictifs satisfaction. Crée graphiques 
pour publication avec p-values et intervalles confiance."
```

#### **📝 EXERCICE 2.6 : TFE avec Gemini (10 min)**

**Recherche biblio avancée :**
```
"Mon TFE porte sur [lipostructure mammaire/rhinoplastie ethnique/DIEP]. 
Trouve via Google Scholar les 10 articles PRS/ASJ les plus cités 2023-2025.
Focus : techniques, complications, patient-reported outcomes."
```

**Évaluation Gemini :**
```
CRITÈRE                | Score /5 | Notes
-----------------------|----------|-------
Pertinence sources      |         |
Actualité information   |         |
Qualité synthèse        |         |
Intégration Google      |         |
```

---

### **🔍 BLOC 3 : Perplexity - L'Automatiseur de Recherche (35 min)**

#### **Introduction à Perplexity (10 min)**

**Identité Perplexity :**
- Focus : Recherche et automatisation
- Sources toujours citées
- Perplexity Labs : Apps auto-générées
- Deep Research : Rapports exhaustifs

**Forces uniques :**
- 🔬 Recherche approfondie automatique
- 📑 Citations systématiques
- 📊 Dashboards générés
- 🤖 Automatisation poussée
- 📈 Rapports professionnels

#### **🔄 EXERCICE 2.7 : Découverte Perplexity (15 min)**

**Test 1 : Recherche simple avec sources**
```
"Quelle est l'incidence des complications majeures 
en Brazilian Butt Lift selon les études récentes 2024 ?"
```

**Test 2 : Deep Research**
```
"Utilise Deep Research pour rapport exhaustif sur l'évolution 
de la lipostructure mammaire 2020-2025 : taux résorption, 
imagerie, oncological safety."
```

**Test 3 : Comparaison avec ChatGPT**
- Même question sur les 2 plateformes
- Comparer sources et profondeur

**Points d'observation :**
- Nombre et qualité des sources
- Structure automatique du rapport
- Fiabilité des informations

#### **🚀 EXERCICE 2.8 : Perplexity Labs (10 min)**

**Création dashboard chirurgie :**
```
"Crée dashboard interactif pour suivre mes résultats 
chirurgicaux : taux complications par procédure, scores 
patient-reported outcomes (FACE-Q/BREAST-Q), taux révision, photos timeline."
```

**Évaluation :**
- Temps de création
- Fonctionnalités générées
- Utilisabilité pratique

#### **📝 EXERCICE 2.9 : TFE avec Perplexity (10 min)**

**Revue littérature automatisée :**
```
"Génère revue systématique sur [technique SMAS lifting/préservation 
rhinoplastie/DIEP vs TMG] incluant :
- Stratégie recherche PubMed/Embase
- Tableau comparatif outcomes et complications
- Analyse niveaux evidence
- Gaps pour mon TFE"
```

**Évaluation Perplexity :**
```
CRITÈRE                | Score /5 | Notes
-----------------------|----------|-------
Exhaustivité recherche  |         |
Qualité automatisation  |         |
Citations précises      |         |
Gain de temps          |         |
```

---

### **🎯 BLOC 4 : Comparaison Stratégique et Sélection (40 min)**

#### **🔄 EXERCICE 2.10 : Le Grand Comparatif (20 min)**

**Mission :** Même tâche sur les 4 outils

**Tâche TFE standardisée :**
```
"Transforme ce paragraphe de ma discussion TFE [rhinoplastie/reconstruction] 
en version publiable pour PRS/ASJ. Améliore style, ajoute références 
récentes, intègre patient-reported outcomes.

[Insérer même paragraphe de 200 mots sur technique/résultats]"
```

**Grille comparative complète :**
```
CRITÈRE           | ChatGPT | Claude | Gemini | Perplexity
------------------|---------|--------|--------|------------
Qualité rédaction | /5      | /5     | /5     | /5
Structure         | /5      | /5     | /5     | /5
Impact amélioré   | /5      | /5     | /5     | /5
Temps nécessaire  | min     | min    | min    | min
Facilité usage    | /5      | /5     | /5     | /5
TOTAL            | /20     | /20    | /20    | /20

GAGNANT POUR CETTE TÂCHE : _____________
```

#### **📊 Matrice de Décision Personnelle (15 min)**

**Créer VOTRE matrice :**

```
TÂCHE CHIRURGIE PLASTIQUE    | OUTIL OPTIMAL | POURQUOI ?
----------------------------|---------------|------------
Analyse photos pré/post    |               |
Compte-rendu opératoire    |               |
Recherche PRS/ASJ          |               |
Analyse PROM (FACE-Q)      |               |
Consultation esthétique    |               |
Plan reconstruction        |               |
Analyse éthique mineure    |               |
Création schémas op       |               |
TFE → Introduction PRS     |               |
TFE → Technique op        |               |
TFE → Résultats visuels   |               |
TFE → Complications       |               |
```

#### **🔄 EXERCICE 2.11 : Plan Personnel TFE-Publication (10 min)**

**Définir votre pipeline optimal :**

```
MON PIPELINE TFE → PUBLICATION

1. Revue littérature : _____________ (outil)
   Raison : _______________________

2. Rédaction technique op : _________ (outil)
   Raison : _______________________

3. Analyse photos/résultats : ____________ (outil)
   Raison : _______________________

4. Statistiques patient-reported outcomes : ______________ (outil)
   Raison : _______________________

5. Mise en forme PRS : ___________ (outil)
   Raison : _______________________

6. Vérification éthique : ___________ (outil)
   Raison : _______________________

```

#### **🧪 EXERCICE 2.12 : Application Théorie LLM (10 min)**

**Test de compréhension des concepts théoriques :**

1. **Hallucination Detection Challenge**
   ```
   Examinez cette réponse IA sur la rhinoplastie :
   "La technique de préservation utilise toujours l'approche 
   endonasale avec un taux de révision de 3.7% selon l'étude 
   multicentriques de Chen et al. 2024 dans PRS."
   
   Identifiez les éléments suspects : ________________
   ```

2. **Mode Selection (basé sur théorie vue)**
   - Cas complexe de reconstruction mammaire post-radiothérapie → Mode : _______ (💡 Thinking mode)
   - Rédaction consentement patient simple → Mode : _______ (💡 Standard)
   - Génération hypothèses nouvelles techniques → Temperature : _______ (💡 1.0+)

3. **Prompt Engineering avec techniques vues**
   Améliorez ce prompt en utilisant Role/Constraint/Few-shot :
   ```
   AVANT : "Aide-moi avec mon article"
   APRÈS : _________________________________
   ```
   
4. **Application Multimodalité**
   - Photo pré/post-op à analyser → Quel outil optimal ? _______
   - Pourquoi selon la théorie vue ? _______

---

### 📊 **RÉPARTITION DU TEMPS - SESSION 2 (3h30)**

| Section | Durée | Cumul |
|---------|-------|-------|
| Ouverture : Retour ChatGPT | 10 min | 10 min |
| Théorie : Comprendre les LLM | 20 min | 30 min |
| Théorie : Modes de pensée | 15 min | 45 min |
| BLOC 1 : Claude | 35 min | 1h20 |
| BLOC 2 : Gemini | 35 min | 1h55 |
| *Pause* | 10 min | 2h05 |
| BLOC 3 : Perplexity | 35 min | 2h40 |
| BLOC 4 : Comparaison | 40 min | 3h20 |
| Clôture & Questions | 10 min | 3h30 |

---

### 📊 **POINTS CLÉS SESSION 2**

✅ **Acquis :**
- Maîtrise individuelle des 4 outils
- Comparaison basée sur l'expérience
- Matrice de décision personnelle
- Pipeline TFE-Publication défini

❌ **Évités :**
- Confusion par comparaison prématurée
- Jugements superficiels

⏭️ **Prochaine étape :**
- Session 3 : Features avancées et workflows complexes
- Focus : Publication-ready output

💡 **Remember :**
> "Chaque outil a son génie propre. L'expertise est de choisir 
> le bon outil pour la bonne tâche au bon moment."

---

*Session conçue pour un apprentissage progressif optimal*
*Prochaine session : [Date] - Maîtrise Avancée & Workflows Publication*

---

➡️ **[Continuer vers Session 3 : Workflows Avancés](./session3_workflows_publication.md)**