create table users (
  user_id  varchar(10),
  name     varchar(50),
  email    varchar(100),
  phone    varchar(20),
  role     varchar(10),
  is_verified  boolean default false,
  primary key (user_id) 
);
create table car (
  car_id     varchar(10),
  owner_id   varchar(10),
  brand      varchar(20),
  model      varchar(20),
  zone       varchar(5),
  daily_price  decimal(10,2),
  status      varchar(12),
  primary key (car_id),
  foreign key(owner_id) references users(user_id)
);
create table booking (
  booking_id     varchar(10),
  car_id         varchar(10),
  renter_id      varchar(10),
  start_date     date,
  end_date       date,
  status         varchar(15),
  total_price    decimal(10,2),
  primary key (booking_id),
  foreign key (car_id) references car(car_id),
  foreign key (renter_id) references users(user_id)
);
create table payment (
  payment_id      varchar(10),
  booking_id      varchar(10),
  amount          decimal(10),
  method          varchar(20),
  status          varchar(12),
  primary key (payment_id),
  foreign key (booking_id)references booking(booking_id)
);
create table review (
  review_id      varchar(10),
  booking_id     varchar(10),
  rating         int,
  comment        varchar(200),
  given_by       varchar(10),
  primary key (review_id),
  foreign key (booking_id) references booking(booking_id),
  foreign key (given_by) references users(user_id)
);



-- Test data for ACRAS
insert into users values ('U001', 'Abigail Wassa', 'abigail@acras.cm', '670000001', 'owner', true);
insert into car values ('C001', 'U001', 'Toyota', 'Corolla', 'BUEA', 15000.00, 'available');
insert into booking values ('B001', 'C001', 'U001', '2026-05-10', '2026-05-12', 'confirmed', 30000.00);
insert into payment values ('P001', 'B001', 30000.00, 'MTN MoMo', 'paid');
insert into review values ('R001', 'B001', 5, 'Very good cars and service!', 'U001');
