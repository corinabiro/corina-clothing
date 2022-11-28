import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import storage from "redux-persist/lib/storage";
import createSagaMiddelware from "redux-saga";
// import thunk from "redux-thunk";
import { rootSaga } from "./root-saga";
import { rootReducer } from "./root-reducer";

import { persistStore, persistReducer } from "redux-persist";

const sagaMiddelware = createSagaMiddelware();

const middleWares = [
  process.env.NODE_ENV !== "production" && logger,
  //thunk,
  sagaMiddelware,
].filter(Boolean);

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const persistsedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));
export const store = createStore(
  persistsedReducer,
  undefined,
  composedEnhancers
);

sagaMiddelware.run(rootSaga);

export const persistor = persistStore(store);
