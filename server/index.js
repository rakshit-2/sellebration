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




//Home -- connection 4 table our stories 1 table latest news

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
  else if(x==="leadership")
  {
    db.query(ele2,(err,result)=>{
      res.send(result)
    })
  }
  else if(x==="csr")
  {
    db.query(ele3,(err,result)=>{
      res.send(result)
    })
  }
  else if(x=="sustainability")
  {
    db.query(ele4,(err,result)=>{
      res.send(result)
    })
  }
  else
  {
    var result={data:["err"]}
    res.send(result)
  }
})

app.get('/home/latest-news',(req,res)=>{
  const ele="select * from Home_LatestNews order by date desc;";
  db.query(ele,(err,result)=>{
    res.send(result)
  })
})









//Leadership -- connection 4 table

app.get('/leadership/detail-each',(req,res)=>{
  const ele1="select * from Leadership_Director;";
  const ele2="select * from Leadership_Head;";
  const ele3="select * from Leadership_Leader;";
  const ele4="select * from Leadership_Vanguard;";
  var y=req.query.name;
  if(y=="director")
  {
    db.query(ele1,(err,result)=>{
      res.send(result)
    })
  }
  else if(y=="head")
  {
    db.query(ele2,(err,result)=>{
      res.send(result)
    })
  }
  else if(y=="leader")
  {
    db.query(ele3,(err,result)=>{
      res.send(result)
    })
  }
  else if(y=="vanguard")
  {
    db.query(ele4,(err,result)=>{
      res.send(result)
    })
  }
  else
  {
    var result={data:["err"]}
    res.send(result)
  }
})









// event section data get

app.get('/event/all-data',(req,res)=>{
  var e=req.query.name;
  const ele="select * from event order by date desc;";
  db.query(ele,(err,result)=>{
    res.send(result)
  })
})





// mediarelease section data get

app.get('/media-release/all-data',(req,res)=>{
  var e=req.query.name;
  const ele="select * from mediarelease order by date asc;";
  db.query(ele,(err,result)=>{
    res.send(result)
  })
})




// pressreport section data get

app.get('/press-report/all-data',(req,res)=>{
  var e=req.query.name;
  const ele="select * from pressreport order by date asc;";
  db.query(ele,(err,result)=>{
    res.send(result)
  })
})





app.listen(port, () => {
  console.log(`Listning at ${port}`)
})