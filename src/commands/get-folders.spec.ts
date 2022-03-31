import {GetFoldersCommand} from './'

describe('get-folders command', () => {
  it('should only return folders', () => {
    const files = [
      {
        filename: 'one/test.txt'
      },
      {
        filename: 'two.txt'
      },
      {
        filename: 'two/bla/something.ts'
      }
    ]
    expect(new GetFoldersCommand().run(files)).toEqual([
      {
        filename: 'one'
      },
      {
        filename: 'two'
      }
    ])
  })
})
