import { app, BrowserWindow, Menu } from 'electron'
import menu from './menu'

declare const MAIN_WINDOW_WEBPACK_ENTRY: string
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string

export const createAppWindow = () => {
  const window = new BrowserWindow({
    icon: './public/assets/icons/app.png',
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY
    }
  })

  Menu.setApplicationMenu(menu)

  window.loadURL(MAIN_WINDOW_WEBPACK_ENTRY)

  // if (!app.isPackaged) {
  window.webContents.openDevTools({ mode: 'detach' })
  // }
  return window
}
