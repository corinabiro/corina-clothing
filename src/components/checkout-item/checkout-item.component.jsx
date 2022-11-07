import React from "react";
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";

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

  const { addItemToCart, deleteItemFromCart, removeItemFromCart } = useContext(
    CartContext
  );
  const clearItemHandler = () => deleteItemFromCart(checkoutItem);
  const addItemHandler = () => addItemToCart(checkoutItem);
  const removeItemHandler = () => removeItemFromCart(checkoutItem);

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
