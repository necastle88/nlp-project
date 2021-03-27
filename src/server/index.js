var path = require('path')
const express = require('express')

const app = express()
const port = 8000

app.use(express.static('dist'))

console.log(__dirname)

app.get("/", function (req, res) {
    res.sendFile('index.html', { root: '../../dist' })
})

// designates what port the app will listen to for incoming requests
app.listen(port, function () {
    console.log('Example app listening on port 8000!')
})
/*
app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
*/