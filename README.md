# kaccayana.github.io

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)
[![pages-build-deployment](https://github.com/kaccayana/kaccayana.github.io/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/kaccayana/kaccayana.github.io/actions/workflows/pages/pages-build-deployment)

A translation of the earliest available Pāli grammar into modern English, together with Bālāvatāra, the fourteenth-century primer based on it.

> [!IMPORTANT]
> **Status.** The [Bālāvatāra](https://kaccayana.github.io/balavatara/) translation is complete. It was produced through a mix of hand translation, the [MITRA-QWEN](https://huggingface.co/buddhist-nlp/mitra-qwen35-translate) Pāli–English model from the [Dharmamitra](https://dharmamitra.org) project (run locally, as a literal crib) and Claude Fable 5.1 (Anthropic), which reworked the machine drafts into the style of the hand-translated chapters; the result was checked against the Pāli before publication. Of [Kaccāyana](https://kaccayana.github.io/kaccayana/) itself, the Sandhi and Nāma chapters are translated; the remaining chapters are still drafts.

> [!NOTE]
> This work is public domain using the CC0 licence and the source code is available on Github. If you like this work and wish to show your appreciation, please consider sponsoring me.

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
