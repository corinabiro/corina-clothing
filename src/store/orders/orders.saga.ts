import { takeLatest, put, all, call } from "typed-redux-saga/macro";
import SHOP_DATA from '../../shop-data';
import { addOrdersInDocument, getOrderDetails, getOrdersAndDocuments } from '../../utils/firebase/firebase.utils';
import { orderCheckoutFailed, orderCheckoutSuccess, OrderCheckoutStart, fetchOrdersSuccess, fetchOrdersFailed, fetchOrderDetailsSuccess, fetchOrderDetailsFailed, OrderDetailsStart } from './orders.actions';
import { ORDER_ACTION_TYPES } from './orders.types';
import { pathPagesType } from "../../routes/pagesData";
import { useNavigate } from "react-router-dom";


export function* sendOrderCheckout(action: OrderCheckoutStart) {
    const { order } = action.payload;
    try {
        yield* call(addOrdersInDocument, 'orders', order);
        yield* call(orderCheckoutSuccess);
    } catch (error) {
        yield* put(orderCheckoutFailed(error as Error));
    }
}


export function* fetchOrdersAsync() {
    try {
        const ordersArray = yield* call(
            getOrdersAndDocuments,
            "orders"
        );
        yield* put(fetchOrdersSuccess(ordersArray));
    } catch (error) {
        yield* put(fetchOrdersFailed(error as Error));
    }
}

export function* fetchOrderDetailsAsync(action: OrderDetailsStart) {
    const { id } = action.payload;
    try {
        const orderDetails = yield* call(
            getOrderDetails,
            id
        );
        yield* put(fetchOrderDetailsSuccess(orderDetails));
    } catch (error) {
        yield* put(fetchOrderDetailsFailed(error as Error));
    }
}


export function* onSendOrderCheckout() {
    yield* takeLatest(
        ORDER_ACTION_TYPES.ORDER_CHECKOUT_START,
        sendOrderCheckout
    );
}

export function* onFetchOrdersAsync() {
    yield* takeLatest(
        ORDER_ACTION_TYPES.FETCH_ORDERS_START,
        fetchOrdersAsync
    );
}

export function* onFetchOrderDetailsAsync() {
    yield* takeLatest(
        ORDER_ACTION_TYPES.FETCH_ORDER_DETAILS,
        fetchOrderDetailsAsync
    );
}


export function* ordersSagas() {
    yield*
        all([
            call(onSendOrderCheckout),
            call(onFetchOrdersAsync),
            call(onFetchOrderDetailsAsync),
        ])
}
