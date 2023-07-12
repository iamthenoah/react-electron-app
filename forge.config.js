module.exports = {
	packagerConfig: {
		icon: './public/assets/icons/app'
	},
	publishers: [
		{
			name: '@electron-forge/publisher-s3',
			config: {
				bucket: 'bucket-name',
				public: true
			}
		},
		{
			name: '@electron-forge/publisher-github',
			config: {
				repository: {
					owner: 'github-user-name',
					name: 'github-repo-name'
				},
				authToken: 'github-auth-token'
			}
		}
	],
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
