import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserData {
  id: number;
  name: string;
  identification: string;
  username: string;
  email: string;
  phone: string;
  role: string;
  status: boolean;
}

interface AuthState {
  user: UserData | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserData>) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer