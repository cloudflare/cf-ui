import renderer from 'react-test-renderer';
import felaTestContext from './felaTestContext';
import createRenderer from './createRenderer';

export default component => {
  const felaRenderer = createRenderer({
    dev: true
  });

  const prettifyFelaString = str =>
    str
      // adds extra lines before @media
      .replace(/\@media/g, '\n\n@media')
      // adds extra lines between keyframes and following selectors
      .replace(/\}\.([a-zA-Z])/g, '}\n\n.$1')
      // adds extra indentation and lines to nested selectors
      .replace(
        /\)\{(\.[\s\S]+?\})(\})/g,
        (match, p1) => `) {\n  ${p1.replace(/\n/g, '\n  ')}\n}`
      );

  return {
    component: renderer
      .create(felaTestContext(component, felaRenderer))
      .toJSON(),
    styles: `\n${prettifyFelaString(felaRenderer.renderToString())}\n`
  };
};
