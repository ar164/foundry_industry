require('dotenv').config();
const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/yourdbname'; // Replace with your actual URI

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('error',(error)=>{
  console.log(`Error is ${error}`)

})

module.exports = mongoose