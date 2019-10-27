// SQL Tutorial
CREATE TABLE groceries (id INTEGER PRIMARY KEY, name TEXT, quantity INTEGER, aisle INTEGER);
INSERT INTO groceries VALUES (1, "Peanut Butter", 1, 4);
INSERT INTO groceries VALUES (2, "Apples", 5, 1);
INSERT INTO groceries VALUES (3, "Juice", 2, 3);
INSERT INTO groceries VALUES (4, "Bread", 1, 4);
INSERT INTO groceries VALUES (5, "Bananas", 4, 1);
INSERT INTO groceries VALUES (6, "Cereal", 2, 3);
INSERT INTO groceries VALUES (7, "Milk", 1, 2);
SELECT * FROM groceries WHERE quantity > 1 ORDER BY aisle;

SELECT SUM(quantity) FROM groceries;
// Aggregate function. Returns 10

SELECT MAX(quantity) FROM groceries;
// Returns 6, the highest number from quantity

INSERT INTO groceries VALUES (4, "Bananas", 5, 1);
  SELECT aisle, SUM(quantity) FROM groceries; 
/* This will list out the aisle numbers in one column and the sum of each aisle in the second
aisle      SUM(quantity)
  1           8
  3           4
  4           2           
*/
CREATE TABLE books (id INTEGER PRIMARY KEY, name TEXT, quantity INTEGER);
INSERT INTO books VALUES (1, "A Knight of the Seven Kingdoms", 4);
INSERT INTO books VALUES (2, "Dune", 4);
INSERT INTO books VALUES (3, "Beloved", 4);
INSERT INTO books VALUES (4, "Dune Messiah", 3);
INSERT INTO books VALUES (5, "The Hobbit", 7);
INSERT INTO books VALUES (6, "Children of Dune");

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
    VALUES ("Led Zeppelin", "US", "Hard rock");
INSERT INTO artists (name, country, genre)
    VALUES ("ABBA", "Sweden", "Disco");
INSERT INTO artists (name, country, genre)
    VALUES ("Queen", "UK", "Rock");
INSERT INTO artists (name, country, genre)
    VALUES ("Meatloaf", "US", "Hard rock");
INSERT INTO artists (name, country, genre)
    VALUES ("Rihanna", "US", "Pop");
INSERT INTO artists (name, country, genre)
    VALUES ("Guns N' Roses", "US", "Hard rock");
INSERT INTO artists (name, country, genre)
    VALUES ("Gloria Estefan", "US", "Pop");
INSERT INTO artists (name, country, genre)
    VALUES ("Bob Marley", "Jamaica", "Reggae");
INSERT INTO artists (name, country, genre)
    
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

INSERT INTO hobbies (person_id, name) VALUES (2, "dancing")
INSERT INTO hobbies (person_id, name) VALUES (2, "purring");

INSERT INTO hobbies (person_id, name) VALUES (3, "drawing");
INSERT INTO hobbies (person_id, name) VALUES (4, "meowing");

CREATE TABLE student_projects (id INTEGER PRIMARY KEY,
    student_id INTEGER,
    title TEXT);
   
CREATE TABLE student_projects (id INTEGER PRIMARY KEY,
    student_id INTEGER,
    title TEXT);
    
INSERT INTO student_projects (student_id, title)
    VALUES (1, "Book Report");

INSERT INTO student_projects (student_id, title)
    VALUES (2, "Essay");

INSERT INTO student_projects (student_id, title)

SELECT students.first_name, students.last_name, student_projects.title
    FROM students
    JOIN student_projects
    ON students.id = student_projects.student_id;

SELECT name FROM world
  WHERE name LIKE 'F%';

SELECT name FROM world
  WHERE name LIKE '%y';

SELECT name FROM world
  WHERE name LIKE '%x%';

SELECT name, age, salary
  FROM employee 
  WHERE name LIKE 'A%';
// Display the name age and salary of entries in the employee database with name beginning with A. 

SELECT DISTINCT job_title
  FROM staff;
// Display each unique job title contained in the staff database, disregarding repeated instances of the same title. 

SELECT * FROM items_ordered
  WHERE customerid = 10449;

SELECT column1, SUM(column2)
 FROM "list-of-tables"
 GROUP BY "column-list";

SELECT lastname, max(salary), dept
 FROM employee 
 GROUP BY dept;

SELECT dept, avg(salary)
  FROM employee
  GROUP BY dept;                    
  HAVING avg(salary) < 20000;

SELECT item, count(item)
  FROM customers
  GROUP BY item
  HAVING count(item) > 1;

SELECT item, max(price), min(price)
  FROM items_ordered
  GROUP BY item
  HAVING max(price) > 100.00;

SELECT employeeid, lastname, salary
  FROM employee_info
  WHERE lastname IN ('Smith', 'Jones');

SELECT employeeid, lastname, salary
  FROM employee_info
  WHERE lastname IN ('Bobo', 'Jojo');

SELECT employeeid, firstname, lastname
  FROM employee_info
  WHERE lastname LIKE 'A%';

SELECT employeeid, firstname, lastname, title, salary
  FROM employee_info
  WHERE title LIKE 'Data%';

SELECT employeeid, firstname, lastname, title, salary
  FROM employee_info;


SELECT employeeid, age, lastname, salary
