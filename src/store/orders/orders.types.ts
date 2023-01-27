import { CategoryItem } from "../categories/category.types";
import { UserData } from "../user/user.types";


export enum ORDER_ACTION_TYPES {
    ORDER_CHECKOUT_START = 'ORDER_CHECKOUT_START',
    ORDER_CHECKOUT_FAILED = 'ORDER_CHECKOUT_FAILED',
    ORDER_CHECKOUT_SUCCESS = 'ORDER_CHECKOUT_SUCCESS',
    FETCH_ORDERS_START = 'FETCH_ORDERS_START',
    FETCH_ORDERS_SUCCESS = 'FETCH_ORDERS_SUCCESS',
    FETCH_ORDERS_FAILED = 'FETCH_ORDERS_FAILED',
    FETCH_ORDER_DETAILS = 'FETCH_ORDER_DETAILS',
    FETCH_ORDER_DETAILS_SUCCESS = 'FETCH_ORDER_DETAILS_SUCCESS',
    FETCH_ORDER_DETAILS_FAILED = 'FETCH_ORDER_DETAILS_FAILED',
}

export type Order = {
    id: String;
    items: CategoryItem[] | null;
    amount: number;
    orderDate: Date;
    user: UserData | null;
};

export type OrderHistoryList = {
    id: String;
    amount: number;
    orderDate: Date;
};
