import { app, BrowserWindow } from 'electron'
import { menu } from './menu'
import path from 'path'

export const createAppWindow = () => {
	const window = new BrowserWindow({
		webPreferences: {
			preload: path.join(__dirname, '../preload/index.js')
		}
	})

	window.setMenu(menu)

	if (app.isPackaged) {
		window.loadURL(process.env.ELECTRON_RENDERER_URL!)
	} else {
		window.loadFile(path.join(__dirname, '../renderer/index.html'))
		window.webContents.openDevTools({ mode: 'detach' })
	}
	return window
}
