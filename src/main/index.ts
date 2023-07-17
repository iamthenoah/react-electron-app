import { app, autoUpdater, BrowserWindow, Menu } from 'electron'
import { createAppWindow } from './app/window'
import menu from './app/menu'
import 'dotenv/config'

export let window: BrowserWindow | null

autoUpdater.setFeedURL({
  url: `${process.env.UPDATE_SERVER}/update/${process.platform}/${app.getVersion()}`
})

autoUpdater.on('update-available', () => {
  window?.webContents.send('message', 'Update available!')
})

autoUpdater.on('update-not-available', () => {
  window?.webContents.send('message', 'Update not available.')
})

app.whenReady().then(() => {
  window = createAppWindow()
  Menu.setApplicationMenu(menu)
  autoUpdater.checkForUpdates()
})
