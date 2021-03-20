export interface File {
  filename: string
}

export interface ICommand {
  run(files: File[]): File[]
}