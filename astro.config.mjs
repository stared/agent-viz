// @ts-check
import { defineConfig } from 'astro/config';

// Deployed as a GitHub Pages project site for stared/agent-viz, served under
// the account's custom domain: https://p.migdal.pl/agent-viz/
// `base` must match the repo path; local `pnpm dev` therefore serves at /agent-viz/.
export default defineConfig({
  site: 'https://p.migdal.pl',
  base: '/agent-viz',
});
