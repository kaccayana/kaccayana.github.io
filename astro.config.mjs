// @ts-check
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { defineConfig, fontProviders } from "astro/config";
import { satteri } from "@astrojs/markdown-satteri";
import starlight from "@astrojs/starlight";
import starlightHeadingBadges from "starlight-heading-badges";
import { citations } from "./src/plugins/citations.mjs";
import { mermaidFences } from "./src/plugins/mermaid.mjs";

// Sätteri, Astro 7's Markdown processor, with Mermaid fences turned into <pre class="mermaid"> for
// src/components/Mermaid.astro to render (src/plugins/mermaid.mjs) and pandoc-style citations
// ([@Norman1997] or @Norman1997, resolved against bibliography.bib and rendered in APA style under the
// page's `## References` heading; src/plugins/citations.mjs), the same files as in the buddhavacana
// and tidipa repos.
const processor = satteri({ mdastPlugins: [mermaidFences()], hastPlugins: [citations()] });
// Astro caches each page's rendered Markdown until the page or the config digest changes, and the
// digest skips functions, so the plugin alone would not notice an edit to bibliography.bib. The
// file's hash here makes such an edit re-render every page.
Object.assign(processor.options, {
  bibliographyHash: createHash("sha1").update(readFileSync("./bibliography.bib")).digest("hex"),
});

// https://astro.build/config
export default defineConfig({
  site: "https://kaccayana.github.io",
  // Fetch pages on hover so navigation is near-instant (with the cross-fade in custom.css).
  prefetch: { prefetchAll: true },
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Noto Sans",
      cssVariable: "--sl-font",
      weights: [400, 600, 700],
      styles: ["normal"],
      subsets: ["latin", "latin-ext"],
    },
    {
      provider: fontProviders.google(),
      name: "Noto Sans Mono",
      cssVariable: "--sl-font-mono",
      weights: [400],
      styles: ["normal"],
      subsets: ["latin", "latin-ext"],
      fallbacks: ["monospace"],
    },
  ],
  markdown: { processor },
  vite: {
    // Pre-bundle Mermaid for the dev server; src/components/Mermaid.astro loads it on demand.
    optimizeDeps: { include: ["mermaid"] },
    build: {
      chunkSizeWarningLimit: 1500,
      rolldownOptions: {
        onwarn(warning, defaultHandler) {
          if (
            warning.code === "MODULE_LEVEL_DIRECTIVE" &&
            warning.message.includes('"use astro:head-inject"')
          ) {
            return;
          }
          defaultHandler(warning);
        },
      },
    },
  },
  integrations: [
    starlight({
      title: "Kaccāyana",
      components: {
        Head: "./src/components/Head.astro",
        PageTitle: "./src/components/PageTitle.astro",
        LastUpdated: "./src/components/LastUpdated.astro",
        // Quartz v5's graph view and backlinks (src/components/Graph.astro, Backlinks.astro).
        PageSidebar: "./src/components/PageSidebar.astro",
        Footer: "./src/components/Footer.astro",
        // Reader mode (Quartz v5) and a toggle for each sidebar, beside the theme picker.
        ThemeSelect: "./src/components/ThemeSelect.astro",
      },
      lastUpdated: true,
      // SEO tags and JSON-LD for each page, from its frontmatter.
      routeMiddleware: "./src/route-data.ts",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/kaccayana/kaccayana.github.io",
        },
      ],
      sidebar: [
        {
          label: "Introduction",
          slug: "introduction",
          // items: [
          //   // Each item here is one entry in the navigation menu.
          //   { label: "Example Guide", slug: "guides/example" },
          // ],
        },
        {
          label: "Kaccāyana",
          items: [
            'kaccayana',
            'kaccayana/1-sandhikappa', 
            { label: "2. Nāmakappa", collapsed: true, items: [{ autogenerate: { directory: 'kaccayana/2-namakappa' } }] }, 'kaccayana/3-karakakappa', 'kaccayana/4-samasakappa',
            'kaccayana/5-taddhitakappa', 
            { label: "6. Ākhyātakappa", collapsed: true, items: [{ autogenerate: { directory: 'kaccayana/6-akhyatakappa' } }] }, 
            { label: "7. Kibbidhānakappa", collapsed: true, items: [{ autogenerate: { directory: 'kaccayana/7-kibbidhanakappa' } }] }, 'kaccayana/8-unadikappa',
            { label: "U Nandisena (2005)", collapsed: true, items: [{ autogenerate: { directory: 'kaccayana/nandisena' } }] },
            { label: "D'Alwis (1863)", collapsed: true, items: [{ autogenerate: { directory: 'kaccayana/alwis' } }] },
          ],
        },
        {
          label: "Bālāvatāra",
          items: [
            'balavatara',
            'balavatara/0-panama', 'balavatara/1-sandhi', 'balavatara/2-nama', 'balavatara/3-samasa', 'balavatara/4-taddhita',
            'balavatara/cscd4',
            { label: "Vidyabhusana, Punnananda and Mitra (1935)", collapsed: true, items: [{ autogenerate: { directory: 'balavatara/mitra' } }] },
          ],
        },
        {
          label: "Rūpasiddhi",
          items: [
            'rupasiddhi',
            'rupasiddhi/1-sandhikanda', 
            { label: "2. Nāmakaṇḍa", collapsed: true, items: [{ autogenerate: { directory: 'rupasiddhi/2-namakanda' } }] }, 'rupasiddhi/3-karakakanda', 'rupasiddhi/4-samasakanda',
            'rupasiddhi/5-taddhitakanda', 
            { label: "6. Ākhyātakaṇḍa", collapsed: true, items: [{ autogenerate: { directory: 'rupasiddhi/6-akhyatakanda' } }] }, 
            { label: "7. Kibbidhānakaṇḍa", collapsed: true, items: [{ autogenerate: { directory: 'rupasiddhi/7-kibbidhanakanda' } }] },
            { label: "Rachiwong (1995)", collapsed: true, items: [{ autogenerate: { directory: 'rupasiddhi/rachiwong' } }] },
          ],
        },
        {
          label: "Thiab Malai (1997)",
          items: [{ autogenerate: { directory: 'malai' } }],
        },
        {
          label: "Reference",
          items: [{ autogenerate: { directory: 'reference' } }],
        },
      ],
      customCss: [
        "./src/styles/custom.css",
      ],
      logo: {
        src: "./src/assets/rosely.svg",
      },
      defaultLocale: "root",
      locales: {
        root: {
          label: "English",
          lang: "en",
        },
      },
      plugins: [starlightHeadingBadges()]
    })
  ]
});