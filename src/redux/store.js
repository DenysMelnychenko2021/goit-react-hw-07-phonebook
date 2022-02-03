import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { contactsApi } from 'redux/contacts/contacts-api';

import logger from 'redux-logger';

import { filterReducer } from 'redux/contacts/contacts-reducer';
console.log(contactsApi);

const middleware = getDefaultMiddleware => [
  ...getDefaultMiddleware(),
  contactsApi.middleware,
  logger,
];

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware,
});

setupListeners(store.dispatch);
