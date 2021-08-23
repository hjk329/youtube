import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore(
  {
    reducer: rootReducer,
    middleware: [sagaMiddleware],
  },
)

export default store;
