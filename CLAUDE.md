# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a training course repository for "De ChatGPT à PRS/ASJ : Transformez votre TFE en Publication avec l'IA" at the Université Libre de Bruxelles - Faculty of Medicine, Department of Plastic Surgery. The course teaches medical professionals how to use AI tools (ChatGPT, Claude, Gemini, Perplexity) to transform their thesis into scientific publications.

## Key Architecture & Structure

### Content Organization
- **cours/**: Markdown source files for the 4 training sessions
- **html/**: Static website with course content, exercises, and resources
- **ressources/**: Training materials including prompt libraries, templates, and guides
- **refs/**: Reference PDFs and documentation

### Website Architecture
The static website in `html/` follows a multi-page structure:
- Main content pages (sessions, exercises, resources)
- ULB Medical design system with official colors (#e22017)
- Responsive CSS with print-friendly stylesheets
- No build process - pure HTML/CSS/JS

### AI Model Information (June 2025)
When updating content about AI models, use these current specifications:
- **GPT-4.1**: 1M tokens context, $2/$8 per million
- **Claude 4 Opus/Sonnet**: 200k tokens, $15/$75 (Opus), $3/$15 (Sonnet)
- **Gemini 2.5 Pro**: 1M tokens (2M preview), $1.25/$10

## Common Commands

### Check for broken links in HTML files
```bash
cd html
./check_links.sh
```

### View the website locally
```bash
cd html
open index.html
# Or with a local server:
python -m http.server 8000
```

### Search for outdated AI model references
```bash
grep -r "Claude 3.5\|GPT-4 Turbo\|Gemini 1.5" .
```

### Git workflow for updates
```bash
git status
git add -A
git commit -m "Update description"
git push origin main
```

## Development Guidelines

### When updating course content:
1. Always update both markdown source (`cours/`) and HTML files (`html/sessions/`)
2. Ensure slides (`html/slides/`) match session content
3. Verify exercises align with theory sections
4. Update resource files if AI model specifications change

### HTML/CSS considerations:
- Maintain ULB Medical design consistency
- Test responsive behavior on mobile
- Verify print CSS works correctly
- Keep navigation structure intact

### Content coherence:
- Session content should progress from 4/10 to 8/10 difficulty
- Each session builds on previous knowledge
- Exercises must use real medical/surgical examples
- Focus on practical TFE→Publication transformation

### Security & Ethics:
- Never include patient photos or identifiable data
- Emphasize anonymization in all photo-related content
- Include data security warnings in appropriate sections
- Remind users about HIPAA/GDPR compliance

## Important Files

- `html/assets/css/ulb-medical.css`: Main styling following ULB brand
- `ressources/bibliotheque_prompts_plastie.md`: Specialized prompts for plastic surgery
- `ressources/templates_all.md`: Ready-to-use templates for publication pipeline
- `html/PLAN.md`: Website structure and development phases

## Session Structure

1. **Session 1**: ChatGPT mastery only (4/10 difficulty)
2. **Session 2**: Individual discovery of Claude, Gemini, Perplexity (6/10)
3. **Session 3**: Advanced workflows and publication pipeline (7/10)
4. **Session 4**: Real TFE transformation workshop (8/10)

## Testing & Validation

While there are no automated tests, validate changes by:
- Checking HTML renders correctly in browser
- Verifying responsive design on different screen sizes
- Testing print layout with browser print preview
- Ensuring all internal links work with `check_links.sh`