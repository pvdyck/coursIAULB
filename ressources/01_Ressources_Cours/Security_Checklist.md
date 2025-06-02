# 🔒 Security Checklist - Protection des Données Patient

## ⚠️ RÈGLE D'OR
**JAMAIS de données patient identifiables dans AUCUN outil IA**

---

## ✅ CHECKLIST AVANT CHAQUE UTILISATION

### 1. Vérification Préliminaire
- [ ] J'ai lu la politique de confidentialité de l'outil
- [ ] Je comprends où sont stockées les données
- [ ] Je sais si mes données peuvent être utilisées pour l'entraînement
- [ ] J'ai vérifié la conformité RGPD de l'outil

### 2. Anonymisation Obligatoire

#### Identifiants Directs
- [ ] **Noms** → Patient A, B, C ou P1, P2, P3
- [ ] **Dates précises** → J0, J+7, J+30
- [ ] **Âge précis** → Tranches (60-65 ans, septuagénaire)
- [ ] **Adresses** → Ville X, Région Y
- [ ] **Numéros** (SS, tél, dossier) → ID001, ID002

#### Identifiants Indirects
- [ ] **Hôpital/Clinique** → Centre A, Hôpital universitaire
- [ ] **Médecins** → Dr. X, Spécialiste Y
- [ ] **Dates rares** → Mois/Année seulement
- [ ] **Pathologies rares** → Catégorie générale si <5 cas/an

### 3. Images et Documents
- [ ] Aucune photo avec nom/date visible
- [ ] Cacher/flouter toute information d'en-tête
- [ ] Vérifier absence de métadonnées
- [ ] Pas de screenshots de dossiers patients

### 4. Données Sensibles
- [ ] Pas de données génétiques identifiantes
- [ ] Pas d'informations psychiatriques détaillées
- [ ] Pas de données sur mineurs sans double anonymisation
- [ ] Pas d'informations sur VIH/IST avec détails

---

## 🔄 PROCESSUS D'ANONYMISATION

### Étape 1 : Identification
```
Texte original :
"Mme Dupont, 67 ans, habitant Liège, 
venue le 15/03/2025 pour..."
```

### Étape 2 : Remplacement
```
Texte anonymisé :
"Patiente A, 65-70 ans, habitant grande ville belge,
venue à J0 pour..."
```

### Étape 3 : Vérification
- Relire pour détecter oublis
- Faire relire par collègue si doute
- Tester avec données fictives d'abord

---

## 🌍 CONFORMITÉ PAR OUTIL

### ChatGPT (OpenAI)
- **Serveurs** : USA ⚠️
- **RGPD** : Partiellement conforme
- **Conservation** : 30 jours
- **Recommandation** : Anonymisation stricte

### Claude (Anthropic)
- **Serveurs** : USA/EU options
- **RGPD** : Conforme avec settings
- **Conservation** : Variable
- **Recommandation** : Vérifier région

### Gemini (Google)
- **Serveurs** : Global
- **RGPD** : Conforme
- **Conservation** : Liée compte Google
- **Recommandation** : Workspace = plus sûr

### Perplexity
- **Serveurs** : USA principalement
- **RGPD** : Efforts conformité
- **Conservation** : Non spécifiée
- **Recommandation** : Données publiques only

---

## 📋 DOCUMENTATION OBLIGATOIRE

### Dans le Dossier Patient
```
"Utilisation outil IA : [Nom outil]
Date : [Date]
Objectif : [Aide diagnostic/Recherche/etc]
Données utilisées : Anonymisées selon protocole
Résultat : [Synthèse sans reprendre données IA]"
```

### Registre Service
- Date et heure utilisation
- Outil utilisé
- Type de requête
- Confirmation anonymisation
- Utilisateur responsable

---

## 🚨 RED FLAGS - STOP IMMÉDIAT

### NE JAMAIS :
- ❌ Copier-coller un rapport médical complet
- ❌ Uploader une image avec annotations manuscrites
- ❌ Mentionner maladies rares + localisation
- ❌ Utiliser l'IA pour données génétiques identifiantes
- ❌ Partager conversations IA contenant données patient

### SI ERREUR :
1. **Stop** utilisation immédiate
2. **Documenter** l'incident
3. **Informer** DPO/responsable
4. **Supprimer** si possible
5. **Apprendre** pour éviter récidive

---

## ✨ BONNES PRATIQUES

### Test Préalable
```
1. Créer cas fictif similaire
2. Tester workflow complet
3. Vérifier résultats
4. Appliquer sur cas réel anonymisé
```

### Double Vérification
- Auto-vérification après anonymisation
- Collègue vérifie échantillon
- Audit régulier des pratiques

### Formation Continue
- Rester informé des évolutions
- Partager incidents (anonymisés!)
- Améliorer protocoles

---

## 📱 OUTILS D'AIDE

### Extensions Navigateur
- **Privacy Badger** : Bloque trackers
- **DuckDuckGo** : Navigation privée
- **HTTPS Everywhere** : Connexions sécurisées

### Software
- **Anonymizer** : Scripts anonymisation
- **ExifCleaner** : Nettoie métadonnées
- **VeraCrypt** : Stockage sécurisé

---

## 🎯 QUICK REFERENCE

```
AVANT : Vérifier + Anonymiser + Documenter
PENDANT : Vigilance + Pas de dérive
APRÈS : Nettoyer + Archiver + Apprendre
```

---

**Cette checklist est OBLIGATOIRE pour chaque utilisation d'IA avec données médicales**

*Security Checklist v2.0*
*Conforme RGPD - Juin 2025*
*Contact DPO : dpo@institution.be*