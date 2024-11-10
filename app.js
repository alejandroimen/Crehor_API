const express = require('express');
const bodyParser = require('body-parser');
const teacher = require('./routes/Teacher');
const subject = require('./routes/Subject');
const group = require('./routes/Group');
const course = require('./routes/Course');
const schedule = require('./routes/Schedule');
const specialism = require('./routes/Specialism'); 

const app = express();

app.use(bodyParser.json());

app.use('/', teacher)
app.use('/',subject)
app.use('./', group)
app.use('/', course)
app.use('/',schedule)
app.use('./', specialism)

module.exports = app;