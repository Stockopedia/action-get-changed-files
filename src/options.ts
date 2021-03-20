export interface Options {
  foldersOnly?: boolean
  ignore?: string
  format?: Format
}

export type Format = 'json' | 'csv' | 'newline'
