import { compose, createStore, applyMiddleware, Middleware } from "redux";
import logger from "redux-logger";
import storage from "redux-persist/lib/storage";
import createSagaMiddelware from "redux-saga";
// import thunk from "redux-thunk";
import { rootSaga } from "./root-saga";
import { rootReducer } from "./root-reducer";

import { persistStore, persistReducer, PersistConfig } from "redux-persist";

export type RootState = ReturnType<typeof rootReducer>;

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const sagaMiddelware = createSagaMiddelware();

const middleWares = [
  process.env.NODE_ENV !== "production" && logger,
  //thunk,
  sagaMiddelware,
].filter((middleware): middleware is Middleware => Boolean(middleware));

type ExtendedPersistConfig = PersistConfig<RootState> & {
  whitelist: (keyof RootState)[];
};

const persistConfig: ExtendedPersistConfig = {
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
