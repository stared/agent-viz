# Claude Trajectory Visualizations

A single-page **card gallery** of tools that visualize Claude Code / AI-agent *trajectories* —
prompts, tool calls, subagents, file changes and whole sessions. Think "Gource for Claude Code" and
everything around it.

Each card shows a screenshot/GIF, a short note, and links to sources (GitHub / npm / Hacker News /
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
note: One or two sentences describing it.
image: https://.../screenshot.png   # optional; remote URL or a /public path like /shots/foo.png
imageAlt: Alt text                   # optional
video: https://.../clip.mp4          # optional; autoplaying muted preview (takes priority over image)
repo: owner/name                     # optional; GitHub slug
stars: 1234                          # optional; GitHub stars (snapshot)
firstCommit: "2025-06-14"            # optional; shown as a "first → last commit" range
lastCommit: "2026-07-01"             # optional
order: 1                             # sort within tier (optional)
links:
  - label: GitHub
    url: https://github.com/owner/repo
---
```

Each card with a `repo` shows a **★ stars · first → last commit** line. Those values are baked from
the GitHub API (a dated snapshot), not fetched at runtime.

### Images

Cards show a **real screenshot of the tool's UI** — mostly hotlinked from each project's own repo/site
(README demo GIFs, docs, paper figures), with a couple captured from live demos and committed under
`public/shots/`. There are **no generic GitHub social-card thumbnails**: if a tool has no usable
screenshot, `image` is simply omitted and the card renders **text-only** (with a slim tier-colored top
accent) rather than showing a fake placeholder. If a hotlinked image 404s at runtime, an `onerror`
handler in `ToolCard.astro` removes the broken image area so the layout never breaks.

## Deploy (GitHub Pages)

Set `site` and `base` in `astro.config.mjs` to your Pages URL (e.g. `base: '/claude_visualizations'`),
then `pnpm build` and publish `./dist`.

---

Community tools; not affiliated with Anthropic. Screenshots belong to their respective authors.
