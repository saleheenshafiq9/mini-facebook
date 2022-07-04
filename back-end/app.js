const express = require('express');
const bodyParser = require('body-parser');

const thoughtsRoutes = require('./routes/thoughts-routes');

const app = express();

app.use(thoughtsRoutes);

app.listen(5000);