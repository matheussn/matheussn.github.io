# Matheus Santiago — Portfólio + Blog + Produtos (Next.js estático)

Site estático pronto para GitHub Pages com deploy via branch (sem Actions). Inclui blog em MDX, anúncios (AdSense) apenas em produção, banner LGPD e arquivos de SEO.

## Desenvolvimento

- Requisitos: Node 20+
- Instalar deps: `npm i`
- Rodar dev: `npm run dev`
- Variáveis locais: crie `.env.local` baseado em `env.example`

## Deploy via Branch (docs/)

1) Configurar (se for Project Pages):
- Caso o repo seja um projeto (ex.: `usuario/meu-site` → `https://usuario.github.io/meu-site`), crie `.env.local` com:
  - `PROJECT_PAGES=true`
  - `REPO_NAME="nome-do-repo"`
- Em User/Org Pages (repo `usuario.github.io`), não defina `PROJECT_PAGES`.

2) Build local e export:
- `npm run build:docs` → gera o site em `docs/` e cria `docs/.nojekyll`. Se `SITE_DOMAIN` estiver definido, cria `docs/CNAME`.

3) Commit e push:
- Adicione e commite a pasta `docs/` (ela não é ignorada):
  - `git add docs && git commit -m "build: export site para docs" && git push`

4) GitHub Pages (no repositório):
- Settings → Pages → Source: “Deploy from a branch”
- Branch: `main` e Folder: `/docs`
- Aguarde a publicação.

5) Domínio custom (opcional):
- Para usar um domínio próprio (não o `*.github.io`), defina `SITE_DOMAIN` em `.env.local` antes da build. O arquivo `docs/CNAME` será criado.
- Não defina `SITE_DOMAIN` se você for usar o domínio do GitHub Pages (ex.: `matheussn.github.io`).
- Configure o DNS: `www` → CNAME para `usuario.github.io`; apex com ALIAS/ANAME/CNAME flattening.

6) Teste local da versão exportada:
- `npm run serve:docs` e abra `http://localhost:3000` (ou porta informada) para validar.

## AdSense e Analytics

- AdSense: `src/components/AdSlot.tsx` só carrega script em produção; em dev mostra “Ad preview”.
- GA4: por padrão desativado. Defina `GA_MEASUREMENT_ID` e aceite o banner de cookies para ativar.

## Ads.txt (AdSense)

- Onde encontrar o Publisher ID: no Google AdSense, acesse Conta → Informações da conta → ID do editor (formato `pub-…`).
- Como configurar (use apenas UMA opção):
  1. Defina `ADSENSE_PUB_ID="pub-1234567890123456"`, ou
  2. Defina `ADS_TXT_CONTENT` com o conteúdo completo do seu `ads.txt` (pode ser multilinha).
- Build: `npm run build:docs`.
- O script `scripts/after-export.js` garante que `docs/ads.txt` seja gerado conforme as variáveis. Se nenhuma variável estiver definida, usa o fallback `public/ads.txt`.
- Verificação: após publicar, abra `https://SEU_DOMINIO/ads.txt` e confira o conteúdo.
- Propagação: o status no AdSense pode levar horas ou dias para atualizar.

Importante para Project Pages (sem domínio custom)
- Se o site for publicado em `https://usuario.github.io/SEU_REPO`, o AdSense exige o `ads.txt` no host raiz: `https://usuario.github.io/ads.txt` (e não em `.../SEU_REPO/ads.txt`).
- Soluções:
  1. Use um domínio custom (recomendado) com `CNAME` → `usuario.github.io`.
  2. Publique um `ads.txt` no repositório raíz `usuario/usuario.github.io`.
- Recomenda-se domínio custom para aprovações do AdSense.

## Estrutura do Conteúdo

- Posts MDX: `src/content/blog/*.mdx`
- Produtos: `src/lib/products.ts`
- SEO/Base: `src/lib/seo.ts`

## Páginas

- Home, Sobre, Projetos, Blog, Produtos, Contato, Política de Privacidade, Termos de Uso, 404

## Notas de Publicação em Subpasta

- `next.config.js` ajusta automaticamente `basePath`/`assetPrefix` quando `PROJECT_PAGES='true'` e `REPO_NAME` é definido.
- Links internos via `next/link` e assets no `<head>` usam o prefixo calculado.
