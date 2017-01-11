// @flow

const React = require('react');
const {PropTypes} = React;
const requiredIf = require('react-required-if');
const Link = require('cf-component-link');
const DropdownRegistry = require('./DropdownRegistry');

class DropdownLink extends React.Component {
  link: Link;

  static propTypes = {
    to: requiredIf(PropTypes.string, props => !props.onClick),
    onClick: requiredIf(PropTypes.func, props => !props.to),
    children: PropTypes.node
  };

  static contextTypes = {
    dropdownRegistry: PropTypes.instanceOf(DropdownRegistry).isRequired
  };

  componentDidMount() {
    this.context.dropdownRegistry.addChild(this);
  }

  componentWillUnmount() {
    this.context.dropdownRegistry.removeChild(this);
  }

  focus() {
    this.link.focus();
  }

  handleLinkFocus = () => {
    this.context.dropdownRegistry.setFocusedChild(this);
  };

  handleLinkBlur = () => {
    this.context.dropdownRegistry.removeFocusedChild();
  };

  render() {
    return (
      <li className="cf-dropdown__link" role="menuitem">
        <Link ref={node => this.link = node}
          to={this.props.to}
          onClick={this.props.onClick}
          onFocus={this.handleLinkFocus}
          onBlur={this.handleLinkBlur}>
          {this.props.children}
        </Link>
      </li>
    );
  }
}

module.exports = DropdownLink;
