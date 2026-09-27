// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import starlight from "@astrojs/starlight";
import mermaid from "astro-mermaid";
import starlightHeadingBadges from "starlight-heading-badges";

// https://astro.build/config
export default defineConfig({
  site: "https://kaccayana.github.io",
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
  vite: {
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
    // Mermaid diagrams: client-side, follows the light/dark toggle. Colours come from the
    // site's own --sl-color-* tokens via themeCSS, so diagrams never hard-code colours.
    mermaid({
      theme: "default",
      autoTheme: true,
      enableLog: false,
      mermaidConfig: {
        fontFamily: '"Noto Sans", sans-serif',
        flowchart: { curve: "basis", useMaxWidth: true, padding: 8, nodeSpacing: 28, rankSpacing: 44 },
        themeCSS: `
          .node rect, .node circle, .node ellipse, .node polygon, .node path { fill: var(--sl-color-gray-6); stroke: var(--sl-color-accent); stroke-width: 1.5px; }
          .node polygon { fill: var(--sl-color-accent-low); }
          .label, .nodeLabel, .edgeLabel, .cluster span, .cluster .label { color: var(--sl-color-text) !important; font-family: var(--sl-font, "Noto Sans"), sans-serif; }
          .node polygon ~ .label .nodeLabel, .node polygon ~ .label span { color: var(--sl-color-white) !important; }
          .edgeLabel, .edgeLabel p, .edgeLabel span, .labelBkg { background-color: var(--sl-color-bg) !important; }
          .edgePath .path, .flowchart-link { stroke: var(--sl-color-gray-3); stroke-width: 1.5px; }
          .arrowheadPath, marker path { fill: var(--sl-color-gray-3); stroke: var(--sl-color-gray-3); }
          .cluster rect { fill: var(--sl-color-bg-nav); stroke: var(--sl-color-hairline); }
        `,
      },
    }),
    starlight({
      title: "Kaccāyana",
      components: {
        Head: "./src/components/Head.astro",
      },
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
          items: [{ autogenerate: { directory: 'kaccayana' } }],
        },
        {
          label: "Bālāvatāra",
          items: [{ autogenerate: { directory: 'balavatara' } }],
        },
        {
          label: "Rūpasiddhi",
          items: [{ autogenerate: { directory: 'rupasiddhi' } }],
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