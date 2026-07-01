import { defineCollection, z } from 'astro:content';

const tools = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    // Which section the card lives in.
    tier: z.enum(['structural', 'pixel', 'dashboard', 'logviewer', 'research']),
    // "Gource-like value" rating shown as a badge on the card.
    value: z.enum(['high', 'medium', 'low']),
    note: z.string(),
    // Hotlinked remote image (project demo GIF/screenshot, or an og fallback).
    image: z.string().url(),
    imageAlt: z.string(),
    // Fallback used by the client-side onerror handler if `image` fails to load.
    fallbackImage: z.string().url().optional(),
    links: z
      .array(
        z.object({
          label: z.string(),
          url: z.string().url(),
        })
      )
      .min(1),
    // Sort order within a tier (lower = first).
    order: z.number().default(100),
  }),
});

export const collections = { tools };
