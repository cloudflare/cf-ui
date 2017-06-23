import renderer from 'react-test-renderer';
import { html as beautify } from 'js-beautify';
import felaTestContext from './felaTestContext';
import createRenderer from './createRenderer';

const prettifyFelaString = str =>
  str.replace(/\.[a-z]+/g, '\n    $&').replace(/^\s+/, '\n');

export default component => {
  const felaRenderer = createRenderer({
    dev: true
  });
  return {
    component: renderer
      .create(felaTestContext(component, felaRenderer))
      .toJSON(),
    styles: prettifyFelaString(felaRenderer.renderToString())
  };
};
