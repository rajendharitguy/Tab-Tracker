module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_DATABASE || 'TabTracker',
    user: process.env.DB_USER || 'TabTracker',
    password: process.env.DB_PASS || 'TabTracker',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './tabtracker.sqlite',
      operatorsAliases: false
    }
  }
}
