import React from 'react';
import assertEqualJSX from '../../../utils/assertEqualJSX';
import CardDrawers from '../src/CardDrawers';
import CardToolbar from '../src/CardToolbar';
import CardToolbarLink from '../src/CardToolbarLink';

function sanitizeId(str) {
  return str.replace(/"card-(\d)-drawer-([a-z]+)"/ig, '"%id%-$2"');
}

describe('CardDrawers', function() {
  it('should render', function() {
    assertEqualJSX(
      <CardDrawers onClick={() => {}} active="one" drawers={[
        { id: 'one', name: 'One', content: 'One Content' },
        { id: 'two', name: 'Two', content: 'Two Content' }
      ]}/>,
      // should equal
      <div className="cf-card__section cf-card__section--default">
        <CardToolbar links={[
          <CardToolbarLink key="one" id="%id%-one" isActive={true} onClick={() => {}}>One</CardToolbarLink>,
          <CardToolbarLink key="two" id="%id%-two" isActive={false} onClick={() => {}}>Two</CardToolbarLink>
        ]}/>
        <div className="cf-card__drawers_container cf-card__drawers_container--open">
          <div role="tabpanel"
            aria-labelledby="%id%-one"
            aria-hidden="false"
            className="cf-card__drawer cf-card__drawer--active">
            One Content
            </div>
          <div role="tabpanel"
            aria-labelledby="%id%-two"
            aria-hidden="true"
            className="cf-card__drawer"></div>
        </div>
    </div>,
    { sanitize: sanitizeId });
  });
});
