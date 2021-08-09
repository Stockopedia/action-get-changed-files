import {GitHub} from '@actions/github/lib/utils'
import {Context} from './options'
import {File} from './commands'

export class GithubClient {
  constructor(private readonly octokit: InstanceType<typeof GitHub>) {}

  async getChangedFiles(context: Context): Promise<File[]> {
    try {
      const {data} = await this.octokit.rest.repos.compareCommits({
        ...context.repo,
        base: context.before,
        head: context.after
      })

      return data.files ?? []
    } catch (e) {
      throw new GithubCommitsError(e.message)
    }
  }
}

export class GithubCommitsError extends Error {
  constructor(message: string) {
    super(`Unable to retrieve commit data from github - ${message}`)
  }
}
