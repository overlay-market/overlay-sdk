const webpack = require('webpack')

module.exports = function override(webpackConfig) {
  const fallback = webpackConfig.resolve.fallback || {}
  Object.assign(fallback, {
    crypto: require.resolve('crypto-browserify'),
    stream: require.resolve('stream-browserify'),
    assert: require.resolve('assert'),
    http: require.resolve('stream-http'),
    https: require.resolve('https-browserify'),
    os: require.resolve('os-browserify'),
    url: require.resolve('url'),
  })
  webpackConfig.resolve.fallback = fallback
  webpackConfig.plugins = (webpackConfig.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    }),
  ])
  webpackConfig.ignoreWarnings = [/Failed to parse source map/]
  webpackConfig.module.rules.push({
    test: /\.(ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
      },
    },
  });

  const newExtensions = ['.tsx', '.ts', '.js', '.jsx'];
webpackConfig.resolve.extensions = Array.from(new Set([...(webpackConfig.resolve.extensions || []), ...newExtensions]));

module.exports = webpackConfig;

  return webpackConfig
}
