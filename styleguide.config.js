const { createConfig } = require('@webpack-blocks/webpack2');
const babel = require('@webpack-blocks/babel6');

module.exports = {
  components: './packages/*/src/[A-Z]*.js',
  webpackConfig: createConfig([babel()])
};
