import { CategoryItem } from "../categories/category.types";
import { UserData } from "../../utils/firebase/firebase.utils";

export enum ORDER_ACTION_TYPES {
    ORDER_CHECKOUT_START = 'ORDER_CHECKOUT_START',
    ORDER_CHECKOUT_FAILED = 'ORDER_CHECKOUT_FAILED',
    ORDER_CHECKOUT_SUCCESS = 'ORDER_CHECKOUT_SUCCESS',
    FETCH_ORDERS_START = 'FETCH_ORDERS_START',
    FETCH_ORDERS_SUCCESS = 'FETCH_ORDERS_SUCCESS',
    FETCH_ORDERS_FAILURE = 'FETCH_ORDERS_FAILURE',
}

export type Order = {
    title: String;
    items: CategoryItem[] | null;
    amount: number;
    user: UserData | null;
}; 