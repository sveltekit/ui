const path = require('path');
const glob = require("glob");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';
const components = glob.sync("./build/components/*/index.js");
components.push('./src/main.js');


module.exports = {
  entry: {
    bundle: components
  },
  resolve: {
    alias: {
      // 'sveltekit': path.resolve(__dirname, 'dist'),
      stores: path.resolve(__dirname, '../src/app/stores.js')
    },
    extensions: ['.mjs', '.js', '.svelte']
  },
  output: {
    path: __dirname + '/public',
    filename: '[name].js',
    chunkFilename: '[name].[id].js'
  },
  module: {
    rules: [
      {
        test: /\.svelte$/,
        // exclude: excludeModules,
        use: {
          loader: 'svelte-loader',
          options: {
            dev: true,
            emitCss: false,
            hotReload: true,
            accessors: true
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          prod ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
        ]
      }
    ]
  },
  mode,
  optimization: {
    // We no not want to minimize our code.
    minimize: false
  },
  plugins: [
    // new BundleAnalyzerPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ],
  devtool: prod ? false : 'source-map'
};

// function excludeModules(modulePath) {
//   return /default-variables/.test(modulePath) || (/node_modules/.test(modulePath) &&
//     !/node_modules\/svelte\//.test(modulePath) &&
//     !/node_modules\/svelte\-select/.test(modulePath) &&
//     !/node_modules\/sveltekit\//.test(modulePath));
// }
