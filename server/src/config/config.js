module.exports = {
  port: 8081,
  db: {
    database: process.env.DB_NAME || 'bunkylabs',
    user: process.env.DB_USER || 'bunky',
    password: process.env.DB_PASS || 'onetwothree',
    options: {
      dialect: 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './bunkylabs.sqlite'
    }
  }
}
