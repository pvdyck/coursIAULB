# SESSION 1 : Fondements IA & Maîtrise Complète de ChatGPT
## *Durée : 3h | Format : Théorie simplifiée + Pratique intensive sur ChatGPT*
### **🎯 Objectif : Maîtriser UN outil avant d'en découvrir plusieurs**

---

### 🛡️ **PROTOCOLE SÉCURITÉ D'ABORD (5 min)**

#### **Avant d'utiliser TOUT outil IA :**

**📋 Checklist de Sécurité des Données Patient**
```
□ Vérifier la politique de confidentialité de l'outil
□ Anonymiser TOUTES les données :
   - Noms → Patient A, B, C
   - Dates → Jour J, J+1, J+2
   - Lieux → Ville X, Hôpital Y
   - Numéros ID → ID001, ID002
□ Tester avec données fictives d'abord
□ Documenter l'usage IA dans le dossier patient
□ JAMAIS d'images avec informations visibles
```

---

### **🧠 BLOC 1 : Fondements IA Simplifiés (25 min)**

#### **L'IA comme Assistant Médical Augmenté (10 min)**

**Analogie médicale simple :**
```
L'IA générative = Résident ultra-expérimenté qui :
✅ A lu toute la littérature médicale (jusqu'à sa date limite)
✅ Répond instantanément à vos questions
⚠️ Peut parfois inventer des informations (hallucinations)
⚠️ N'a pas d'expérience clinique réelle
⚠️ Ne remplace JAMAIS votre jugement médical
```

#### **Concepts Essentiels (15 min)**

**1. Les Large Language Models (LLMs)**
- Prédisent le mot suivant basé sur des milliards de textes
- Comme un "auto-complete" hyper sophistiqué
- ChatGPT = Un des LLMs les plus avancés

**2. Les Hallucinations**
- L'IA peut inventer des faits qui semblent vrais
- **Exemple :** Citer une étude qui n'existe pas
- **Règle d'or :** Toujours vérifier les informations critiques

**3. L'Art du Prompting**
- La qualité de votre question détermine la qualité de la réponse
- Structure claire = Réponse claire
- Nous allons maîtriser cela aujourd'hui

---

### **🤖 BLOC 2 : ChatGPT - Maîtrise Complète (90 min)**

#### **🎯 Introduction à ChatGPT (15 min)**

**Qu'est-ce que ChatGPT ?**
- Modèle : GPT-4o (le plus avancé)
- Capacités : Texte, images, code, analyse
- Prix : Gratuit (3.5) ou 20€/mois (Plus)

**Forces spécifiques pour la médecine :**
- 🎨 Créativité et brainstorming
- 📸 Analyse d'images médicales
- 📊 Statistiques et code
- 💬 Communication patient
- 🔍 Recherche web (version Plus)

#### **🔄 EXERCICE 1.1 : Premiers Pas avec ChatGPT (20 min)**

**Phase 1 : Interaction basique (10 min)**
Testez ces prompts progressifs :

```
Prompt 1 (trop simple) :
"Hypertension ?"

Prompt 2 (mieux structuré) :
"Explique l'hypertension artérielle pour un patient"

Prompt 3 (optimal) :
"Agis comme un cardiologue pédagogue. Explique l'hypertension 
artérielle à un patient de 60 ans nouvellement diagnostiqué. 
Utilise des analogies simples et structure ta réponse en :
1. Qu'est-ce que c'est ?
2. Pourquoi c'est important ?
3. Que peut-on faire ?"
```

**Phase 2 : Analyse des différences (10 min)**
- Comparer la qualité des 3 réponses
- Identifier l'impact de la structure
- Noter les éléments qui améliorent la réponse

#### **📋 EXERCICE 1.2 : Optimisation des Prompts Médicaux (25 min)**

**Mission :** Transformer un cas clinique en diagnostic différentiel structuré

**Cas clinique :**
```
Femme 45 ans, fatigue progressive 3 mois, palpitations occasionnelles,
perte de poids 5 kg sans régime, nervosité, troubles du sommeil.
ATCD : RAS. Pas de traitement.
```

**Progression des prompts :**

**Étape 1 - Prompt basique (5 min) :**
```
"Quel est le diagnostic pour cette patiente ?"
```

**Étape 2 - Prompt amélioré (10 min) :**
```
"Analyse ce cas clinique et donne les diagnostics possibles :
[Insérer le cas]"
```

**Étape 3 - Prompt expert (10 min) :**
```
"Tu es un interniste expérimenté. Analyse ce cas clinique :
[Insérer le cas]

Fournis :
1. Top 5 diagnostics différentiels par ordre de probabilité
2. Justification clinique pour chaque diagnostic
3. Examens complémentaires essentiels
4. Red flags à ne pas manquer
5. Prise en charge immédiate

Format ta réponse de manière structurée et claire."
```

**Grille d'évaluation :**
```
CRITÈRE               | Basique | Amélioré | Expert
----------------------|---------|----------|--------
Exhaustivité DDx      | /5      | /5       | /5
Structure réponse     | /5      | /5       | /5
Pertinence clinique   | /5      | /5       | /5
Utilité pratique      | /5      | /5       | /5
TOTAL                | /20     | /20      | /20
```

#### **🖼️ EXERCICE 1.3 : Analyse d'Images Médicales (15 min)**

**Mission :** Découvrir les capacités visuelles de ChatGPT

**Test 1 : ECG (5 min)**
- Uploader un ECG anonymisé
- Prompt : "Analyse cet ECG et identifie les anomalies"
- Comparer avec votre interprétation

**Test 2 : Radiologie (5 min)**
- Uploader une radio thorax
- Prompt : "Décris les findings sur cette radiographie thoracique"
- Évaluer la précision

**Test 3 : Dermatologie (5 min)**
- Photo de lésion cutanée (anonymisée)
- Prompt : "Quels sont les diagnostics différentiels pour cette lésion ?"
- Vérifier la pertinence

**Points d'attention :**
- ChatGPT peut identifier des patterns évidents
- Ne remplace pas l'expertise radiologique
- Utile pour l'enseignement et la discussion

#### **📊 EXERCICE 1.4 : Code Interpreter pour Statistiques (15 min)**

**Mission :** Utiliser ChatGPT pour analyses statistiques médicales

**Dataset exemple :**
```
Tension avant traitement : 160, 155, 162, 158, 165, 170, 156
Tension après traitement : 135, 132, 140, 138, 142, 145, 130
```

**Prompts progressifs :**
```
1. "Calcule la moyenne avant et après traitement"
2. "Fais un test t apparié pour voir si la différence est significative"
3. "Crée un graphique montrant l'évolution avec intervalle de confiance"
```

**Découvertes attendues :**
- Calculs automatiques précis
- Visualisations professionnelles

---

### **📝 BLOC 3 : ChatGPT Avancé pour la Médecine (40 min)**

#### **🔧 Custom GPTs Médicaux (15 min)**

**Découverte des GPTs spécialisés :**
1. Accéder à "Explore GPTs"
2. Rechercher "Medical" ou "Clinical"
3. Tester 2-3 GPTs médicaux
4. Comparer avec ChatGPT standard

**Création d'un Mini-GPT Personnel :**
```
Nom : "Assistant Diagnostic DDx"
Instructions : "Tu es un assistant pour diagnostics différentiels.
Pour chaque cas, tu fournis toujours :
- 5 diagnostics possibles
- Probabilité estimée
- Examens à prescrire
- Urgence (1-5)"
```

#### **🌐 Web Browsing pour Actualités Médicales (10 min)**

**Test de recherche (ChatGPT Plus uniquement) :**
```
"Recherche les dernières recommandations 2025 sur le traitement 
de l'hypertension chez le diabétique. Cite tes sources."
```

**Évaluation :**
- Sources trouvées
- Actualité des informations
- Fiabilité des sites consultés

#### **🎯 EXERCICE 1.5 : Application TFE - Premier Contact (15 min)**

**Mission :** Analyser un extrait de votre TFE avec ChatGPT

**Étape 1 : Analyse de qualité (5 min)**
```
"Voici l'introduction de mon TFE sur [sujet]. 
Évalue sa qualité pour une publication internationale.
Quels sont les points forts et les améliorations nécessaires ?

[Coller 500 mots de votre TFE]"
```

**Étape 2 : Identification des gaps (5 min)**
```
"Compare cette introduction aux standards des journaux comme 
Nature Medicine ou The Lancet. Qu'est-ce qui manque ?"
```

**Étape 3 : Plan d'amélioration (5 min)**
```
"Crée un plan étape par étape pour transformer cette introduction 
en version publiable. Sois spécifique et actionnable."
```

**Documentation :**
- Noter les suggestions pertinentes
- Identifier les limites de ChatGPT
- Créer votre roadmap personnelle

---

### **🚀 BLOC 4 : Synthèse et Préparation Multi-Outils (25 min)**

#### **Bilan de Maîtrise ChatGPT (10 min)**

**Auto-évaluation :**
```
COMPÉTENCE                        | Acquis | À approfondir
----------------------------------|--------|---------------
Prompting structuré               | ✓/✗    |
Analyse d'images                  | ✓/✗    |
Utilisation Code Interpreter      | ✓/✗    |
Détection des hallucinations      | ✓/✗    |
Application médicale pratique     | ✓/✗    |
```

#### **Aperçu des Autres Outils (10 min)**

**Pourquoi plusieurs outils ?**
- ChatGPT : Créativité et polyvalence
- Claude : Précision et éthique
- Gemini : Recherche et Google
- Perplexity : Automatisation et sources

**Ce que vous apprendrez en Session 2 :**
- Maîtrise individuelle de chaque outil
- Comparaison sur mêmes tâches
- Stratégie de sélection optimale

#### **Challenge Final Session 1 (5 min)**

**Mission solo :** Créer votre "Prompt Parfait"

Créez LE prompt optimal pour votre usage médical quotidien :
- Spécifique à votre spécialité
- Structuré selon nos apprentissages
- Réutilisable quotidiennement

**Template à compléter :**
```
"Tu es un [spécialité] expérimenté. 
[Contexte spécifique]
[Tâche précise]
[Format de sortie souhaité]
[Contraintes ou points d'attention]"
```

---

### **🎯 MISSION INTER-SESSION 1**
**"Semaine d'Immersion ChatGPT"**

1. **Utiliser ChatGPT quotidiennement** (min 30 min/jour)
2. **Tester sur 5 cas cliniques réels** (anonymisés)
3. **Documenter 3 hallucinations** détectées
4. **Analyser 500 mots de votre TFE**
5. **Créer 3 prompts optimisés** pour votre pratique
6. **Calculer le temps gagné** sur vos tâches
7. **Partager meilleure découverte** sur WhatsApp #ChatGPTMastery

**Documentation :** Google Sheets personnel avec :
- Prompts testés
- Qualité des réponses (1-10)
- Hallucinations détectées
- Applications pratiques trouvées

---

### 📊 **POINTS CLÉS SESSION 1**

✅ **Acquis :**
- Compréhension des fondements IA
- Maîtrise complète de ChatGPT
- Techniques de prompting avancées
- Détection des limites et hallucinations
- Premier contact TFE-Publication

⏭️ **Prochaine étape :**
- Session 2 : Découverte individuelle Claude, Gemini, Perplexity
- Comparaison structurée
- Développement stratégie multi-outils

💡 **Remember :**
> "Maîtriser un outil en profondeur avant d'en explorer plusieurs. 
> La compétence bat la connaissance superficielle."

---

*Prochaine session : [Date] - Expansion vers Multi-Outils*

---

➡️ **[Continuer vers Session 2 : Découverte Multi-Outils](./session2_decouverte_outils.md)**