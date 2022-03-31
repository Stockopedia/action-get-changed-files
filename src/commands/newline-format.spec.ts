import {NewlineFormatCommand} from './newline-format'

describe('newline formatter', () => {
  it('should return newline formatted string', () => {
    expect(new NewlineFormatCommand().run(['one', 'two'])).toBe('one\ntwo')
  })
})
