function getStorage(storageType) {
  if (global[storageType] != null) {
    return global[storageType];
  }

  let data = {};

  return {
    setItem: (id, val) => data[id] = String(val),
    getItem: id => data.hasOwnProperty(id) ? data[id] : undefined,
    removeItem: id => delete data[id],
    clear: () => data = {}
  };
}

const localStorage = getStorage('localStorage');
const sessionStorage = getStorage('sessionStorage');

export { localStorage, sessionStorage };
