const express = require('express')
const app = express()
const port = 3000;
const path = require('path');
var cors = require('cors');

app.use(cors());

app.use('/', express.static(path.join(__dirname, 'dist')))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))