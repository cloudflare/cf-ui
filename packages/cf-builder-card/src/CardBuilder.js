const React = require('react');
const {PropTypes} = React;
const {connect} = require('react-redux');
const {
  Card,
  CardSection,
  CardContent,
  CardMessages,
  CardControl,
  CardDrawers,
  CardPropTypes
} = require('cf-component-card');
const DynamicContent = require('cf-component-dynamic-content');
const markdown = require('cf-util-markdown');
const cardActions = require('./cardActions');

class CardBuilder extends React.Component {
  static propTypes = {
    cardName: PropTypes.string.isRequired,

    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,

    control: PropTypes.element,
    table: PropTypes.element,

    drawers: CardPropTypes.cardDrawers,
    onDrawerClick: PropTypes.func,
    activeDrawer: PropTypes.string
  };

  render() {
    return (
      <Card>
        <CardSection>
          <CardContent title={this.props.title}>
            <DynamicContent dangerouslySetInnerHTML={{
              __html: markdown(this.props.description)
            }}/>
          </CardContent>

          {this.props.control && (
            <CardControl>
              {this.props.control}
            </CardControl>
          )}
        </CardSection>

        {this.props.table && (
          <CardSection>
            {this.props.table}
          </CardSection>
        )}

        {this.props.drawers && (
          <CardDrawers
            onClick={this.props.onDrawerClick}
            active={this.props.activeDrawer}
            drawers={this.props.drawers}/>
        )}
      </Card>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const cardName = ownProps.cardName;
  const cardState = state.cards[cardName];
  return {
    activeDrawer: cardState && cardState.activeDrawer
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  const cardName = ownProps.cardName;
  return {
    onDrawerClick(drawerId) {
      dispatch(cardActions.toggleDrawer(cardName, drawerId));
    }
  };
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(CardBuilder);
