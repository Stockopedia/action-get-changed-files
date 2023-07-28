import {commandFactory, File} from './commands'
import {runCommandsOnFiles} from './runner'

describe('commands scenarios tests', () => {
  it('should apply only filter and return only folders after', () => {
    const changedFiles: File[] = [
      {
        filename: 'proj1/main.js'
      },
      {
        filename: 'proj1/VERSION'
      },
      {
        filename: 'proj2/VERSION'
      },
      {
        filename: 'readme.md'
      }
    ]

    const commands = commandFactory.make({
      only: '*/VERSION',
      foldersOnlyAfterFilter: true
    })

    expect(runCommandsOnFiles(commands, changedFiles)).toEqual([
      'proj1',
      'proj2'
    ])
  })
})
