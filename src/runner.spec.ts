import {runner} from './runner'

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

const mockGithubClient = {
  getChangedFiles: jest.fn(() =>
    Promise.resolve([
      {
        filename: 'testFile'
      }
    ])
  )
} as any

const formatResult = 'test formatter result'
const mockFormatter = {
  run: jest.fn(() => formatResult)
}

const mockCommand1 = {
  run: jest.fn(files => files)
}
const mockCommand2 = {
  run: jest.fn(files => files)
}

describe('runner', () => {
  let result: string
  beforeEach(async () => {
    result = await runner(
      testContext as any,
      mockGithubClient,
      [mockCommand1, mockCommand2],
      mockFormatter
    )
  })
  it('should get changed files from the github client', async () => {
    expect(mockGithubClient.getChangedFiles).toHaveBeenCalledTimes(1)
    expect(mockGithubClient.getChangedFiles).toHaveBeenCalledWith(testContext)
  })
  it('should run all given commands', () => {
    expect(mockCommand1.run).toHaveBeenCalledTimes(1)
    expect(mockCommand2.run).toHaveBeenCalledTimes(1)
  })
  it('should run formatting command', () => {
    expect(mockFormatter.run).toHaveBeenCalledTimes(1)
  })
  it('should return a string', () => {
    expect(result).toEqual(formatResult)
  })
  afterEach(() => {
    jest.clearAllMocks()
  })
})
