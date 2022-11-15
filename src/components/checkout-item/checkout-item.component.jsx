import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  deleteItemFromCart,
  removeItemFromCart,
} from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

import {
  CheckoutItemContainer,
  ImageConatiner,
  Name,
  Quantity,
  Price,
  RemoveButton,
} from "./checkout.styles";

const CheckoutItem = ({ checkoutItem }) => {
  const { name, imageUrl, quantity, price } = checkoutItem;

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const clearItemHandler = () =>
    dispatch(deleteItemFromCart(cartItems, checkoutItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, checkoutItem));
  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, checkoutItem));

  return (
    <CheckoutItemContainer>
      <ImageConatiner>
        <img src={imageUrl} alt={name} />
      </ImageConatiner>
      <Name>{name}</Name>
      <Quantity>
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </Quantity>
      <Price>{price}</Price>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
