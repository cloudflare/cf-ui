const once = require('lodash/once');
const promisescript = require('promisescript');

const adwords = {};

const ADWORDS_ASYNC_SCRIPT = 'https://www.googleadservices.com/pagead/conversion_async.js';
const ADWORDS_GLOBAL = 'google_trackConversion';

const getScript = once(() => promisescript({
  url: ADWORDS_ASYNC_SCRIPT,
  type: 'script',
  exposed: ADWORDS_GLOBAL
}));

function trackAdwords(id, label, params, remarketingOnly = false) {
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

module.exports = {trackAdwords};
