import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron'

const api = {
  send: (channel: string, ...args: any[]) => {
    ipcRenderer.send(channel, ...args)
  },
  invoke: <T>(channel: string, ...args: any[]): Promise<T> => {
    return ipcRenderer.invoke(channel, ...args)
  },
  on: (channel: string, callback: (event: IpcRendererEvent, ...args: any[]) => void) => {
    ipcRenderer.on(channel, callback)
  }
}

export type ElectronApi = typeof api

contextBridge.exposeInMainWorld('electron', api)
