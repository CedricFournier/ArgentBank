import { createAsyncThunk } from "@reduxjs/toolkit";

export const userLog = createAsyncThunk(
    "user/userLog",
    async ({ email, password, checked}) => {
      const rlogin = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({ email, password }),
      })
      console.log(checked)
      if (rlogin.status === 200) {
        const rtoken = await rlogin.json();
        const token = rtoken.body.token;
        const userp = await userProfil(token);
        const user = userp.body;
        if (checked === true ) {
          window.localStorage.setItem('useremail', email)
          window.localStorage.setItem('userpswd', password)
        }
        return { email: email, token: token, firstName: user.firstName,
          lastName: user.lastName, userName: user.userName,
           status: rtoken.status, message: rtoken.message };
      } else {
        const rerror = await rlogin.json();
        return { status: rerror.status, message: rerror.message };
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