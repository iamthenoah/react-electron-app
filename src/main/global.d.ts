import { ElectronApi } from './preload'

declare global {
	interface Window {
		electron: ElectronApi
	}
}
