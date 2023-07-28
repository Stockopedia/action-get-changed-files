import {OnlyCommand} from './'

describe('only command', () => {
  it('should only return files matching supplied glob', () => {
    const files = [
      {
        filename: 'one/test.js'
      },
      {
        filename: 'two.js'
      },
      {
        filename: 'two.txt'
      },
      {
        filename: 'two.ts'
      }
    ]
    expect(new OnlyCommand('**/*.+(js|ts)').run(files)).toEqual([
      {
        filename: 'one/test.js'
      },
      {
        filename: 'two.js'
      },
      {
        filename: 'two.ts'
      }
    ])
  })
  it('should only return folders matching supplied glob', () => {
    const files = [
      {
        filename: '.one'
      },
      {
        filename: 'two'
      },
      {
        filename: 'bla'
      }
    ]
    expect(new OnlyCommand('**/+(.one|two)').run(files)).toEqual([
      {
        filename: '.one'
      },
      {
        filename: 'two'
      }
    ])
  })
})
