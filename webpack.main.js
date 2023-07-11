const rules = require('./webpack.rules')

module.exports = {
	entry: './src/main/index.ts',
	module: {
		rules
	},
	resolve: {
		extensions: ['.js', '.ts', '.jsx', '.tsx', '.json']
	}
}
