const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('Its worked')
})
app.listen(process.env.PORT || 5000,()=>{
    console.log('server is connected')
})

module.exports = app