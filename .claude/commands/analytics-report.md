# Generate Personal Website Analytics Report (GA4 + Clarity)

Please generate a comprehensive analytics report combining Google Analytics 4 and Microsoft Clarity insights for abishekganesh.com.

Report period: $ARGUMENTS (defaults to 'daily' if not specified)

## Instructions:

1. **Determine Report Period**
   - Parse $ARGUMENTS for: daily, weekly, biweekly, or monthly
   - Default to 'daily' if no argument provided
   - Date ranges:
     - daily: yesterday to today (last 24 hours)
     - weekly: last 7 days 
     - biweekly: last 14 days
     - monthly: last 30 days

2. **Connect to Analytics Sources**
   - Google Analytics: Use analytics-mcp server for GA4 property ID: 499560505
   - Microsoft Clarity: Use clarity-aboutme MCP (last 1-3 days only)
     - **IMPORTANT**: The token is configured in ~/.config/claude-code/mcp_servers.json but must still be passed explicitly
     - Extract token: `grep "clarity-aboutme" -A 3 ~/.config/claude-code/mcp_servers.json | grep clarity_api_token | cut -d'=' -f2- | sed 's/"$//'`
     - Pass the extracted token as the token parameter in the function call
   - Use the appropriate date range based on report type

3. **Visitor Analysis (Priority #1)**
   - **Total Visitors & Sessions**
     - Total unique visitors (GA4 + Clarity comparison)
     - New vs returning visitors
     - Sessions per visitor
     - Bounce rate and session duration
   - **Geographic Distribution**
     - Visitors by country/region
     - Visitors by state/city (focus on US traffic, especially Bay Area)
     - Language preferences
   - **Device & Technology Profile**
     - Device categories (mobile/desktop/tablet)
     - Operating systems breakdown
     - Browser distribution
     - Screen resolutions and viewport sizes

4. **User Behavior & Content Analysis (Priority #2)**
   - **Page Performance (from GA4)**
     - Most visited pages (/, /resume, /voiceover, /stats)
     - Page views and unique page views
     - Average time on page
     - Exit rates by page
     - User flow between sections
   - **Engagement Metrics (from Clarity)**
     - Scroll depth patterns per page
     - Engagement time distribution
     - Click patterns and heat zones
     - Rage clicks and dead clicks (UX issues)
   - **Resume & Portfolio Interaction**
     - Resume page engagement metrics
     - Voiceover demo plays and completion rates
     - Download/print actions on resume
     - External link clicks (LinkedIn, GitHub, etc.)

5. **Traffic Sources & Acquisition**
   - **Channel Performance**
     - Direct traffic vs referrals
     - Social media traffic breakdown
     - Search traffic (if any)
     - LinkedIn, GitHub, and other professional network referrals
   - **Campaign Tracking**
     - UTM parameter analysis (if applicable)
     - Referrer domains and pages
   - **Entry Points**
     - Landing page distribution
     - First interaction analysis

6. **Professional Interest Indicators**
   - Resume page depth of engagement
   - Time spent on work experience sections
   - Project views and interactions
   - Contact page visits and actions
   - Professional link clicks (LinkedIn, GitHub)

7. **Technical Performance**
   - Page load times
   - Core Web Vitals metrics
   - JavaScript errors (if tracked)
   - 404 errors and broken links
   - Mobile vs desktop performance

8. **Adjust for Known Patterns**
   - Filter out obvious bot traffic
   - Identify and note self-traffic (if identifiable)
   - Exclude development/test sessions
   - Note both raw and adjusted metrics where applicable

9. **Create Report File**
   - Check if analytics-reports directory structure exists (only create if missing)
   - Organize by report type in subfolders:
     - Daily: `analytics-reports/daily/YYYY-MM-DD-daily.md`
     - Weekly: `analytics-reports/weekly/YYYY-MM-DD-weekly.md`
     - Biweekly: `analytics-reports/biweekly/YYYY-MM-DD-biweekly.md`
     - Monthly: `analytics-reports/monthly/YYYY-MM-DD-monthly.md`
   - Use today's date for the filename
   - Include report type in filename

10. **Report Sections to Include**
    - **Executive Summary**
      - Key metrics dashboard
      - Notable changes from previous period
      - Professional engagement indicators
    - **Visitor Profile Analysis**
      - Who is visiting (demographics, tech profile)
      - Professional vs casual visitors
    - **Content Performance**
      - Page-by-page analysis
      - User journey mapping
      - Portfolio engagement metrics
    - **Engagement Quality** (Clarity-specific)
      - UX issues identified
      - User frustration signals
      - Smooth interaction patterns
    - **Traffic Sources**
      - Where visitors come from
      - Professional network effectiveness
    - **Technical Health**
      - Performance metrics
      - Issues and errors
    - **Opportunities & Recommendations**
      - Content optimization suggestions
      - UX improvements
      - SEO opportunities
      - Professional positioning enhancements
    - **Data Collection Notes**
      - Data quality issues
      - Tracking gaps identified

11. **Special Considerations for Personal Portfolio**
    - Track potential recruiter/hiring manager behavior patterns
    - Monitor professional network traffic (LinkedIn, GitHub referrals)
    - Analyze resume download/print events
    - Track portfolio project engagement
    - Note geographic patterns (tech hubs, company locations)
    - Compare to previous period if report exists
    - Calculate growth percentages where applicable

## Example Usage:
- `/project:analytics-report` - Generate daily report (default)
- `/project:analytics-report daily` - Explicitly generate daily report
- `/project:analytics-report weekly` - Generate weekly report (last 7 days)
- `/project:analytics-report biweekly` - Generate biweekly report (last 14 days)
- `/project:analytics-report monthly` - Generate monthly report (last 30 days)

## Report Organization:
Reports will be saved in subfolders by type:
```
analytics-reports/
├── daily/
│   ├── 2025-08-04-daily.md
│   └── 2025-08-05-daily.md
├── weekly/
│   ├── 2025-08-04-weekly.md
│   └── 2025-08-11-weekly.md
├── biweekly/
│   └── 2025-08-04-biweekly.md
└── monthly/
    └── 2025-08-04-monthly.md
```

After generating the report, provide a brief summary of:
- Total visitors and engagement metrics
- Top performing content
- Professional interest indicators
- Key opportunities identified
- Notable trends or changes