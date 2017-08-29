import { createComponent } from 'cf-style-container';

const NavItem = createComponent(
  () => ({
    display: 'inline-block',
    verticalAlign: 'middle',
    padding: '0.5rem',
    fontSize: '0.933rem'
  }),
  'li'
);

export default NavItem;
