module.exports = {
  // App Settings
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/Database',
  PORT_NUMBER :  process.env.PORT||3000,
  SUCCESS_MSG:'Successfully connected to the database',
  ERROR_MSG:'Could not connect to the database. Exiting now...'

}
