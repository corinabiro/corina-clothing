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

export type FetchOrdersStart = Action<
    ORDER_ACTION_TYPES.FETCH_ORDERS_START
>

export type FetchOrdersSuccess = ActionWithPayload<
    ORDER_ACTION_TYPES.FETCH_ORDERS_SUCCESS,
    { ordersArray: Order[] }
>


export const fetchOrdersStart = withMatcher(
    (): FetchOrdersStart => {
        return createAction(ORDER_ACTION_TYPES.FETCH_ORDERS_START)
    }
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
    (redirect: String): OrderCheckoutSuccess => {
        return createAction(ORDER_ACTION_TYPES.ORDER_CHECKOUT_SUCCESS, redirect);
    }
); 