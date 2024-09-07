import { ElectronApi } from '.'

declare global {
  interface Window {
    electron: ElectronApi
  }
}
