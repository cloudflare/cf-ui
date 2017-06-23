import renderer from 'react-test-renderer';
import { html as beautify } from 'js-beautify';
import felaTestContext from './felaTestContext';
import createRenderer from './createRenderer';

export default component => {
  const felaRenderer = createRenderer();
  return {
    component: renderer
      .create(felaTestContex(component, felaRenderer))
      .toJSON(),
    styles: beautify(felaRenderer.renderToString(), { indent_size: 2 })
  };
};
