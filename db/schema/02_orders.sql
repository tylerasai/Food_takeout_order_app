DROP TABLE IF EXISTS orders CASCADE;
CREATE TABLE orders (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INT,
  user_name VARCHAR(255),
  CONSTRAINT fk_user
    FOREIGN KEY(user_id)
      REFERENCES users(id),
  total_bill NUMERIC
  )


