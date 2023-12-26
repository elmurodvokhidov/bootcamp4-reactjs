import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    isLogged: false,
    error: null,
    user: null
};

const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginStart: (state, action) => {
            state.isLoading = true
        },
        loginSuccess: (state, action) => {
            state.isLogged = true
            state.isLoading = false
            state.user = action.payload
        },
        loginError: (state, action) => {
            state.error = action.payload
            state.isLoading = false
        }
    }
});

export const {
    loginStart,
    loginSuccess,
    loginError
} = AuthSlice.actions;
export default AuthSlice.reducer;