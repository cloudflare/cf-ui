export default function buildMediaQuery({ minWidth, maxWidth }, not) {
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
