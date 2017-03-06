const text = {};

export function getText(id) {
  if (!text[id]) {
    console.error('Missing text for: "' + id + '"');
    return id;
  }

  return text[id];
}

export function setText(id, value) {
  text[id] = value;
}
