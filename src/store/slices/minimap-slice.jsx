import { createSlice } from "@reduxjs/toolkit"

const minimapSlice = createSlice({
  name: "minimap",
  initialState: {
    showMinimap: false,
  },
  reducers: {
    toggleMinimap(state) {
      state.showMinimap = !state.showMinimap
    },
  },
})

export const minimapActions = minimapSlice.actions

export default minimapSlice
