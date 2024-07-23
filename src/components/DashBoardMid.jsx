import { Col } from "react-bootstrap"
import TodoCard from "./TodoCard"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPostsByUser } from "../features/posts/postsSlice";
import { jwtDecode } from "jwt-decode";

export default function DashBoardMid() {

    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts.posts);
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
        console.log(posts)

    })

    return (
        <Col>
            <p className=" bi bi-clipboard-check-fill" style={{ fontSize: 70, fontFamily: 'Lilita One, cursive', color: "dodgerblue", marginLeft: "-15px" }}>Your Todos</p>
            {posts.map((post) => (
                <TodoCard
                    key={post.id}
                    content={post.content}
                    todoId={post.id}
                />
            ))}
        </Col>
    )
}