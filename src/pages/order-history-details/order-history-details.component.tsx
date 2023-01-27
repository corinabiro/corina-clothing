import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Spinner from "../../components/spinner/spinner.component";
import { fetchOrderDetails } from "../../store/orders/orders.actions";
import { selectOrderDetails } from "../../store/orders/orders.selector";
import { OrderDetailsContainer, OrderDetailsRow, OHD_image, OHD_details, OHD_item, OrderDetailsRowContainer } from "./order-history-details.styles";
const OrderHistoryDetails = () => {

    const dispatch = useDispatch();
    const { id } = useParams() || null;
    
    id && useEffect(() => {
        dispatch(fetchOrderDetails(id));
    }, []);

    const ordersDetails = useSelector(selectOrderDetails);

    console.log(ordersDetails);

    return (
        !ordersDetails ? (
            <Spinner/>
        ) : (
            <OrderDetailsContainer>
                    
            <h1>Order History Details</h1>  
            <OrderDetailsRowContainer>
                <OrderDetailsRow><span>Date</span><span>{ordersDetails.orderDate.toString()}</span> </OrderDetailsRow>
                <OrderDetailsRow><span>Total Amount</span><span>{ordersDetails.amount} LEI</span> </OrderDetailsRow>
            </OrderDetailsRowContainer>
            <div>
                {ordersDetails.items && ordersDetails.items.map((item) => (
                    <OHD_item key={item.id}>
                        <OHD_image><img src={item.imageUrl} alt={item.name} /></OHD_image>
                        <OHD_details>
                            <div>{item.name}</div>
                            <div>{item.price} LEI</div>
                        </OHD_details>
                    </OHD_item>
                ))} 
            </div>            
        </OrderDetailsContainer>
        )
    );
};  

export default OrderHistoryDetails;
