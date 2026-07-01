import { defineCollection, z } from 'astro:content';

const tools = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    // Which section the card lives in.
    tier: z.enum(['structural', 'pixel', 'dashboard', 'logviewer', 'research']),
    note: z.string(),
    // Screenshot of the actual tool UI — either a hotlinked remote URL or a
    // local path under public/ (e.g. /shots/foo.png). Omit when no usable
    // screenshot exists; the card then renders text-only.
    image: z
      .string()
      .refine((s) => /^https?:\/\//.test(s) || s.startsWith('/'), {
        message: 'image must be an http(s) URL or a /public path',
      })
      .optional(),
    imageAlt: z.string().optional(),
    // Autoplaying muted video preview (used when the only artifact is a clip).
    video: z.string().url().optional(),
    // GitHub metadata (baked from the API; a dated snapshot).
    repo: z.string().optional(),
    stars: z.number().optional(),
    firstCommit: z.string().optional(),
    lastCommit: z.string().optional(),
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
