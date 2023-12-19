import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../slice/user";

export const store = configureStore({
    reducer: {
        users: userSlice
    }
});