const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const movieRouter = require('./routes/movie.route');
const genreRouter = require('./routes/genre.route');
const PORT = process.env.PORT || 5000;

app.use(express.static('server/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/movie', movieRouter);

app.use('/genre', genreRouter);

app.listen(PORT, () => {
    console.log('Listening on port', PORT);
});