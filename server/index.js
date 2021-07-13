const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: "./.env" });
const createCheckoutSession = require("./api/checkout");
const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: true }));

app.get("/", (req, res) => res.send("Hellloooooo World!"));

app.post("/create-checkout-session", createCheckoutSession);

app.listen(port, (error) => {
  if (error) throw error;
  console.log("Server running on port " + port);
});

// const path = require("path");

// if (process.env.NODE_ENV !== "production") require("dotenv").config();
// const stripeAPI = require("./stripe");
// const app = express();
// const port = process.env.PORT || 5000;

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cors());
// app.options("*", cors());

// app.post("/create-checkout-session", async (req, res) => {
//   const domainUrl = process.env.WEB_APP_URL;
//   const { line_items, customer_email } = req.body;
//   // check req body has line items and email

//   if (!line_items || !customer_email) {
//     return res
//       .status(400)
//       .json({ error: "missing required session parameters" });
//   }

//   let session;

//   try {
//     session = await stripeAPI.checkout.sessions.create({
//       payment_method_types: ["card"],
//       mode: "payment",
//       line_items,
//       customer_email,
//       success_url: `${domainUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
//       cancel_url: `${domainUrl}/canceled`,
//       shipping_address_collection: { allowed_countries: ["US"] },
//     });
//     res.status(200).json({ sessionId: session.id });
//   } catch (error) {
//     console.log(error);
//     res
//       .status(400)
//       .json({ error: "an error occured, unable to create session" });
//   }
// });
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../client/build")));

//   app.get("*", function (req, res) {
//     res.sendFile(path.join(__dirname, "../client/build", "index.html"));
//   });
// }

// app.listen(port, (error) => {
//   if (error) throw error;
//   console.log("Server running on port " + port);
// });
