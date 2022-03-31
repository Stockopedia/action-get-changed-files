import type {ICommand} from './command'
import type {IFormatCommand} from './format-command'
import type {Format, Options} from '../options'
import {
  GetFoldersCommand,
  GetFilesCommand,
  IgnoreCommand,
  CsvFormatCommand,
  NewlineFormatCommand,
  JsonFormatCommand
} from '.'
import {DeduplicateCommand} from './deduplicate'

class CommandFactory {
  make(options: Options): ICommand[] {
    const commands: ICommand[] = []

    if (options.foldersOnly) {
      commands.push(new GetFoldersCommand())
    } else {
      commands.push(new GetFilesCommand())
    }

    if (options.ignore) {
      commands.push(new IgnoreCommand(options.ignore))
    }

    commands.push(new DeduplicateCommand())

    return commands
  }
}

class FormatFactory {
  make(format: Format): IFormatCommand {
    switch (format) {
      case 'csv':
        return new CsvFormatCommand()
      case 'newline':
        return new NewlineFormatCommand()
      default:
        return new JsonFormatCommand()
    }
  }
}

export const formatFactory = new FormatFactory()

export const commandFactory = new CommandFactory()
