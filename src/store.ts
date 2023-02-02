import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface UserStateValue {
//   username: string;
// }

interface UserState {
  username: string;
  //   if object than
  // value:UserStateValue;
}

const initialState = {
  username: "",
} as UserState;

const userSlice = createSlice({
  name: "USER",
  initialState,
  reducers: {
    login: (state: UserState, action: PayloadAction<string>) => {
      state.username = action.payload;
    },

    logout: (state: UserState) => {
      state.username = initialState.username;
    },
  },
});

export const { login, logout } = userSlice.actions;

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export default store;
