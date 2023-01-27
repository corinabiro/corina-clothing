import { createSelector } from "reselect";
import { OrdersState } from "./orders.reducer";
import { RootState } from "../store";

const selectOrdersReducer = (state: RootState): OrdersState => {
    return state.orders;
}

export const selectOrders = createSelector(
    [selectOrdersReducer],
    (ordersSlice) => ordersSlice.orderList
);

export const selectOrderDetails = createSelector(
    [selectOrdersReducer],
    (ordersSlice) => ordersSlice.orderDetails
);

export const selectOrdersIsLoading = createSelector(
    [selectOrdersReducer],
    (ordersSlice) => ordersSlice.isLoading
);


