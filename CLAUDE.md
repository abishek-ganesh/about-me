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
1. **Test First**: Run automated tests BEFORE pushing
   ```bash
   npm run test:pre-deploy  # Runs lint + local tests (needs `npm run dev` running)
   ```
2. **Only Push if Tests Pass**: pushing to main triggers the Vercel build
   ```bash
   git push origin main
   ```
3. **Verify Production**: after Vercel finishes, verify the live site
   ```bash
   npm run test:production  # Test the live website
   ```

**Important Git & Deployment Process:**
1. Always make code changes to the `main` branch
2. **CRITICAL**: NEVER commit changes without explicit user approval
   - Always ask "Should I commit these changes?" before running git add/commit
   - Wait for user confirmation before committing
   - User should review changes first with `git diff` or by testing locally
3. Use `/git-quick` or regular git commands to commit and push to `main` (after approval)
4. Vercel picks up the push automatically. Give it a minute before running
   `npm run test:production`, or the tests will hit the previous build.

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
- `npm run test:local` - Run automated tests on local development server
- `npm run test:production` - Test the live production website
- `npm run test:smoke` - Quick smoke tests for critical paths
- `npm run test:pre-deploy` - Combined lint + tests (run before deploying!)

**Automated Testing Framework:**
- Tests located in `tests/` directory
- Uses Playwright MCP for browser automation
- Tests cover: navigation, dark mode, carousel, service worker, lazy loading, responsive design
- Returns exit code 0 for success, 1 for failure (CI/CD ready)
- Generates JSON report in `tests/playwright/test-results.json`

## Architecture

### Routing Structure
The app uses HashRouter with lazy-loaded pages. Main routes:
- `/` - Index/Home page
- `/resume` - Resume page
- `/voiceover` - Voiceover portfolio
- `/stats` - Personal and site statistics
- `/about`, `/projects`, `/contact` - Currently commented out in routes.js

### Component Organization
- **src/pages/** - Page components (Index, Resume, Voiceover, Stats, etc.)
- **src/components/** - Reusable components organized by feature:
  - Template/ - Layout components (Navigation, SideBar, Analytics)
  - Resume/ - Resume-specific components (Education, Experience, Skills)
  - Stats/ - Statistics display components
  - Projects/ - Project showcase components
  - Contact/ - Contact information components
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
- Some routes are commented out in routes.js (About, Projects, Contact)
- Uses HashRouter for GitHub Pages compatibility
- Public assets including images and audio files in public/
- Voiceover demo files in public/voiceover/
- Analytics reports directory is gitignored to prevent sensitive data exposure
- Test artifacts (results, screenshots) are gitignored

## Quick Reference - Deployment Checklist
Before deploying any changes to production:
1. ✅ `git diff` - Review all changes
2. ✅ `npm run lint` - Ensure code quality
3. ✅ `npm run test:local` - Test functionality locally
4. ✅ `git add -A && git commit` - Commit changes (with user approval)
5. ✅ `git push origin main` - This deploys; Vercel builds from `main`
6. ✅ `npm run test:production` - Verify live site once Vercel finishes

**Pro tip**: Use `npm run test:pre-deploy` to combine steps 2-3 automatically!

**Never commit `*.xlsx`.** Raw survey exports contain student PII and this repo
is public. `.gitignore` covers them; keep it that way. Only aggregate numbers
derived from surveys belong in the repo (see the header comment in
`src/data/testimonials.js` for the sharing-permission rules).