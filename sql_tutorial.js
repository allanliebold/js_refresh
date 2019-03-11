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
  values('Sally', 'Doe', 42)
insert into Customer 
(FirstName, LastName, Age)
  values('Jane', 'Smith', 30)

select FirstName from Customer

/*FirstName
John
Bob
Sally 
Jane
*/
