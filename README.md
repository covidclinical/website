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
- News: edit/add `_posts/{year}-{month}-{day}-your-post-title-here.markdown`
- styles: edit `assets/main.scss`

### Adding plots

#### Making a new data release

- List the data release in `_data/releases.yml` and provide a name, unique key, and description.
- Add a new directory in `_plots` with the new release name, for example `_plots/release-2020-mm-dd/`

#### Adding plot pages

- Add plot files to the release directory
    - Add Vega-Lite files: `_plots/{release}/vega/{my_plot_file}.json`
    - Add LineUp files: `_plots/{release}/lineup/{my_plot_file}.json`
    - Add image files:
        - as PNG: `_plots/{release}/png/{my_plot_file}.png`
        - as SVG: `_plots/{release}/svg/{my_plot_file}.svg`

- Add a markdown file for each plot page: `_plots/{release}/{my_plot_page}.md`
    - A plot page can contain multiple plots, either vertically stacked or in a tabbed layout.
    - Add page properties as "frontmatter" to the top of the markdown file:

Vertical stack example (use a list as the `plots` value):
```yml
---
title: Demographics for All Participating Sites
subtitle: This is a subtitle
category: Demographics
notebook: 02_demographics.ipynb
release: release-2020-mm-dd
plots:
    - vega/plot_age_by_country.json
    - vega/plot_age_by_site.json
    - lineup/plot_demographics_all.json
    - png/plot_demographics_overview.png
---

The plots can be given a description in markdown here...
```

Tabbed layout example (use a dictionary as the `plots` value, mapping tabs to lists of plots):
```yml
---
title: Demographics for All Participating Sites
subtitle: This is a subtitle
category: Demographics
notebook: 02_demographics.ipynb
release: release-2020-mm-dd
plots:
    Overview:
        - png/plot_demographics_all.png
        - svg/plot_labs_all.svg
    By Country:
        - vega/plot_age_by_country.json
    By Site:
        - vega/plot_age_by_site.json
---

The plots can be given a description in markdown here...
```

### Adding a new page

Add a file to `pages/your-page-name-here.html`

and add the following "frontmatter" to the top of the HTML file:

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
