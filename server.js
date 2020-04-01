var express = require("express")

var app = express()
const port = 8000

app.use(express.static('public'))
app.listen(port, function(){
    console.log("Server is listening")
})