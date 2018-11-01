const Sequelize = require('sequelize')
const config = require('../config/config')

// Face, meet desk. Sequelize models and Webpack do not play nicely
let models = {};

(function (config) {
  if (Object.keys(models).length) {
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
    require('./User.js'),
    require('./Song.js')
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
