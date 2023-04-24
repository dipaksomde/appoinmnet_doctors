const express = require('express')

const app = express()
app.use(express.static("public"))

app.use("*", (req, res) => {
    res.sendFile("public/index.html")
})


app.listen(5000, console.log(`server sssruning`))