const karma = require('karma');

function initKarmaServer(singleRun, cb) {
  const configFile = __dirname + '/karma.conf.js';
  require('babel-register')({
    only: configFile
  });
  new karma.Server(
    {
      configFile,
      singleRun
    },
    exitCode => {
      if (exitCode > 0) {
        cb(new Error(`Karma exited with status code ${exitCode}`));
      } else {
        cb();
      }
    }
  ).start();
}

export const test = cb => initKarmaServer(true, cb);
const testWatch = cb => initKarmaServer(false, cb);

export function dev(cb) {
  testWatch(cb);
}
