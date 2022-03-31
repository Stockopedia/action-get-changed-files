import {GetFilesCommand} from './get-files'

describe('get-files command', () => {
  it('should return files', () => {
    const files = [
      {
        filename: 'one'
      },
      {
        filename: 'two'
      }
    ]
    expect(new GetFilesCommand().run(files)).toBe(files)
  })
})
