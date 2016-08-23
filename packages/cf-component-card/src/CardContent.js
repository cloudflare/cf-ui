const React = require('react');
const {PropTypes} = React;

class CardContent extends React.Component {
  static propTypes = {
    title: PropTypes.any.isRequired,
    footer: PropTypes.string
  };

  render() {
    return (
      <div className="cf-card__content">
        <h3 className="cf-card__title">
          {this.props.title}
        </h3>
        {this.props.children}
        { this.props.footer ? (
          <div className="cf-card__footer">
            {this.props.footer}
          </div> ) : null 
        }
      </div>
    );
  }
}

module.exports = CardContent;
