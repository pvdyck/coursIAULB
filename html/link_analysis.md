# HTML Link Analysis Report

## Summary

- **Total HTML files scanned**: 11 files
- **Unique .html links found**: 39 different links
- **Working links**: 19
- **Broken links**: 20

## Broken Links Found

### 1. Missing Exercise Files
These links appear in session files but the target files don't exist:
- `../exercises/session1-exercises.html` - Referenced in `/sessions/session1.html`
- `../exercises/session2-exercises.html` - Referenced in `/sessions/session2.html`
- `../exercises/session3-exercises.html` - Referenced in `/sessions/session3.html`
- `../exercises/session4-exercises.html` - Referenced in `/sessions/session4.html`

### 2. Missing Resource Files
These links appear in multiple locations but the files don't exist:
- `resources/guides.html` / `../resources/guides.html` - Referenced in multiple files (index, programme, all sessions)
- `resources/templates.html` - Referenced in `index.html` and `programme.html`
- `resources/cheatsheets.html` - Referenced in `index.html` and `programme.html`
- `resources/photo-protocols.html` - Referenced in `index.html`
- `resources/securite.html` - Referenced in `index.html`

### 3. Missing Relative Path Links
These are incorrect relative paths from session files:
- `session1.html`, `session2.html`, `session3.html`, `session4.html` - Should be prefixed with `../sessions/` when referenced from non-session directories
- `glossaire.html`, `bibliotheque-prompts.html` - Should be prefixed with appropriate paths when referenced from subdirectories
- `grilles.html` - Should be `../evaluation/grilles.html` when referenced from subdirectories

### 4. Missing Group/Evaluation Files
- `groupes/travaux.html` - Referenced in `index.html`
- `evaluation/scores.html` - Referenced in `index.html`

## Working Links

The following links are correctly implemented and their target files exist:

### From Root Directory (index.html, programme.html):
- `sessions/session1.html`
- `sessions/session2.html`
- `sessions/session3.html`
- `sessions/session4.html`
- `programme.html`
- `index.html`
- `resources/glossaire.html`
- `resources/bibliotheque-prompts.html`
- `evaluation/grilles.html`
- `exercises/index.html`
- `groupes/whatsapp.html`

### From Subdirectories (using ../ prefix):
- `../index.html`
- `../programme.html`
- `../sessions/session1.html`
- `../resources/glossaire.html`
- `../resources/bibliotheque-prompts.html`
- `../evaluation/grilles.html`
- `../exercises/index.html`
- `../groupes/whatsapp.html`

## Recommendations

1. **Create missing exercise files** in the `/exercises/` directory:
   - `session1-exercises.html`
   - `session2-exercises.html`
   - `session3-exercises.html`
   - `session4-exercises.html`

2. **Create missing resource files** in the `/resources/` directory:
   - `guides.html`
   - `templates.html`
   - `cheatsheets.html`
   - `photo-protocols.html`
   - `securite.html`

3. **Create missing group/evaluation files**:
   - `groupes/travaux.html`
   - `evaluation/scores.html`

4. **Fix relative path issues** in session navigation:
   - In session files, links between sessions should use relative paths without `../`
   - In resource files, internal resource links should use relative paths without `../`

5. **Consider implementing** a consistent navigation structure across all pages to avoid broken links.