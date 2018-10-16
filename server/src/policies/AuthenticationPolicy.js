const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      )
    }

    const { error } = Joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'you must provide valid email'
          })
          break
        case 'password':
          res.status(400).send({
            error: `password must fallow fallowing rules :
                 <br><br>
                 1.it must be between 8-34 characters length
                 <br>
                 2.characters must be lowercase or uppercase, numarics.`
          })
          break
        default:
          res.status(400).send({
            error: 'invalide registration information'
          })
      }
    } else {
      next()
    }
  }
}
