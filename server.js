//import the express library

const express = require("express")

//create express application boject

const app = express()

//route

app.get("/", (req, res) => {
    res.send("<h1>99 bottles of beer on the wall</h1>")
})

//turn on server listener

app.listen(3000, () => {console.log("server is listening on port 3000")})