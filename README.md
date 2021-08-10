# Get changed folders github action

Get the changes folders/files between the latest commit, and the previous latest commit

## Usage

```yaml

- uses: Stockopedia/get-changed-files@v1
  id: get_changed
  with:
    github-token: ${{ secrets.GITHUB_TOKEN }}
    ignore: "**/*.js" # glob
    foldersOnly: true # to only include folders in the output
    format: json # either json, csv or newline
- name: Echo
  run: echo ${{ steps.get_changed.outputs.changed }}
```

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
- uses: Stockopedia/get-changed-files@v1
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
