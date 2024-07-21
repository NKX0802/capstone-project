import { Col } from "react-bootstrap"
import TodoCard from "./TodoCard"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPostsByUser } from "../features/posts/postsSlice";
import { jwtDecode } from "jwt-decode";

export default function DashBoardMid() {

    const dispatch = useDispatch();
    const todo = useSelector((state) => state.todo.todo);
    //const loading = useSelector((state) => state.posts.loading)

    useEffect(() => {
        const token = localStorage.getItem("authToken");
        if (token) {
            const decodedToken = jwtDecode(token);
            const userId = decodedToken.id;
            dispatch(fetchPostsByUser(userId));
        }
    }, [dispatch]);

    useEffect(() => {
        console.log(todo)

    })
    return (
        <Col>
            <p style={{ fontSize: 50, fontFamily: 'Lilita One, cursive', color: "black" }}>Your Todos</p>
            {todo.map((post) => (
                <TodoCard
                    key={post.id}
                    content={post.content}
                    postId={post.id}
                />
            ))}
        </Col>
    )
}