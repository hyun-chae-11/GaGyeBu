const express = require('express')
const app = express();

const fs = require('fs')
const bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({extended:true}));
app.use('/', express.static(__dirname + '/static'))
app.use(bodyParser.json())

app.get('/', (req,res)=>{
    fs.readFile(__dirname+"/static/main.html", 'utf8', (err, page)=>{
        res.send(page)
    })
})

app.get('/login', (req, res)=>{
    fs.readFile(__dirname+"/static/login.html", 'utf8', (err, page)=>{
        res.send(page)
    })
})

app.get('/join', (req, res)=>{
    fs.readFile(__dirname+"/static/join.html", 'utf8', (err, page)=>{
        res.send(page)
    })
})

let info = []

app.post('/join', (req,res)=>{
    {id:req.body.id}
    {pw:req.body.pw}
    res.redirect('/login')
})

app.post('/login', (req, res)=>{
    if(id == req.body.id && pw == req.body.pw){
        res.redirect('/')
    }
    else res.send('error')
})

app.listen(3000, ()=>{
    console.log('server runned')
})