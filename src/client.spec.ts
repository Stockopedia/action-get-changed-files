import {GithubClient, GithubCommitsError} from './client'
import {File} from './commands'

const testFiles = [
  {
    filename: 'bla'
  }
]

const testContext = {
  repo: {
    repo: 'TestRepo',
    owner: 'SomeOwner'
  },
  payload: {
    before: 'testBeforeSha',
    after: 'testAfterSha'
  }
}

describe('github client', () => {
  describe('the getChangedFiles method', () => {
    describe('given available data', () => {
      let result: File[]
      const commitMock = jest.fn(() => {
        return {
          data: {
            files: testFiles
          }
        }
      })
      const githubMock = {
        repos: {
          compareCommits: commitMock
        }
      }
      beforeEach(async () => {
        const client = new GithubClient(githubMock as any)
        result = await client.getChangedFiles(testContext as any)
      })
      it('should return list of files', () => {
        expect(result).toEqual(testFiles)
      })
      it('should call endpoint with correct params', () => {
        expect(commitMock).toHaveBeenCalledTimes(1)
        expect(commitMock).toHaveBeenCalledWith({
          repo: testContext.repo.repo,
          owner: testContext.repo.owner,
          base: testContext.payload.before,
          head: testContext.payload.after
        })
      })
      afterEach(() => {
        jest.clearAllMocks()
      })
    })
    describe('given no data returned', () => {
      it('should throw error', async () => {
        await expect(
          new GithubClient({
            repos: {
              compareCommits: jest.fn()
            }
          } as any).getChangedFiles(testContext as any)
        ).rejects.toThrowError(GithubCommitsError)
      })
    })
  })
})
