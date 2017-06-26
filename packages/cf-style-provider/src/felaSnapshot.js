import renderer from 'react-test-renderer';
import { html as beautify } from 'js-beautify';
import CleanCSS from 'clean-css';
import felaTestContext from './felaTestContext';
import createRenderer from './createRenderer';

const cssCleaner = new CleanCSS({ format: 'beautify', level: 0 });

export default component => {
  const felaRenderer = createRenderer({
    dev: true
  });

  return {
    component: renderer
      .create(felaTestContext(component, felaRenderer))
      .toJSON(),
    styles: cssCleaner.minify(felaRenderer.renderToString()).styles
  };
};
