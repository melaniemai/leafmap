import { configureStore } from '@reduxjs/toolkit';
import markersSlice from './slices/markers-slice';
import minimapSlice from './slices/minimap-slice';

const store = configureStore({
  reducer: { markers: markersSlice.reducer, minimap: minimapSlice.reducer },
});

export default store;