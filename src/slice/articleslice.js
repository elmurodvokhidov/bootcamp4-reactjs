import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    isError: null,
    articles: [],
    storedArticle: null
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
        },
        getArticle: (state, action) => {
            state.isLoading = false
            state.storedArticle = action.payload
        }
    }
});

export const {
    articleStart,
    articleSuccess,
    articleError,
    getArticle
} = ArticleSlice.actions;
export default ArticleSlice.reducer;