const express = require ('express');
const router = require('express').Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
    console.log(req.body);
    let movie = req.body;
    pool.query(`INSERT INTO "movies" ("name", "genre", "release_date", "run_time")
    VALUES($1, $2, $3, $4);`, [movie.name, movie.genre, movie.release_date, movie.run_time])
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

router.delete('/', (req, res) => {
    const movie = req.query;
    console.log(movie);
    pool.query(`DELETE FROM "movies" WHERE "id" = $1;`, [movie.id])
    .then((results) => {
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log('Error making query', error);
        res.sendStatus(500);
    })
})

module.exports = router;