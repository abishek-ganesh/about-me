# Website Testing Framework

## Overview
This directory contains automated tests for the Abishek Ganesh portfolio website. The tests use Playwright MCP to verify all critical functionality before deployments.

## Test Coverage

### Core Functionality Tests ✅
- **Navigation**: Tests all page routes work correctly
- **Dark Mode**: Verifies theme toggle functionality
- **Photo Carousel**: Tests carousel controls (next/prev/pause/play)
- **Service Worker**: Checks offline support registration
- **LazyImage**: Verifies lazy loading implementation
- **Analytics**: Confirms GA4 and Clarity integration

### Visual & UX Tests 🎨
- **Responsive Design**: Tests mobile, tablet, and desktop viewports
- **Image Loading**: Verifies all images load properly
- **Sidebar**: Checks profile image and links
- **External Links**: Validates social media and external links

### Performance Tests ⚡
- **Page Load Time**: Monitors load performance
- **Console Errors**: Checks for JavaScript errors
- **Network Requests**: Verifies all resources load successfully
- **Error Handling**: Tests fallback UI for failed resources

## Running Tests

### Prerequisites
1. Start the development server:
```bash
npm run dev
```

2. In another terminal, run the tests:

### Using npm scripts
```bash
# Test local development server
npm run test:local

# Test production site
npm run test:production

# Run quick smoke tests
npm run test:smoke
```

### Using Python script directly
```bash
# Test local server (default)
python tests/playwright/run-tests.py

# Test specific URL
python tests/playwright/run-tests.py --url http://localhost:3000

# Test production
python tests/playwright/run-tests.py --production
```

### Using Playwright MCP in Claude Code
The tests are designed to work with Claude Code's Playwright MCP integration. Simply run:
```bash
claude-code test
```

## Test Output

Tests generate:
1. **Console Output**: Real-time test progress and results
2. **JSON Report**: `tests/playwright/test-results.json`
3. **Screenshots**: Saved in `.playwright-mcp/` directory
4. **Exit Codes**: 
   - `0` = All tests passed
   - `1` = Some tests failed

## Pre-Deployment Checklist

Before deploying to production, ensure:

1. ✅ Run `npm run test:local` - All tests pass locally
2. ✅ Run `npm run build` - Build succeeds without errors
3. ✅ Run `npm run test:production` - Production tests pass (after deploy)
4. ✅ Check `test-results.json` - No critical failures
5. ✅ Review screenshots - Visual elements look correct

## Test Structure

```
tests/
├── README.md                 # This file
├── playwright/
│   ├── website-tests.js     # Main test suite
│   ├── run-tests.py         # Python test runner
│   ├── test-results.json    # Test results (generated)
│   └── screenshots/         # Visual test artifacts
└── run-tests.sh            # Shell script runner
```

## Adding New Tests

To add new tests:

1. Add test method to `website-tests.js`:
```javascript
async testNewFeature() {
  console.log('🧪 Testing New Feature...');
  // Test implementation
}
```

2. Call it in `runAllTests()`:
```javascript
await this.testNewFeature();
```

3. Update this README with the new test coverage

## CI/CD Integration

The test suite is designed to integrate with CI/CD pipelines:

```yaml
# Example GitHub Actions workflow
- name: Run Tests
  run: |
    npm install
    npm run build
    npm run test:local
```

## Troubleshooting

### Tests fail with "browser not found"
Install Playwright browser:
```bash
npx playwright install chromium
```

### Tests timeout
Increase wait times in test scripts or check if server is running

### Console errors don't fail tests
Console errors are treated as warnings by default. To make them fail:
- Change warning to failure in test logic
- Update error filtering logic

## Critical Tests That Must Pass

These tests MUST pass before any deployment:

1. **Navigation** - All pages must be accessible
2. **LazyImage** - Image optimization must work
3. **Service Worker** - Offline support must register
4. **No Critical Errors** - No breaking JavaScript errors
5. **Core Features** - Carousel, dark mode, links must work

## Contact

For questions about testing:
- Email: abishek.ganesh30@gmail.com
- GitHub: @abishek-ganesh