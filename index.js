const express = require ('express')
const bodyParser = require ('body-parser')
const app = express();

//middleware
app.use(bodyParser.json())

//get
const data =(req,res)=>{
    res.send('Hello World!');
}
app.get('/get',data)

//post
app.post('/post',(req,res)=>{

  const {userName,password} = req.body
  
res.json({userName,password})
})


app.listen(3000,()=>{
  console.log('service is running port 3000')
})