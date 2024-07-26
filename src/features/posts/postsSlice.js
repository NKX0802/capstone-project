import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const BASE_URL =
    "https://12a8b481-2ba4-4259-ab39-99c9343fe889-00-2xxp2tgehd2zp.picard.replit.dev"
export const fetchPostsByUser = createAsyncThunk(
    "todo/fetchByUser",
    async (userId) => {
        const response = await axios.get(`${BASE_URL}/todo/${userId}`);

        return response.data;
    }
);

export const saveTodo = createAsyncThunk(
    "todo/saveTodo",
    async ({ todoTitle, todoContent, todoDeadline }) => {
        const token = localStorage.getItem("authToken");
        const decode = jwtDecode(token);
        const userId = decode.id;
        console.log("title:", todoTitle),
            console.log("content:", todoContent),
            console.log("deadline:", todoDeadline),
            console.log("user_id:", userId)

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

export const deleteTodo = createAsyncThunk(
    "todo/deleteTodo",
    async (id, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem("authToken");
            const decode = jwtDecode(token);
            const userId = decode.id;

            await axios.delete(`${BASE_URL}/todo/${id}`, {
                data: { user_id: userId }
            });
            return { id: id };
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
)

export const updateTodo = createAsyncThunk(
    "todo/updateTodo",
    async ({ todoTitle, todoContent, todoDeadline, todoId }) => {

        const token = localStorage.getItem("authToken");
        const decode = jwtDecode(token);
        const userId = decode.id;

        const data = {
            title: todoTitle,
            content: todoContent,
            deadline: todoDeadline,
            user_id: userId,
        }
        const response = await axios.update(`${BASE_URL}/todo/${todoId}`, data);
        return response.data;
    }
)
const postsSlice = createSlice({
    name: "posts",
    initialState: { posts: [], loading: true },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPostsByUser.fulfilled, (state, action) => {
            state.posts = action.payload;
            state.loading = false
        })
        builder.addCase(saveTodo.fulfilled, (state, action) => {
            state.posts = [action.payload, ...state.posts];
        })

        builder.addCase(updateTodo.fulfilled, (state, action) => {
            const updatedPost = action.payload;
            const postIndex = state.posts.findIndex(
                (post) => post.id === updatedPost.id
            );
            if (postIndex !== -1) {
                state.posts[postIndex] = updatedPost
            }
        })
        builder.addCase(deleteTodo.fulfilled, (state, action) => {
            const deletedPostId = action.payload;
            state.posts = state.posts.filter((post) => post.id !== deletedPostId);
        });
    }
});
export default postsSlice.reducer;