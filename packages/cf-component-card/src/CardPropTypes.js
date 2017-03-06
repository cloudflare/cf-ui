import React, { PropTypes } from 'react';

const cardDrawer = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  content: PropTypes.any.isRequired
});

const cardDrawers = PropTypes.arrayOf(cardDrawer);

export default { cardDrawer, cardDrawers };
