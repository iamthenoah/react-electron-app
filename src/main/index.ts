import { app, BrowserWindow } from 'electron'
import { autoUpdater } from 'electron-updater'
import { createAppWindow } from './app/window'

export let window: BrowserWindow | null

autoUpdater.setFeedURL({
  provider: 'github',
  owner: 'iamthenoah',
  repo: 'react-electron-app'
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
  autoUpdater.checkForUpdatesAndNotify()
})

import './handlers'
