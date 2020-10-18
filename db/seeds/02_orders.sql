-- Widgets table seeds here (Example)
INSERT INTO orders (
  user_id,
  meal_name,
  portion,
  total_bill,
  total_preptime
)

VALUES (
  1,
  'Bulgogi',
  1,
  (SELECT price from menu WHERE meal_name = menu.meal_name) * portion,
  (SELECT prep_time from menu WHERE meal_name = menu.meal_name) * portion 
)
