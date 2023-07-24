import { app, autoUpdater, BrowserWindow, Menu } from 'electron'
import { createAppWindow } from './app/window'
import menu from './app/menu'

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

autoUpdater.on('error', error => {
  window?.webContents.send('message', error.message)
})

app.whenReady().then(() => {
  window = createAppWindow()
  Menu.setApplicationMenu(menu)
  autoUpdater.checkForUpdates()
})
