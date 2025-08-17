/**
 * Automated Website Testing Suite
 * 
 * This test suite uses Playwright MCP to verify all critical functionality
 * Run these tests before any deployment to ensure nothing is broken
 */

const BASE_URL = process.env.TEST_URL || 'http://localhost:3000';
const PROD_URL = 'https://www.abishekganesh.com';

class WebsiteTests {
  constructor() {
    this.results = {
      passed: [],
      failed: [],
      warnings: []
    };
  }

  /**
   * Core Navigation Tests
   */
  async testNavigation() {
    console.log('🧪 Testing Navigation...');
    const pages = ['/', '/about', '/resume', '/voiceover', '/stats', '/contact'];
    
    for (const page of pages) {
      try {
        await browser_navigate({ url: `${BASE_URL}${page}` });
        await browser_wait_for({ time: 1 });
        
        // Check if page loaded
        const snapshot = await browser_snapshot();
        if (snapshot) {
          this.results.passed.push(`✅ Navigation to ${page}`);
        }
      } catch (error) {
        this.results.failed.push(`❌ Navigation to ${page}: ${error.message}`);
      }
    }
  }

  /**
   * Test Dark Mode Toggle
   */
  async testDarkModeToggle() {
    console.log('🌓 Testing Dark Mode Toggle...');
    try {
      await browser_navigate({ url: BASE_URL });
      await browser_wait_for({ time: 1 });
      
      // Click dark mode toggle
      await browser_click({
        element: 'Dark mode toggle button',
        ref: '[aria-label*="dark mode" i]'
      });
      
      await browser_wait_for({ time: 0.5 });
      
      // Verify dark mode is active
      const isDarkMode = await browser_evaluate({
        function: '() => document.body.classList.contains("dark-mode") || document.documentElement.classList.contains("dark")'
      });
      
      if (isDarkMode) {
        this.results.passed.push('✅ Dark mode toggle functionality');
      } else {
        this.results.failed.push('❌ Dark mode toggle not working');
      }
    } catch (error) {
      this.results.failed.push(`❌ Dark mode toggle: ${error.message}`);
    }
  }

  /**
   * Test Photo Carousel
   */
  async testPhotoCarousel() {
    console.log('🎠 Testing Photo Carousel...');
    try {
      await browser_navigate({ url: BASE_URL });
      await browser_wait_for({ time: 2 });
      
      // Test next button
      await browser_click({
        element: 'Next photo button',
        ref: '[aria-label="Next photo"]'
      });
      await browser_wait_for({ time: 0.5 });
      
      // Test previous button
      await browser_click({
        element: 'Previous photo button',
        ref: '[aria-label="Previous photo"]'
      });
      await browser_wait_for({ time: 0.5 });
      
      // Test pause button
      await browser_click({
        element: 'Pause carousel button',
        ref: '[aria-label*="carousel" i]'
      });
      
      this.results.passed.push('✅ Photo carousel controls');
    } catch (error) {
      this.results.failed.push(`❌ Photo carousel: ${error.message}`);
    }
  }

  /**
   * Test Service Worker Registration
   */
  async testServiceWorker() {
    console.log('⚙️ Testing Service Worker...');
    try {
      await browser_navigate({ url: BASE_URL });
      await browser_wait_for({ time: 3 });
      
      const messages = await browser_console_messages();
      const swRegistered = messages.some(msg => 
        msg.includes('Service Worker registered successfully')
      );
      
      if (swRegistered) {
        this.results.passed.push('✅ Service Worker registration');
      } else {
        this.results.warnings.push('⚠️ Service Worker not registered');
      }
    } catch (error) {
      this.results.failed.push(`❌ Service Worker: ${error.message}`);
    }
  }

  /**
   * Test LazyImage Loading
   */
  async testLazyImageLoading() {
    console.log('🖼️ Testing Lazy Image Loading...');
    try {
      await browser_navigate({ url: BASE_URL });
      await browser_wait_for({ time: 2 });
      
      // Check if LazyImage components are working
      const lazyImagesLoaded = await browser_evaluate({
        function: `() => {
          const images = document.querySelectorAll('.lazy-image-loaded');
          return images.length > 0;
        }`
      });
      
      if (lazyImagesLoaded) {
        this.results.passed.push('✅ LazyImage component loading');
      } else {
        this.results.warnings.push('⚠️ LazyImage components may not be loading properly');
      }
    } catch (error) {
      this.results.failed.push(`❌ LazyImage loading: ${error.message}`);
    }
  }

  /**
   * Test Responsive Design
   */
  async testResponsiveDesign() {
    console.log('📱 Testing Responsive Design...');
    const viewports = [
      { width: 375, height: 667, name: 'Mobile' },
      { width: 768, height: 1024, name: 'Tablet' },
      { width: 1280, height: 720, name: 'Desktop' }
    ];
    
    for (const viewport of viewports) {
      try {
        await browser_resize({ 
          width: viewport.width, 
          height: viewport.height 
        });
        await browser_navigate({ url: BASE_URL });
        await browser_wait_for({ time: 1 });
        
        // Take screenshot for visual verification
        await browser_take_screenshot({
          filename: `test-${viewport.name.toLowerCase()}.png`
        });
        
        this.results.passed.push(`✅ Responsive design - ${viewport.name}`);
      } catch (error) {
        this.results.failed.push(`❌ Responsive ${viewport.name}: ${error.message}`);
      }
    }
  }

  /**
   * Test External Links
   */
  async testExternalLinks() {
    console.log('🔗 Testing External Links...');
    try {
      await browser_navigate({ url: BASE_URL });
      await browser_wait_for({ time: 2 });
      
      const externalLinks = await browser_evaluate({
        function: `() => {
          const links = document.querySelectorAll('a[href^="http"]:not([href*="localhost"]):not([href*="abishekganesh"])');
          return Array.from(links).map(link => ({
            href: link.href,
            text: link.textContent.trim()
          }));
        }`
      });
      
      if (externalLinks.length > 0) {
        this.results.passed.push(`✅ Found ${externalLinks.length} external links`);
      }
    } catch (error) {
      this.results.warnings.push(`⚠️ External links check: ${error.message}`);
    }
  }

  /**
   * Test Console Errors
   */
  async testConsoleErrors() {
    console.log('🚨 Checking for Console Errors...');
    const pages = ['/', '/about', '/resume', '/voiceover', '/stats', '/contact'];
    
    for (const page of pages) {
      try {
        await browser_navigate({ url: `${BASE_URL}${page}` });
        await browser_wait_for({ time: 2 });
        
        const messages = await browser_console_messages();
        const errors = messages.filter(msg => 
          msg.toLowerCase().includes('error') && 
          !msg.includes('Failed to load resource') // Ignore network errors
        );
        
        if (errors.length > 0) {
          this.results.warnings.push(`⚠️ Console errors on ${page}: ${errors.length} error(s)`);
        } else {
          this.results.passed.push(`✅ No console errors on ${page}`);
        }
      } catch (error) {
        this.results.failed.push(`❌ Console check ${page}: ${error.message}`);
      }
    }
  }

  /**
   * Test Performance Metrics
   */
  async testPerformance() {
    console.log('⚡ Testing Performance...');
    try {
      await browser_navigate({ url: BASE_URL });
      await browser_wait_for({ time: 3 });
      
      const performanceMetrics = await browser_evaluate({
        function: `() => {
          const perf = performance.getEntriesByType('navigation')[0];
          return {
            domContentLoaded: perf.domContentLoadedEventEnd - perf.domContentLoadedEventStart,
            loadComplete: perf.loadEventEnd - perf.loadEventStart,
            responseTime: perf.responseEnd - perf.requestStart
          };
        }`
      });
      
      // Check if load times are acceptable
      if (performanceMetrics.loadComplete < 3000) {
        this.results.passed.push(`✅ Page load time: ${performanceMetrics.loadComplete}ms`);
      } else {
        this.results.warnings.push(`⚠️ Slow page load: ${performanceMetrics.loadComplete}ms`);
      }
    } catch (error) {
      this.results.warnings.push(`⚠️ Performance test: ${error.message}`);
    }
  }

  /**
   * Test Analytics Integration
   */
  async testAnalytics() {
    console.log('📊 Testing Analytics...');
    try {
      await browser_navigate({ url: BASE_URL });
      await browser_wait_for({ time: 3 });
      
      const requests = await browser_network_requests();
      const ga4Requests = requests.filter(r => r.url.includes('google-analytics.com'));
      const clarityRequests = requests.filter(r => r.url.includes('clarity.ms'));
      
      if (ga4Requests.length > 0) {
        this.results.passed.push('✅ Google Analytics 4 integration');
      } else {
        this.results.warnings.push('⚠️ GA4 not firing');
      }
      
      if (clarityRequests.length > 0) {
        this.results.passed.push('✅ Microsoft Clarity integration');
      } else {
        this.results.warnings.push('⚠️ Clarity not firing');
      }
    } catch (error) {
      this.results.warnings.push(`⚠️ Analytics test: ${error.message}`);
    }
  }

  /**
   * Run all tests
   */
  async runAllTests() {
    console.log('🚀 Starting Comprehensive Website Tests...\n');
    console.log(`Testing URL: ${BASE_URL}\n`);
    
    // Run tests in sequence
    await this.testNavigation();
    await this.testDarkModeToggle();
    await this.testPhotoCarousel();
    await this.testServiceWorker();
    await this.testLazyImageLoading();
    await this.testResponsiveDesign();
    await this.testExternalLinks();
    await this.testConsoleErrors();
    await this.testPerformance();
    await this.testAnalytics();
    
    // Generate report
    this.generateReport();
  }

  /**
   * Generate test report
   */
  generateReport() {
    console.log('\n' + '='.repeat(60));
    console.log('📋 TEST RESULTS SUMMARY');
    console.log('='.repeat(60));
    
    const totalTests = this.results.passed.length + this.results.failed.length;
    const passRate = ((this.results.passed.length / totalTests) * 100).toFixed(1);
    
    console.log(`\n✅ Passed: ${this.results.passed.length}`);
    console.log(`❌ Failed: ${this.results.failed.length}`);
    console.log(`⚠️  Warnings: ${this.results.warnings.length}`);
    console.log(`📊 Pass Rate: ${passRate}%\n`);
    
    if (this.results.failed.length > 0) {
      console.log('Failed Tests:');
      this.results.failed.forEach(test => console.log(`  ${test}`));
    }
    
    if (this.results.warnings.length > 0) {
      console.log('\nWarnings:');
      this.results.warnings.forEach(warning => console.log(`  ${warning}`));
    }
    
    if (this.results.passed.length > 0) {
      console.log('\nPassed Tests:');
      this.results.passed.forEach(test => console.log(`  ${test}`));
    }
    
    console.log('\n' + '='.repeat(60));
    
    // Return status code for CI/CD integration
    return this.results.failed.length === 0 ? 0 : 1;
  }
}

// Export for use in test runner
module.exports = WebsiteTests;