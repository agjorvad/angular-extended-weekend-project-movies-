const express = require ('express');
const router = require('express').Router();
const pool = requie('..modules/pool');

router.post('/', (req, res) => {
    console.log(req.body);
    let movie = req.body;
    pool.query(`INSERT INTO "movies" ("name", "genre", "releaseDate", "runTime")
    VALUES($1, $2, $3, $4);`, [movie.name, movie.genre, movie.releaseDate, movie.runTime])
    .then((results) => {
        res.sendStatus(201);
    })
    .catch((error) => {
        ('error with POST', error);
        res.sendStatus(500);
    })
});

router.get('/', (req, res) => {
    pool.query(`SELECT * FROM "movies"`)
    .then((results) => {
res.send(results.rows);
    })
    .catch((error) => {
        ('error with GET', error);
        res.sendStatus(500);
    })
});


module.exports = router;