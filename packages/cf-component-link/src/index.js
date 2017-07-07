import LinkUnstyled from './Link';
import LinkTheme from './LinkTheme';
import { applyTheme } from 'cf-style-container';

const Link = applyTheme(LinkUnstyled, LinkTheme);

export default {
  Link,
  LinkUnstyled,
  LinkTheme
};
