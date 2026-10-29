import { defineCollection } from 'astro/content/config';
import type { Loader } from 'astro/loaders';
import { z } from 'astro/zod';
import { docsLoader, i18nLoader } from '@astrojs/starlight/loaders';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';
import { describe, describeMarkdown } from './lib/description';

/** Starlight's docs loader, giving pages without a description one made from their text. */
function withDescriptions(loader: Loader): Loader {
	return {
		...loader,
		load: (context) =>
			loader.load({
				...context,
				store: new Proxy(context.store, {
					get(store, prop) {
						if (prop === 'set') {
							return (entry: Parameters<typeof store.set>[0]) => {
								// Markdown pages arrive rendered; MDX pages only as source.
								const text = entry.rendered?.html
									? describe(entry.rendered.html)
									: entry.body
										? describeMarkdown(entry.body)
										: undefined;
								return store.set(
									entry.data.description || !text
										? entry
										: // Flagged so the page doesn't show it as the description box (PageTitle.astro).
											{ ...entry, data: { ...entry.data, description: text, descriptionGenerated: true } },
								);
							};
						}
						const value = Reflect.get(store, prop, store);
						return typeof value === 'function' ? value.bind(store) : value;
					},
				}),
			}),
	};
}

export const collections = {
	docs: defineCollection({
		loader: withDescriptions(docsLoader()),
		schema: docsSchema({
			extend: ({ image }) =>
				z.object({
					// Only on pages not written by the site's author (the reproduced translations and studies),
					// for their SEO metadata (route-data.ts).
					author: z.union([z.string(), z.array(z.string())]).optional(),
					// A longer summary, shown under the description.
					summary: z.string().optional(),
					// Shown under the description (PageTitle.astro) and used as the page's social image.
					cover: z
						.object({
							image: image(), // relative to the page
							alt: z.string(),
							caption: z.string().optional(),
						})
						.optional(),
					// Set by the loader for pages whose description was made from their text (see above).
					descriptionGenerated: z.boolean().optional(),
				}),
		}),
	}),
	i18n: defineCollection({ loader: i18nLoader(), schema: i18nSchema() }),
};
