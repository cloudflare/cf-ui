import path from 'path';

const ABSOLUTE_BASE = path.normalize(path.join(__dirname, '..'));

export const BUILD_DIR = path.join(ABSOLUTE_BASE, 'docs');
export const SRC_DIR = path.join(ABSOLUTE_BASE, 'styleguide');
export const HOT_RELOAD_PORT = process.env.HOT_RELOAD_PORT || 8080;
