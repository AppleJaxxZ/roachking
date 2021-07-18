import React, { useState } from "react";
import "./checkout.styles.scss";

import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartTotal } from "../Redux/cart/cart.selectors";
import { connect } from "react-redux";

import { useStripe } from "@stripe/react-stripe-js";
import CheckoutItem from "../components/checkout-item/checkout-item.components";
import { fetchFromAPI } from "../components/API/helpers";
// import StripeCheckoutButton from "../components/stripecheckoutbutton/stripecheckoutbutton.component";
// import axios from "axios";
// import e from "cors";

const CheckoutPage = ({ cartItems, total }) => {
  const [address, setAddress] = useState("");

  const stripe = useStripe();
  const payNow = async (e) => {
    e.preventDefault();
    const line_items = cartItems.map((items) => {
      return {
        quantity: items.quantity,
        price_data: {
          currency: "usd",
          unit_amount: items.price * 100,
          product_data: {
            name: items.title,
            description: items.description,
            images: [items.imageUrl],
          },
        },
      };
    });
    console.log(line_items);
    const response = await fetchFromAPI("create-checkout-session", {
      body: { line_items, customer_email: address },
    });

    const { sessionId } = response;
    const { error } = await stripe.redirectToCheckout({
      sessionId,
    });
    if (error) {
      console.log(error);
    }
  };

  // {
  //       id: 2,
  //     title: "small1/2'",
  //     imageUrl: "https://i.ibb.co/mJN7GJt/sm-Dubia-Half-Inch.png",
  //     price: 10,
  //     quantity: 2
  //   }

  // const {
  //   data: { sessionId },
  // } = await axios.post("/create-checkout-session", {
  //   line_items: [
  //     {
  //       quantity: 1,
  //       price_data: {
  //         currency: "usd",
  //         unit_amount: 100,
  //         product_data: {
  //           name: "Order Total: ",
  //           description: "Thank you for your purchase.",
  //           images: ["https://i.ibb.co/DRvM2RM/med-Dubia-Five-Eights.png"],
  //         },
  //       },
  //     },
  //     {
  //       quantity: 1,
  //       price_data: {
  //         currency: "usd",
  //         unit_amount: 100,
  //         product_data: {
  //           name: "Order Total: ",
  //           description: "Thank you for your purchase.",
  //           images: ["https://i.ibb.co/DRvM2RM/med-Dubia-Five-Eights.png"],
  //         },
  //       },
  //     },
  //   ],
  //   customer_email: "smackanalex@gmail.com",
  // });

  //   const { error } = await stripe.redirectToCheckout({
  //     sessionId,
  //   });
  //   if (error) {
  //     console.log(error);
  //   }
  // };
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
        *Please use the following test credit card numbers for payments* <br />
        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
      </div>
      <div className="payNowForm">
        <label>Enter Email Then Click Pay Now</label>

        <input
          value={address}
          name="email"
          onChange={(e) => setAddress(e.target.value)}
        />
        <button onClick={() => payNow()}>PAY NOW</button>
        {/* <StripeCheckoutButton price={total} /> */}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});
export default connect(mapStateToProps)(CheckoutPage);
