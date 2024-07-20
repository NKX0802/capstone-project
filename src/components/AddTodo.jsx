import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { saveTodo } from "../features/posts/postsSlice";


export default function AddTodo({ show, handleClose }) {
    const [todoContent, setTodoContent] = useState("");
    const dispatch = useDispatch();

    const handleSave = () => {
        dispatch(saveTodo(todoContent));
        handleClose();
        setTodoContent("");
    };
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <Form>
                        <h1 style={{ fontSize: 50, fontFamily: 'Lilita One, cursive', color: "dodgerblue" }}>Title</h1>
                        <Form.Group controlId="postTitle">
                            <Form.Control
                                placeholder="Todo Title"
                                as="textarea"
                                rows={1}
                                onChange={(e) => setTodoContent(e.target.value)}
                            />
                        </Form.Group>
                        <h2 style={{ fontSize: 50, fontFamily: 'Lilita One, cursive', color: "dodgerblue" }}>Content</h2>
                        <Form.Group controlId="postContent">
                            <Form.Control
                                placeholder="Todo Content"
                                as="textarea"
                                rows={3}
                                onChange={(e) => setTodoContent(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="primary"
                        className="rounded-pill"
                        onClick={handleSave}
                    >
                        Add Todo
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}