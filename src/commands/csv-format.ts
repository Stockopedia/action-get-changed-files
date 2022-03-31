import {IFormatCommand} from './format-command'

export class CsvFormatCommand implements IFormatCommand {
  run(files: string[]): string {
    return files.join(',')
  }
}
