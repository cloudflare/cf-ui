const React = require('react');
const {PropTypes} = React;
const classnames = require('classnames');

class CollapsablePanel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
    this.handleLinkClick = this.handleLinkClick.bind(this);
  }

  handleLinkClick(e) {
    e.preventDefault();
    this.setState({
      expanded: !this.state.expanded
    });
  }

  render() {
    const linkClasses = classnames({
      'cf-collapsable-panel__link': true,
      expanded: this.state.expanded
    });

    const {linkText, description, children} = this.props;
    return (
      <div className="cf-collapsable-panel">
        <div className="cf-collapsable-panel__link-container">
          <a className={linkClasses} onClick={this.handleLinkClick}>{linkText}</a>
          <span className='cf-collpasable-panel__link-description'>
            {description}
          </span>
        </div>
        {this.state.expanded && children}
      </div>
    );
  }
}

CollapsablePanel.propTypes = {
  linkText: PropTypes.string.isRequired,
  description: PropTypes.string,
  children: PropTypes.node
};

CollapsablePanel.defaultProps = {
  steps: []
};

module.exports = CollapsablePanel;
