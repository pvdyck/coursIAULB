# 📚 Exercices Session 1 : Fondements IA & Maîtrise ChatGPT
## *Charge cognitive : 4/10 - Focus sur UN seul outil*

## 🎯 Objectifs de la Session
- Comprendre les fondements de l'IA générative
- Maîtriser ChatGPT en profondeur
- Détecter et gérer les hallucinations
- Optimiser vos prompts médicaux
- Première application sur votre TFE

## 📝 Exercice 1.1 : Premiers Pas avec ChatGPT (20 min)

### Phase 1 : Test de Base (5 min)
Testez ces 3 prompts progressifs dans ChatGPT :

**Prompt 1 (trop simple) :**
```
Hypertension ?
```

**Prompt 2 (mieux) :**
```
Explique l'hypertension artérielle pour un patient
```

**Prompt 3 (optimal) :**
```
Agis comme un cardiologue pédagogue. Explique l'hypertension 
artérielle à un patient de 60 ans nouvellement diagnostiqué. 
Utilise des analogies simples et structure ta réponse en :
1. Qu'est-ce que c'est ?
2. Pourquoi c'est important ?
3. Que peut-on faire ?
```

### Phase 2 : Analyse (15 min)
Documentez dans votre cahier :
- Différence de qualité entre les 3 réponses
- Nombre de mots approximatif
- Utilité clinique (score /10)
- Éléments qui améliorent la réponse

### Template de Documentation
```markdown
## Exercice 1.1 - [Votre Nom]

### Analyse des 3 Prompts
| Prompt | Nb mots | Utilité /10 | Points clés |
|--------|---------|-------------|-------------|
| Simple | ~XX     | X/10        | ...         |
| Mieux  | ~XX     | X/10        | ...         |
| Optimal| ~XX     | X/10        | ...         |

### Ma découverte principale :
[2-3 lignes sur ce que vous avez appris]
```

## 🔬 Exercice 1.2 : Optimisation de Prompts Médicaux (25 min)

### Mission : Transformer un cas clinique en DDx structuré

**Cas clinique :**
```
Femme 45 ans, fatigue progressive 3 mois, palpitations occasionnelles,
perte de poids 5 kg sans régime, nervosité, troubles du sommeil.
ATCD : RAS. Pas de traitement.
```

### Étape 1 : Prompt Basique (5 min)
```
Quel est le diagnostic pour cette patiente ?
```
→ Copiez la réponse

### Étape 2 : Prompt Amélioré (10 min)
```
Analyse ce cas clinique et donne les diagnostics possibles :
[Insérer le cas]
```
→ Copiez la réponse

### Étape 3 : Prompt Expert (10 min)
```
Tu es un interniste expérimenté. Analyse ce cas clinique :
[Insérer le cas]

Fournis :
1. Top 5 diagnostics différentiels par ordre de probabilité
2. Justification clinique pour chaque diagnostic
3. Examens complémentaires essentiels
4. Red flags à ne pas manquer
5. Prise en charge immédiate

Format ta réponse de manière structurée et claire.
```
→ Copiez la réponse

### Grille d'Évaluation
```markdown
| Critère               | Basique | Amélioré | Expert |
|-----------------------|---------|----------|--------|
| Exhaustivité DDx      | /5      | /5       | /5     |
| Structure réponse     | /5      | /5       | /5     |
| Pertinence clinique   | /5      | /5       | /5     |
| Utilité pratique      | /5      | /5       | /5     |
| TOTAL                 | /20     | /20      | /20    |
```

## 🎭 Exercice 1.3 : Détection d'Hallucinations (15 min)

### Mission : Apprendre à détecter les inventions de ChatGPT

**Test 1 : Médicament Fictif**
```
Quelle est la posologie du Nexiprazole 
en première intention pour l'ulcère gastrique ?
```

**Test 2 : Étude Inventée**
```
Peux-tu me résumer l'étude CARDIAC-FOREVER 
publiée dans le Lancet en 2023 ?
```

**Test 3 : Guideline Fictive**
```
Quelles sont les recommandations 2025 de la Société 
Belge de Pneumologie pour le traitement du COVID long ?
```

### À documenter :
- ChatGPT avoue-t-il ne pas connaître ?
- Invente-t-il des informations plausibles ?
- Comment vérifier la véracité ?

### Stratégies Anti-Hallucination
```markdown
✓ Toujours demander les sources
✓ Vérifier les noms de médicaments
✓ Confirmer l'existence des études citées
✓ Croiser avec des sources fiables
✓ En cas de doute : reformuler différemment
```

## 🖼️ Exercice 1.4 : ChatGPT Vision (15 min)

### Mission : Tester l'analyse d'images médicales

**Étape 1 : ECG**
- Téléchargez un ECG normal (Google Images)
- Uploadez dans ChatGPT
- Prompt : "Analyse cet ECG et décris ce que tu vois"

**Étape 2 : Radio Thorax**
- Téléchargez une radio thorax normale
- Prompt : "Décris cette radiographie thoracique de manière systématique"

**Étape 3 : Graphique de Données**
- Créez un simple graphique Excel (ex: courbe de poids)
- Prompt : "Analyse cette courbe et donne-moi les tendances principales"

### Points d'Évaluation :
- Précision de la description
- Identification des éléments clés
- Limites admises par ChatGPT
- Utilité pour l'enseignement

## 📊 Exercice 1.5 : Code Interpreter pour Stats (15 min)

### Mission : Utiliser ChatGPT pour analyses statistiques

**Dataset exemple :**
```
Créez un fichier Excel avec :
Tension avant traitement : 160, 155, 162, 158, 165, 170, 156
Tension après traitement : 135, 132, 140, 138, 142, 145, 130
```

**Uploadez le fichier et demandez :**
1. "Calcule la moyenne et l'écart-type avant/après"
2. "Fais un test t apparié pour voir si la différence est significative"
3. "Crée un graphique avec barres d'erreur montrant l'évolution"

### Découvertes Attendues :
- Calculs automatiques corrects
- Code Python généré visible
- Graphiques professionnels
- Interprétation statistique

## 📝 Exercice 1.6 : Application TFE - Premier Contact (15 min)

### Mission : Tester ChatGPT sur VOTRE sujet

**Étape 1 : État des Lieux (5 min)**
```
Mon TFE porte sur [votre sujet]. 
Que sais-tu sur ce domaine ?
Quelles sont les avancées récentes ?
```

**Étape 2 : Amélioration d'Extrait (10 min)**
Copiez 200-300 mots de votre TFE, puis :
```
Voici un extrait de mon TFE :
[Coller l'extrait]

Peux-tu :
1. Identifier les points forts
2. Suggérer des améliorations de style
3. Proposer une version plus impactante
```

### Documentation Finale
```markdown
## Bilan Application TFE

### Points Forts de ChatGPT pour mon sujet :
- ...
- ...

### Limites identifiées :
- ...
- ...

### Prochaines étapes :
- ...
```

## 🏆 Challenge Final Session 1 : Votre Prompt Parfait

### Mission : Créer LE prompt optimal pour votre usage quotidien

**Template à personnaliser :**
```
Tu es un [votre spécialité] expérimenté travaillant à [contexte].
[Détails pertinents sur votre pratique]

J'ai besoin de [tâche fréquente précise].

Fournis-moi [format souhaité] incluant :
- [Élément 1]
- [Élément 2]
- [Élément 3]

[Contraintes spécifiques]
```

### Critères du Prompt Parfait :
- ✓ Spécifique à votre pratique
- ✓ Réutilisable quotidiennement
- ✓ Format de sortie clair
- ✓ Gain de temps évident

## 📊 Auto-Évaluation Finale

### Checklist de Maîtrise ChatGPT
```markdown
□ Je sais structurer un prompt efficace
□ Je détecte les hallucinations potentielles
□ J'utilise les capacités vision
□ Je peux faire des analyses statistiques
□ J'ai identifié 3 usages pour ma pratique
□ J'ai créé mon prompt personnalisé
□ Je comprends les limites de l'outil

Score : ___/7
```

### Temps Total Exercices : ~2h30
### Charge Cognitive : 4/10 ✅

---

## 📌 À Retenir

1. **La qualité du prompt détermine la qualité de la réponse**
2. **Toujours vérifier les informations critiques**
3. **ChatGPT excelle en créativité et brainstorming**
4. **Commencer simple, puis complexifier**
5. **Documenter vos prompts qui fonctionnent**

## 🎯 Pour la Session 2

Vous découvrirez Claude, Gemini et Perplexity individuellement.
Préparez 2-3 questions que ChatGPT n'a pas bien traitées.

**#MaîtriserUnOutilDAbord**