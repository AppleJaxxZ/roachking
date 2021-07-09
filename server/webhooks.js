const stripe = require("stripe")(
  "sk_test_51Iy5BwIzXo7BVw21IzXgxYGDt1kgQEmDhJvQ5TbYnuh2kLFUzZhkP2l5o3z04XyQRvJYrFtH2A9u0uulb2r71ckg00oPdohrQ2"
);
const app = require("express")();
// Use body-parser to retrieve the raw body as a buffer
const bodyParser = require("body-parser");

app.post(
  "/webhook",
  bodyParser.raw({ type: "application/json" }),
  (req, res) => {
    const event = req.body;
  
    // Handle the event
    switch (event.type) {
      case "payment_intent.succeeded":
        const paymentIntent = event.data.object;
        console.log(
          `PaymentIntent for ${paymentIntent.amount} was successful!`
        );
        // Then define and call a method to handle the successful payment intent.
        // handlePaymentIntentSucceeded(paymentIntent);
        break;
      case "payment_method.attached":
        const paymentMethod = event.data.object;
        console.log(
          `PaymentMethod for ${paymentMethod.payment_method} was cleared!`
        );

        // Then define and call a method to handle the successful attachment of a PaymentMethod.
        // handlePaymentMethodAttached(paymentMethod);
        break;


      default:
        // Unexpected event type
        console.log(`Unhandled event type ${event.type}.`);
    }
 // Return a 200 response to acknowledge receipt of the event
    res.send();
  }
);

app.post('/create-payment-intent', async (req, res) => {
    
    res.json({})
})



app.listen(4242, () => console.log("Running on port 4242"));
