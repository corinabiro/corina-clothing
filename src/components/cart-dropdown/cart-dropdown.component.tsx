import React, { useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import { useNavigate } from "react-router-dom"; 
import { selectCartItems } from "../../store/cart/cart.selector";

import {
  CartDropDownContainer,
  EmptyMessage,
  CartItems, 
  CheckoutButton,
} from "./cart-dropdown.styles";
import { pathPagesType } from "../../routes/pagesData";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  let navigate = useNavigate();

  const routeChange = useCallback(() => {
    navigate(pathPagesType.CHECKOUT);
  }, []);

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
      <CheckoutButton variant="contained" disableElevation onClick={routeChange}>Go to Checkout</CheckoutButton >
      
    </CartDropDownContainer>
  );
};
 
export default CartDropdown;
