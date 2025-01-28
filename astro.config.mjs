// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import rehypeMermaid from "rehype-mermaid";
import remarkPlantUML from "@akebifiky/remark-simple-plantuml";
import remarkAlerts from "remark-alerts";
import astroExpressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  site: "https://kaccayana.github.io",
  integrations: [
    astroExpressiveCode({
      shiki: {
        // Allow using the alias 'mjs' for the 'javascript' language
        langAlias: {
          plantuml: "txt",
        },
      },
    }),
    starlight({
      title: "Kaccāyana",
      social: {
        github: "https://github.com/ChristineTham",
      },
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
          autogenerate: { directory: "kaccayana" },
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
      customCss: [
        "./src/styles/custom.css",
        "remark-alerts/styles/github-colors-light.css",
        "remark-alerts/styles/github-colors-dark-media.css",
        "remark-alerts/styles/github-base.css",
        "@fontsource/noto-sans/400.css",
        "@fontsource/noto-sans/600.css",
        "@fontsource/noto-mono/400.css",
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
    }),
  ],
  markdown: {
    remarkPlugins: [remarkAlerts, remarkPlantUML],
    rehypePlugins: [rehypeMermaid],
  },
});
