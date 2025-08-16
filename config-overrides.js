const CrittersPlugin = require('critters-webpack-plugin');
const { override, addWebpackPlugin } = require('customize-cra');

module.exports = override(
  // Add Critters for critical CSS inlining
  addWebpackPlugin(
    new CrittersPlugin({
      // Inline critical CSS
      inlineThreshold: 10 * 1024, // 10KB - inline if smaller
      
      // Preload non-critical CSS
      preload: 'swap',
      
      // Keep original stylesheets
      noscriptFallback: true,
      
      // Inline fonts if they're small enough
      inlineFonts: true,
      
      // Merge duplicate rules
      mergeStylesheets: true,
      
      // Add additional CSS to consider critical
      additionalStylesheets: [],
      
      // Prune unused CSS
      pruneSource: false,
      
      // Log level
      logLevel: 'info',
    })
  )
);