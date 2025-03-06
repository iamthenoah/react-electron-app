import { AppAPi } from '.'

declare global {
	interface Window {
		app: AppAPi
	}
}
