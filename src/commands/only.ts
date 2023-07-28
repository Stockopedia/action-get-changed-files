import {minimatch} from 'minimatch'
import {File, ICommand} from './command'

export class OnlyCommand implements ICommand {
  constructor(private readonly only: string) {}

  run(files: File[]): File[] {
    return files.filter(x => minimatch(x.filename, this.only, {dot: true}))
  }
}
