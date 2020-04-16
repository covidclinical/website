#!/usr/bin/env bash

cd "$(dirname "$0")"


if [ "$1" == "--prod" ]; then
    bundle exec jekyll build
    echo "* For production: syncing with bucket '$S3_BUCKET_4CE_PROD'"
    rm -f _site/robots.txt
    aws s3 sync _site/ s3://$S3_BUCKET_4CE_PROD/ --cache-control max-age=3600
else
    bundle exec jekyll build --baseurl /$S3_DEV_BASE

    mv _site $S3_DEV_BASE
    mkdir _site
    mv $S3_DEV_BASE _site

    echo "* For development: syncing with bucket '$S3_BUCKET_4CE_DEV'"
    echo -e "User-agent: *\nDisallow: /" > _site/robots.txt
    aws s3 sync _site/ s3://$S3_BUCKET_4CE_DEV/ --cache-control max-age=0
fi