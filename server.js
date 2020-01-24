const express = require('express')
const app = express()
const path= require('path')
const port = process.env.PORT || 3000

//app.get('/', (req, res) => res.send('Hello World!'))

//app.listen(port, () => console.log(`Example app listening on port ${port}!`))
app.use(express.static(__dirname + '/dist/ngproject'));
app.get('/',(req,res) => res.sendFile(path.join(__dirname + '/dist/ngproject/index.html')))
app.listen(port, ()=>console.log(`example posrt listening on ${port}!`))