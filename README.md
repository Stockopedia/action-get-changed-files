# Get changed folders github action

Get the changes folders/files between the latest commit, and the previous latest commit

## Usage

```yaml

- uses: Stockopedia/action-get-changed-files@v1
  id: get_changed
  with:
    github-token: ${{ secrets.GITHUB_TOKEN }}
    ignore: "**/*.js" # glob
    foldersOnly: true # to only include folders in the output
    format: json # either json, csv or newline
- name: Echo
  run: echo ${{ steps.get_changed.outputs.changed }}
```

You can find more info about the glob pattern in the [minimatch](https://github.com/isaacs/minimatch) library repo.

## Examples

In a scenario where your folder structure is like so

```files
.github/
src/
    feature1/
    auth/
    health/
readme.md
```

Given an example action defined like

```yaml
- uses: Stockopedia/action-get-changed-files@v1
  id: get_changed
  with:
    github-token: ${{ secrets.GITHUB_TOKEN }}
    ignore: "**/+(.github)"
    foldersOnly: false 
    format: csv
- name: Echo changed files
  run: echo ${{ steps.get_changed.outputs.changed }}
```

And you change a file in the `feature1` folder, a file in the `.github` folder and the `readme.md` file, the result of `echo ${{ steps.get_changed.outputs.changed }}` above would be

```csv
feature1, readme.md
```

### Example: multi-project repo

One possible usage of this action is when you have a repository containing multiple subprojects and you want
to build each folder only when a file in that folder changes, let's say a `VERSION` file.

```files
.github/
proj1/
  main.js
  VERSION
proj2/
  main.js
  VERSION
proj3/
  main.js
  VERSION
readme.md
```

Given an example action defined like

```yaml
- uses: Stockopedia/action-get-changed-files@v1
  id: get_changed
  with:
    github-token: ${{ secrets.GITHUB_TOKEN }}
    # Only find folders containing a VERSION file that has changed
    only: "*/VERSION"
    # Get the changed folders names, but only after having applied the `only` filter
    foldersOnlyAfterFilter: true 
    format: csv
- name: Echo changed files
  run: echo ${{ steps.get_changed.outputs.changed }}
```

And you change the `VERSION` file in the `proj1` and `proj2` folders, the result of `echo ${{ steps.get_changed.outputs.changed }}` above would be

```csv
proj1, proj2
```