import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { saveTodo } from "../features/posts/postsSlice";


export default function UpdateTodo({ show, handleClose }) {
    const [todoContent, setTodoContent] = useState("");
    const [todoTitle, setTodoTitle] = useState("");
    const [todoDeadline, setTodoDeadline] = useState("");
    const dispatch = useDispatch();

    const handleSave = () => {
        dispatch(saveTodo(todoContent, todoTitle, todoDeadline));
        handleClose();
        setTodoContent("");
        setTodoTitle("");
        setTodoDeadline("");
    };

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <Form>
                        <h1 style={{ fontSize: 50, fontFamily: 'Lilita One, cursive', color: "#FFDB58" }}>Update your title</h1>
                        <Form.Group controlId="postTitle">
                            <Form.Control
                                placeholder="Update Todo Title"
                                as="textarea"
                                rows={1}
                                onChange={(e) => setTodoTitle(e.target.value)}
                            />
                        </Form.Group>
                        <h2 style={{ fontSize: 50, fontFamily: 'Lilita One, cursive', color: "#FFDB58" }}>Update your content</h2>
                        <Form.Group controlId="postContent">
                            <Form.Control
                                placeholder="Update Todo Content"
                                as="textarea"
                                rows={3}
                                onChange={(e) => setTodoContent(e.target.value)}
                            />
                        </Form.Group>
                        <h3 style={{ fontSize: 50, fontFamily: 'Lilita One, cursive', color: "#FFDB58" }}>Update your deadline</h3>
                        <Form.Group controlId="postDeadline">
                            <Form.Control
                                placeholder="Update Todo Deadline"
                                as="textarea"
                                rows={1}
                                onChange={(e) => setTodoDeadline(e.target.value)}
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