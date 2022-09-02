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




app.get('/home/our-stories/OurStories',(req,res)=>{
  const ele1="select * from OurStories_Recommended;";
  const ele2="select * from OurStories_Leadership;";
  const ele3="select * from OurStories_Csr;";
  const ele4="select * from OurStories_Sustainability;";
  var x=req.query.name;
  if(x=="recommended")
  {
    db.query(ele1,(err,result)=>{
      res.send(result)
    })
  }
  if(x=="leadership")
  {
    db.query(ele2,(err,result)=>{
      res.send(result)
    })
  }
  if(x=="csr")
  {
    db.query(ele3,(err,result)=>{
      res.send(result)
    })
  }
  if(x=="sustainability")
  {
    db.query(ele4,(err,result)=>{
      res.send(result)
    })
  }
})



app.get('/home/latest-news',(req,res)=>{
  const ele="select * from Home_LatestNews order by date desc;";
  db.query(ele,(err,result)=>{
    res.send(result)
  })
})


app.listen(port, () => {
  console.log(`Listning at ${port}`)
})