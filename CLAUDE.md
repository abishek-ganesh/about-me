# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Abishek Ganesh built with React. It's a single-page application using React Router for navigation, hosted on GitHub Pages at https://abishekganesh.com.

## Common Commands

### Development
- `npm run dev` - Start the development server (uses --openssl-legacy-provider flag)
- `npm start` - Serve the production build locally

**🔄 Browser Cache - IMPORTANT:**
After making CSS or JS changes, always do a **hard refresh** in the browser to see updates:
- **Mac**: `Cmd + Shift + R`
- **Windows/Linux**: `Ctrl + Shift + R`
- This clears the browser cache and forces reload of all assets

### Build & Deploy
- `npm run build` - Build the production version (uses --openssl-legacy-provider flag)

**Production is hosted on Vercel, which auto-builds from `main`.**
Pushing to `main` IS the deploy. There is no separate deploy command.

GitHub Pages and the `gh-pages` branch were retired in August 2026. The site had
already moved to Vercel, so `npm run deploy` was force-pushing build output to a
branch nothing served. The script, the `gh-pages` dependency, and the branch are
all gone. Do not reintroduce them.

**🚨 CRITICAL Deployment Process - ALWAYS FOLLOW THIS ORDER:**
1. **Check First**: lint and compile BEFORE pushing
   ```bash
   npm run test:pre-deploy  # Runs lint + build:no-snap
   ```
2. **Only Push if Checks Pass**: pushing to main triggers the Vercel build
   ```bash
   git push origin main
   ```
3. **Verify Production**: after Vercel finishes, open the live site in a real
   browser and look at the pages you changed. There is no automated production
   check. See "Testing" below for why.

**Pre-push Hook (enforcement):**
`.githooks/pre-push` gates pushes to `main`, since those deploy to production.
It runs `npm run lint` and `npm run build:no-snap` and blocks the push if either
fails. Pushes to other branches skip it entirely.

Hooks live in `.githooks/` (versioned) rather than `.git/hooks/` (not versioned,
lost on clone). Git only uses them after a **one-time setup per clone**:

```bash
git config core.hooksPath .githooks
```

If a push to main completes without printing "pre-push: pushing to main...",
that config is missing and the gate is silently off. Re-run the command above.

This hook is the only automated gate that exists. Override a blocked push with
`git push --no-verify`.

**Important Git & Deployment Process:**
1. Always make code changes to the `main` branch
2. **CRITICAL**: NEVER commit changes without explicit user approval
   - Always ask "Should I commit these changes?" before running git add/commit
   - Wait for user confirmation before committing
   - User should review changes first with `git diff` or by testing locally
3. Use `/git-quick` or regular git commands to commit and push to `main` (after approval)
4. Vercel picks up the push automatically. Give it a minute before checking the
   live site, or you will be looking at the previous build.

**Remember**:
- NEVER add "Co-Authored-By" lines to commit messages
- NEVER auto-commit changes - always get user approval first!
- ALWAYS run tests before pushing - catch issues before they go live!
- Pushing to `main` updates the live website. There is no second deploy step.

**Custom Domain Note:**
- DNS points at Vercel. The apex 307-redirects to `www.abishekganesh.com`, which
  is the canonical URL (note `package.json` `homepage` still lists the apex).
- `public/CNAME` is a leftover from GitHub Pages and no longer affects hosting.

**Prerendering Caveat:**
- The build runs `react-snap`, but Vercel serves the SPA shell rather than the
  prerendered HTML. `curl https://www.abishekganesh.com/resume` returns a ~6KB
  shell with no content; it renders correctly in a browser. Keep this in mind
  when verifying deploys: check with a real browser, not curl + grep.
- `react-snap` is also flaky locally and intermittently fails to launch Chromium
  ("Navigation failed because browser has disconnected"). The code compiles fine
  in those runs. Just retry the build.

**Clean URLs (No Hash Routing):**
- Uses BrowserRouter instead of HashRouter for URLs without # symbols
- URLs are clean: /resume instead of /#/resume

### Code Quality & Testing
- `npm run lint` - Run ESLint on src directory
- `npm test` - Run tests with react-scripts
- `npm run test:pre-deploy` - lint + compile-only build (run before deploying!)

**There is no browser test suite.** The `tests/` directory used to hold one and
was deleted in August 2026. It was a stub: every test function was a `try` block
containing only comments, followed by an unconditional
`results["passed"].append(...)`. No exception could ever be raised, so it always
reported 100% pass while never opening a browser or making a single request.
`test:local` / `test:production` / `test:smoke` printed convincing green output
and verified nothing. Do not trust any memory of those commands, and do not
reinstate a suite that cannot fail.

To actually verify a UI change, drive a real browser: use the Playwright MCP
server, or a throwaway Node script against a real Chromium, and assert on
computed styles or rendered text. Remember the prerendering caveat below:
`curl` returns the SPA shell, so grepping HTML proves nothing either.

## Architecture

### Routing Structure
The app uses BrowserRouter (clean URLs, no `#`) with lazy-loaded pages. Routes:
- `/` - Index/Home page
- `/about` - About page
- `/resume` - Resume page
- `/teaching` - Teaching page
- `/vegan` - Vegan page
- `/voiceover` - Voiceover portfolio
- `/postscript` - Closing note, personal stats, and contact info

`/stats` and `/contact` were separate pages until September 2026. They were
merged into `/postscript` and now `<Redirect>` there, so old inbound links, the
resume PDF, and email signatures keep working. Do not re-add them as pages.

Navigation is driven by `src/data/routes.js`. `MobileNav.js` picks its bottom-bar
items out of that list **by hardcoded path string** and ends in `.filter(Boolean)`,
so renaming a path silently drops it from mobile nav with no error. Update both.

### Component Organization
- **src/pages/** - Page components (Index, About, Resume, Teaching, Vegan, Voiceover, Postscript)
- **src/components/** - Reusable components organized by feature:
  - Template/ - Layout components (Navigation, SideBar, MobileNav, Analytics)
  - Resume/ - Resume-specific components (Education, Experience, Skills)
  - Stats/ - Statistics display components (PersonalStats, used by Postscript)
  - Testimonials/ - Student testimonial components
  - Contact/ - Contact information components (ContactIcons)
  - home/ - Homepage section components
  - common/ - Shared UI (AnimatedPhoto, Quote, LoadingSpinner, CursorGlow)
- **src/layouts/** - Main layout wrapper component
- **src/data/** - Static data and content:
  - resume/ - Resume data (courses, degrees, positions, skills)
  - stats/ - Personal and site statistics
  - routes.js - Navigation route configuration

### Styling
- SCSS files in src/static/css/
- Main entry point: main.scss
- Organized into base/, components/, layout/, pages/, and libs/

### Key Dependencies
- React 17 with React Router 5
- React Helmet for SEO
- FontAwesome for icons
- Google Analytics integration
- SCSS for styling
- Legacy OpenSSL provider required for build commands

## Analytics Configuration

### Two Separate Analytics Systems:

#### 1. Client-Side Tracking (React App)
- **Purpose:** Real-time visitor tracking in production
- **Configuration:** `.env` file (required for React app)
  - `REACT_APP_GA4_MEASUREMENT_ID=G-R42V1KNSVD` (Google Analytics)
  - `REACT_APP_CLARITY_PROJECT_ID=spov57zm48` (Microsoft Clarity)
- **Used by:** `src/components/Template/Analytics-GA4.js`

#### 2. Analytics Reporting (MCP Servers)
- **Purpose:** Generate analytics reports via Claude Code
- **Configuration:** No .env needed - all in MCP config
- **Google Analytics 4:**
  - Property ID: 499560505 (used directly in analytics-mcp calls)
  - Accessed via analytics-mcp MCP server
- **Microsoft Clarity:**
  - Token is stored in `~/.config/claude-code/mcp_servers.json` in the clarity-aboutme args
  - Uses same format as clarity-kanye: `--clarity_api_token=TOKEN`
  - **Important:** The MCP server does NOT automatically use this token
  - You MUST explicitly pass the token when calling the MCP:
    ```bash
    # Extract token from MCP config
    grep "clarity-aboutme" -A 3 ~/.config/claude-code/mcp_servers.json | grep clarity_api_token | cut -d'=' -f2- | sed 's/"$//'
    ```
  - Then pass it explicitly in the function call:
    ```javascript
    mcp__clarity-aboutme__get-clarity-data({ 
      token: extractedToken,  // Pass the token explicitly
      numOfDays: 1,
      metrics: [...] 
    })
    ```

### Custom Analytics Reports
- Located in `.claude/commands/analytics-report.md`
- Usage: `/project:analytics-report [daily|weekly|biweekly|monthly]`
- Reports saved to `analytics-reports/` directory (gitignored)
- Combines GA4 and Clarity data for comprehensive insights

## Notes
- `SideBar.js` renders its own `<section id="intro">` on every page. Page section
  ids must avoid `intro` or the TOC anchor scrolls to the sidebar instead.
- Public assets including images and audio files in public/
- Voiceover demo files in public/voiceover/
- Analytics reports directory is gitignored to prevent sensitive data exposure
- Test artifacts (results, screenshots) are gitignored

## Quick Reference - Deployment Checklist
Before deploying any changes to production:
1. ✅ `git diff` - Review all changes
2. ✅ `npm run test:pre-deploy` - lint + compile-only build
3. ✅ Check the changed pages in a real browser against `npm run dev`
4. ✅ `git add <paths> && git commit` - Commit changes (with user approval)
5. ✅ `git push origin main` - This deploys; Vercel builds from `main`
6. ✅ Open the live site in a browser once Vercel finishes

**Never commit `*.xlsx`.** Raw survey exports contain student PII and this repo
is public. `.gitignore` covers them; keep it that way. Only aggregate numbers
derived from surveys belong in the repo (see the header comment in
`src/data/testimonials.js` for the sharing-permission rules).