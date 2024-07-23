import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const BASE_URL =
    "https://12a8b481-2ba4-4259-ab39-99c9343fe889-00-2xxp2tgehd2zp.picard.replit.dev"
export const fetchPostsByUser = createAsyncThunk(
    "posts/fetchByUser",
    async (userId) => {
        const response = await axios.get(`${BASE_URL}/todo/${userId}`);

        return response.data;
    }
);

export const saveTodo = createAsyncThunk(
    "posts/savePost",
    async (todoContent, todoTitle, todoDeadline) => {
        const token = localStorage.getItem("authToken");
        const decode = jwtDecode(token);
        const userId = decode.id;

        const data = {
            title: todoTitle,
            content: todoContent,
            deadline: todoDeadline,
            user_id: userId,
        };
        const response = await axios.post(`${BASE_URL}/todo`, data);
        return response.data;
    }
);
const postsSlice = createSlice({
    name: "posts",
    initialState: { posts: [], loading: true },
    reducers: {},
    extraReducers: (builder) => {
        builder
        // .addCase(fetchPostsByUser.fulfilled, (state, action) => {
        //     state.posts = action.payload;
        //     state.loading = false
        // })
        // .addCase(savePost.fulfilled, (state, action) => {
        //     state.posts = [action.payload, ...state.posts];
        // })
        // .addCase(likePost.fulfilled, (state, action) => {
        //     const { userId, postId } = action.payload;
        //     const postIndex = state.posts.findIndex((post) => post.id === postId);

        //     if (postIndex !== -1) {
        //         state.posts[postIndex].likes.push(userId);
        //     }
        // })
        // .addCase(removeLikeFromPost.fulfilled, (state, action) => {
        //     const { userId, postId } = action.payload;
        //     const postIndex = state.posts.findIndex((post) => post.id === postId);

        //     if (postIndex !== -1) {
        //         state.posts[postIndex].likes = state.posts[postIndex].likes.filter(
        //             (id) => id !== userId
        //         )
        //     }
        // })
        // .addCase(updatePost.fulfilled, (state, action) => {
        //     const updatedPost = action.payload;
        //     const postIndex = state.posts.findIndex(
        //         (post) => post.id === updatedPost.id
        //     );
        //     if (postIndex !== -1) {
        //         state.posts[postIndex] = updatedPost
        //     }
        // })
        // .addCase(deletePost.fulfilled, (state, action) => {
        //     const deletedPostId = action.payload;
        //     state.posts = state.posts.filter((post) => post.id !== deletedPostId);
        // });
    }
});
export default postsSlice.reducer;