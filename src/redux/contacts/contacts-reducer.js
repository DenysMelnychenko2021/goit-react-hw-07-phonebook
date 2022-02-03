import { createReducer } from '@reduxjs/toolkit';
import { handleFilterChange } from 'redux/contacts/contacts-actions';

export const filterReducer = createReducer('', {
  [handleFilterChange]: (_, { payload }) => payload,
});
