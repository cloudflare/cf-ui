import React from 'react';

import PropTypes from 'prop-types';

const cardDrawer = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  content: PropTypes.any.isRequired
});

const cardDrawers = PropTypes.arrayOf(cardDrawer);

export default { cardDrawer, cardDrawers };
