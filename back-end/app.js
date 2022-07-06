const express = require('express');
const bodyParser = require('body-parser');

const thoughtsRoutes = require('./routes/thoughts-routes');
const usersRoutes = require('./routes/users-routes');
const HttpError = require('./models/http-error');

const app = express();

app.use(bodyParser.json());

app.use('/api/thoughts', thoughtsRoutes);
app.use('/api/users', usersRoutes);

app.use((req, res, next) => {
    return next(new HttpError('Route not found.', 404));
})

app.use((error, req, res, next) => {
    if(res.headerSent) {
        return next(error);
    }
    res.status(error.code || 500).json({message: error.message || 'An unknown error occured!'});
})

app.listen(5000);