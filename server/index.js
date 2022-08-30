require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT || 3001

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