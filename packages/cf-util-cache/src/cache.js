import createLogger from 'cf-util-logger';
import { isArray, compact, now } from 'lodash';
import { localStorage } from './storage';

const logInfo = createLogger('cache:info');
const logWarning = createLogger('cache:warning');

function buildKey(key) {
  if (isArray(key)) {
    key = compact(key).join(':');
  }

  return '' + key;
}

function maybeParse(item) {
  try {
    return JSON.parse(item);
  } catch (err) {
    return {};
  }
}

export function get(key) {
  const name = buildKey(key);
  const { value, expires } = maybeParse(localStorage.getItem(name));
  const expired = expires && now() > expires;

  if (expired) {
    remove(key);
  }

  if (expired || value === undefined) {
    logWarning(`Missing item: ${name}`);
    return;
  }

  logInfo(`Found item: ${name}`);
  return value;
}

export function set(key, value, expires = false) {
  const name = buildKey(key);
  logInfo(`Setting item: ${name}`);
  localStorage.setItem(
    name,
    JSON.stringify({
      value,
      expires: expires && now() + expires
    })
  );
}

export function remove(key) {
  const name = buildKey(key);
  logInfo(`Removing item: ${name}`);
  localStorage.removeItem(key);
}

export function has(key) {
  return get(key) !== undefined;
}

export function clear() {
  localStorage.clear();
}
