const rules = require('./webpack.rules')
const path = require('path')

module.exports = {
  module: {
    rules: [
      ...rules,
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx'],
    alias: {
      '@hooks': path.resolve(__dirname, 'src/renderer/hooks')
    }
  }
}
