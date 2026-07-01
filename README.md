# Claude Trajectory Visualizations

A single-page **card gallery** of tools that visualize Claude Code / AI-agent *trajectories* —
prompts, tool calls, subagents, file changes and whole sessions. Think "Gource for Claude Code" and
everything around it.

Each card shows a screenshot/GIF, a short note, a **"Gource-like value"** rating (how much it renders
the run as a living, spatial thing vs. a log), and links to sources (GitHub / npm / Hacker News /
blog / marketplace / arXiv).

Tools are grouped into five tiers:

1. **Structural / graph replay** — the closest to Gource (Agent Flow, Claude Code Graph, 3D viz, Gource)
2. **Pixel-art companions** — playful/ambient (Claude Quest, Pixel Agents, Claude Office, …)
3. **Dashboards, analytics & scrollytelling** — patterns over time
4. **Session log viewers & replay** — JSONL → readable transcripts
5. **Research & observability** — state-transition trees, timelines, failure chains

## Develop

```sh
pnpm install
pnpm dev        # http://localhost:4321
```

## Build & preview

```sh
pnpm build      # static output in ./dist
pnpm preview
```

## Adding / editing tools

The gallery is data-driven. Each tool is one markdown file in `src/content/tools/*.md`; the
frontmatter is the card. Schema lives in `src/content/config.ts`:

```yaml
---
name: Tool Name
tagline: One-line description
tier: structural   # structural | pixel | dashboard | logviewer | research
value: high        # high | medium | low  (the "Gource-like value")
note: One or two sentences describing it.
image: https://.../screenshot.png       # hotlinked; a project demo image where possible
imageAlt: Alt text
fallbackImage: https://opengraph.githubassets.com/1/owner/repo   # optional onerror fallback
order: 1           # sort within tier (optional)
links:
  - label: GitHub
    url: https://github.com/owner/repo
---
```

### Images

Screenshots are **hotlinked** (no local copies). Each card prefers the project's own demo
GIF/screenshot; when a README only has badges/video, it falls back to the GitHub social card at
`https://opengraph.githubassets.com/1/<owner>/<repo>`. If a hotlinked image ever breaks, an
`onerror` handler in `ToolCard.astro` swaps to `fallbackImage` at runtime so the layout never breaks.

## Deploy (GitHub Pages)

Set `site` and `base` in `astro.config.mjs` to your Pages URL (e.g. `base: '/claude_visualizations'`),
then `pnpm build` and publish `./dist`.

---

Community tools; not affiliated with Anthropic. Screenshots belong to their respective authors.
