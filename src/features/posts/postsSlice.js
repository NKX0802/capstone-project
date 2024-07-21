import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const BASE_URL =
    "https://12a8b481-2ba4-4259-ab39-99c9343fe889-00-2xxp2tgehd2zp.picard.replit.dev"
export const fetchPostsByUser = createAsyncThunk(
    "posts/fetchByUser",
    async (userId) => {
        const response = await axios.get(`${BASE_URL}/posts/${userId}`);

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