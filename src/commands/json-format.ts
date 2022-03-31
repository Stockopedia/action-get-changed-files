import {IFormatCommand} from './format-command'

export class JsonFormatCommand implements IFormatCommand {
  run(files: string[]): string {
    return JSON.stringify(files)
  }
}
