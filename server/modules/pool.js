const pg = require('pg');
const url = require('url'); //module built-in to node.  We do not have to npm install.

//process.env.DATABASE_URL

let config = {};

//postgres://msvnhxsbqhuadi:8205be089a07015885102e4b6eced9fe4543a2f36210e49728ecb5ce257ddaae@ec2-50-19-224-165.compute-1.amazonaws.com:5432/d2mojna3eqd96t

if(process.env.DATABASE_URL) {
    let params = url.parse(process.env.DATABASE_URL);
    let auth = params.auth.split(':');
  
    config = {
      user: auth[0],
      password: auth[1],
      host: params.hostname,
      port: params.port,
      database: params.pathname.split('/')[1],
      ssl: true, // heroku requires ssl to be true
      max: 10, // max number of clients in the pool
      idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
    };
} else{
    //not on heroku process.env.DATABASE_URL
    config =  {
    database: 'movie_collection', //the name of the db.
    host: 'localhost', //where your db is.
    port: 5432, //port of db. 5432 is default for postgres
    max: 10, // how many connections (queries at one time)10 is what heroku sets for its number of free queries running simultaneously; 
    idleTimeoutMillis: 30000
    };
}

console.log(config);

const pool = new pg.Pool(config);

pool.on('connect', () => {
    console.log('Postgresql connected');
});

pool.on('error', (error) => {
    console.log('Error with postgres pool', error);
});

module.exports = pool;