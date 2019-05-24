// SQL Tutorial
CREATE TABLE groceries (id INTEGER PRIMARY KEY, name TEXT, quantity INTEGER, aisle INTEGER);

INSERT INTO groceries VALUES (1, "Peanut Butter", 1, 4);
INSERT INTO groceries VALUES (2, "Apples", 3, 1);
INSERT INTO groceries VALUES (3, "Tea", 2, 3);

SELECT * FROM groceries WHERE quantity > 1 ORDER BY aisle;
SELECT SUM(quantity) FROM groceries;
// Aggregate function. Returns 6
SELECT MAX(quantity) FROM groceries;
// Returns 3, the highest number from quantity

INSERT INTO groceries VALUES (4, "Bananas", 5, 1);
SELECT aisle, SUM(quantity) FROM groceries; 

// This will list out the aisle numbers in one column and the sum of each aisle in the second
/* aisle      SUM(quantity)
  1           8
  3           2
  4           1
*/

CREATE TABLE books (id INTEGER PRIMARY KEY, name TEXT, quantity INTEGER);

INSERT INTO books VALUES (1, "A Knight of the Seven Kingdoms", 4);
INSERT INTO books VALUES (2, "Dune", 4);

CREATE TABLE todo_list (id INTEGER PRIMARY KEY, item TEXT, minutes INTEGER);
INSERT INTO todo_list VALUES (1, "Laundry", 90);
INSERT INTO todo_list VALUES (2, "Dishes", 20);
INSERT INTO todo_list VALUES (3, "Study", 30);
INSERT INTO todo_list VALUES (4, "Nap", 60);

SELECT SUM(minutes) FROM todo_list;

CREATE TABLE exercise_log
  (id INTEGER PRIMARY KEY AUTOINCREMENT,
   type TEXT,
   minutes INTEGER,
   calories INTEGER,
   heart_rate INTEGER);

INSERT INTO exercise_log(type, minutes, calories, heart_rate) VALUES ("jogging", 30, 100, 120);
INSERT INTO exercise_log(type, minutes, calories, heart_rate) VALUES ("walking", 20, 40, 90);
INSERT INTO exercise_log(type, minutes, calories, heart_rate) VALUES ("biking", 15, 100, 150);
INSERT INTO exercise_log(type, minutes, calories, heart_rate) VALUES ("weights", 10, 50, 95);

SELECT * FROM exercise_log WHERE calories > 50 AND minutes < 30;
SELECT type FROM exercise_log WHERE minutes > 10; 
SELECT calories FROM exercise log WHERE type IN ("walking", "jogging");
SELECT type, SUM(calories) AS total_calories FROM exercise_log GROUP BY type;

CREATE TABLE artists (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    country TEXT,
    genre TEXT);

INSERT INTO artists (name, country, genre)
    VALUES ("Taylor Swift", "US", "Pop");
INSERT INTO artists (name, country, genre)
    VALUES ("Led Zeppelin", "US", "Hard rock");
INSERT INTO artists (name, country, genre)
    VALUES ("ABBA", "Sweden", "Disco");
INSERT INTO artists (name, country, genre)
    VALUES ("Queen", "UK", "Rock");
INSERT INTO artists (name, country, genre)
    VALUES ("Celine Dion", "Canada", "Pop");
INSERT INTO artists (name, country, genre)
    VALUES ("Meatloaf", "US", "Hard rock");
INSERT INTO artists (name, country, genre)
    VALUES ("Garth Brooks", "US", "Country");
INSERT INTO artists (name, country, genre)
    VALUES ("Shania Twain", "Canada", "Country");
INSERT INTO artists (name, country, genre)
    VALUES ("Rihanna", "US", "Pop");
INSERT INTO artists (name, country, genre)
    VALUES ("Guns N' Roses", "US", "Hard rock");
INSERT INTO artists (name, country, genre)
    VALUES ("Gloria Estefan", "US", "Pop");
INSERT INTO artists (name, country, genre)
    VALUES ("Bob Marley", "Jamaica", "Reggae");

CREATE TABLE songs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    artist TEXT,
    title TEXT);

INSERT INTO songs (artist, title)
    VALUES ("Taylor Swift", "Shake it off");
INSERT INTO songs (artist, title)
    VALUES ("Rihanna", "Stay");
INSERT INTO songs (artist, title)
    VALUES ("Celine Dion", "My heart will go on");
INSERT INTO songs (artist, title)
    VALUES ("Celine Dion", "A new day has come");
INSERT INTO songs (artist, title)
    VALUES ("Shania Twain", "Party for two");
INSERT INTO songs (artist, title)
    VALUES ("Gloria Estefan", "Conga");
INSERT INTO songs (artist, title)
    VALUES ("Led Zeppelin", "Stairway to heaven");
INSERT INTO songs (artist, title)
    VALUES ("ABBA", "Mamma mia");
INSERT INTO songs (artist, title)
    VALUES ("Queen", "Bicycle Race");
INSERT INTO songs (artist, title)
    VALUES ("Queen", "Bohemian Rhapsody");
INSERT INTO songs (artist, title)
    VALUES ("Guns N' Roses", "Don't cry");
    
SELECT title FROM songs WHERE artist = "Queen";
SELECT artist FROM artists WHERE genre = "Pop";
SELECT title FROM songs WHERE artist IN (SELECT name FROM artists WHERE genre = "Pop");
