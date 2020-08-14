import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';

import rootReducer from './root-reducer';

const middlewares = [logger]; //an array of middlewares so we can add multiple middlewares

export const store = createStore(rootReducer, applyMiddleware(...middlewares))
export const persistor = persistStore(store); 

export default { store, persistor };