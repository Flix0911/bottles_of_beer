//import the express library

const express = require("express")

//create express application boject

const app = express()

//route

app.get("/", (req, res) => {
    res.send('<h1>99 bottles of beer on the wall</h1><h2><a href="/98">Take one down, pass it around</a></h2>')
})

app.get("/:numberofbottles", (req, res) => {
    const totalBottles = req.params.numberofbottles
        if(totalBottles > 0) {
            res.send(`<h1>${totalBottles} bottles of beer on the wall</h1><h2><a href="/${(totalBottles) - 1}">Take one down, pass it around</a></h2>`)
        }else {
            res.send(`<h1>0 bottles left!</h1><h2><a href="/">Want to start over?</a></h2>`)
        }

})

//turn on server listener

app.listen(3000, () => {console.log("server is listening on port 3000")})