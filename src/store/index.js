import { configureStore } from '@reduxjs/toolkit';
import markersSlice from './slices/markers-slice';

const store = configureStore({
  reducer: { 
    markers: markersSlice.reducer, 
  },
});

export default store;