const rules = require('./webpack.rules')

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
		extensions: ['.js', '.ts', '.jsx', '.tsx']
	}
}
