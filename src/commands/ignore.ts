import minimatch from 'minimatch'
import { ICommand, File } from './command';

export class IgnoreCommand implements ICommand {
  constructor(private readonly ignore: string) {}

  run(files: File[]): File[] {
    return files.filter(x => !minimatch(x.filename, this.ignore, { dot: true }))
  }
}