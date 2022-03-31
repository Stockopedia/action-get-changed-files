import {File, ICommand} from './command'

export class DeduplicateCommand implements ICommand {
  run(files: File[]): File[] {
    return files.reduce<File[]>((acc, current) => {
      const x = acc.find(item => item.filename === current.filename)
      if (!x) {
        return acc.concat([current])
      } else {
        return acc
      }
    }, [])
  }
}
