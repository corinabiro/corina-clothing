import React from "react";

const itemsList = ({ items }) => ({
    return(
         <div>
            {
                items.map((item) => (
                    <div key={item.id}>{item.name}</div>
                ))
            }
        </div>)
}

export default itemsList;
