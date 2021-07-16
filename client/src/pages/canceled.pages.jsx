import React from "react";
import "./canceled.scss";
import { withRouter } from "react-router-dom";
import CustomButton from "../components/custom-button/custom-button.components";

const Canceled = ({ history }) => {
  return (
    <div className="checkout">
      <h1>Payment Failed</h1>
      <p>Payment was not successful</p>
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
