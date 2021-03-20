import { IgnoreCommand } from './';

describe('ignore command', () => {
  it('should only return files not matching supplied glob', () => {
    const files = [{
      filename: "one/test.js"
    },
    {
      filename: "two.js"
    },
    {
      filename: "two.txt"
    }]
    expect(new IgnoreCommand("**/*.js").run(files)).toEqual([
    {
      filename: "two.txt"
    }])
  })
})