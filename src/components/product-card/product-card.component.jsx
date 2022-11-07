import React from "react";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { ProductCardContainer, Footer } from "./product-card.styles";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProduct = () => {
    addItemToCart(product);
  };

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name} />
      <Footer>
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </Footer>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProduct}>
        Add to cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
