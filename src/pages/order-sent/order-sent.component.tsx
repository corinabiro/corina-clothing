import React from "react";
import { OrderSentPage, OrderSentText } from "./order-sent.styles";

const OrderSent = () => {
  return (
    <OrderSentPage>
      <h2> Order Sent  </h2>
      <OrderSentText>Thank you for your order. We will send you an email with the details of your order.</OrderSentText>
    </OrderSentPage>
  )
};

export default OrderSent;