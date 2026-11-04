import fs from 'node:fs';
import path from 'node:path';

const AUTHOR_KEY = 'matheus';

const [slug, ...titleParts] = process.argv.slice(2);
if (!slug || titleParts.length === 0) {
  console.error('Uso: npm run new-post -- <slug> "<Título em PT-BR>"');
  process.exit(1);
}

const title = titleParts.join(' '); // vai entre aspas no front matter (aceita ":" no título)
const date = new Date().toLocaleDateString('sv-SE'); // YYYY-MM-DD no fuso local
const fileName = `${date}-${slug}.md`;

const targets = [
  { file: path.join('blog', fileName), lang: 'pt' },
  { file: path.join('i18n', 'en', 'docusaurus-plugin-content-blog', fileName), lang: 'en' },
];

for (const { file, lang } of targets) {
  if (fs.existsSync(file)) {
    console.error(`Já existe: ${file}`);
    process.exit(1);
  }
  fs.mkdirSync(path.dirname(file), { recursive: true });
  const body =
    lang === 'pt'
      ? `---
title: ${JSON.stringify(title)}
description: ''
authors: [${AUTHOR_KEY}]
tags: []
draft: true
---

Primeiro parágrafo (aparece na listagem).

<!-- truncate -->

## Introdução

`
      : `---
title: ''
description: ''
authors: [${AUTHOR_KEY}]
tags: []
draft: true
---

First paragraph (shown in the listing).

<!-- truncate -->

## Introduction

`;
  fs.writeFileSync(file, body);
  console.log(`Criado: ${file}`);
}
