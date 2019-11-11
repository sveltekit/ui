const path = require('path');
const glob = require("glob");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';

const componentsTests = glob.sync("./src/components/*/*.spec.js");
componentsTests.push('./test/main.js');

const alias = {
  '@sveltekit/ui': path.resolve(__dirname, '../'),
  helpers: path.resolve(__dirname, '../test/helpers.js')
};

componentsTests.forEach(test => {
  let name = `sveltekit/tests/${test.split('/')[3]}`
  alias[name] = path.resolve(__dirname, test)
})

module.exports = {
  entry: {
    bundle: componentsTests
  },
  resolve: {
    alias,
    extensions: ['.mjs', '.js', '.svelte']
  },
  output: {
    path: __dirname + '../test/public',
    filename: '[name].js',
    chunkFilename: '[name].[id].js',
  },
  module: {
    rules: [
      {
        test: /\.svelte$/,
        use: {
          loader: 'svelte-loader',
          options: {
            dev: true,
            emitCss: true,
            hotReload: true,
            accessors: true
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          /**
           * MiniCssExtractPlugin doesn't support HMR.
           * For developing, use 'style-loader' instead.
           * */
          prod ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  mode,
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ],
  devtool: prod ? false : 'source-map'
};
