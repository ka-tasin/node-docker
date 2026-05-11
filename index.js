import express from 'express'

const app = express()
const port = 3000

app.get("/hello", (req, res) => {
    res.send("<h1>Hello World<h1>")
})

app.listen(port, ()=> {
    console.log("App is running on port: 3000")
})