# angular-extended-weekend-project-movies-

CREATE TABLE "movies" (
"id" SERIAL PRIMARY KEY,
"name" varchar (200) NOT NULL,
"genre" varchar (100) NOT NULL,
"release_date" INT,
"run_time" INT);

CREATE TABLE "genres" (
"id" SERIAL PRIMARY KEY,
"project" varchar (100) NOT NULL);

SELECT * FROM "movies";

SELECT "genres".*, count("movies"."genre_id") as "total_count" 
                FROM "movies" 
                JOIN "genres" ON "movies"."genre_id" = "genres"."id"
                GROUP BY "genres"."id";

ALTER TABLE "movies" 
ADD "genre_id" INT REFERENCES "genres";

ALTER TABLE "movies"
DROP COLUMN "genre";

INSERT INTO "genres" ("project")
VALUES('Horror');

INSERT INTO "movies" ("name", "release_date", "run_time", "genre_id")
VALUES('Field of Dreams', 1999, 200, 2)

SELECT "movies".*, "genres"."project"
FROM "genres" 
 JOIN "movies" ON "movies"."genre_id" = "genres"."id"
                GROUP BY "genres"."project", "movies"."id";
                
ALTER TABLE "movies"
ALTER COLUMN "genre_id" TYPE varchar;

ALTER TABLE "movies"
DROP COLUMN "genre_id";

ALTER TABLE "movies" 
ADD "genre_id" INT REFERENCES "genres";

SELECT "genres"."id", "genres"."project", count("movies"."genre_id") as "total_count" 
    FROM "movies" 
    RIGHT JOIN "genres" ON "movies"."genre_id" = "genres"."id"
    GROUP BY "genres"."id";

ALTER TABLE "movies"
DROP COLUMN "image_path";

ALTER TABLE "movies"
ADD COLUMN "image_path" TEXT;


