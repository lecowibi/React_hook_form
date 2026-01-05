// src/features/auth/authSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export type User = {
  Name: string
  email: string
  password: string
  age: number
  gender: string
  country: string
  terms: boolean
}

type AuthState = {
  user: User | null
  loading: boolean
  error: string | null
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
}

export const registerUser = createAsyncThunk<
  User,
  User,
  { rejectValue: string }
>("auth/registerUser", async (payload, { rejectWithValue }) => {
  try {
    const checkRes = await axios.get(
      `http://localhost:3000/users?email=${payload.email}`
    )

    if (checkRes.data.length > 0) {
      return rejectWithValue("Email already exists")
    }

    const res = await axios.post("http://localhost:3000/users", payload)
    return res.data
  } catch {
    return rejectWithValue("Registration failed")
  }
})

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.user = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload || "Error"
      })
  },
})

export const { logout } = authSlice.actions
export default authSlice.reducer
