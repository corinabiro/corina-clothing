import { createSelector } from "reselect";
import { OrdersState } from "./orders.reducer";
import { RootState } from "../store";

const selectOrdersReducer = (state: RootState): OrdersState =>
    state.orders;


