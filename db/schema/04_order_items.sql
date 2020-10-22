DROP TABLE IF EXISTS order_items CASCADE;

CREATE TABLE order_items (
  id SERIAL primary key,
  meal_name VARCHAR(255),
  portion INT NOT NULL,
  price NUMERIC NOT NULL,
  total_bill NUMERIC NOT NULL,
  menu_id INTEGER REFERENCES menu(id) NOT NULL,
  order_id INTEGER REFERENCES orders(id) NOT NULL
)
