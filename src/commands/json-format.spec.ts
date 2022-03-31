import {JsonFormatCommand} from './json-format'

describe('json formatter', () => {
  it('should return json formatted string', () => {
    expect(new JsonFormatCommand().run(['one', 'two'])).toBe('["one","two"]')
  })
})
