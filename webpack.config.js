const env = process.env.ENV || process.env.NODE_ENV || 'development';

switch (env) {
  case 'prod':
  case 'production':
    module.exports = require('./webpack.prod')({
      env: 'production'
    });
    break;
  case 'test':
    module.exports = require('./webpack.test')({
      env: 'test'
    });
    break;
  
  case 'dev':
  case 'development':
  default:
    module.exports = require('./webpack.dev')({
      env: 'development'
    });

}
