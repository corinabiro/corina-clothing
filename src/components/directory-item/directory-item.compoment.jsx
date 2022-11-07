import React from "react";
import { Link } from "react-router-dom";
import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  return (
    <DirectoryItemContainer>
      <BackgroundImage imageUrl={imageUrl}></BackgroundImage>
      <Body>
        <Link className="directory-item-link" to={route}>
          <h2>{title.toUpperCase()}</h2>
          <p>Shop Now</p>
        </Link>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
