// @flow

const text: { [id: string]: string } = {};

function getText(id: string) {
  if (!text[id]) {
    console.error('Missing text for: "' + id + '"');
    return id;
  }

  return text[id];
}

function setText(id: string, value: string) {
  text[id] = value;
}

module.exports = {getText, setText};
