# c19i2b2-website
Website for c19i2b2 consortium project.

## Development

Set up (macOS)

```
brew install ruby
gem install jekyll bundler
```

Development

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

## Deployment

```
bundle exec jekyll build
```

Transfer files in `_site/` via FTP.