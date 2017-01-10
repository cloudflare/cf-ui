// @flow

type config = {
  minWidth?: string,
  maxWidth?: string
};

function buildMediaQuery({minWidth, maxWidth}: config, not?: boolean) {
  let query = '';

  if (minWidth) {
    query += `(min-width: ${minWidth})`;
  }

  if (minWidth && maxWidth) {
    query += ' and ';
  }

  if (maxWidth) {
    query += `(max-width: ${maxWidth})`;
  }

  if (not) {
    query = `not all and ${query}`;
  }

  return query;
}

module.exports = buildMediaQuery;
