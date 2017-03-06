import React, { PropTypes } from 'react';

class PageHeader extends React.Component {
  render() {
    return (
      <header className="cf-page__header">
        <h1 className="cf-page__title">{this.props.title}</h1>
        {this.props.subtitle &&
          <p className="cf-page__subtitle">{this.props.subtitle}</p>}
      </header>
    );
  }
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
};

export default PageHeader;
