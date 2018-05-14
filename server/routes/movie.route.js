const express = require ('express');
const router = require('express').Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
    console.log(req.body);
    let movie = req.body;
    pool.query(`INSERT INTO "movies" ("name", "release_date", "run_time", "genre_id", "image_path")
    VALUES($1, $2, $3, $4, $5);`, [movie.name, movie.release_date, movie.run_time, movie.genre_id, movie.image_path])
    .then((results) => {
        res.sendStatus(201);
        console.log(results);
    })
    .catch((error) => {
        ('error with POST', error);
        res.sendStatus(500);
    })
});

router.get('/', (req, res) => {
    pool.query(`SELECT "movies".*, "genres"."project"
    FROM "genres" 
    JOIN "movies" ON "movies"."genre_id" = "genres"."id"
    GROUP BY "genres"."project", "movies"."id";`)
    .then((results) => {
        console.log(results.rows);
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

// "image_path"
// , movie.image_path