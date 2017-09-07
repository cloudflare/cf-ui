import React from 'react';
import { createComponent } from 'cf-style-container';

const ClearRenderer = createComponent(
  ({ theme }) => ({
    display: 'inline-block',
    fontSize: '18px',
    fontWeight: 'normal',
    lineHeight: 1,
    ':hover': {
      color: theme.color.red
    }
  }),
  'span'
);

export default function clearRenderer() {
  return (
    <ClearRenderer>
      <span dangerouslySetInnerHTML={{ __html: '&times;' }} />
    </ClearRenderer>
  );
}
