import PropTypes from 'prop-types';
import { createComponent } from 'cf-style-container';
import logoSvg from './logo.svg';
import logoSvgMobile from './logo_mobile.svg';

const Logo = createComponent(({ logoUrl, logoUrlMobile }) => ({
  width: 80,
  height: 40,
  verticalAlign: 'middle',
  background: `transparent url('${logoUrlMobile}') center no-repeat`,
  marginTop: 8,
  marginRight: 5,
  tablet: {
    width: 133,
    background: `transparent url('${logoUrl}') center no-repeat`
  }
}));

Logo.propTypes = {
  logoUrl: PropTypes.string,
  logoUrlMobile: PropTypes.string
};

Logo.defaultProps = {
  logoUrl: logoSvg,
  logoUrlMobile: logoSvgMobile
};

export default Logo;
