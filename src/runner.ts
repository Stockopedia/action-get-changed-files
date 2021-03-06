import {GithubClient} from './client'
import {File, ICommand, IFormatCommand} from './commands'
import {Context} from './options'

export const runner = async (
  context: Context,
  client: GithubClient,
  commands: ICommand[],
  formatter: IFormatCommand
): Promise<string> => {
  const files = await client.getChangedFiles(context)

  return formatter.run(
    commands
      .reduce<File[]>((acc, curr) => {
        return curr.run(acc)
      }, files)
      .map(x => x.filename)
  )
}
