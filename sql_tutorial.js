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

select FirstName,Age
from Customer where LastName='Doe';

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
