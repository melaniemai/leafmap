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
      const existingMarker = state.markers.find(
        (marker) => marker.id === newMarker.id
      )
      state.totalMarkersCount++
      if (!existingMarker) {
        state.markers.push({
          id: newMarker.id,
          name: newMarker.name,
          position: newMarker.position,
        })
      } else {
        existingMarker.quantity++
      }
    },
  },
})

export const markersActions = markersSlice.actions

export default markersSlice
