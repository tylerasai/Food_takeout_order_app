5DROP TABLE IF EXISTS orders CASCADE;
CREATE TABLE orders (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id),
  portion INT NOT NULL,
  total_bill BIGINT,
  total_preptime BIGINT
  );
 
 select * from orders;


