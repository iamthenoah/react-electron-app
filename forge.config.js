module.exports = {
	makers: [
		{
			name: '@electron-forge/maker-zip',
			platforms: ['darwin', 'linux', 'win32']
		}
	],
	plugins: [
		{
			name: '@electron-forge/plugin-webpack',
			config: {
				mainConfig: './webpack.main.js',
				renderer: {
					config: './webpack.renderer.js',
					entryPoints: [
						{
							name: 'main_window',
							html: './public/index.html',
							js: './src/renderer/index.tsx',
							preload: {
								js: './src/renderer/preload.ts'
							}
						}
					]
				}
			}
		}
	]
}
