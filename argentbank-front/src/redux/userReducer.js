import { createSlice } from "@reduxjs/toolkit";
import { userEdit, userLog } from "./apiuser";

const userSlice = createSlice({
  name: "user",
  initialState: {
    email: "",
    token: "",
    firstName: "",
    lastName: "",
    userName: "",
    status: "",
    message: "",
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(userLog.fulfilled, (state, action) => {
        state.email = action.payload.email
        state.token = action.payload.token
        state.firstName = action.payload.firstName
        state.lastName = action.payload.lastName
        state.userName = action.payload.userName
        state.status = action.payload.status
        state.message = action.payload.message
      })
      .addCase(userLog.rejected, (state, action) => {
        state.status = "error";
        state.error = action.payload;
      })
      .addCase("logOut", (state) => {
        state.email = ""
        state.token = ""
        state.firstName = ""
        state.lastName = ""
        state.userName = ""
        state.status = "void"
      })
      .addCase(userEdit.fulfilled, (state, action) => {
        state.userName = action.payload.userName
      })
  },
});

export default userSlice.reducer;

export const selectCurrentToken = (state) => state.user.token;