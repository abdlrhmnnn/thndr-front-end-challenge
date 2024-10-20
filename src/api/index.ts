import tickerApi from './tickers/api';

export const reducers = {
  [tickerApi.reducerPath]: tickerApi.reducer,
};

export const middlewares = [tickerApi.middleware];
