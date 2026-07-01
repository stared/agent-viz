// @ts-check
import { defineConfig } from 'astro/config';

// If deploying to GitHub Pages at https://<user>.github.io/claude_visualizations/,
// set `site` to your Pages origin and `base` to '/claude_visualizations'.
// For a user/root site or local use, leave `base` as '/'.
export default defineConfig({
  site: 'https://example.github.io',
  base: '/',
});
