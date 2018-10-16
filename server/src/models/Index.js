// Inspired by : https://gist.github.com/ihavenoidea14/0dab8b461c057c427829fdc99bfb6743

const config = require('../config/config')
const Sequelize = require('sequelize')
var force
let models = {};

(function (config) {
  if (Object.keys(models).length && !force) {
    return models
  }

  const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options
  )

  // Importing each module for now, can change to readDirSync and require models dynamically
  let modules = [
    require('./User.js')
  ]

  modules.forEach((module) => {
    const model = module(sequelize, Sequelize, config)
    models[model.name] = model
  })

  Object.keys(models).forEach((key) => {
    if ('associate' in models[key]) {
      models[key].associate(models)
    }
  })

  models.sequelize = sequelize
  models.Sequelize = Sequelize

  return models
})(config)

module.exports = models
