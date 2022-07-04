const express = require('express');
const app = express();

const PORT = 8080;
app.use('/',(req,res)=>{
   res.send('Microservice 1')
})
app.listen(PORT,()=>{
    console.log(`listening to port to ${PORT}`)
})