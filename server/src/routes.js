const auth = require('./controlers/AuthenticationController')
const AuthPol = require('./policies/AuthenticationPolicy')
const SongsController = require('./controlers/SongsController')

module.exports = (app) => {
  app.post('/register',
    AuthPol.register,
    auth.register
  )
  app.post('/login',
    auth.login
  )
  app.get('/songs',
    SongsController.index
  )
  app.get('/songs/:songId',
    SongsController.show
  )
  app.post('/songs',
    SongsController.post
  )
  app.put('/songs/:songId',
    SongsController.put
  )
}
