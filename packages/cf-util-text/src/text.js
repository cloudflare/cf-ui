const text = {};

function getText(id) {
  if (!text[id]) {
    console.error('Missing text for: "' + id + '"');
    return id;
  }

  return text[id];
}

function setText(id, value) {
  text[id] = value;
}

module.exports = { getText, setText };
