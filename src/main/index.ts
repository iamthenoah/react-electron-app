import { app, BrowserWindow } from 'electron'

declare const MAIN_WINDOW_WEBPACK_ENTRY: string
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string

const createWindow = () => {
	const win = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			nodeIntegration: true,
			preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY
		}
	})

	win.loadURL(MAIN_WINDOW_WEBPACK_ENTRY)
	win.webContents.openDevTools({ mode: 'detach' })
}

app.whenReady().then(createWindow)
