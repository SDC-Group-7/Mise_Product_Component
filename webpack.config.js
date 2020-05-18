// const path = require('path');
// const CompressionPlugin = require('compression-webpack-plugin');
// const zlib = require('zlib');

// module.exports = {
//   mode: 'production',
//   entry: './client/src/index.jsx',
//   plugins: [
//     new CompressionPlugin({
//       filename: '[path].br[query]',
//       algorithm: 'brotliCompress',
//       test: /\.(js|css|html|svg)$/,
//       compressionOptions: {
//         level: 11,
//       },
//       threshold: 10240,
//       minRatio: 0.8,
//       deleteOriginalAssets: false,
//     }),
//     new CompressionPlugin({
//       algorithm: 'gzip',
//     }),
//   ],
//   output: {
//     filename: 'bundle.js',
//     path: path.join(__dirname, 'public'),
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: 'babel-loader',
//       },
//     ],
//   },
//   resolve: {
//     extensions: ['.js', '.jsx'],
//   },
// };
