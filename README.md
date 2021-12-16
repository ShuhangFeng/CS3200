# CS3200 Final Project Fall 2021
Shuhang Feng <br> <br>
Problem statement <br>
I love travelling, so I would like to create a simple application to record the place I have been to and activities I have done.

Solution statement <br>
I create a simple web application and use sql as database to store the information.

User <br>
People who also enjoy travelling like myself.

Domain objects <br>
trip: represent a whole trip. Some users may share one trip so one trip can link to multiple users. <br>
destination: represent the important location where activities happen during the trip. Multiple destinations link to one trip. <br>

Relations <br>
A trip can have multiple destinations. A trip can also have multiple users. <br>

Enumeration <br>
There is one column in trip named "season", which must be in the enumeration of "summer", "spring", "fall", "winter"

Interface requirements <br>

a user interface that allows creating, reading, updating, and deleting (CRUDing) records stored in a database
* List Screen - lists all the records stored in a table. 
* Edit Screen - creates new records, or reads, update or remove an existing record
* record being edited is on the many side of a 1 to many relationship, then add a link to the record on the 1 side's edit screen
* record being edited is on the one side of a 1 to many relationship, add a single link that navigates to a list screen that displays the associated records on the many side



