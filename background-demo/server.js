const express = require('express')
const history = require('connect-history-api-fallback')

const app = express()

app.use(history())
app.use(express.static(__dirname+'/static'))

app.get('/express', (req,res) => {
    res.send({
        name:'111'
    })
})

app.listen(5005,(err)=>{
    if(!err){
        console.log('success');
    }
})