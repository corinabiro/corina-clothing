import React, { EventHandler, Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Spinner from "../../components/spinner/spinner.component";
import { pathPagesType } from "../../routes/pagesData";
import { fetchOrdersStart } from "../../store/orders/orders.actions";
import { selectOrders, selectOrdersIsLoading } from "../../store/orders/orders.selector";
import { OrderHistoryContainer, OrderHistoryRow, OrderHistoryTitle, OrderHistoryHeader } from "./order-history.styles";

const OrderHistory = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ordersArray = useSelector(selectOrders);
  const isLoading = useSelector(selectOrdersIsLoading);

  const orderDetailsHandler = ( orderID : String) => {  
    const route = pathPagesType.ORDER_HISTORY_DEATILS + orderID;
    navigate(route);
  }
 
  useEffect(() => {
    dispatch(fetchOrdersStart());
  }, []);

  return (
    <Fragment>
      {isLoading ?
        (
          <Spinner />
        ) : (
          <div>
            <OrderHistoryTitle>Order History</OrderHistoryTitle>
            <OrderHistoryContainer>
              <OrderHistoryHeader>
                <span>Order Date</span>
                <span>Amount</span>
              </OrderHistoryHeader>
              {ordersArray && ordersArray.map((order) => (
                <OrderHistoryRow key={order.id.toString()} onClick={() => { orderDetailsHandler( order.id )} }>
                  <div> {order.orderDate.toString()}</div>
                  <div> {order.amount}</div>
                </OrderHistoryRow>              
              ))
              }
            </OrderHistoryContainer>
          </div>
        )}      
    </Fragment>
  )
};

export default OrderHistory;


