import {DeduplicateCommand} from './deduplicate'

describe('deduplicate command', () => {
  it('should return files', () => {
    const files = [
      {
        filename: 'one'
      },
      {
        filename: 'two'
      },
      {
        filename: 'two'
      },
      {
        filename: 'some/file.txt'
      },
      {
        filename: 'some/file.txt'
      }
    ]
    expect(new DeduplicateCommand().run(files)).toEqual([
      {
        filename: 'one'
      },
      {
        filename: 'two'
      },
      {
        filename: 'some/file.txt'
      }
    ])
  })
})
