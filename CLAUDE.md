# Blog pessoal (Docusaurus, PT-BR + EN)

## Estrutura
- Posts em português: `blog/AAAA-MM-DD-slug.md`
- Posts em inglês: `i18n/en/docusaurus-plugin-content-blog/AAAA-MM-DD-slug.md` (mesmo nome de arquivo do PT)
- Homepage: `src/pages/index.js`; configurações em `src/data/site.js` (`showProducts` liga a seção de produto, cards em `src/data/products.js`); textos traduzíveis em `i18n/en/code.json`
- Blog em `/blog` (PT) e `/en/blog` (EN); URL dos posts: `/blog/AAAA/MM/DD/slug`
- Autor: chave `matheus` em `blog/authors.yml`
- Rascunhos de estudo, fora do site: `rascunhos/`
- Novo post (par PT/EN em rascunho): `npm run new-post -- <slug> "<Título>"`
- Testar os dois idiomas: `npm run build && npm run serve`

## Decisões técnicas
- "Últimos artigos" da home: o plugin de blog (3.10) não expõe os posts em dados globais, então o plugin local `plugins/latest-posts` usa o hook `allContentLoaded` para publicar os 3 posts mais recentes do idioma atual via `setGlobalData` (lidos com `usePluginData('latest-posts')`). Rascunhos e posts `unlisted` são filtrados.
- `markdown.format: 'detect'`: arquivos `.md` são CommonMark (por isso `<!-- truncate -->` funciona); `.mdx` é MDX. Para usar componentes React num post, use `.mdx` e `{/* truncate */}`.
- Tags inline, sem `tags.yml` (`onInlineTags: 'ignore'`).
- Textos da home com `id` dinâmico (destaques do "Sobre mim") não são extraídos por `write-translations`; edite-os direto em `i18n/en/code.json`.

## Convenções de post
- Front matter obrigatório: `title`, `description` (1 a 2 frases), `authors: [matheus]`, `tags`.
- Tags em minúsculas, sem acento, com hífen (`machine-learning`). Reutilizar tags existentes.
- Sem `# H1` no corpo (o `title` já vira o H1). Seções começam em `##`.
- Inserir `<!-- truncate -->` depois do primeiro parágrafo.
- Blocos de código sempre com a linguagem indicada.
- Terminar com uma seção "Referências" quando houver fontes.
- `draft: true` enquanto não estiver revisado; remover para publicar.
- Todo post em PT precisa de contraparte em EN (e vice-versa), com as mesmas tags.

## Publicação
- Push na `main` dispara o deploy no GitHub Pages. Nunca fazer push sem o usuário pedir.
