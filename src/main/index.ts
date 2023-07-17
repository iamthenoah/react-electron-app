import { app, autoUpdater, BrowserWindow, Menu } from 'electron'
import { createAppWindow } from './app/window'
import menu from './app/menu'
import 'dotenv/config'

export let window: BrowserWindow | null

autoUpdater.setFeedURL({
	url: `${process.env.UPDATE_SERVER}/update/${process.platform}/${app.getVersion()}`
})

app.whenReady().then(() => {
	window = createAppWindow()
	Menu.setApplicationMenu(menu)
})
