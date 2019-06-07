// SQL Tutorial
CREATE TABLE groceries (id INTEGER PRIMARY KEY, name TEXT, quantity INTEGER, aisle INTEGER);

INSERT INTO groceries VALUES (1, "Peanut Butter", 1, 4);
INSERT INTO groceries VALUES (2, "Apples", 5, 1);
INSERT INTO groceries VALUES (3, "Tea", 2, 3);
INSERT INTO groceries VALUES (4, "Bread", 1, 4);
INSERT INTO groceries VALUES (5, "Bananas", 4, 1);
INSERT INTO groceries VALUES (6, "Cereal", 2, 3);
INSERT INTO groceries VALUES (7, "Eggs", 6, 6);
INSERT INTO groceries VALUES (8, "Bean Sprouts", 1, 5);
INSERT INTO groceries VALUES (9, "Tuna", 5, 5);

SELECT * FROM groceries WHERE quantity > 1 ORDER BY aisle;

SELECT SUM(quantity) FROM groceries;
// Aggregate function. Returns 6

SELECT MAX(quantity) FROM groceries;
// Returns 3, the highest number from quantity

INSERT INTO groceries VALUES (4, "Bananas", 5, 1);
SELECT aisle, SUM(quantity) FROM groceries; 

// This will list out the aisle numbers in one column and the sum of each aisle in the second
/* 
aisle      SUM(quantity)
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
INSERT INTO todo_list VALUES (5, "Writing", 45);

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
INSERT INTO exercise_log(type, minutes, calories, heart_rate) VALUES ("aerobics", 25, 70, 110);

SELECT * FROM exercise_log WHERE calories > 50 AND minutes < 30;
SELECT type FROM exercise_log WHERE minutes > 10; 
SELECT calories FROM exercise log WHERE type IN ("walking", "jogging");
SELECT type, SUM(calories) AS total_calories FROM exercise_log 
  GROUP BY type
  HAVING total_calories > 100;

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
    
SELECT title FROM songs WHERE artist = "Queen";
SELECT artist FROM artists WHERE genre = "Pop";
SELECT title FROM songs WHERE artist IN (SELECT name FROM artists WHERE genre = "Pop");
SELECT type FROM exercise_log GROUP BY type HAVING COUNT(*) >= 2;
CREATE TABLE students (id INTEGER PRIMARY KEY,
    first_name TEXT,
    last_name TEXT,
    email TEXT,
    phone TEXT,
    birthdate TEXT);

// Student grades
INSERT INTO students (first_name, last_name, email, phone, birthdate)
    VALUES ("Peter", "Rabbit", "peter@rabbit.com", "555-6666", "2002-06-24");
INSERT INTO students (first_name, last_name, email, phone, birthdate)
    VALUES ("Alice", "Wonderland", "alice@wonderland.com", "555-4444", "2002-07-04");
    
CREATE TABLE student_grades (id INTEGER PRIMARY KEY,
    student_id INTEGER,
    test TEXT,
    grade INTEGER);

INSERT INTO student_grades (student_id, test, grade)
    VALUES (1, "Nutrition", 95);
INSERT INTO student_grades (student_id, test, grade)
    VALUES (2, "Nutrition", 92);
INSERT INTO student_grades (student_id, test, grade)
    VALUES (1, "Chemistry", 85);
INSERT INTO student_grades (student_id, test, grade)
    VALUES (2, "Chemistry", 95);
INSERT INTO student_grades (student_id, test, grade)
    VALUES (1, "Math", 88);
INSERT INTO student_grades (student_id, test, grade)
    VALUES (2, "Math", 79);

CREATE TABLE persons (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    age INTEGER);
    
CREATE TABLE persons (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    age INTEGER);
    
CREATE TABLE persons (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    age INTEGER);
    
CREATE TABLE persons (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    age INTEGER);
    
CREATE TABLE persons (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    age INTEGER);
    
CREATE TABLE persons (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    age INTEGER);
    
INSERT INTO persons (name, age) VALUES ("Lucy BoBucie", 25);
INSERT INTO persons (name, age) VALUES ("Banana FoFanna", 14);
INSERT INTO persons (name, age) VALUES ("Shish Kabob", 20);
INSERT INTO persons (name, age) VALUES ("Fluffy Sparkles", 8);
    
INSERT INTO hobbies (person_id, name) VALUES (1, "drawing");
INSERT INTO hobbies (person_id, name) VALUES (1, "coding");
INSERT INTO hobbies (person_id, name) VALUES (1, "lounging");
INSERT INTO hobbies (person_id, name) VALUES (2, "dancing");
INSERT INTO hobbies (person_id, name) VALUES (2, "coding");
INSERT INTO hobbies (person_id, name) VALUES (2, "purring");
INSERT INTO hobbies (person_id, name) VALUES (3, "skating");
INSERT INTO hobbies (person_id, name) VALUES (3, "rowing");
INSERT INTO hobbies (person_id, name) VALUES (3, "drawing");
INSERT INTO hobbies (person_id, name) VALUES (4, "coding");
INSERT INTO hobbies (person_id, name) VALUES (4, "dilly-dallying");
INSERT INTO hobbies (person_id, name) VALUES (4, "meowing");
INSERT INTO hobbies (person_id, name) VALUES (4, "napping");

CREATE TABLE student_projects (id INTEGER PRIMARY KEY,
    student_id INTEGER,
    title TEXT);
   
CREATE TABLE student_projects (id INTEGER PRIMARY KEY,
    student_id INTEGER,
    title TEXT);
    
INSERT INTO student_projects (student_id, title)
    VALUES (1, "Book Report");

SELECT students.first_name, students.last_name, student_projects.title
    FROM students
    JOIN student_projects
    ON students.id = student_projects.student_id;
