const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('Its worked')
});

app.get('/new',(req,res)=>{
    res.send('Its new is worked')
})
app.listen(process.env.PORT || 5000,()=>{
    console.log('server is connected')
})

module.exports = app