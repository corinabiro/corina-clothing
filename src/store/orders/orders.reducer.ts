import { AnyAction } from 'redux';
import { fetchOrderDetails, fetchOrderDetailsFailed, fetchOrderDetailsSuccess, fetchOrdersFailed, fetchOrdersStart, fetchOrdersSuccess, orderCheckoutStart, orderCheckoutSuccess } from './orders.actions';
import { Order } from './orders.types';

export type OrdersState = {
    readonly orderList: Order[] | null;
    readonly isLoading: boolean;
    readonly orderDetails: Order | null;
    readonly error: Error | null;
};

const INITIAL_STATE: OrdersState = {
    orderList: null,
    orderDetails: null,
    isLoading: false,
    error: null,
};

export const ordersReducer = (state = INITIAL_STATE, action: AnyAction) => {

    if (fetchOrdersStart.match(action)) {
        return {
            ...state,
            isLoading: true,
        };
    }
    if (fetchOrderDetails.match(action)) {
        return {
            ...state,
            isLoading: true,
        };
    }
    if (fetchOrderDetailsSuccess.match(action)) {
        return {
            ...state,
            orderDetails: action.payload,
            isLoading: false,
        };
    }
    if (fetchOrderDetailsFailed.match(action)) {
        return {
            ...state,
            error: action.payload,
            isLoading: false,
        };
    }
    if (fetchOrdersSuccess.match(action)) {
        return {
            ...state,
            orderList: action.payload,
            isLoading: false,
        };
    }
    if (fetchOrdersFailed.match(action)) {
        return {
            ...state,
            error: action.payload,
            isLoading: false,
        };
    }
    if (orderCheckoutStart.match(action)) {
        return {
            ...state,
            isLoading: true,
        };
    }

    return state;
}