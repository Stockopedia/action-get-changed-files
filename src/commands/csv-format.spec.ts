import {CsvFormatCommand} from './csv-format'

describe('csv formatter', () => {
  it('should return csv formatted string', () => {
    expect(new CsvFormatCommand().run(['one', 'two'])).toBe('one,two')
  })
})
