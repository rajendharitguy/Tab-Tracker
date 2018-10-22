const auth = require('./controlers/AuthenticationController')
const AuthPol = require('./policies/AuthenticationPolicy')

module.exports = (app) => {
  app.post('/register',
    AuthPol.register,
    auth.register
  )

  app.post('/login',
    auth.login
  )
}
