// @flow

const createLogger = require('cf-util-logger');
const {localStorage} = require('./storage');
const {isArray, compact, now} = require('lodash');

const logInfo = createLogger('cache:info');
const logWarning = createLogger('cache:warning');

type Json =
  | string
  | number
  | boolean
  | null
  | Array<Json>
  | { [key: string]: Json };

function buildKey(key: string | Array<string>) {
  if (isArray(key)) {
    key = ((key: any): Array<string>); // Fix `any`, needs predicate types in flow
    return compact(key).join(':');
  } else {
    key = ((key: any): string); // Fix `any`, needs predicate types in flow
    return '' + key;
  }
}

type Entry = { value?: Json, expires?: number };

function maybeParse(item): Entry {
  try {
    return JSON.parse((item: any)); // Flow doesn't want this to error, but we do
  } catch (err) {
    return {};
  }
}

function get(key: string): Json | void {
  const name = buildKey(key);
  const {value, expires} = maybeParse(localStorage.getItem(name));
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

function set(key: string, value: Json, expires?: number | false = false) {
  const name = buildKey(key);
  logInfo(`Setting item: ${name}`);
  localStorage.setItem(name, JSON.stringify({
    value,
    expires: expires && now() + expires
  }));
}

function remove(key: string): void {
  const name = buildKey(key);
  logInfo(`Removing item: ${name}`);
  localStorage.removeItem(key);
}

function has(key: string): boolean {
  return get(key) !== undefined;
}

function clear() {
  localStorage.clear();
}

module.exports = {get, set, remove, has, clear};
