import { IFormatCommand } from './format-command';

export class NewlineFormatCommand implements IFormatCommand {
  run(files: string[]): string {
    return files.join("\n")
  }
}