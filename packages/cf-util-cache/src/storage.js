// @flow

declare var global: {
  localStorage: typeof localStorage,
  sessionStorage: typeof sessionStorage,
};

type Api = {
  +setItem: (id: string, val: string) => mixed,
  +getItem: (id: string) => ?string,
  +removeItem: (id: string) => mixed,
  +clear: () => mixed
};

function getStorage(storageType: 'localStorage' | 'sessionStorage'): Api {
  if (global[storageType] != null) {
    return global[storageType];
  }

  let data: { [key: string]: string } = {};

  return {
    setItem: (id: string, val: string) => { data[id] = String(val) },
    getItem: (id: string) => data.hasOwnProperty(id) ? data[id] : undefined,
    removeItem: (id: string) => { delete data[id] },
    clear: () => { data = {} }
  };
}

exports.localStorage = getStorage('localStorage');
exports.sessionStorage = getStorage('sessionStorage');
