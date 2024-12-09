const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const specialism = require('./routes/Specialism');
const teacher = require('./routes/Teacher');
const subject = require('./routes/Subject');
const group = require('./routes/Group');
const schedule = require('./routes/Schedule');
const user = require('./routes/User')

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use('/', specialism)
app.use('/', teacher)
app.use('/',subject)
app.use('/', group)
app.use('/',schedule)
app.use('/', user)

module.exports = app; 