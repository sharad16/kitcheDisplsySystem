module.exports = {
  // App Settings
  MONGO_URI: process.env.MONGO_URI || 'mongodb://jayprakash:jayprakash@mydatabase-shard-00-00-rydlv.mongodb.net:27017,mydatabase-shard-00-01-rydlv.mongodb.net:27017,mydatabase-shard-00-02-rydlv.mongodb.net:27017/test?ssl=true&replicaSet=mydataBase-shard-0&authSource=admin',
  PORT_NUMBER :  process.env.PORT

}
