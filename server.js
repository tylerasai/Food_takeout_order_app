// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 8080;
const ENV = process.env.ENV || "development";
const express = require("express");
const bodyParser = require("body-parser");
const sass = require("node-sass-middleware");
const app = express();
const morgan = require("morgan");
const axios = require("axios");
const http = require("http");
const MessagingResponse = require("twilio").twiml.MessagingResponse;
const { sendMsg } = require("./twilio");

// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  "/styles",
  sass({
    src: __dirname + "/styles",
    dest: __dirname + "/public/styles",
    debug: true,
    outputStyle: "expanded",
  })
);
app.use(express.static("public"));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const usersRoutes = require("./routes/users");
const menuRoutes = require("./routes/menu");
const ordersRoutes = require("./routes/orders");
const twilio = require("twilio");

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
app.use("/api/users", usersRoutes(db));

// Note: mount other resources here, using the same pattern above
app.use("/api/menu", menuRoutes(db));
app.use("/api/orders", ordersRoutes(db));

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/menu", (req, res) => {
  res.render("menu");
});

app.get("/owner", (req, res) => {
  res.render("owner");
});

app.get("/payment", (req, res) => {
  res.render("payment");
});

app.get("/verify", (req, res) => {
  res.render("verify");
});

app.get("/entercard", (req, res) => {
  res.render("entercard");
});

app.post("/verify", (req, res) => {
  console.log(req.body);

  const to = req.body.phone;
  const name = req.body.name;
  const body = 'We got your order!'
  // const card_number = card_number;

  const templateVars = {
    name: name,
    phone: to,
    body: body
  };

  sendMsg(to, body);


  res.render("order_estimate", templateVars);
});

//twilio
app.post("/sms", (req, res) => {
  const twiml = new MessagingResponse();
  const minutes = req.body.Body;
  const body = `Your order will be ready in ${minutes}`; 
  // const body_complete = 'Your order is complete'; 
  
  // if(minutes = 'Complete') {
  //   sendMsg('+14036078620', body)

  // }
  
  
  if (minutes) {
    
    sendMsg('+14036078620', body)
    .then((e)=>{
      console.log(e);

    })
    .catch(error => {
      console.log("error is:", error);
    })
    
    
  }
 

  // res.writeHead(200, { "Content-Type": "text/xml" });
  // res.end(twiml.toString());
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
