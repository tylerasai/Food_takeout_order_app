const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`
    select order_id ,users.name, meal_name, portion,price, order_items.total_bill 
    from order_items 
    join orders 
    on order_items.order_id = orders.id
    join users on users.id = orders.user_id;`)
      .then((data) => {
        const orders = data.rows;
        res.json({ orders });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.post("/", (req, res) => {
    let data = req.body;

    db.query(
      `INSERT INTO orders (user_id)
    VALUES ($1) RETURNING *;`,
      [1]
    ).then((response) => {
      const order_id = response.rows[0].id;

      for (let obj of data.orderArrayClean) {
        db.query(
          `INSERT INTO order_items (meal_name, portion, price, total_bill, menu_id, order_id)
      VALUES ($1, $2, $3, $4, $5, $6)`,
          [
            obj.meal_name,
            obj.portion,
            obj.price,
            obj.total_bill,
            obj.menu_id,
            order_id,
          ]
        );
      }
    });
  });

  return router;
};
