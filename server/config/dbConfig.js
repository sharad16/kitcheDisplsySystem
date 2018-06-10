module.exports = {
  // App Settings
  // 'mongodb://jayprakash:jayprakash@mydatabase-shard-00-00-rydlv.mongodb.net:27017,mydatabase-shard-00-01-rydlv.mongodb.net:27017,mydatabase-shard-00-02-rydlv.mongodb.net:27017/test?ssl=true&replicaSet=mydataBase-shard-0&authSource=admin'
  // 'mongodb://localhost:27017/Database'
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/Database',
  PORT_NUMBER :  process.env.PORT||3000,
  SUCCESS_MSG:'Successfully connected to the database',
  ERROR_MSG:'Could not connect to the database.Please make sure mongodb server and client is running...'
}
