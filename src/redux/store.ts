import {configureStore} from '@reduxjs/toolkit';
import {middlewares, reducers} from '../api';

export const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(middlewares),
});
