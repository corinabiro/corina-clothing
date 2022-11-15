import React from "react";
import { useSelector } from "react-redux";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useNavigate } from "react-router-dom";

import { useContext } from "react";
// import { CartContext } from "../../contexts/cart.context";

import { selectCartItems } from "../../store/cart/cart.selector";

import {
  CartDropDownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.styles";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `checkout`;
    navigate(path);
  };
  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => (
            <CartItem key={item.id} cartItem={item}></CartItem>
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={routeChange}>Go to Checkout</Button>
    </CartDropDownContainer>
  );
};

export default CartDropdown;
