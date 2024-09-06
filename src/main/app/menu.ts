import { Menu, MenuItemConstructorOptions } from 'electron'
import { autoUpdater } from 'electron-updater'

const appMenu: MenuItemConstructorOptions = {
  role: 'appMenu',
  submenu: [
    {
      role: 'about'
    },
    {
      label: 'Check for Updates...',
      click: autoUpdater.checkForUpdates
    },
    {
      type: 'separator'
    },
    {
      label: 'Preferences',
      click: () => console.log('TODO')
    },
    {
      type: 'separator'
    },
    {
      role: 'hide'
    },
    {
      role: 'hideOthers'
    },
    {
      type: 'separator'
    },
    {
      role: 'quit'
    }
  ]
}

export default Menu.buildFromTemplate([appMenu])
