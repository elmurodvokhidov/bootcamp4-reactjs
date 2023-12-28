import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    isError: null,
    articles: []
};

const ArticleSlice = createSlice({
    name: "article",
    initialState,
    reducers: {
        articleStart: (state) => {
            state.isLoading = true
        },
        articleSuccess: (state, action) => {
            state.isLoading = false
            state.articles = action.payload
        },
        articleError: (state, action) => {
            state.isLoading = false
            state.isError = action.payload
        }
    }
});

export const {
    articleStart,
    articleSuccess,
    articleError
} = ArticleSlice.actions;
export default ArticleSlice.reducer;