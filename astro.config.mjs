// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import starlight from "@astrojs/starlight";
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