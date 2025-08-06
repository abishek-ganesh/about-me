# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Abishek Ganesh built with React. It's a single-page application using React Router for navigation, hosted on GitHub Pages at https://abishekganesh.com.

## Common Commands

### Development
- `npm run dev` - Start the development server (uses --openssl-legacy-provider flag)
- `npm start` - Serve the production build locally

### Build & Deploy
- `npm run build` - Build the production version (uses --openssl-legacy-provider flag)
- `npm run deploy` - Build and deploy to GitHub Pages using gh-pages

**Important Git & Deployment Process:**
1. Always make code changes to the `main` branch (never edit gh-pages directly)
2. **CRITICAL**: NEVER commit changes without explicit user approval
   - Always ask "Should I commit these changes?" before running git add/commit
   - Wait for user confirmation before committing
   - User should review changes first with `git diff` or by testing locally
3. Use `/git-quick` or regular git commands to commit and push to `main` (after approval)
4. **IMPORTANT**: After using `/git-quick` to push changes, ALWAYS run `npm run deploy` to update the live website
5. The gh-pages branch is automatically managed by the deploy script

**Remember**: 
- NEVER auto-commit changes - always get user approval first!
- The website won't update until you run `npm run deploy` after pushing to main!

**Custom Domain Note:**
- The CNAME file in the public directory ensures abishekganesh.com is preserved during deployments
- If the custom domain gets removed, check that public/CNAME exists

**Clean URLs (No Hash Routing):**
- Uses BrowserRouter instead of HashRouter for URLs without # symbols
- 404.html file handles GitHub Pages client-side routing
- index.html contains redirect script to restore proper routing
- URLs are clean: /resume instead of /#/resume

### Code Quality
- `npm run lint` - Run ESLint on src directory
- `npm test` - Run tests with react-scripts

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