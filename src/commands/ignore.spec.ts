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
    },
    {
      filename: "two.ts"
    }]
    expect(new IgnoreCommand("**/*.+(js|ts)").run(files)).toEqual([
    {
      filename: "two.txt"
    }])
  })
  it('should only return folders not matching supplied glob', () => {
    const files = [{
      filename: "one"
    },
    {
      filename: "two"
    },
    {
      filename: "bla"
    }]
    expect(new IgnoreCommand("**/+(one|two)").run(files)).toEqual([
    {
      filename: "bla"
    }])
  })
})