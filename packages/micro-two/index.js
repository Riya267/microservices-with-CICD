const express = require('express');
const app = express();

const PORT = 8000;
app.use('/',(req,res)=>{
   res.send('Microservice 2')
})
app.listen(PORT,()=>{
    console.log(`listening to port to ${PORT}`)
})