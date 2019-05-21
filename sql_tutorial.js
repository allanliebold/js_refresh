// SQL Database
create database Customer
use Customer

create table Customer
(
  FirstName varchar(50),
  LastName varchar(50),
  Age int
)

insert into Customer 
(FirstName, LastName, Age)
  values('John', 'Doe', 40)

insert into Customer 
(FirstName, LastName, Age)
  values('Bob', 'Roberts', 60)

insert into Customer 
(FirstName, LastName, Age)
  values('Sally', 'Doe', 38)

insert into Customer 
(FirstName, LastName, Age)
  values('Jane', 'Smith', 40)

select FirstName from Customer;

/*
FirstName
John
Bob
Sally 
Jane
*/

select FirstName,LastName 
from Customer where Age=40;

/*
FirstName LastName
John Doe
Jane Smith
*/

SELECT FirstName,Age
FROM Customer where LastName='Doe';

/*
FirstName Age
John 40
Sally 38
*/

update Customer
Set LastName='Robbins'
where FirstName='Sally'
and LastName='Doe';
select FirstName,LastName
from Customer where LastName like 'Rob%';

/*
FirstName LastName
Bob Roberts
Sally Robbins
*/

update Customer 
Set Age =41
where Age=40;

select FirstName,LastName,Age
from Customer where Age>40;

/*FirstName LastName Age
John Doe 41
Jane Smith 41
*/

DELETE Customer; // This deletes all of the data in table if there is no WHERE clause. DROP deletes the table itself. 
INSERT INTO Customer 
(FirstName, LastName, Age)
  values('Mike', 'Schmidt', 44);

DELETE Customer
where LastName like "Schmidt_";
// Mike Schmidt is not deleted because the _ requires a character

// --This is a one line comment in SQL
/* This is
a multi line
comment */

alter table customer
add City varchar(50);

create table Products
(  
  id int primary key identity(1,1),
  ProductName varchar(50)
)

alter table Products
add Price float;
select * from Products

insert into Products (ProductName, Price) values ('Pencils', 2.50);
insert into Products (ProductName, Price) values ('Notebook', 5.00);

Create table Orders
(
  OrderId int primary key intentity(1,1),
  OrderDate Datetime,
  CustomerId int,
  ProductId int
)

// Tutorial

CREATE TABLE groceries (id INTEGER PRIMARY KEY, name TEXT, quantity INTEGER, aisle INTEGER);

INSERT INTO groceries VALUES (1, "Peanut Butter", 1, 4);
INSERT INTO groceries VALUES (2, "Apples", 3);
INSERT INTO groceries VALUES (3, "Tea", 2);

CREATE TABLE books (id INTEGER PRIMARY KEY, name TEXT, quantity INTEGER);

INSERT INTO books VALUES (1, "A Knight of the Seven Kingdoms", 4);
INSERT INTO books VALUES (2, "Dune", 4);
