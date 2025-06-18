require('dotenv').config();
const express= require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db'); 



const app = express();
app.use(bodyParser.json());
app.use(cors({
  origin:'http://localhost:4000'
}))


const port = process.env.PORT

app.listen(port,(req,res)=>{
  console.log(`Server is running on:http//localhost:${port}`)
})