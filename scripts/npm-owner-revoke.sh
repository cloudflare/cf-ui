#!/bin/sh
set -e

read -p "Username: " username
read -p "Are you sure you want to remove $username from all packages (y/n)? " confirm

if [ "$confirm" != "y" ]; then
  echo "Ok bye."
  exit 0
fi

for f in packages/*; do
  package=`basename $f`

  if [ -d "$f" ] && [ -e "$f/package.json" ]; then
    npm owner rm $username $package
  fi
done

sed -i '' "/$username/d" NPM_OWNERS

echo "Success."
