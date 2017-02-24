import fs from 'fs';
import path from 'path';

export const alias = {};
fs
  .readdirSync(path.resolve(__dirname, '../packages'))
  .forEach(
    file =>
      alias[file] = path.resolve(__dirname, `../packages/${file}/src/index.js`)
  );
