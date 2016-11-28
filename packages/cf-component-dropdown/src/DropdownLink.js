const React = require('react');
const {PropTypes} = React;
const Link = require('cf-component-link');
const DropdownRegistry = require('./DropdownRegistry');

class DropdownLink extends React.Component {
  constructor(props, context) {
    if (!props.to && !props.onClick) {
      throw new Error('<DropdownLink/> requires either a `to` or `onClick` prop');
    }

    super(props, context);
    this.dropdownRegistry = context.dropdownRegistry;

    this.handleLinkBlur = this.handleLinkBlur.bind(this);
    this.handleLinkFocus = this.handleLinkFocus.bind(this);
    this.focus = this.focus.bind(this);
  }

  componentDidMount() {
    this.dropdownRegistry.addChild(this);
  }

  componentWillUnmount() {
    this.dropdownRegistry.removeChild(this);
  }

  focus() {
    this.link.focus();
  }

  handleLinkFocus() {
    this.dropdownRegistry.setFocusedChild(this);
  }

  handleLinkBlur() {
    this.dropdownRegistry.removeFocusedChild();
  }

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

DropdownLink.propTypes = {
  to: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.arrayOf(PropTypes.node)
};

DropdownLink.contextTypes = {
  dropdownRegistry: PropTypes.instanceOf(DropdownRegistry).isRequired
};

module.exports = DropdownLink;
