import { app, BrowserWindow } from 'electron'

declare const MAIN_WINDOW_WEBPACK_ENTRY: string
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string

const createWindow = () => {
	const win = new BrowserWindow({
		icon: './public/assets/icons/app.png',
		width: 800,
		height: 600,
		webPreferences: {
			nodeIntegration: true,
			preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY
		}
	})

	win.loadURL(MAIN_WINDOW_WEBPACK_ENTRY)

	if (!app.isPackaged) {
		win.webContents.openDevTools({ mode: 'detach' })
	}
}

app.whenReady().then(createWindow)
