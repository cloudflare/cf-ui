import React, {PropTypes} from 'react';

export default class Page extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
  };

  render() {
    return (
      <header className="cf-page__header">
        <h1 className="cf-page__title">{this.props.title}</h1>
        {this.props.subtitle && (
          <p className="cf-page__subtitle">{this.props.subtitle}</p>
        )}
      </header>
    );
  }
}
