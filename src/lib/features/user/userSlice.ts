import { createAppSlice } from "@/lib/createAppSlice";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSelector } from 'reselect';


export interface CounterSliceState {
  userData: {};
}

const initialState: CounterSliceState = {
  userData: {}
};

export const userSlice = createAppSlice({
  name: "Register",
  initialState,
  reducers: (create) => ({
    User: create.reducer((state, action:PayloadAction<string>) => {
      console.log("action", action)
      state.userData = action.payload;
    })
  })
});

// Action creators are generated for each case reducer function.
export const { User } = userSlice.actions;

const selectUserState = (state: { userData: CounterSliceState }) => state.userData;
export const selectUserQuery = createSelector(
    [selectUserState],
    (searchState) => searchState.userData
);

export default userSlice.reducer;

