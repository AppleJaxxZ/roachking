const stripeAPI = require("../stripe");
//create-checkout-session endpoint
const createCheckoutSession = async (req, res) => {
  console.log("Hrllo");
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
};

module.exports = createCheckoutSession;
