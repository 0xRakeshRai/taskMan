const mongoose = require('mongoose');
var uri = "mongodb://admin:admin@cluster0-shard-00-00.n6she.mongodb.net:27017,cluster0-shard-00-01.n6she.mongodb.net:27017,cluster0-shard-00-02.n6she.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-h7yzr5-shard-0&authSource=admin&retryWrites=true&w=majority";

module.exports = mongoose.connect(uri, { useNewUrlParser: true });