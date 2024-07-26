import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { saveTodo } from "../features/posts/postsSlice";


export default function AddTodo({ show, handleClose }) {
    const [todoContent, setTodoContent] = useState("");
    const [todoTitle, setTodoTitle] = useState("");
    const [todoDeadline, setTodoDeadline] = useState("");
    const [completed, setCompleted] = useState(false);
    const dispatch = useDispatch();

    const handleSave = () => {
        dispatch(saveTodo({ todoTitle, todoContent, todoDeadline }));
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
                        <h1 style={{ fontSize: 50, fontFamily: 'Lilita One, cursive', color: "dodgerblue" }}>Title</h1>
                        <Form.Group controlId="todoTitle">
                            <Form.Control
                                placeholder="Todo Title"
                                as="textarea"
                                rows={1}
                                onChange={(e) => setTodoTitle(e.target.value)}
                            />
                        </Form.Group>
                        <h2 style={{ fontSize: 50, fontFamily: 'Lilita One, cursive', color: "dodgerblue" }}>Content</h2>
                        <Form.Group controlId="todoContent">
                            <Form.Control
                                placeholder="Todo Content"
                                as="textarea"
                                rows={3}
                                onChange={(e) => setTodoContent(e.target.value)}
                            />
                        </Form.Group>
                        <h3 style={{ fontSize: 50, fontFamily: 'Lilita One, cursive', color: "dodgerblue" }}>Deadline</h3>
                        <Form.Group controlId="todoDealine">
                            <Form.Control
                                placeholder="Todo Deadline"
                                as="textarea"
                                rows={1}
                                onChange={(e) => setTodoDeadline(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Form.Check
                        type="checkbox"
                        id="completed"
                        label="Mark as completed"
                        checked={completed}
                        onChange={(e) => setCompleted(e.target.checked)}
                        className="mb-3"
                    />
                    <Button
                        style={{ fontSize: 30, fontFamily: 'Lilita One, cursive', color: "white" }}
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