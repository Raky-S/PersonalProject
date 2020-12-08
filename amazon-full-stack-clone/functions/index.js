const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
require('dotenv').config();
const instance  = process.env;
const stripe = require("stripe")(
  "sk_test_51Hu213CNpvwFF5UhfTWBp7e7RqNU4ZRwQd6sDNjYgr6sMEh8ssndKu5w9P3nkEeCieo3ljIooL9FVh44dqxaBAZ000RM6CWiw4"
);

// - API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (req, res) => res.status(200).send("coucoucocu"));

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  console.log("payment request recieve boom >>>>>>>>>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of currency
    currency: "eur",
    // currency: "usd" débitera le client en US dollars
  });
  // OK -  Creatd
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// - Listen command
exports.api = functions.https.onRequest(app);
