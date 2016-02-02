function getStorage(storageType) {
  if (global[storageType] != null) {
    return global[storageType];
  }

  let data = {};

  return {
    setItem: (id, val) => data[id] = String(val),
    getItem: id => data.hasOwnProperty(id) ? data[id] : undef,
    removeItem: id => delete data[id],
    clear: () => data = {}
  };
}

exports.localStorage = getStorage('localStorage');
exports.sessionStorage = getStorage('sessionStorage');
