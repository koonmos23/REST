const express = require('express');
const axios = require ('axios');
const app = express ();
var bodyParser = require ('body=parser');

const base_url ="http://localhost:3000";

app.set('view engine','ejs');
app.use(bodyParser.json());
app.use(bodyPa)