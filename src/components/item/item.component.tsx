import React, { FC } from "react";
import { CategoryItem } from "../../store/categories/category.types";

type ItemProps = {
    item: CategoryItem ;
};

const Item: FC< ItemProps> = ({ item }) => {
    console.log(item); 
       
    return (
        <div>
            <img src={item.imageUrl}/>
            <div>{item.name}</div>
            <div>{item.price}</div>
        </div>
    ) 
    
  
}

export default Item; 