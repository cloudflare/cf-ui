#!/bin/sh
set -e

./node_modules/.bin/gulp build

./node_modules/.bin/watchify \
  -v \
  -r react \
  -r react-dom \
  -r lodash --noparse lodash \
  -r react-addons-css-transition-group \
  -o example/vendor.js & \
./node_modules/.bin/watchify packages/cf-component-*/example/*/component.js \
  -v \
  -x react \
  -x react-dom \
  -x lodash \
  -x react-addons-css-transition-group \
  -t babelify \
  -o example/bundle.js & \
node ./example/server.js
