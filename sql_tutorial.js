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

/*FirstName
John
Bob
Sally 
Jane
*/

select FirstName,LastName 
from Customer where Age=40;

/*FirstName LastName
John Doe
Jane Smith
*/

select FirstName,Age
from Customer where LastName='Doe';

/*FirstName Age
John 40
Sally 38
*/
