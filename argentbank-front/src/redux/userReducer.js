import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const userLog = createAsyncThunk(
  "user/userLog",
  async ({ email, password}) => {
    const rlogin = await fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ email, password }),
    })
    if (rlogin.status === 200) {
      const rtoken = await rlogin.json();
      const token = rtoken.body.token;
      const userp = await userProfil(token);
      const user = userp.body;
      return { email: email, token: token, firstName: user.firstName,
        lastName: user.lastName, userName: user.userName };
    }
  }
);

async function userProfil(token) {
  const ruser = await fetch("http://localhost:3001/api/v1/user/profile", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json;charset=utf-8",
    }  
  })
  if (ruser.status === 200) {
    return ruser.json();
  }
};

export const userEdit = createAsyncThunk(
  "user/userEdit",
  async ({ userName, token}) => {
    const redit = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ userName }),
    })
    if (redit.status === 200) {
      const jedituser = await redit.json();
      return { userName: jedituser.body.userName };
      
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    email: "",
    token: "",
    firstName: "",
    lastName: "",
    userName: "",
    status: "void",
    error: "",
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
        state.status = "success";
        state.error = "";
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