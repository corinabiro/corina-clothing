import React, { isValidElement } from "react";
import { useState, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StripeCardElement } from "@stripe/stripe-js";
import { v4 as uuid } from 'uuid';

import { orderCheckoutStart, orderCheckoutSuccess } from "../../store/orders/orders.actions";
import { selectCartItems, selectCartTotal } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { BUTTON_TYPE_CLASSES } from "../button/button.component";
import {
  PaymentFormContainer,
  FormContainer,
  PaymentButton,
} from "./payment-form.styles";
import { Navigate, useNavigate } from "react-router-dom";
import { pathPagesType } from "../../routes/pagesData";
import { emptyCartItems, setIsCartOpen } from "../../store/cart/cart.action";

const validCardElement = (
  card: StripeCardElement | null
): card is StripeCardElement => card !== null;

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const cartItems = useSelector(selectCartItems);

  const dispatch = useDispatch();
  const unique_id = uuid();
  const navigate = useNavigate();

  const order = {
    title: unique_id.slice(0,15),
    items: cartItems,
    amount: amount,
    user: currentUser, 
  }

  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const cardElementOptions = {
    style: {
      base: {
        color: "#666",
        fontSize: "16px",
        display: "block",
        with: "100%",
      },
      invalid: {
        color: "#fa755a",
        fontSize: "16px",
      },
    },
  };

  const paymentHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setIsProcessingPayment(true);
    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post", 
      headers: {
        "Content-Type": "application/json",  
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => res.json());
    setIsProcessingPayment(false);
    const {
      paymentIntent: { client_secret },
    } = response;

    const cardDetails = elements.getElement(CardElement);
    if (!validCardElement(cardDetails)) return;

    const paymentResolve = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: cardDetails,
        billing_details: {
          name: currentUser ? currentUser.displayName : "Guest",
        },
      },
    });
    if (paymentResolve.error) {
      alert(paymentResolve.error);
    } else {
      if (paymentResolve.paymentIntent.status === "succeeded")
        dispatch(orderCheckoutStart(order))
        alert("Payment succesfull");
        dispatch(emptyCartItems(cartItems));
        dispatch(setIsCartOpen(false));  
        navigate(pathPagesType.ORDER_SENT);
    }
  };
  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment</h2>
        <CardElement options={cardElementOptions}></CardElement>
        <PaymentButton
          isLoading={isProcessingPayment}
          buttonType={BUTTON_TYPE_CLASSES.inverted}
        >
          Pay Now
        </PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
