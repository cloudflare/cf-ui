// @flow

const once = require('lodash/once');
const promisescript = require('promisescript');

const ADWORDS_ASYNC_SCRIPT = 'https://www.googleadservices.com/pagead/conversion_async.js';
const ADWORDS_GLOBAL = 'google_trackConversion';

declare var global: {
  google_trackConversion: (Object) => void
};

const getScript: () => Promise<void> = once(() => promisescript({
  url: ADWORDS_ASYNC_SCRIPT,
  type: 'script',
  exposed: ADWORDS_GLOBAL
}));

type Params =
  | string
  | number
  | boolean
  | null
  | Array<Params>
  | { [key: string]: Params };

function track(id: string, label: string, params: Params, remarketingOnly?: boolean = false) {
  return getScript().then(() => {
    // AdWords exposes an onload callback but not an onerror callback so we
    // can't wait for this to be successful. (shrug)
    global[ADWORDS_GLOBAL]({
      google_conversion_id: id,
      google_conversion_label: label,
      google_custom_params: params,
      google_remarketing_only: remarketingOnly
    });
  });
}

module.exports = {track};
