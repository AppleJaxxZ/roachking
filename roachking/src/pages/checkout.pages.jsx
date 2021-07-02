import React from "react";
import "./checkout.styles.scss";

import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartTotal } from "../Redux/cart/cart.selectors";
import { connect } from "react-redux";

import { useStripe } from "@stripe/react-stripe-js";
import CheckoutItem from "../components/checkout-item/checkout-item.components";
// import StripeCheckoutButton from "../components/stripecheckoutbutton/stripecheckoutbutton.component";
import axios from "axios";

const CheckoutPage = ({ cartItems, total }) => {
  const stripe = useStripe();
  const payNow = async () => {
    const {
      data: { sessionId },
    } = await axios.post("http://localhost:8080/create-checkout-session", {
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            unit_amount: 50,
            product_data: {
              name: "Roach",
              description: "Amazing and delicious",
              images: ["https://i.ibb.co/DRvM2RM/med-Dubia-Five-Eights.png"],
            },
          },
        },
      ],
      customer_email: "smackanalex@gmail.com",
    });
    const { error } = await stripe.redirectToCheckout({
      sessionId,
    });
    if (error) {
      console.log(error);
    }
  };
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">TOTAL: ${total}</div>

      <div className="test-warning">
        *Please use the following test creditcard numbers for payments* <br />
        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
      </div>
      <button onClick={() => payNow()}>Pay now</button>
      {/* <StripeCheckoutButton price={total} /> */}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});
export default connect(mapStateToProps)(CheckoutPage);
