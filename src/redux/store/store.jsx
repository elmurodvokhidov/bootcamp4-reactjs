import { configureStore } from "@reduxjs/toolkit";
import counter from "../slice/CounterSlice";

export const store = configureStore({
    reducer: counter
});