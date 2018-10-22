const { User } = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jsonWebToken (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}
module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      const userJson = user.toJSON()
      res.send({
        user: userJson,
        token: jsonWebToken(userJson)
      })
    } catch (err) {
      res.status(400).send({
        error: `this email already taken ${err}`
      })
    }
  },
  async login (req, res) {
    try {
      const { email, password } = req.body
      const user = await User.findOne({
        where: {
          email: email
        }
      })

      if (!user) {
        return res.status(403).send({
          error: 'please check your email'
        })
      }
      const valPass = await user.comparePassword(password)
      console.log(valPass)
      if (!valPass) {
        return res.status(403).send({
          error: `please check your Password ${valPass}, ${password}`
        })
      }
      const userJson = user.toJSON()
      res.send({
        user: userJson,
        token: jsonWebToken(userJson)
      })
    } catch (err) {
      res.status(500).send({
        error: `Sorry, there is a problem, try again ${err}`
      })
    }
  }
}
