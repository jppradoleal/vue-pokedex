const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

const mode = process.env.NODE_ENV || 'development'

module.exports = {
  mode,
  devtool: 'eval-source-map',
  devServer: {
    allowedHosts: 'all',
  },
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: 'vue-loader'
      },
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(sa|c|sc)ss/,
        use: ['style-loader', 'css-loader', {
          loader: 'sass-loader',
          options: {
           sassOptions: {
            indentedSyntax: false,
           }
          }
        }]
      }
    ]
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new VueLoaderPlugin(),
  ]
}