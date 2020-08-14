import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HG3OlI9pPDtbcTkhcJCFHEdkxTlehf7TZfvIVAcvJzL2jJOoNrWxBRVyrm80pZ6ik7CmG1Pn81FfVJKSKrzY2yT00BkO09LlN';

    const onToken = token => {
        console.log(token);
        alert("Payment Succesfull");
        //pass this to backend
    }

    return (
        <StripeCheckout
            label = "Pay Now"
            name = "Corina's clothing"
            billingAddress
            shipingAddress
            image = 'https://sendeyo.com/up/d/f3eb2117da'
            description = {`Your total is $${price}`}
            amount = {priceForStripe}
            panelLabel = 'Pay Now'
            token = {onToken}
            stripeKey = {publishableKey}
        />
    );
}

export default StripeCheckoutButton;