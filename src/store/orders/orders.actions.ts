import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { pathPagesType } from "../../routes/pagesData";
import {
    ActionWithPayload, createAction, withMatcher, Action
} from "../../utils/reducer/reducer.utils";

import { Order, ORDER_ACTION_TYPES } from './orders.types';


export type OrderCheckoutStart = ActionWithPayload<
    ORDER_ACTION_TYPES.ORDER_CHECKOUT_START,
    { order: Order }
>

export type OrderCheckoutFailed = ActionWithPayload<
    ORDER_ACTION_TYPES.ORDER_CHECKOUT_FAILED,
    Error
>

export type OrderCheckoutSuccess = Action<
    ORDER_ACTION_TYPES.ORDER_CHECKOUT_SUCCESS
>


export type OrderDetailsStart = ActionWithPayload<
    ORDER_ACTION_TYPES.FETCH_ORDER_DETAILS,
    { id: string }
>

export type OrderDetailsSucces = Action<
    ORDER_ACTION_TYPES.FETCH_ORDER_DETAILS
>

export type FetchOrdersStart = Action<
    ORDER_ACTION_TYPES.FETCH_ORDERS_START
>

export type FetchOrderSuccess = ActionWithPayload<
    ORDER_ACTION_TYPES.FETCH_ORDERS_SUCCESS,
    Order[]
>

export type FetchOrderDetailsSuccess = ActionWithPayload<
    ORDER_ACTION_TYPES.FETCH_ORDER_DETAILS_SUCCESS,
    Order
>

export type FetchOrderDetailsFailed = ActionWithPayload<
    ORDER_ACTION_TYPES.FETCH_ORDER_DETAILS_FAILED,
    Error
>

export type FetchOrdersFailed = ActionWithPayload<
    ORDER_ACTION_TYPES.FETCH_ORDERS_FAILED,
    Error
>


export const fetchOrdersStart = withMatcher(
    (): FetchOrdersStart => {
        return createAction(ORDER_ACTION_TYPES.FETCH_ORDERS_START)
    }
);

export const fetchOrdersSuccess = withMatcher(
    (ordersArray: Order[]): FetchOrderSuccess =>
        createAction(ORDER_ACTION_TYPES.FETCH_ORDERS_SUCCESS, ordersArray)
);


export const fetchOrderDetailsSuccess = withMatcher(
    (orderDetails: Order): FetchOrderDetailsSuccess =>
        createAction(ORDER_ACTION_TYPES.FETCH_ORDER_DETAILS_SUCCESS, orderDetails)
);

export const fetchOrdersFailed = withMatcher(
    (error: Error): FetchOrdersFailed =>
        createAction(ORDER_ACTION_TYPES.FETCH_ORDERS_FAILED, error)
);

export const fetchOrderDetailsFailed = withMatcher(
    (error: Error): FetchOrderDetailsFailed =>
        createAction(ORDER_ACTION_TYPES.FETCH_ORDER_DETAILS_FAILED, error)

);

export const orderCheckoutStart = withMatcher(
    (order: Order): OrderCheckoutStart => {
        return createAction(ORDER_ACTION_TYPES.ORDER_CHECKOUT_START, {
            order
        });
    }
);

export const orderCheckoutFailed = withMatcher(
    (error: Error): OrderCheckoutFailed => {
        return createAction(ORDER_ACTION_TYPES.ORDER_CHECKOUT_FAILED, error);
    }
);

export const orderCheckoutSuccess = withMatcher(
    (): OrderCheckoutSuccess => {
        return createAction(ORDER_ACTION_TYPES.ORDER_CHECKOUT_SUCCESS);
    }
);

export const fetchOrderDetails = withMatcher(
    (id: string): OrderDetailsStart => {
        return createAction(ORDER_ACTION_TYPES.FETCH_ORDER_DETAILS, { id });
    }
);


