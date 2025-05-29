# 🚨 Base de Données des Hallucinations IA

## ⚠️ Hallucinations Documentées et Vérifiées

### 📊 Statistiques Globales

| IA | Total Détectées | Médicaments | Études | Guidelines | Dosages | Anatomie |
|----|-----------------|-------------|---------|------------|---------|----------|
| ChatGPT | 127 | 45 | 38 | 21 | 15 | 8 |
| Claude | 73 | 12 | 8 | 31 | 18 | 4 |
| Gemini | 89 | 23 | 19 | 27 | 14 | 6 |

## 🔴 Hallucinations Critiques (Danger Patient)

### 1. Erreur de Dosage - ChatGPT
**Date :** 15/05/2025
**Prompt :** "Dose de méthotrexate en rhumatologie"
**Réponse IA :** "15-25 mg par jour"
**✅ Correction :** 15-25 mg par SEMAINE
**⚠️ Risque :** Toxicité potentiellement mortelle
**Tags :** #dosage #critique #methotrexate

### 2. Contre-indication Inventée - Claude
**Date :** 18/05/2025
**Prompt :** "Contre-indications de l'aspirine"
**Réponse IA :** "Contre-indiqué dans la péricardite aiguë"
**✅ Correction :** L'aspirine est le traitement de PREMIÈRE LIGNE
**⚠️ Risque :** Privation de traitement efficace
**Tags :** #contre-indication #péricardite

### 3. Protocole Imaginaire - Gemini
**Date :** 20/05/2025
**Prompt :** "Protocole réanimation arrêt cardiaque 2024"
**Réponse IA :** "Nouveau protocole 3-3-3 : 3 min RCP, 3 chocs, 3 mg adrénaline"
**✅ Correction :** Aucun protocole "3-3-3" n'existe. Guidelines ERC 2021 en vigueur
**⚠️ Risque :** Réanimation inefficace
**Tags :** #urgence #protocole #invention

## 🟡 Hallucinations Modérées (Impact Clinique)

### 4. Étude Inexistante - ChatGPT
**Pattern Récurrent :** Invente des noms d'études plausibles
**Exemples :**
- "CARDIAC-FOREVER Trial (Lancet 2023)" → N'existe pas
- "DIABETES-OPTIMAL Study (NEJM 2024)" → N'existe pas
- "PREVENT-STROKE Initiative (JAMA 2023)" → N'existe pas

**🛡️ Stratégie de Détection :**
```
Toujours demander : "Peux-tu me donner le DOI ou PMID de cette étude ?"
Si hésitation ou excuse → Hallucination probable
```

### 5. Statistiques Inventées - Tous
**Pattern :** Chiffres trop précis ou arrondis suspects
**Exemples réels :**
- ChatGPT : "Sensibilité du D-dimère : 97.3%" → Réel : ~95% (variable)
- Claude : "Prévalence HTA en Belgique : exactement 30%" → Réel : 28.7%
- Gemini : "Mortalité COVID-19 : 2.5% constant" → Réel : Très variable

### 6. Guidelines Obsolètes/Modifiées - Claude
**Pattern :** Mélange versions ou dates incorrectes
**Exemples :**
- "Guidelines ESC 2025 sur l'insuffisance cardiaque" → N'existent pas encore
- "Recommandations OMS 2019 COVID-19" → Anachronisme évident
- "Protocole HAS 2024 validé en janvier" → Vérifier date réelle

## 🟢 Hallucinations Mineures (Sans Impact)

### 7. Acronymes Créatifs - ChatGPT
**Pattern :** Invente des acronymes qui "sonnent bien"
**Exemples collectés :**
- SMART-HF → Score imaginaire insuffisance cardiaque
- RAPID-Dx → Protocole diagnostic inexistant  
- CARE-Plus → Programme de soins fictif

### 8. Auteurs Fantômes - Gemini
**Pattern :** Associe mauvais auteurs aux bonnes études
**Exemples :**
- "Smith et al." pour toute étude dont il oublie les auteurs
- Mélange auteurs d'études différentes
- Invente co-auteurs plausibles

## 📋 Checklist Anti-Hallucination

### Niveau 1 : Vérification Rapide
- [ ] Le médicament existe-t-il ? (Vidal, RxList)
- [ ] Le dosage est-il dans les ranges habituels ?
- [ ] L'étude est-elle trouvable sur PubMed ?
- [ ] La date est-elle cohérente ?
- [ ] Les guidelines sont-elles actuelles ?

### Niveau 2 : Validation Approfondie  
- [ ] Cross-check avec 2 autres IA
- [ ] Recherche Google Scholar du titre exact
- [ ] Vérification sur sites officiels (HAS, EMA, FDA)
- [ ] Consultation base de données spécialisée
- [ ] Avis d'un pair si doute persiste

### Niveau 3 : Documentation
- [ ] Screenshot de l'hallucination
- [ ] Prompt exact utilisé
- [ ] Contexte de la conversation
- [ ] Source de la correction
- [ ] Ajout à cette base de données

## 🔍 Patterns de Détection par IA

### ChatGPT - Signaux d'Alerte
1. **Trop de détails** → Histoires élaborées
2. **Noms trop parfaits** → "OPTIMAL", "PERFECT", "BEST"
3. **Confiance excessive** → Absence de nuances
4. **Chiffres trop ronds** → 90%, 95%, 100%

### Claude - Signaux d'Alerte  
1. **Hyper-prudence** → Contre-indications excessives
2. **Rigidité** → "Toujours" ou "Jamais"
3. **Amalgames** → Mélange de concepts proches
4. **Obsolescence** → Informations datées

### Gemini - Signaux d'Alerte
1. **Sources floues** → "Études récentes montrent..."
2. **Mélanges temporels** → Dates incohérentes
3. **Sur-généralisation** → Application trop large
4. **Confusion références** → Mauvaises attributions

## 💡 Stratégies de Mitigation

### 1. Prompting Défensif
```
"Cite uniquement des informations vérifiables avec sources.
Si tu n'es pas sûr à 100%, indique-le explicitement.
Préfère dire 'je ne sais pas' plutôt qu'inventer."
```

### 2. Validation Systématique
```
Workflow de vérification :
1. Génération initiale (IA 1)
2. "Vérifie ces informations" (IA 2)  
3. "Trouve les sources" (IA 3)
4. Recherche manuelle si divergence
```

### 3. Questions Pièges Préventives
- "Quel est le PMID de cette étude ?"
- "Page exacte dans les guidelines ?"
- "Nom complet des auteurs principaux ?"
- "Date précise de publication ?"

## 📈 Tendances Observées

### Évolution Temporelle
- **ChatGPT** : ↓ Hallucinations depuis GPT-4 (-30%)
- **Claude** : Stable mais plus prudent
- **Gemini** : ↑ Précision sur sources (+40%)

### Domaines à Risque
1. **Pharmacologie** : Dosages et interactions
2. **Études récentes** : <6 mois  
3. **Guidelines locales** : Variations pays
4. **Maladies rares** : Données limitées
5. **Protocoles urgence** : Criticité élevée

## 🚀 Contribution à la Base

### Comment Signaler
1. Documenter avec screenshots
2. Inclure prompt complet
3. Fournir source de correction
4. Envoyer à : hallucinations-ia@ulb.ac.be

### Format de Soumission
```markdown
## Nouvelle Hallucination Détectée

**IA :** [ChatGPT/Claude/Gemini]
**Date :** [JJ/MM/AAAA]
**Gravité :** [Critique/Modérée/Mineure]

**Prompt utilisé :**
[Copier exact]

**Réponse IA :**
[Copier exact]

**Correction :**
[Information correcte + source]

**Impact potentiel :**
[Description risque patient]
```

---

**🔄 Dernière mise à jour :** 25/05/2025
**📊 Total entrées :** 289
**👥 Contributeurs :** 47

*Base collaborative maintenue par la communauté ULB IA Med*