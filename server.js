const express = require('express');
const app = express();

app.get('/', function(req, res) {
	res.send('BIENVENIDO');
});

let port = process.env.PORT || 4000;

app.listen(port);

require('dotenv').config();