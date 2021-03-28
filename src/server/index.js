var path = require('path')
const express = require('express')

const app = express()
const port = 8081

app.use(express.static('dist'))

console.log(__dirname)

app.get("/", function (req, res) {
    res.sendFile('index.html', { root: '../../dist' })
})

app.listen(port, function () {
    console.log('Example app listening on port ' + port)
})
/*
app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
*/