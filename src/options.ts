export interface Options {
  foldersOnly?: boolean
  ignore?: string
  format?: Format
}

export type Format = 'json' | 'csv' | 'newline'

export interface Context {
  repo: {
    owner: string
    repo: string
  }
  before: string
  after: string
}
