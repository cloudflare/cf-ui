#!/bin/sh
set -e

echo "Building repos..."
./node_modules/.bin/gulp build

echo "Building vendor.js..."
./node_modules/.bin/browserify \
  -r react \
  -r react-dom \
  -r lodash --noparse lodash \
  -r react-addons-css-transition-group \
  -o example/vendor.js

echo "Building bundle.js..."
./node_modules/.bin/browserify packages/cf-component-*/example/*/component.js \
  -x react \
  -x react-dom \
  -x lodash \
  -x react-addons-css-transition-group \
  -t babelify \
  -o example/bundle.js

echo "Starting server..."
node ./example/server.js
