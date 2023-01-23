import { takeLatest, put, all, call } from "typed-redux-saga/macro";
import SHOP_DATA from '../../shop-data';
import { addOrdersInDocument } from '../../utils/firebase/firebase.utils';
import { orderCheckoutFailed, orderCheckoutSuccess, OrderCheckoutStart } from './orders.actions';
import { ORDER_ACTION_TYPES } from './orders.types';
import { pathPagesType } from "../../routes/pagesData";
import { useNavigate } from "react-router-dom";


export function* sendOrderCheckout(action: OrderCheckoutStart) {
    const { order } = action.payload;
    try {
        yield* call(addOrdersInDocument, 'orders', order);
        // yield* call(onOrderSent, pathPagesType.ORDER_SENT);
    } catch (error) {
        yield* put(orderCheckoutFailed(error as Error));
    }
}

export function* onSendOrderCheckout() {
    yield* takeLatest(
        ORDER_ACTION_TYPES.ORDER_CHECKOUT_START,
        sendOrderCheckout
    );
}

export function* ordersSagas() {
    yield*
        all([
            call(onSendOrderCheckout)
        ])
}
