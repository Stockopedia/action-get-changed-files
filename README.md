# Get changed folders github action

Get the changes folders/files between the latest commit, and the previous latest commit

## Usage

```yaml

- uses: Stockopedia/get-changed-files@v1
  id: get_changed
  with:
    github-token: ${{ secrets.GITHUB_TOKEN }}
    ignore: "**/*.js" #glob
    foldersOnly: true #to only include folders int the output
    format: json #either json, csv of newline
- name: Echo
  run: echo ${{ steps.get_changed.outputs.changed }}
```
