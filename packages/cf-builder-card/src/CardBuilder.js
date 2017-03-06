import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  Card,
  CardSection,
  CardContent,
  CardControl,
  CardDrawers,
  CardPropTypes
} from 'cf-component-card';
import DynamicContent from 'cf-component-dynamic-content';
import markdown from 'cf-util-markdown';
import cardActions from './cardActions';

class CardBuilder extends React.Component {
  render() {
    return (
      <Card>
        <CardSection>
          <CardContent title={this.props.title}>
            <DynamicContent
              dangerouslySetInnerHTML={{
                __html: markdown(this.props.description)
              }}
            />
          </CardContent>

          {this.props.control &&
            <CardControl>
              {this.props.control}
            </CardControl>}
        </CardSection>

        {this.props.table &&
          <CardSection>
            {this.props.table}
          </CardSection>}

        {this.props.drawers &&
          <CardDrawers
            onClick={this.props.onDrawerClick}
            active={this.props.activeDrawer}
            drawers={this.props.drawers}
          />}
      </Card>
    );
  }
}

CardBuilder.propTypes = {
  cardName: PropTypes.string.isRequired,

  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,

  control: PropTypes.element,
  table: PropTypes.element,

  drawers: CardPropTypes.cardDrawers,
  onDrawerClick: PropTypes.func,
  activeDrawer: PropTypes.string
};

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

export default connect(mapStateToProps, mapDispatchToProps)(CardBuilder);
