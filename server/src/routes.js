const AuthenticationController = require('./controllers/AuthenticationController')

const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

module.exports = (app) => {
  // POST register endpoint
  app.post('/register',
    AuthenticationControllerPolicy.register, 
    AuthenticationController.register)

  app.post('/login',
    AuthenticationController.login)
}
