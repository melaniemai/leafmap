import { createSlice } from "@reduxjs/toolkit"

const markersSlice = createSlice({
  name: "markers",
  initialState: {
    markers: [],
    totalMarkersCount: 0,
  },
  reducers: {
    addMarker(state, action) {
      const newMarker = action.payload
      state.markers.push({
        id: newMarker.id,
        name: newMarker.id,
        position: newMarker.position,
      })
      state.totalMarkersCount++
    },
    removeMarker(state, action) {
      const markerToRemove = action.payload
      state.markers = state.markers.filter(
        (marker) => marker.id !== markerToRemove
      );
      state.totalMarkersCount--;
    },
  },
})

export const markersActions = markersSlice.actions

export default markersSlice
