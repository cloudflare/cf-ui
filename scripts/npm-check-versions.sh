#!/bin/sh
set -e

for f in packages/*; do
  package=`basename $f`

  if [ -d "$f" ] && [ -e "$f/package.json" ]; then
    remoteVersion=`npm info $package --json | jq ".version" | sed 's/"//g'`
    localVersion=`cat $f/package.json | jq ".version" | sed 's/"//g'`

    echo $package $remoteVersion $localVersion
  fi
done
