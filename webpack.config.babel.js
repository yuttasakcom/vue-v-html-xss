import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const resolve = dir => path.resolve(__dirname, dir)

const config = {
  entry: resolve('src/app.js'),
  output: {
    path: resolve('dist'),
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.runtime.common.js',
      '@': resolve('src')
    },
    extensions: ['.js', '.vue']
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.vue$/, loader: 'vue-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('src/index.html')
    })
  ]
}

export default config
