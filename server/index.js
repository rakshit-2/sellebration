require('dotenv').config();
const express = require('express')
const app = express()
const bodyParser=require('body-parser');
const cors=require('cors');
const port = process.env.PORT || 3001


app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))


const mysql = require('mysql2')
const db = mysql.createConnection(process.env.DATABASE_URL);


app.get('/test', (req, res) => {
  const getAll="select * from test;";
  db.query(getAll,(err,result)=>{
      res.send(result)
  })
})

app.listen(port, () => {
  console.log(`Listning at ${port}`)
})