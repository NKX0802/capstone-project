import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import axios from "axios";


export default function UpdateTodo({ showUpdate, handleClose, title, content, deadline, todoId }) {
    const [todoContent, setTodoContent] = useState(content || "");
    const [todoTitle, setTodoTitle] = useState(title || "");
    const [todoDeadline, setTodoDeadline] = useState(deadline || "");
    const BASE_URL = "https://12a8b481-2ba4-4259-ab39-99c9343fe889-00-2xxp2tgehd2zp.picard.replit.dev";

    const handleUpdate = async () => {
        console.log(todoId)
        try {
            const response = await axios.put(`${BASE_URL}/todo/${todoId}`, {
                title: todoTitle,
                content: todoContent,
                deadline: todoDeadline
            });
            console.log(response.data);
            handleClose();
            setTodoTitle("");
            setTodoContent("");
            setTodoDeadline("");
        } catch (error) {
            console.error("Error updating post:", error);
        }
    };
    return (
        <>
            <Modal show={showUpdate} onHide={handleClose}>
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
                        style={{ fontSize: 30, fontFamily: 'Lilita One, cursive', color: "white" }}
                        variant="warning"
                        className="rounded-pill"
                        onClick={handleUpdate}
                    >
                        Update Todo
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}