const path = require('path');
const glob = require("glob");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';
const components = glob.sync("./build/components/*/index.js");
components.push('./src/main.js');


module.exports = {
  stats: {
    errorDetails: true
  },
  entry: {
    bundle: components
  },
  resolve: {
    alias: {
      '@sveltekit/ui': path.resolve(__dirname, '../'),
      stores: path.resolve(__dirname, '../src/app/stores.js')
    },
    extensions: ['.mjs', '.js', '.svelte']
  },
  output: {
    path: path.resolve(__dirname, '../public'),
    filename: '[name].js',
    chunkFilename: '[name].[id].js'
  },
  module: {
    rules: [
      {
        test: /\.svelte$/,
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
