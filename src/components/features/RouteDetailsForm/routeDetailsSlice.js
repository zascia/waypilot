import { createSlice } from '@reduxjs/toolkit'
// https://redux.js.org/usage/migrating-to-modern-redux

const routeDetailsSlice = createSlice({
  name: 'routeDetails',
  initialState: {
    from: '', // place_id
    to: '', // place_id
    nightStops: false,
    fuelStops: false,
    foodStops: false,
    step1Data: {},
  },
  reducers: {
    // Give case reducers meaningful past-tense "event"-style names
    updateFrom: (state, action) => {
      state.from = action.payload
    },
    updateTo: (state, action) => {
      state.to = action.payload
    },
    toggleSwitcher: (state, action) => {
      // action.payload is switcher property name from state
      state[action.payload] = !state[action.payload]
    },
  },
})

// `createSlice` automatically generated action creators with these names.
// export them as named exports from this "slice" file
export const { updateFrom, updateTo, toggleSwitcher } =
  routeDetailsSlice.actions

// Export the slice reducer as the default export
export default routeDetailsSlice.reducer
