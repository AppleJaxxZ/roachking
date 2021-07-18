import React from "react";
import { withRouter } from "react-router-dom";
import CustomButton from "../components/custom-button/custom-button.components";
import { clearCartItems } from "./../Redux/cart/cart.actions";
import { connect } from "react-redux";
const Success = ({ history, clearCartItems }) => {
  const clearAndPush = () => {
    history.push("/");
    clearCartItems();
  };

  return (
    <div className="checkout">
      <h1>Thank you for your order</h1>
      <p>
        We are currently processing your order and will send you a confirmation
        email shortly
      </p>
      <div>
        <CustomButton className="custom-button" onClick={() => clearAndPush()}>
          Continue Shopping
        </CustomButton>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearCartItems: () => dispatch(clearCartItems()),
});

export default withRouter(connect(null, mapDispatchToProps)(Success));
