import { createSlice } from '@reduxjs/toolkit'

const routeResultSlice = createSlice({
  name: 'routeResult',
  initialState: {
    selectedHotel: null,
  },
  reducers: {
    setSelectedHotel: (state, action) => {
      state.selectedHotel = action.payload
    },
  },
})

export const { setSelectedHotel } = routeResultSlice.actions

export default routeResultSlice.reducer
