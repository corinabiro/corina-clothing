import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";
import { pathPagesType } from "../../routes/pagesData";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { BUTTON_TYPE_CLASSES } from "../../components/button/button.component";

import {
  CheckoutContainer,
  Header,
  HeaderBlock,
  Total,
  GoToPayment,
} from "./checkout.styles";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const navigate = useNavigate();

  const GoToPaymentHandler = () => {
    console.log("Go to payment");
    console.log(pathPagesType.PAYMNET);
    navigate(pathPagesType.PAYMNET);
  };

  return (
    <CheckoutContainer>
      <Header>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </Header>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} checkoutItem={item}></CheckoutItem>
      ))}
      <Total>Total: ${total}</Total>
      {total > 0 && (
        <GoToPayment
          buttonType={BUTTON_TYPE_CLASSES.inverted}
          onClick={GoToPaymentHandler}
        >
          GO TO PAYMENT
        </GoToPayment>
      )}
    </CheckoutContainer>
  );
};

export default Checkout;
