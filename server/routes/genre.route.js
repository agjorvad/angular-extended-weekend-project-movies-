const express = require ('express');
const router = require('express').Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
console.log(req.body);
let genre = req.body;
pool.query(`INSERT INTO "genres" ("project")
VALUES($1);`, [genre.project])
.then((results) => {
    res.sendStatus(201)
})
.catch((error) => {
    ('error with POST', error)
    res.sendStatus(500)
})
})

router.get('/', (req, res) => {
    pool.query(`SELECT "genres".*, count("movies"."genre_id") as "total_count" 
    FROM "movies" 
    RIGHT JOIN "genres" ON "movies"."genre_id" = "genres"."id"
    GROUP BY "genres"."id";`)
                .then((results) => {
                    res.send(results.rows);
                    console.log(results.rows);
                })
                .catch((error) => {
                    ('error with GET', error);
                    res.sendStatus(500);
                })
})

router.delete('/', (req, res) => {
    const genre = req.query;
    console.log(genre);
    pool.query(`DELETE FROM "genres" WHERE "id" = $1;`, [genre.id])
    .then((results) => {
        res.sendStatus(200);
    })
.catch((error) => {
    ('error with Delete', error);
    res.sendStatus(500);
})
});

module.exports = router;