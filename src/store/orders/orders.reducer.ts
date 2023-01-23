import { AnyAction } from 'redux';
import { fetchOrdersStart, orderCheckoutStart, orderCheckoutSuccess } from './orders.actions';
import { Order } from './orders.types';

export type OrdersState = {
    readonly orders: Order[] | null;
    readonly isLoading: boolean;
    readonly error: Error | null;
};

const INITIAL_STATE: OrdersState = {
    orders: null,
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
    if (orderCheckoutStart.match(action)) {
        return {
            ...state,
            isLoading: true,
        };
    }

    return state;
}