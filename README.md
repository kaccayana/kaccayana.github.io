# kaccayana.github.io

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)
[![pages-build-deployment](https://github.com/kaccayana/kaccayana.github.io/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/kaccayana/kaccayana.github.io/actions/workflows/pages/pages-build-deployment)

Modern English translations of three related classical Pāli grammars: **Kaccāyana**, the earliest that survives (sixth or seventh century CE), Buddhappiya's **Padarūpasiddhi** (thirteenth century), which recasts its rules in a teaching order with paradigms and derivations, and Dhammakitti's **Bālāvatāra** (fourteenth century), the primer that abridges both. The site also reproduces three earlier English translations as reference texts.

> [!IMPORTANT]
> **Status.** All three translations are complete: [Kaccāyana](https://kaccayana.github.io/kaccayana/) (§1–§673, eight chapters, each sutta with its analysis, the vutti, worked examples with Tipiṭaka citations and counter-examples), the [Padarūpasiddhi](https://kaccayana.github.io/rupasiddhi/) (Rūp 1–684, seven sections, each sutta linked to the Kaccāyana rule it is, with Buddhappiya's commentary, paradigms and derivations) and [Bālāvatāra](https://kaccayana.github.io/balavatara/) (¶1–¶269, four sections). They are modern translations: the option markers `vā`, `kvaci`, `navā` and `vibhāsā` are analysed after Aleix Ruiz-Falqués' work on the two levels of optionality in Kaccāyana and the Rūpasiddhi, and the grammar is described in its own terms, with inflection forms ①…⑦ rather than Latin cases and declensions. They were produced through a mix of hand translation, the [MITRA-QWEN](https://huggingface.co/buddhist-nlp/mitra-qwen35-translate) Pāli–English model from the [Dharmamitra](https://dharmamitra.org) project (run locally, as a literal crib) and Claude Fable 5.1 (Anthropic), which reworked the drafts into the style of the hand-translated chapters; every sutta was checked against the Pāli before publication.
>
> Three earlier translations are reproduced on the site as reference texts, and the new translations are being collated against them sutta by sutta: [U Nandisena's Kaccāyana](https://kaccayana.github.io/kaccayana/nandisena) (2005) — done; [Phramaha Thiab Malai's Kaccāyana study](https://kaccayana.github.io/malai/front-matter) (Pune, 1997) — in progress; the [1935 University of Calcutta Bālāvatāra](https://kaccayana.github.io/balavatara/mitra) — to follow.

> [!NOTE]
> **Licence.** The translations, commentary, notes, diagrams and code in this repository are dedicated to the public domain under [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/). Material reproduced from other sources is **not** covered by that dedication and keeps its own terms; the full list, with credits, is in [LICENSE](LICENSE):
>
> - The Pāli text of Kaccāyana, the Padarūpasiddhi and Bālāvatāra is the Chaṭṭha Saṅgāyana edition published by the [Vipassana Research Institute](https://tipitaka.org), reproduced with attribution.
> - The 1935 University of Calcutta translation of Bālāvatāra (Vidyabhusana, Punnananda Swami and Mitra) is reproduced as a historical text; any copyright that still subsists remains with its holders.
> - U Nandisena's English translation of Kaccāyana (2005; electronic edition © 2017 Instituto de Estudios Buddhistas Hispano) is licensed [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/): attribution, no commercial use, no derivatives.
> - Phramaha Thiab Malai's *Kaccāyana-Vyākaraṇa: A Critical Study* (Ph.D. thesis, University of Pune, 1997) is reproduced as a cleaned reading edition of the typescript; copyright remains with the author and no licence is granted.
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
│   └── reference/        PDFs of the reference texts and articles, served unchanged
├── src/
│   ├── assets/
│   ├── content/
│   │   ├── docs/
│   │   │   ├── kaccayana/    the Kaccāyana translation, chapter by chapter
│   │   │   ├── rupasiddhi/   the Padarūpasiddhi translation
│   │   │   ├── balavatara/   the Bālāvatāra translation, the CSCD text and the 1935 translation
│   │   │   ├── malai/        Thiab Malai's 1997 study, as a reading edition
│   │   │   └── reference/    articles and other reference material
│   └── content.config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name; the sidebar groups are generated from the directories.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons and the reference PDFs, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                    | Action                                           |
| :------------------------- | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm run dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm check`               | Type-checks the site with `tsc` (the repo is pinned to a TypeScript 7 preview, so `astro check` does not run here) |
| `pnpm run build`           | Build your production site to `./dist/`          |
| `pnpm run preview`         | Preview your build locally, before deploying     |
| `pnpm run astro ...`       | Run CLI commands like `astro add`                |
| `pnpm run astro -- --help` | Get help using the Astro CLI                     |
