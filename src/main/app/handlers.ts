import { ipcMain, IpcMainInvokeEvent } from 'electron'
import { autoUpdater } from 'electron-updater'

ipcMain.handle('check-for-update', async (_: IpcMainInvokeEvent) => {
	return await autoUpdater.checkForUpdates()
})
