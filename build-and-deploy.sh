#!/usr/bin/env bash

cd "$(dirname "$0")"

bundle exec jekyll build

if [ "$1" == "--prod" ]; then
    echo "* For production: syncing with bucket '$S3_BUCKET_4CE_PROD'"
    rm -f _site/robots.txt
    aws s3 sync _site/ s3://$S3_BUCKET_4CE_PROD/
else
    echo "* For development: syncing with bucket '$S3_BUCKET_4CE_DEV'"
    echo -e "User-agent: *\nDisallow: /" > _site/robots.txt
    aws s3 sync _site/ s3://$S3_BUCKET_4CE_DEV/ --cache-control max-age=0
fi