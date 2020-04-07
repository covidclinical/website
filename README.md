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

### Troubleshooting

Ruby and gems may need to be added to your `PATH` variable.
For me, this meant adding the following to my `~/.zshrc` file:

```sh
export PATH="/usr/local/opt/ruby/bin:$PATH"
export PATH="/usr/local/lib/ruby/gems/2.7.0/bin:$PATH"
```

### Updating content

#### Members list

Edit `_data/members.yml`

#### News posts

Edit `_posts/{year}-{month}-{day}-your-post-title-here.markdown`

#### Home page contents

Edit `index.html`

#### Home page (HTML)

Edit `_layouts/home.html`

#### Styles (SCSS)

Edit `_sass/covidclinical.scss`


### Adding a new page

Add a file to `pages/your-page-name-here.html`

and add the following "frontmatter" to the top of the HTML file:

```
---
layout: page
title: Your Page Title Here
permalink: /your-page-name-here/
---
```

## Deployment

Set the `S3_BUCKET_4CE_DEV` and `S3_BUCKET_4CE_PROD` environment variables.

Build and deploy to one of the buckets:

```sh
bash ./build-and-deploy.sh
# or
bash ./build-and-deploy.sh --prod
```
