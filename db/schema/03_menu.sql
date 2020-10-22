DROP TABLE IF EXISTS menu CASCADE;

CREATE TABLE menu (
  id SERIAL primary key,
  meal_name VARCHAR(255) NOT NULL,
  picture_url VARCHAR(255) not null,
  price BIGINT NOT NULL,
  prep_time INT NOT NULL
)

