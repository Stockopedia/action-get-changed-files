import { ICommand, File } from './command';

export class GetFilesCommand implements ICommand {
  run(files: File[]): File[] {
    return files
  }
}