module.exports = function (app) {
  var users = require('./api/routes.users');
  
  app.use('/api/users', users);

};

