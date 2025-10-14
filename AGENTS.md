# Repository Guidelines

## Project Structure & Module Organization
The Vite-powered entry point lives in `src/main.ts`, which selects a sketch and mounts it via p5. Individual sketches sit in `src/sketches`, one file per concept, and are aggregated through `src/sketches/index.ts`; add new modules there so the selector can discover them. Static HTML scaffolding stays in `index.html`, while build and TypeScript configuration live in `tsconfig.json` and `vite.config.ts` (if introduced). Keep shared utilities under `src/sketches` or a new `src/lib` folder to avoid coupling sketches.

## Build, Test, and Development Commands
Run `pnpm install` once to hydrate dependencies. Use `pnpm dev` for an HMR-enabled playground at `http://localhost:5173`. `pnpm build` emits the production bundle to `dist`, and `pnpm preview` serves that bundle for smoke testing. Run type checks with `pnpm tsc --noEmit`; failures block merges.

## Coding Style & Naming Conventions
Source files are TypeScript modules using ESNext syntax and two-space indentation. Default-export each sketch with a filename-matching identifier (for example, `grid.ts` exports `grid`). Use `camelCase` for functions and variables, `PascalCase` for types (`Sketch`), and keep the p5 instance parameter named `p` for consistency. Favor `const` and pure helpers; place sketch-specific state inside the exported function. When adding tooling, align with Vite/TypeScript defaults—e.g., Prettier with the same spacing.

## Testing Guidelines
There is no automated test harness yet, so rely on strict type checking plus manual verification. Confirm new sketches by loading them via `?sketch=<key>` in the browser selector and exercising interactions. Before opening a PR, ensure `pnpm build` succeeds and the preview shows expected output. If you introduce testing tools (e.g., Vitest or Playwright), document command aliases and keep snapshot artifacts out of `src/sketches`.

## Commit & Pull Request Guidelines
Follow the existing git history: concise, Title Case summaries in the imperative mood ("Add multi-sketch support"). Group related changes per commit. Pull requests should describe motivation, outline testing performed, and link related issues. Include screenshots or GIFs for visual changes, note new configuration, and call out follow-up work so reviewers can respond quickly.

## Sketch Authoring Tips
Keep canvas sizes and frame rates configurable at the top of each sketch. Prefer deterministic seeds or documented randomness to aid reproducibility. Reuse shared palettes or utilities rather than duplicating logic so future sketches stay lightweight.
