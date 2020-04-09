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

#### Members list

Edit `_data/members.yml`

#### News posts

Edit `_posts/{year}-{month}-{day}-your-post-title-here.markdown`

#### Home page

Edit `pages/index.html`

#### Styles

Edit `assets/main.scss`

### Adding plots

#### Making a new data release

- List the data release in `_data/releases.yml` and provide a name and description.
- Add a new directory in `_plots` with the new release name, for example `_plots/release-2020-mm-dd/`

#### Adding plots

- Add vega-lite `.json` files to `_plots/{release}/vega/{my_plot_file}.json`
- Add a markdown file for each plot page that should appear separately, in `_plots/{release}/{my_plot_page}.md`.
    - A single markdown plot page can contain multiple plots (either in a list or a tabbed interface).
- Add plot page properties as "frontmatter" to the top of the markdown file:

```yml
---
title: Demographics for All Participating Sites
subtitle: This is a subtitle
category: Demographics
notebook: 08_combined_data.ipynb
release: release-2020-mm-dd
plots:
    - plot_age_all
    - plot_age_by_country
---

The plot can be given a description in markdown here...
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
