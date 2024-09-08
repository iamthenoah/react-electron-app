/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly MAIN_VITE_GH_TOKEN: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
