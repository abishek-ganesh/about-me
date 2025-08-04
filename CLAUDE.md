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

**Important Deployment Process:**
1. Always make code changes to the `main` branch (never edit gh-pages directly)
2. Use `/git-quick` or regular git commands to commit and push to `main`
3. After pushing changes, run `npm run deploy` to update the live website
4. The gh-pages branch is automatically managed by the deploy script

**Custom Domain Note:**
- The CNAME file in the public directory ensures abishekganesh.com is preserved during deployments
- If the custom domain gets removed, check that public/CNAME exists

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

## Notes
- Some routes are commented out in routes.js (About, Projects, Contact)
- Uses HashRouter for GitHub Pages compatibility
- Public assets including images and audio files in public/
- Voiceover demo files in public/voiceover/