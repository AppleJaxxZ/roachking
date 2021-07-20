// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys
const stripe = require("stripe")(
  "sk_test_51Iy5BwIzXo7BVw21IzXgxYGDt1kgQEmDhJvQ5TbYnuh2kLFUzZhkP2l5o3z04XyQRvJYrFtH2A9u0uulb2r71ckg00oPdohrQ2"
);
const endpointSecret = "whsec_X52GnXlGYGT1JCMevkyaMDF2DEmvaGdl";

// Using Express
const app = require("express")();
const port = process.env.PORT || 5000;

const fulfillOrder = (session) => {
  // TODO: fill me in
  console.log("Fulfilling order", session);
  const amountShipping = session.total_details.amount_shipping;

  // TODO: Remove error and implement...
  throw new Error(`
    Given the Checkout Session ${session.id}, load your internal order from the database then implement your own fulfillment logic.`);
};

app.post(
  "/webhook",
  app.raw({ type: "application/json" }),
  (request, response) => {
    const payload = request.body;
    const sig = request.headers["stripe-signature"];

    let event;

    try {
      event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
    } catch (err) {
      return response.status(400).send(`Webhook Error: ${err.message}`);
    }
    // Handle the checkout.session.completed event
    if (event.type === "checkout.session.completed") {
      const session = event.data.object;

      // Fulfill the purchase...
      fulfillOrder(session);
    }

    console.log("Got payload: " + payload);

    response.status(200);
  }
);

app.listen(port, () => console.log("Running on port 5000"));
