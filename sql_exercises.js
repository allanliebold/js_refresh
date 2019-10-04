// SQL Exercises 
SELECT customer_info.firstname, customer_info.lastname, purchases.item
  FROM customer_info, purchases
  WHERE customer_info.customer_number = purchases.customer_number;

SELECT customer_info.firstname, customer_info.lastname, purchases.item
  FROM customer_info INNER JOIN purchases
  ON customer_info.customer_number = purchases.customer_number;

SELECT customers.customerid, customers.firstname, customers.lastname,  
  items_ordered.order_date, items_ordered.item, items_ordered.price
  FROM customers, items_ordered
  WHERE customers.customerid = items_ordered.customerid;

SELECT sum(theaters.screens), movies.title
  FROM theaters, movies
  WHERE theaters.movieid = movies.id
  GROUP BY sum(theaters.screens);

SELECT name, SUBSTRING(capital, LENGTH(name) + 1, LENGTH(capital))
  FROM world
  WHERE capital LIKE CONCAT(name, '_%');

SELECT name, population
  FROM world
  WHERE population BETWEEN 1000000 AND 1250000;

SELECT name, population/area
  FROM world
  WHERE name IN ('China', 'Nigeria', 'France', 'Australia');

SELECT name, gdp/population
  FROM world
  WHERE population > 200000000;

SELECT name, population, area
  FROM world
  WHERE population > 250000000 XOR area > 3000000

SELECT yr, subject, winner
  FROM nobel
  WHERE yr = 1980 AND subject NOT IN ('Chemistry', 'Medicine');

SELECT name, capital
     FROM world
     WHERE LEFT(name, 1) = LEFT(capital, 1) AND name <> capital;

SELECT name
  FROM world
  WHERE name LIKE '%a%' AND name LIKE '%e%' AND name LIKE '%i%' AND name LIKE '%o%' 
     AND name LIKE '%u%' AND name NOT LIKE '% %';

SELECT yr, subject, winner
FROM nobel
WHERE yr = 1980 AND subject NOT IN ('Chemistry', 'Medicine');

SELECT winner FROM nobel
  WHERE winner LIKE 'Sir %'
    AND yr BETWEEN 1980 and 1990

SELECT name, continent FROM world
     WHERE continent IN (SELECT continent FROM world WHERE name = 'Argentina' OR name = 'Australia')
     ORDER BY name;

SELECT name, population FROM world
  WHERE population > (SELECT population FROM world WHERE name = 'Canada') 
    AND population < (SELECT population FROM world WHERE name = 'Poland');

SELECT name FROM world
  WHERE population >
    (SELECT population FROM world
      WHERE name='Russia');

SELECT name FROM world 
     WHERE continent = 'Europe' AND (gdp / population) >
          (SELECT (gdp / population) FROM world
                WHERE name='United Kingdom');

SELECT continent, MIN(name) AS name
  FROM world
  GROUP BY continent;

SELECT name, continent, population
     FROM world x
     WHERE 25000000 >= ALL(SELECT population 
                            FROM world y 
                            WHERE y.continent = x.continent);
SELECT name, continent
     FROM world x 
     WHERE (population / 3) > ALL(SELECT population
                                    FROM world y
                                    WHERE y.continent = x.continent 
                                    AND y.name != x.name)

SELECT SUM(population)
  FROM world;

SELECT SUM(area)
  FROM world;

SELECT DISTINCT continent
  FROM world;

SELECT matchid, player 
  FROM goal 
  WHERE teamid = 'GER';

SELECT id,stadium,team1,team2
  FROM game
  WHERE id = 1012;

SELECT player, teamid, stadium, mdate
  FROM game JOIN goal ON (id=matchid)
  WHERE goal.teamid = 'GER';

SELECT player, teamid, coach, gtime
  FROM goal JOIN eteam ON teamid=id
  WHERE gtime<=10;

SELECT mdate, teamname
FROM game JOIN eteam ON team1 = eteam.id
WHERE coach = 'Fernando Santos';

SELECT teamname, COUNT(gtime)
  FROM eteam JOIN goal ON id=teamid
  GROUP BY teamname;

SELECT name
FROM actor JOIN casting ON id = actorid
WHERE casting.movieid = 11768
ORDER BY name;

SELECT title, COUNT(actorid) AS actors
  FROM movie JOIN casting ON id = movieid
  WHERE yr = 1978
  GROUP BY title
  ORDER BY actors DESC, title;

SELECT title 
  FROM movie JOIN casting ON id = movieid
  WHERE actorid = (SELECT id FROM actor WHERE name = 'Harrison Ford');

SELECT name
  FROM actor INNER JOIN movie ON actor.id = director
  WHERE gross < budget;

SELECT *
  FROM actor JOIN casting ON actor.id = actorid
  JOIN movie ON movie.id = movieid;

SELECT name, COUNT(movieid)
  FROM casting JOIN actor ON actorid=actor.id
  WHERE name LIKE 'John %'
  GROUP BY name ORDER BY 2 DESC;

SELECT title 
   FROM movie JOIN casting ON (movieid=movie.id)
              JOIN actor   ON (actorid=actor.id)
   WHERE name='Paul Hogan' AND ord = 1;

SELECT name
  FROM movie JOIN casting ON movie.id = movieid
  JOIN actor ON actor.id = actorid
  WHERE ord = 1 AND director = 351;

 SELECT title, yr 
   FROM movie, casting, actor 
  WHERE name='Robert De Niro' AND movieid=movie.id AND actorid=actor.id AND ord = 3;

// Inner Joins
SELECT name FROM teacher
  WHERE dept IS NULL; // = NULL doesn't work. 

SELECT teacher.name, dept.name
  FROM teacher INNER JOIN dept
              ON (teacher.dept=dept.id);

SELECT teacher.name, dept.name
  FROM teacher LEFT JOIN dept
  ON (teacher.dept=dept.id);

SELECT teacher.name, dept.name
  FROM teacher RIGHT JOIN dept ON teacher.dept=dept.id;

SELECT name, COALESCE(mobile, '07986-444-2266') as mobile
  FROM teacher;

// For each entry Coalesce will take the first non-null data. In this case, the teacher's mobile number as long as it 
// isn't null. If it is null then it will use the second value in the parentheses. 
// Coelesce can take more arguments than in this example.

SELECT COUNT(name) AS teachers, COUNT(mobile) AS mobile
  FROM teacher;

SELECT dept.name, COUNT(teacher.name) 
  FROM teacher RIGHT JOIN dept ON teacher.dept = dept.id
  GROUP BY dept.name;

SELECT name, 
  CASE WHEN dept IN (1, 2) THEN 'Sci'
    ELSE 'Art'
  END
  AS dept
  FROM teacher;

SELECT dept.name 
  FROM teacher JOIN dept ON (dept.id = teacher.dept) 
  WHERE teacher.name = 'Cutflower';

SELECT dept.name, COUNT(teacher.name) 
  FROM teacher RIGHT JOIN dept ON dept.id = teacher.dept 
  GROUP BY dept.name;

SELECT name, dept, COALESCE(dept, 0) AS result 
  FROM teacher on teacher;

SELECT name,
       CASE WHEN phone = 2752 THEN 'two'
            WHEN phone = 2753 THEN 'three'
            WHEN phone = 2754 THEN 'four'
            ELSE 'other'
            END AS digit
  FROM teacher;

// Self Join

SELECT id FROM stops 
  WHERE name = 'Craiglockhart';

SELECT stops.id, stops.name 
  FROM stops JOIN route ON stops.id = route.stop
  WHERE route.company = 'LRT' AND route.num = 4;

SELECT a.company, a.num, stopa.name, stopb.name
FROM route a JOIN route b ON
    (a.company=b.company AND a.num=b.num)
    JOIN stops stopa ON (a.stop=stopa.id)
    JOIN stops stopb ON (b.stop=stopb.id)
  WHERE stopa.name='Craiglockhart';     

SELECT company, num, COUNT(*)
  FROM route WHERE stop=149 OR stop=53
  GROUP BY company, num
  HAVING COUNT(*) = 2;
                           
SELECT a.company, a.num, a.stop, b.stop
  FROM route a JOIN route b ON
    (a.company=b.company AND a.num=b.num)
  WHERE a.stop=53 AND b.stop=149;

SELECT a.company, a.num, stopa.name, stopb.name
FROM route a JOIN route b ON
  (a.company=b.company AND a.num=b.num)
  JOIN stops stopa ON (a.stop=stopa.id)
  JOIN stops stopb ON (b.stop=stopb.id)
  WHERE stopa.name='Craiglockhart' AND stopb.name='London Road';

SELECT DISTINCT a.company, a.num
  FROM route a JOIN route b ON (a.company = b.company AND a.num = b.num)
  JOIN stops stopa ON (a.stop=stopa.id)
  JOIN stops stopb ON (b.stop=stopb.id)
  WHERE stopa.name='Haymarket' AND stopb.name='Leith';
