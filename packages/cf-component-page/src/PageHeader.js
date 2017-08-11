import React from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'cf-style-container';

const PageHeading = createComponent(
  () => ({
    fontSize: '2rem',
    lineHeight: '1.2',
    fontWeight: 400
  }),
  'h1'
);

const PageSubheading = createComponent(
  ({ theme }) => ({
    color: theme.colorGray,
    fontWeight: theme.fontWeightLight
  }),
  'h2'
);

const PageHeader = ({ title, subtitle, className }) => {
  return (
    <header className={className}>
      <PageHeading>
        {title}
      </PageHeading>
      {subtitle &&
        <PageSubheading>
          {subtitle}
        </PageSubheading>}
    </header>
  );
};

PageHeader.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
};

export default createComponent(() => {}, PageHeader);
