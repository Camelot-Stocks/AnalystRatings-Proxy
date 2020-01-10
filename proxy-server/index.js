const nr = require('newrelic');
const express = require('express')
const app = express()
const proxy = require('http-proxy-middleware');
const port = 3000;
const path = require('path');
const cors = require('cors');

app.use('/', express.static(path.join(__dirname)));
app.use(cors());
app.use('/ratings/getData/:id',
proxy({target: 'http://54.183.184.85:3005/', changeOrigin: true}))

app.get('/questionMark.png', (req, res) => {
    res.redirect('http://34.214.68.82/questionMark.png')
})

app.get('/exclamation.png', (req, res) => {
    res.redirect('http://34.214.68.82/exclamation.png')
})

app.get('/exclamation-button.png', (req, res) => {
    res.redirect('http://34.214.68.82/exclamation-button.png')
})

app.get('/arrows.png', (req, res) => {
    res.redirect('http://34.214.68.82/arrows.png')
})

app.get('/arrows_black.png', (req, res) => {
    res.redirect('http://34.214.68.82/arrows_black.png')
})


app.get('/graph/getStocks', (req, res) => {
    res.redirect('http://54.153.91.76/graph/getStocks');
})

app.get('/graph/img/:photo', (req, res) => {
    res.redirect(`http://54.153.91.76/graph/img/${path.basename(req.url)}`)
})

app.get('/navbar/img/:photo', (req, res) => {
    res.redirect(`http://54.219.176.99/navbar/img/${path.basename(req.url)}`)
})

app.post('/updateLineColors', (req, res) => {
    res.end();
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))