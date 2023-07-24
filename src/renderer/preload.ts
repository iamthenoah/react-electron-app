import { IpcRendererEvent, contextBridge, ipcRenderer } from 'electron'

const api = {
  send: (chanel: string, ...args: any[]) => {
    ipcRenderer.send(chanel, ...args)
  },
  invoke: <T>(chanel: string, ...args: any[]): Promise<T> => {
    return ipcRenderer.invoke(chanel, ...args)
  },
  handle: (
    chanel: string,
    callback: (event: IpcRendererEvent, ...args: any[]) => void
  ) => {
    ipcRenderer.on(chanel, callback)
  }
}

export type ElectronApi = typeof api

contextBridge.exposeInMainWorld('electron', api)
