import React from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'cf-style-container';

const styles = ({ theme }) => ({
  minHeight: '2.96666rem',
  display: 'flex',
  alignItems: 'center',
  width: '100%',

  '&::after': {
    content: "''",
    display: 'table',
    clear: 'both'
  }
});

const Links = createComponent(
  () => ({
    display: 'flex',
    justifyContent: 'flex-end',
    height: '100%'
  }),
  'div',
  ['role']
);

const Controls = createComponent(() => ({
  flex: 1,
  marginLeft: '1em'
}));

const CardToolbar = ({ className, controls, links }) => (
  <div className={className}>
    <Controls>{controls}</Controls>
    <Links role="tablist">
      {links}
    </Links>
  </div>
);

CardToolbar.propTypes = {
  className: PropTypes.string,
  controls: PropTypes.any,
  links: PropTypes.any
};

export default createComponent(styles, CardToolbar);
