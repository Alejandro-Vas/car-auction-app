import { configureStore } from '@reduxjs/toolkit';
import { auctionsListApi } from '../reducers/auctionsListApi/auctionsListApi';
import { auctionItemApi } from '../reducers/auctionItemApi/auctionItemApi';

const store = configureStore({
  reducer: {
    [auctionsListApi.reducerPath]: auctionsListApi.reducer,
    [auctionItemApi.reducerPath]: auctionItemApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(auctionsListApi.middleware)
    .concat(auctionItemApi.middleware),
});
export default store;
