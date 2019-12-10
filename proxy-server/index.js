const express = require('express')
const app = express()
const port = 3000;
const path = require('path');

app.use('/', express.static(path.join(__dirname)));

app.get('/about/getData/:id', (req, res) => {
    var id = req.params.id;
    res.redirect(`http://localhost:3003/about/getData/${id}`);
})

app.get('/ratings/getData/:id', (req, res) => {
    var id = req.params.id;
    res.redirect(`http://localhost:3005/ratings/getData/${id}`);
})

app.get('/earnings/getData', (req, res) => {
    res.redirect('http://localhost:3006/earnings/getData');
})

app.get('/news/getData', (req, res) => {
    res.redirect('http://localhost:3004/news/getData');
})


app.get('/tradestock/api/:id', (req, res) => {
    var id = path.basename(req.url);
    res.redirect(`http://localhost:3002/tradestock/api/${id}`);
})


app.get('/graph/getStocks', (req,res) => {
    res.redirect('http://localhost:3001/graph/getStocks');
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))