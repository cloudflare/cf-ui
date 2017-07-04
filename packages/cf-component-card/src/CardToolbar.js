import React from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'cf-style-container';

const styles = ({ theme }) => ({
  borderTop: `1px solid ${theme.colorGrayLight}`,
  minHeight: '2.96666rem',

  '&:first-child': {
    borderTop: 'initial'
  },

  '&::after': {
    content: "''",
    display: 'table',
    clear: 'both'
  }
});

const Links = createComponent(
  () => ({
    float: 'right'
  }),
  'div',
  ['role']
);

const CardToolbar = ({ className, controls, links }) => (
  <div className={className}>
    <div>{controls}</div>
    <Links role="tablist">
      {links}
    </Links>
  </div>
);

CardToolbar.propTypes = {
  controls: PropTypes.any,
  links: PropTypes.any
};

export default createComponent(styles, CardToolbar);
