import React from "react";
import { withRouter } from "react-router-dom";
import CustomButton from "../components/custom-button/custom-button.components";

const Success = ({ history }) => {
  return (
    <div className="checkout">
      <h1>Thank you for your order</h1>
      <p>
        We are currently processing your order and will send you a confirmation
        email shortly
      </p>
      <div>
        <CustomButton
          className="custom-button"
          onClick={() => history.push("/")}
        >
          Continue Shopping
        </CustomButton>
      </div>
    </div>
  );
};

export default withRouter(Success);
