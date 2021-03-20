import * as core from '@actions/core'
import {context, getOctokit} from '@actions/github'
import {GithubClient} from './client'
import {commandFactory, formatFactory} from './commands'
import {runner} from './runner'

type Options = {
  log?: Console
}

async function run(): Promise<void> {
  try {
    const token = core.getInput('github-token', {required: true})
    const ignoreGlob = core.getInput('ignore', {required: false})
    const foldersOnly = core.getInput('foldersOnly', {required: false})
    const format = core.getInput('format')
    const debug = core.getInput('debug')
    const githubOptions: Options = {}

    if (debug === 'true') {
      githubOptions.log = console
    }

    const options = {
      foldersOnly: foldersOnly === 'true',
      ignore: ignoreGlob,
      format: format as any
    }

    const commands = commandFactory.make(options)

    const github = getOctokit(token, githubOptions)

    console.log(context)

    const result = await runner(
      context,
      new GithubClient(github),
      commands,
      formatFactory.make(options.format ?? 'json')
    )

    core.setOutput('changed', result)
  } catch (error) {
    core.setFailed(error.message)
  }
}

process.on('unhandledRejection', handleError)
run().catch(handleError)

function handleError(err: any): void {
  console.error(err)
  core.setFailed(`Unhandled error: ${err}`)
}
