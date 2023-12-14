import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: '1l2kjll24kj',
        name: 'John',
        major: 'Developer'
    },
    {
        id: '3kjh3k4h5',
        name: 'Tim',
        major: 'Teacher'
    },
    {
        id: 's098dfd098',
        name: 'Michael',
        major: 'Baker'
    },
];

const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
});

export default UserSlice.reducer;