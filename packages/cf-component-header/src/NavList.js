import { createComponent } from 'cf-style-container';

const NavList = createComponent(
  () => ({
    display: 'none',
    lineHeight: '42px',
    textAlign: 'right',
    margin: 0,
    padding: 0,
    marginRight: '1.5rem',
    listStyle: 'none',
    tablet: {
      display: 'block'
    }
  }),
  'ul'
);

export default NavList;
