# kaccayana.github.io

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)
[![pages-build-deployment](https://github.com/kaccayana/kaccayana.github.io/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/kaccayana/kaccayana.github.io/actions/workflows/pages/pages-build-deployment)

A translation of the earliest available Pāli grammar into modern English, together with Bālāvatāra, the fourteenth-century primer based on it.

> [!IMPORTANT]
> **Status.** The [Bālāvatāra](https://kaccayana.github.io/balavatara/) translation is complete. It was produced through a mix of hand translation, the [MITRA-QWEN](https://huggingface.co/buddhist-nlp/mitra-qwen35-translate) Pāli–English model from the [Dharmamitra](https://dharmamitra.org) project (run locally, as a literal crib) and Claude Fable 5.1 (Anthropic), which reworked the machine drafts into the style of the hand-translated chapters; the result was checked against the Pāli before publication. All eight chapters of [Kaccāyana](https://kaccayana.github.io/kaccayana/) itself are translated the same way, each sutta with its analysis, the vutti, worked examples with Tipiṭaka citations and counter-examples.

> [!NOTE]
> **Licence.** The translations, commentary, notes, diagrams and code in this repository are dedicated to the public domain under [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/). Material reproduced from other sources is **not** covered by that dedication and keeps its own terms; the full list, with credits, is in [LICENSE](LICENSE):
>
> - The Pāli text of Kaccāyana and Bālāvatāra is the Chaṭṭha Saṅgāyana edition published by the [Vipassana Research Institute](https://tipitaka.org), reproduced with attribution.
> - The 1935 University of Calcutta translation of Bālāvatāra (Vidyabhusana, Punnananda Swami and Mitra) is reproduced as a historical text; any copyright that still subsists remains with its holders.
> - U Nandisena's English translation of Kaccāyana (2005; electronic edition © 2017 Instituto de Estudios Buddhistas Hispano) is licensed [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/): attribution, no commercial use, no derivatives.
> - The articles and reviews by Aleix Ruiz-Falqués in the reference section remain © the author and their publishers (Aditya Prakashan, Northern Illinois University Press, De Gruyter, the Ñāṇasaṃvara Centre for Buddhist Studies, the Pali Text Society, The Sanskrit Library, Brill); no licence is granted.
> - Photographs from Wikimedia Commons are CC BY-SA 3.0 and are credited in LICENSE.
>
> If you like this work and wish to show your appreciation, please consider sponsoring me.

```sh
pnpm install
pnpm check
pnpm build
```

## 🚀 Project Structure

Inside of your Astro + Starlight project, you'll see the following folders and files:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   ├── docs/
│   └── content.config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                    | Action                                           |
| :------------------------- | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm run dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm run build`           | Build your production site to `./dist/`          |
| `pnpm run preview`         | Preview your build locally, before deploying     |
| `pnpm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm run astro -- --help` | Get help using the Astro CLI                     |
