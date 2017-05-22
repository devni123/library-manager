create table books(
	id int unsigned auto_increment,
	bname varchar(100),
	author varchar(100),
	qty int,
	isbn varchar(100),
    
    constraint pk_books primary key(id)
);

create table members(
	id int unsigned auto_increment,
    fname varchar(100),
    lname varchar(100),
    book_borrow_stat int,
    
    constraint pk_members primary key(id)
);

create table borrows(
	book_id int unsigned,
    member_id int unsigned,
    borrow_date datetime,
    due_date datetime,
    returned_date datetime,
    
    constraint pk_borrow primary key(book_id, member_id),
    constraint fk_borrow_book foreign key(book_id) references books(id),
    constraint fk_borrow_member foreign key(member_id) references members(id)
);

create table fine(
	id int unsigned auto_increment,
    due_dates int,
    amount double,
    member_id int unsigned,
    
    constraint pk_fine primary key(id),
    constraint fk_fine_members foreign key(member_id) references members(id) on delete set null
);