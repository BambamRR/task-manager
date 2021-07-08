// CONEXÃO COM O BANCO DE DADOS MongoDB
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/TaskManager', {useNewUrlParser: true}).then(()=> {
    console.log("Conected to MongoDB succefully");
}).catch((e) => {
    console.log("Error while attempting to connect to MongoDB");
    console.log(e);
});

//to  preevent deprecation warnings
mongoose.set('useCreateIndex', true);
mongoose.set('userFindModify', false);

module.exports = {
    mongoose
};