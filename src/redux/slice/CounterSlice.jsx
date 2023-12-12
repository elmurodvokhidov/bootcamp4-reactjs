import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
        user: [{name: 'john'}, {name: 'tim'}]
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        addNewUser: (state, action) => {
            state.user = [...state.user, action.payload]
        }
    }
});

export const {
    increment,
    decrement,
    addNewUser,
} = CounterSlice.actions
export default CounterSlice.reducer