import { ICommand, File } from './command';

export class GetFoldersCommand implements ICommand {
  run(files: File[]): File[] {
    return files
      .map(x => x)
      .filter(file => file.filename.includes("/"))
      .map(x => ({
        ...x,
        filename: x.filename.substr(0, x.filename.indexOf("/"))
      }))
  }
}