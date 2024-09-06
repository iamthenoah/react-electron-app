import { app, BrowserWindow } from 'electron'
import { createAppWindow } from './app/window'
import { autoUpdater } from 'electron-updater'

export let window: BrowserWindow | null

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
  autoUpdater.checkForUpdatesAndNotify()
})

import './handlers'
