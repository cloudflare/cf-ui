#!/bin/sh
set -e

vendor=$(mktemp /tmp/vendor.js.XXXXXX)
bundle=$(mktemp /tmp/bundle.js.XXXXXX)

./node_modules/.bin/gulp build

./node_modules/.bin/watchify \
  -v \
  -r react \
  -r react-dom \
  -r lodash --noparse lodash \
  -r react-addons-css-transition-group \
  -o $vendor & \
./node_modules/.bin/watchify packages/cf-component-*/example/*/component.js \
  -v \
  -x react \
  -x react-dom \
  -x lodash \
  -x react-addons-css-transition-group \
  -t babelify \
  -o $bundle & \
node ./example/server.js $vendor $bundle
