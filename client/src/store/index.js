import { configureStore } from '@reduxjs/toolkit';
import { auctionsListApi } from '../reducers/auctionsListApi/auctionsListApi';

const store = configureStore({
  reducer: {
    [auctionsListApi.reducerPath]: auctionsListApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(auctionsListApi.middleware),
});
export default store;
