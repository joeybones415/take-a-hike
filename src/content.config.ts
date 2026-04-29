import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const trails = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/trails' }),
  schema: z.object({
    title: z.string(),
    region: z.string(),
    status: z.enum(['hiked', 'planned']).default('hiked'),
    date: z.coerce.date().optional(),
    lat: z.number(),
    lng: z.number(),
    distance_mi: z.number().optional(),
    elevation_ft: z.number().optional(),
    stars: z.number().min(1).max(5).optional(),
    summary: z.string(),
    notes: z.string().optional(),
    substack_url: z.string().url().optional(),
    hero_image: z.string().url().optional(),
    parking_lat: z.number().optional(),
    parking_lng: z.number().optional(),
    gpx: z.string().optional(),
    duration: z.string().optional(),
    difficulty: z.enum(['easy', 'moderate', 'hard']).optional(),
    route_type: z.enum(['out-and-back', 'loop', 'point-to-point']).optional(),
  }).superRefine((data, ctx) => {
    const hasLat = data.parking_lat !== undefined;
    const hasLng = data.parking_lng !== undefined;
    if (hasLat && !hasLng) {
      ctx.addIssue({ code: 'custom', message: 'parking_lng is required when parking_lat is set', path: ['parking_lng'] });
    }
    if (hasLng && !hasLat) {
      ctx.addIssue({ code: 'custom', message: 'parking_lat is required when parking_lng is set', path: ['parking_lat'] });
    }
  }),
});

export const collections = { trails };
