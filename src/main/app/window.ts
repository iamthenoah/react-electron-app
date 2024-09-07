import { app, BrowserWindow, Menu } from 'electron'
import menu from './menu'
import path from 'path'

export const createAppWindow = () => {
  const window = new BrowserWindow({
    icon: './public/assets/icons/app.png',
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, '../preload/index.js')
    }
  })

  Menu.setApplicationMenu(menu)

  window.webContents.openDevTools({ mode: 'detach' })

  if (!app.isPackaged) {
    window.loadURL(process.env.ELECTRON_RENDERER_URL as any)
  } else {
    window.loadFile(path.join(__dirname, '../renderer/index.html'))
  }
  return window
}
