module.exports = {
	packagerConfig: {
		icon: './public/assets/icons/app'
	},
	makers: [
		{
			name: '@electron-forge/maker-zip',
			platforms: ['darwin', 'linux', 'win32']
		},
		{
			name: '@electron-forge/maker-deb',
			config: {
				options: {
					icon: './public/assets/icons/app.png'
				}
			}
		}
	],
	publishers: [
		{
			name: '@electron-forge/publisher-github',
			config: {
				repository: {
					owner: 'name',
					name: 'repo'
				}
			}
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
								js: './src/main/preload.ts'
							}
						}
					]
				}
			}
		}
	]
}
