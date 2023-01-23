import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

// import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { ProductCardContainer, Footer } from "./product-card.styles";

import { CategoryItem } from "../../store/categories/category.types";
import Button from "@mui/material/Button";

type ProductCardProps = {
  product: CategoryItem;
};

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addProduct = () => dispatch(addItemToCart(cartItems, product));
  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name} />
      <Footer>
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </Footer>
      {/* <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProduct}>
        Add to cart
      </Button> */}
     <Button variant="contained" disableElevation onClick={addProduct}>
        Add to cart 
      </Button>
      
    </ProductCardContainer>
  );
};

export default ProductCard;
