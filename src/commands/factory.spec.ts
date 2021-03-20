import { commandFactory, formatFactory } from './factory';
import { IgnoreCommand } from './ignore';
import { GetFilesCommand } from '.';
import { GetFoldersCommand } from './get-folders';
import { CsvFormatCommand } from './csv-format';
import { JsonFormatCommand } from './json-format';
import { NewlineFormatCommand } from './newline-format';

describe('command factory', () => {
  it('should return IgnoreCommand when ignore is specified', () => {
    expect(commandFactory.make({
      ignore: "something"
    }).filter(x => x instanceof IgnoreCommand)).toHaveLength(1)
  })
  it('should ommit IgnoreCommand when ignore is not specified', () => {
    expect(commandFactory.make({}).filter(x => x instanceof IgnoreCommand)).toHaveLength(0)
  })
  it('should return GetFilesCommand command when foldersOnly is false', () => {
    expect(commandFactory.make({
      foldersOnly: false
    }).filter(x => x instanceof GetFilesCommand)).toHaveLength(1)
  })
  it('should ommit GetFilesCommand command when foldersOnly is true', () => {
    expect(commandFactory.make({
      foldersOnly: true
    }).filter(x => x instanceof GetFilesCommand)).toHaveLength(0)
  })
  it('should return GetFoldersCommand command when foldersOnly is true', () => {
    expect(commandFactory.make({
      foldersOnly: true
    }).filter(x => x instanceof GetFoldersCommand)).toHaveLength(1)
  })
  it('should ommit GetFoldersCommand command when foldersOnly is true', () => {
    expect(commandFactory.make({
      foldersOnly: false
    }).filter(x => x instanceof GetFoldersCommand)).toHaveLength(0)
  })
})

describe('format factory', () => {
  it('should return csv formatter when csv is requested', () => {
    expect(formatFactory.make('csv')).toBeInstanceOf(CsvFormatCommand)
  })
  it('should return json formatter when json is requested', () => {
    expect(formatFactory.make('json')).toBeInstanceOf(JsonFormatCommand)
  })
  it('should return newline formatter when newline is requested', () => {
    expect(formatFactory.make('newline')).toBeInstanceOf(NewlineFormatCommand)
  })
})