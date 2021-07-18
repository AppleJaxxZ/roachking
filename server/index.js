const express = require("express");
const cookie = require("cookie");
const cors = require("cors");

const path = require("path");

if (process.env.NODE_ENV !== "production") require("dotenv").config();
const stripeAPI = require("./stripe");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.options("*", cors());
// // Set a same-site cookie for first-party contexts
// response.cookie("cookie1", "value1", { sameSite: "lax" });
// // Set a cross-site cookie for third-party contexts
// response.cookie("cookie2", "value2", { sameSite: "none", secure: true });

app.post("/create-checkout-session", async (req, res) => {
  const domainUrl = process.env.WEB_APP_URL;
  const { line_items, customer_email } = req.body;
  // check req body has line items and email

  if (!line_items || !customer_email) {
    return res
      .status(400)
      .json({ error: "missing required session parameters" });
  }

  let session;

  try {
    session = await stripeAPI.checkout.sessions.create({
      payment_method_types: ["card"],
      shipping_rates: ["shr_1JDwj8IzXo7BVw21VdTC23zB"],
      shipping_address_collection: {
        allowed_countries: ["US"],
      },
      mode: "payment",
      line_items,
      customer_email,
      success_url: `${domainUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${domainUrl}/canceled`,
      shipping_address_collection: { allowed_countries: ["US"] },
    });
    res.status(200).json({ sessionId: session.id });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ error: "an error occured, unable to create session" });
  }
});

const fulfillOrder = (session) => {
  const amountShipping = session.total_details.amount_shipping;

  // TODO: Remove error and implement...
  throw new Error(`
    Given the Checkout Session ${session.id}, load your internal order from the database then implement your own fulfillment logic.`);
};

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build", "index.html"));
  });
}

app.listen(port, (error) => {
  if (error) throw error;
  console.log("Server running on port " + port);
});
