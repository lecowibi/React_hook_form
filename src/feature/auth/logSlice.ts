// src/features/auth/authSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export type User = {
  id: number
  email: string
  password: string
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

export const loginUser = createAsyncThunk<
  User,
  { email: string; password: string },
  { rejectValue: string }
>("auth/loginUser", async (payload, { rejectWithValue }) => {
  try {
    const res = await axios.get(
      `http://localhost:3000/users?email=${payload.email}`
    )

    if (res.data.length === 0) {
      return rejectWithValue("User not found")
    }

    const user = res.data[0]

    if (user.password !== payload.password) {
      return rejectWithValue("Invalid password")
    }

    return user
  } catch {
    return rejectWithValue("Login failed")
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
      .addCase(loginUser.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload ?? "Error"
      })
  },
})

export const { logout } = authSlice.actions
export default authSlice.reducer
