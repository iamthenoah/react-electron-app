import { app, BrowserWindow } from 'electron'
import menu from './menu'
import path from 'path'

export const createAppWindow = () => {
  const window = new BrowserWindow({
    webPreferences: {
      preload: path.join(__dirname, '../preload/index.js')
    },
    width: 800,
    height: 600
  })

  window.setMenu(menu)

  if (app.isPackaged) {
    window.loadFile(path.join(__dirname, '../renderer/index.html'))
  } else {
    window.loadURL(process.env.ELECTRON_RENDERER_URL!)
    window.webContents.openDevTools({ mode: 'detach' })
  }
  return window
}
