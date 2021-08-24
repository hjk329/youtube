import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers'
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware()

const store = configureStore(
  {
    reducer: rootReducer,
    middleware: [sagaMiddleware],
  },
)

sagaMiddleware.run(sagas)

export default store;
