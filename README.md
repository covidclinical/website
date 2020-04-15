# 4CE Website
Website for 4CE Consortium

## Development

Set up (macOS)

```
brew install ruby
gem install jekyll bundler
```

Start development server

```
bundle exec jekyll serve
```

### Updating content

- Home page: edit `pages/index.html`
- Members list: edit `_data/members.yml`
- News: edit/add `_posts/{year}-{month}-{day}-your-post-title-here.md`
- styles: edit `assets/main.scss`
- external urls: edit `_data/constants.yml`
- site title, subtitle, description, and short disclaimer: edit `config.yml`

### Adding a publication and associated plots

#### Adding a new publication

- Add a new markdown file `_publications/{paper_slug}.md` with the proper frontmatter (see existing publication markdown files).
- Add an abstract or description as the contents of the markdown file.

#### Adding plot pages

- Plots must be associated with a particular "data release". Be sure to add one under `releases:` in the publication frontmatter.

- Add plot files to the release directory
    - Add Vega-Lite files: `_plots/{paper_slug}/{release_slug}/vega/{my_plot_file}.json`
    - Add LineUp files: `_plots/{paper_slug}/{release_slug}/lineup/{my_plot_file}.json`
    - Add image files:
        - as PNG: `_plots/{paper_slug}/{release_slug}/png/{my_plot_file}.png`
        - as SVG: `_plots/{paper_slug}/{release_slug}/svg/{my_plot_file}.svg`

- Add a markdown file for each plot page: `_plots/{paper_slug}/{release_slug}/{my_plot_page}.md`
    - Add frontmatter to the top of the markdown file, and be sure to set `type: plot` (see existing plot markdown files).
    - A plot page can contain multiple plots, either vertically stacked or in a tabbed layout (based on whether the `plots:` field is a hash vs. an array).

#### Adding dataset downloads

- Like plots, dataset downlaods must be associated with a particular release.
- Add a markdown file for each dataset: `_plots/{paper_slug}/{release_slug}/{my_dataset}_data.md`
    - Add frontmatter to the top of the markdown file, and be sure to set `type: dataset` (see existing dataset markdown files).

### Adding a new page

Add a HTML or MD file to `pages/`

and add the following "frontmatter" to the top of the file:

```yml
---
layout: page
title: Your Page Title Here
permalink: /your-page-title-here/index.html
order: 1
---
```

## Troubleshooting

Ruby and gems may need to be added to your `PATH` variable.
For me, this meant adding the following to my `~/.zshrc` file:

```sh
export PATH="/usr/local/opt/ruby/bin:$PATH"
export PATH="/usr/local/lib/ruby/gems/2.7.0/bin:$PATH"
```

## Deployment

Set the `S3_BUCKET_4CE_DEV` and `S3_BUCKET_4CE_PROD` environment variables.

Set the `S3_DEV_BASE` environment variable to a random string.

Build and deploy to one of the buckets:

```sh
bash ./build-and-deploy.sh
# or
bash ./build-and-deploy.sh --prod
```
