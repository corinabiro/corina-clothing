import React from "react";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { Fragment } from "react";
import { selectCategoriesMap } from "../../store/categories/category.selector";
import { useSelector } from "react-redux";

const CategoriesPreview = () => {
  const categoriesArray = useSelector(selectCategoriesMap);
  return (
    <Fragment>
      {Object.keys(categoriesArray).map((title) => {
        const products = categoriesArray[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
