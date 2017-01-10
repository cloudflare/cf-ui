// @flow

const React = require('react');
const {PropTypes} = React;

const cardDrawer = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  content: PropTypes.any.isRequired
});

const cardDrawers = PropTypes.arrayOf(cardDrawer);

module.exports = {
  cardDrawer,
  cardDrawers
};
