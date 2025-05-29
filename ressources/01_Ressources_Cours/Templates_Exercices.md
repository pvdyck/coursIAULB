# 📱 Templates IA Médicaux - Programme ULB v3.0
## 🔄 Version Comparative Multi-IA (ChatGPT, Claude, Gemini)

## 📋 1. Checklist Sécurité des Données Patient

```
AVANT UTILISATION DE TOUT OUTIL IA :
□ Politique de confidentialité vérifiée
□ Localisation serveurs identifiée (EU de préférence)
□ VPN activé si serveurs hors-EU
□ Données anonymisées :
   □ Noms → Patient A, B, C
   □ Dates → J0, J+1, J+2
   □ Lieux → Ville X, Hôpital Y
   □ ID → ID001, ID002
   □ Ages précis → Tranches d'âge
□ Test avec données fictives effectué
□ Documentation dans dossier patient
□ Pas d'images avec infos identifiables
□ Consentement patient si nécessaire
□ Sauvegarde locale des résultats
```

## 📝 2. Template Consentement IA Patient

```
FORMULAIRE DE CONSENTEMENT - UTILISATION D'OUTILS IA

Je soussigné(e) ________________________________

□ J'accepte que des outils d'intelligence artificielle soient utilisés pour :
   □ Aide au diagnostic
   □ Analyse d'imagerie médicale
   □ Recherche de traitements optimaux
   □ Documentation médicale

□ Je comprends que :
   - L'IA est un outil d'aide à la décision
   - Le médecin reste responsable des décisions finales
   - Mes données seront anonymisées avant traitement
   - Je peux refuser sans impact sur mes soins

□ J'ai été informé(e) sur :
   - Les bénéfices potentiels
   - Les limitations de l'IA
   - La protection de mes données

Date : ___________  Signature : _______________
```

## 🎯 3. Bibliothèque de Prompts Médicaux Testés - Optimisés par Plateforme

### 🔄 ADAPTATION DES PROMPTS PAR OUTIL

**ChatGPT - Style Conversationnel**
```
"Agis comme un [spécialiste] expérimenté. 
J'ai besoin de ton aide pour [tâche].
Peux-tu [action spécifique] ?"
```

**Claude - Style Structuré**
```
"Tu es un [spécialiste] avec [X] ans d'expérience.

CONTEXTE : [détails]
TÂCHE : [spécifique]
FORMAT : [structure]
CONTRAINTES : [limites]"
```

**Gemini - Style Recherche**
```
"Recherche les dernières informations sur [sujet].
Compare plusieurs sources récentes.
Synthétise en privilégiant données 2024-2025.
Cite tes sources."
```

### A. DIAGNOSTIC DIFFÉRENTIEL
```
Tu es un médecin interniste expérimenté avec 20 ans de pratique clinique.

PATIENT : [âge][sexe] présente [symptômes principaux]
ANTÉCÉDENTS : [liste]
EXAMEN CLINIQUE : [findings]

Fournis 8 diagnostics différentiels classés par probabilité décroissante.
Pour chaque diagnostic :
- Probabilité estimée (%)
- Arguments pour
- Arguments contre
- 1 examen clé pour confirmer/infirmer

Format tableau pour clarté maximale.
```

### B. TRANSFORMATION TFE → PUBLICATION
```
Agis comme éditeur senior du [nom journal cible].

Transforme ce texte de TFE en article publiable :
1. Structure IMRAD stricte
2. Style [journal] : concis, factuel, evidence-based
3. 3000 mots maximum
4. Anglais britannique/américain selon journal
5. Références Vancouver

D'abord, identifie 5 faiblesses majeures.
Ensuite, propose version améliorée complète.

[TEXTE TFE]
```

### C. EXPLICATION PATIENT SIMPLE
```
Explique en termes simples pour un patient de [âge] ans :
- Niveau lecture 8ème année
- Pas de jargon médical
- Ton rassurant mais honnête
- Analogies de la vie quotidienne
- Maximum 200 mots

Condition à expliquer : [diagnostic/procédure]

Inclus :
- Ce que c'est
- Pourquoi c'est important
- Que va-t-il se passer
- Questions fréquentes
```

### D. RECHERCHE BIBLIOGRAPHIQUE CIBLÉE
```
Recherche systematic review récente sur :
PATHOLOGIE : [nom]
TRAITEMENT : [spécifique]
PÉRIODE : 2020-2025
CRITÈRES : RCT ou méta-analyses uniquement

Fournis :
1. 5 références les plus pertinentes
2. Résumé des findings principaux
3. Niveau de preuve pour chaque
4. Contradictions entre études
5. Gaps identifiés dans la littérature
```

### E. ANALYSE D'IMAGE MÉDICALE
```
Analyse cette image médicale de façon systématique :

TYPE : [Radio/IRM/Scanner/Echo]
RÉGION : [anatomique]
INDICATION : [symptômes/suspicion]

Décris :
1. Qualité technique de l'image
2. Structures anatomiques visibles
3. Anomalies détectées (localisation précise)
4. Diagnostics différentiels possibles
5. Examens complémentaires suggérés

IMPORTANT : Toujours mentionner les limites de l'analyse IA.
```

## 📊 4. Template Calcul ROI Personnel - Version Comparative v3

```
CALCULATEUR ROI - COMPARAISON 3 OUTILS IA

TÂCHE                      | Temps SANS IA | ChatGPT | Claude | Gemini | Meilleur
---------------------------|---------------|---------|--------|--------|----------
Recherche biblio TFE       | ___h         | ___h    | ___h   | ___h   | ___
Rédaction articles         | ___h         | ___h    | ___h   | ___h   | ___
Traduction médicale        | ___h         | ___h    | ___h   | ___h   | ___
Création présentations     | ___h         | ___h    | ___h   | ___h   | ___
Analyse données/stats      | ___h         | ___h    | ___h   | ___h   | ___
Documentation patients     | ___h         | ___h    | ___h   | ___h   | ___
Diagnostic différentiel    | ___h         | ___h    | ___h   | ___h   | ___
Revue de littérature       | ___h         | ___h    | ___h   | ___h   | ___

MEILLEUR OUTIL PAR TÂCHE :
- Recherche : _________
- Rédaction : _________
- Analyse : ___________
- Créativité : ________

WORKFLOW OPTIMAL PERSONNEL :
1. ___________________
2. ___________________
3. ___________________

COÛT MENSUEL :
- Si 1 outil : 20€
- Si 2 outils : 40€
- Si 3 outils : 60€
Votre choix : _________

ROI CALCULÉ : _________

```
CALCULATEUR ROI - OUTILS IA MÉDICAUX

TÂCHE                      | Temps SANS IA | Temps AVEC IA | Gain | Freq/mois
---------------------------|---------------|---------------|------|----------
Recherche biblio TFE       | ___h         | ___h         | __% | ___
Rédaction articles         | ___h         | ___h         | __% | ___
Traduction médicale        | ___h         | ___h         | __% | ___
Création présentations     | ___h         | ___h         | __% | ___
Analyse données/stats      | ___h         | ___h         | __% | ___
Documentation patients     | ___h         | ___h         | __% | ___
Lettres/courriers          | ___h         | ___h         | __% | ___
Formation continue         | ___h         | ___h         | __% | ___

TOTAL HEURES ÉCONOMISÉES/MOIS : ___h
VALEUR TEMPS (30€/h étudiant) : ___€
COÛT OUTILS IA/MOIS : ___€
ROI = (Gain - Coût) / Coût = ___:1

GAINS QUALITATIFS :
□ Moins de stress/fatigue
□ Plus de temps patient
□ Meilleure qualité travail
□ Publications facilitées
□ Apprentissage accéléré
```

## 🔧 5. Matrice de Sélection d'Outils IA - Comparative v3

```
GRILLE COMPARATIVE - CHATGPT vs CLAUDE vs GEMINI

CRITÈRES ESSENTIELS      | ChatGPT | Claude | Gemini | Notes
-------------------------|---------|--------|--------|-------
Conformité RGPD/HIPAA    | □       | □      | □      |
Données en Europe        | □       | □      | □      |
Politique confid. claire | □       | □      | □      |
Adapté usage médical     | □       | □      | □      |

PERFORMANCE MÉDICALE     | /10     | /10    | /10    |
-------------------------|---------|--------|--------|-------
Diagnostic différentiel  | __      | __     | __     |
Recherche bibliographique| __      | __     | __     |
Rédaction médicale       | __      | __     | __     |
Analyse d'images         | __      | __     | __     |
Communication patient    | __      | __     | __     |
Analyse de données       | __      | __     | __     |

CRITÈRES PRATIQUES       | Note    | Note   | Note   |
-------------------------|---------|--------|--------|-------
Facilité d'utilisation   | __/5    | __/5   | __/5   |
Rapidité de réponse      | __/5    | __/5   | __/5   |
Fiabilité/Cohérence      | __/5    | __/5   | __/5   |
Options d'export         | __/5    | __/5   | __/5   |
Intégrations disponibles | __/5    | __/5   | __/5   |

DÉCISION FINALE :
□ 1 seul outil : ____________
□ 2 outils combo : __________
□ Les 3 outils (power user)

JUSTIFICATION : _____________
```

```
GRILLE D'ÉVALUATION - OUTIL : _________________

CRITÈRES ESSENTIELS (Eliminatoires si "Non")
□ Conforme RGPD/HIPAA ? 
□ Données en Europe ?
□ Politique confidentialité claire ?
□ Adapté usage médical ?

CRITÈRES PERFORMANCE (Score /10)
□ Facilité d'utilisation : __/10
□ Qualité des résultats : __/10
□ Rapidité : __/10
□ Fiabilité : __/10
□ Support français : __/10

CRITÈRES ÉCONOMIQUES
□ Version gratuite suffisante ? O/N
□ Prix mensuel : ___€
□ ROI estimé : ___:1
□ Partage licence possible ? O/N

SCORE TOTAL : ___/50
DÉCISION : □ Adopter □ Tester □ Rejeter
```

## 📋 6. Workflow Publication International - Pipeline Multi-IA v3

```
PIPELINE TFE → PUBLICATION - APPROCHE FUSION 3 IA

PHASE 1 : ANALYSE STRATÉGIQUE (1 jour)
├── Gemini : Recherche littérature récente
├── Claude : Analyse forces/faiblesses manuscript
├── ChatGPT : Suggestions structure et amélioration
└── Synthèse : Plan d'action unifié

PHASE 2 : TRANSFORMATION (3 jours)
├── Claude : Restructuration IMRAD principale
├── ChatGPT : Enrichissement méthodologique + stats
├── Gemini : Mise à jour bibliographique + vérification
├── Claude : Rédaction discussion approfondie
├── ChatGPT : Création figures et visualisations
└── Consensus : Intégration des versions

PHASE 3 : OPTIMISATION (2 jours)
├── ChatGPT : Polish style et flow narratif
├── Claude : Vérification précision scientifique
├── Gemini : Fact-checking et références
├── DeepL : Traduction si nécessaire
└── Grammarly Medical : Correction finale

PHASE 4 : SOUMISSION (1 jour)
├── ChatGPT : Cover letter personnalisée
├── Claude : Réponses aux reviewers anticipées
├── Gemini : Vérification guidelines journal
└── Compilation : Package complet soumission

TEMPS TOTAL : 7 jours (vs 30 jours mono-outil)
QUALITÉ : Optimisée par forces combinées
```

```
PIPELINE TFE → PUBLICATION NATURE/SCIENCE/LANCET

PHASE 1 : AUDIT (1 jour)
□ Analyse forces/faiblesses avec IA
□ Identification contribution unique
□ Choix 5 journaux cibles

PHASE 2 : RESTRUCTURATION (3 jours)
□ IMRAD strict
□ Abstract 250 mots
□ Enrichissement biblio (50+ refs récentes)
□ Figures publication-ready

PHASE 3 : TRADUCTION (1 jour)
□ DeepL première passe
□ Grammarly Medical polish
□ Relecture native speaker

PHASE 4 : OPTIMISATION (2 jours)
□ Style journal spécifique
□ Cover letter IA-assistée
□ Suggestions reviewers
□ Checklist soumission

PHASE 5 : SOUMISSION
□ Upload système journal
□ Metadata corrects
□ Supplementary materials
□ Tracking installation

TEMPS TOTAL : 7 jours (vs 30 jours traditionnel)
```

## 🚨 7. Protocole Urgence Échec IA - Guide Comparatif v3

```
QUE FAIRE QUAND UNE IA ÉCHOUE ?

PROBLÈME : Hallucination détectée
→ ChatGPT : Vérifier avec browsing/plugins
→ Claude : Demander sources et raisonnement
→ Gemini : Cross-check avec recherche Google
→ Solution : Consensus 2/3 outils minimum

PROBLÈME : Résultats contradictoires entre IA
→ Identifier points de divergence précis
→ Rechercher source primaire fiable
→ Privilégier outil avec meilleur track record pour cette tâche
→ Documenter pour apprentissage futur

PROBLÈME : Les 3 IA donnent réponses différentes
→ RED FLAG - Haute incertitude
→ Recherche manuelle obligatoire
→ Consultation expert humain
→ Ne JAMAIS faire confiance si désaccord total

PROBLÈME : Panne d'un service
→ Workflow de backup préparé
→ ChatGPT down → Claude + Gemini
→ Claude down → ChatGPT + Perplexity
→ Gemini down → ChatGPT + Claude

PROBLÈME : Biais détecté dans une IA
→ Tester même cas sur 2 autres
→ Si biais confirmé → éviter cet outil pour ce type de tâche
→ Si biais unique → documenter et mitiger
→ Rapport à la communauté ULB

RÈGLE D'OR : En cas de doute, TOUJOURS vérifier avec 2ème source
```

```
QUE FAIRE QUAND L'IA ÉCHOUE ?

PROBLÈME : Hallucination/Fausse référence
→ Vérifier avec Scite.ai
→ Recherche manuelle PubMed
→ Demander sources précises

PROBLÈME : Résultats incohérents
→ Reformuler prompt
→ Tester autre outil
→ Découper tâche complexe

PROBLÈME : Biais détecté
→ Diversifier outils/sources
→ Validation humaine renforcée
→ Documentation du biais

PROBLÈME : Données sensibles exposées
→ Arrêt immédiat
→ Documentation incident
→ Notification DPO
→ Révision protocoles

PROBLÈME : Désaccord IA/Clinique
→ Privilégier jugement clinique
→ Investiguer divergence
→ Consultation collégiale
→ Documentation décision
```

## 📱 8. Cheat Sheet Mobile Urgences - Multi-IA v3

```
COMMANDES VOCALES RAPIDES PAR OUTIL

CHATGPT MOBILE :
"Hey Siri, demande à ChatGPT le diagnostic 
différentiel pour [symptômes]"
→ Meilleur pour : DDx rapide, images

CLAUDE MOBILE :
"Ok Google, ouvre Claude et analyse ce 
cas clinique complexe"
→ Meilleur pour : Cas nuancés, éthique

GEMINI MOBILE :
"Assistant, recherche avec Gemini les dernières 
guidelines sur [pathologie]"
→ Meilleur pour : Info récente, vérification

RACCOURCIS MULTI-IA À CRÉER :
1. "DDx3" → Même question sur 3 IA
2. "VerifIA" → Fact-check croisé
3. "ConsensusIA" → Synthèse 3 réponses
4. "UrgenceIA" → Workflow critique
5. "BiblioFusion" → Recherche combinée

WORKFLOW URGENCE 3-IA :
1. Question urgente → ChatGPT (rapide)
2. Vérification → Claude (précis)
3. Confirmation → Gemini (sources)
4. Décision : Si 2/3 concordent → OK
              Si 3/3 différents → STOP

TEMPS CIBLE : < 3 minutes total
```

```
COMMANDES VOCALES RAPIDES (Siri/Google)

"Hey Siri, demande à ChatGPT le diagnostic 
différentiel pour douleur thoracique atypique 
chez homme 65 ans diabétique"

"OK Google, ouvre Perplexity et recherche 
dernières guidelines ESC insuffisance cardiaque 2024"

"Siri, lance Claude et transforme ces notes 
en observation médicale structurée"

RACCOURCIS iOS/ANDROID À CRÉER :
1. "DDx" → Diagnostic différentiel
2. "Trad Patient" → Simplification jargon
3. "Biblio Express" → Recherche rapide
4. "Stats Medical" → Analyse données
5. "Image IA" → Analyse imagerie
```

---

## 🆕 9. Grille de Comparaison Rapide par Tâche

```
GUIDE DE DÉCISION RAPIDE v3

TÂCHE                    | 1er Choix | 2e Choix | À Éviter
-------------------------|-----------|----------|----------
Diagnostic différentiel  | ChatGPT   | Claude   | -
Recherche biblio récente | Gemini    | ChatGPT  | Claude
Rédaction longue         | Claude    | ChatGPT  | Gemini
Analyse d'images         | ChatGPT   | Gemini   | Claude
Communication patient    | Claude    | ChatGPT  | -
Analyse statistiques     | ChatGPT   | Claude   | Gemini
Vérification facts       | Gemini    | -        | -
Créativité/Brainstorm    | ChatGPT   | Claude   | Gemini
Éthique médicale        | Claude    | ChatGPT  | Gemini
Traduction médicale     | Claude    | ChatGPT  | Gemini

WORKFLOWS GAGNANTS :
• Recherche : Gemini → ChatGPT → Claude
• Publication : Claude → ChatGPT → Gemini
• Urgence : ChatGPT → Vérif Claude → Confirm Gemini
```

**💡 Ces templates v3 encouragent l'usage comparatif et optimal de chaque outil !**

*Version 3.0 - Mai 2025*
*Prochaine mise à jour : Août 2025*