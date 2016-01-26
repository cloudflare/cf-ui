import {history} from 'backbone';

export default function backboneRouteHandler(url) {
  history.navigate(url, true);
}
