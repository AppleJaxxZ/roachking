import React from "react";
import "./passfail.scss";
import { withRouter } from "react-router-dom";
import CustomButton from "../components/custom-button/custom-button.components";

const Canceled = ({ history }) => {
  return (
    <div className="checkout">
      <h1>Payment was canceled or failed</h1>
      <p>Payment was not successful!</p>
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

export default withRouter(Canceled);
