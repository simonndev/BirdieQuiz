const path = require('path');

const EVENT = process.env.npm_lifecycle_event || '';
const ROOT = path.resolve(__dirname, '..');

exports.hasProcessFlag = function(flag) {
  return process.argv.join('').indexOf(flag) > -1;
};

exports.hasNpmFlag = function(flag) {
  return EVENT.includes(flag);
};

exports.isWebpackDevServer = function(flag) {
  return process.argv[1] && !!(/webpack-dev-server/.exec(process.argv[1]));
};

exports.root = path.join.bind(path, ROOT);
