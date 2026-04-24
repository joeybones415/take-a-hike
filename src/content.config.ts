import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const trails = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/trails' }),
  schema: z.object({
    title: z.string(),
    region: z.string(),
    date: z.coerce.date(),
    lat: z.number(),
    lng: z.number(),
    distance_mi: z.number().optional(),
    elevation_ft: z.number().optional(),
    stars: z.number().min(1).max(5).optional(),
    summary: z.string(),
  }),
});

export const collections = { trails };
