import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const PriceForStripe = price * 100;
    const publishableKey =
        "pk_test_51Iy5BwIzXo7BVw214tu7VmnejDcK2xWudnRISkloeDQUSUabQTTzKQ4ru75ZDoC5ieRyiFjb7mwC7HNx7kSQY6dv00Moihf4wQ";

    const onToken = (token) => {
        console.log(token);
        alert("Payment Successful");
    };

    return (
        <StripeCheckout
            label="Pay Now"
            name="DRAGON FEEDERS Ltd."
            bliingAddress={true}
            shippingAddress={true}
            description={`Your total is $${price}`}
            amount={PriceForStripe}
            currency="USD"
            panelLabel="Pay Now"
            token={onToken}
            billingAddressCollection
            shippingAddressCollection
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;
