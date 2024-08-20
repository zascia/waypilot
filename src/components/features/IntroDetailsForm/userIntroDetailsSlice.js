import { createSlice } from '@reduxjs/toolkit'
// https://redux.js.org/usage/migrating-to-modern-redux

const initialState = {}

const userIntroDetailsSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Give case reducers meaningful past-tense "event"-style names
    userdataSaved(state, action) {
      // "Mutating" update syntax thanks to Immer, and no `return` needed
      state.user.userData = action.payload
    },
    userCleared(state, action) {
      state.user = null
    },
  },
})

// `createSlice` automatically generated action creators with these names.
// export them as named exports from this "slice" file
export const { userdataSaved, userCleared } = userIntroDetailsSlice.actions

// Export the slice reducer as the default export
export default userIntroDetailsSlice.reducer
