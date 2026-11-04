# Neto.dev

Blog pessoal em português e inglês, feito com [Docusaurus](https://docusaurus.io/) e publicado em https://matheussn.github.io.

```bash
npm install
npm start                         # dev server (PT-BR)
npm start -- --locale en          # dev server (EN)
npm run build && npm run serve    # os dois idiomas juntos
npm run new-post -- <slug> "<Título>"
```

O deploy é automático (GitHub Actions) a cada push na `main`. Convenções de post em [CLAUDE.md](CLAUDE.md).
