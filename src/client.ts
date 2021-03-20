import {GitHub} from '@actions/github/lib/utils'
import {Context} from './options'

export class GithubClient {
  constructor(private readonly octokit: InstanceType<typeof GitHub>) {}

  async getChangedFiles(context: Context) {
    try {
      const {data} = await this.octokit.repos.compareCommits({
        ...context.repo,
        base: context.before,
        head: context.after
      })

      return data.files
    } catch (e) {
      throw new GithubCommitsError()
    }
  }
}

export class GithubCommitsError extends Error {
  constructor() {
    super('Unable to retrieve commit data from github')
  }
}
