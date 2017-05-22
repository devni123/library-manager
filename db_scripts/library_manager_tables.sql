create table books(
	id int(11) auto_increment,
	bname varchar(100),
	author varchar(100),
	qty int(11),
	isbn varchar(100),
    
    constraint pk_books primary key(id)
);

create table members(
	id int(11) auto_increment,
    fname varchar(100),
    lname varchar(100),
    book_borrow_stat int(11),
    
    constraint pk_members primary key(id)
);

create table borrow(
	book_id int(11),
    
)