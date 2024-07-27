// import { useState } from "react";
// import { Button, Form, Modal } from "react-bootstrap";
// import axios from "axios";


// export default function UpdateTodo({ showUpdate, handleClose, title, content, deadline, todoId }) {
//     const [todoContent, setTodoContent] = useState(content || "");
//     const [todoTitle, setTodoTitle] = useState(title || "");
//     const [todoDeadline, setTodoDeadline] = useState(deadline || "");
//     const BASE_URL = "https://12a8b481-2ba4-4259-ab39-99c9343fe889-00-2xxp2tgehd2zp.picard.replit.dev";

//     const handleUpdate = async () => {
//         console.log(todoId)
//         try {
//             const response = await axios.put(`${BASE_URL}/todo/${todoId}`, {
//                 title: todoTitle,
//                 content: todoContent,
//                 deadline: todoDeadline
//             });
//             console.log(response.data);
//             handleClose();
//             setTodoTitle("");
//             setTodoContent("");
//             setTodoDeadline("");
//         } catch (error) {
//             console.error("Error updating post:", error);
//         }
//     };

//     return (
//         <>
//             <Modal show={showUpdate} onHide={handleClose}>
//                 <Modal.Header closeButton></Modal.Header>
//                 <Modal.Body>
//                     <Form>
//                         <h1 style={{ fontSize: 50, fontFamily: 'Lilita One, cursive', color: "#FFBF00" }}>Update title</h1>
//                         <Form.Group controlId="todoTitle">
//                             <Form.Control
//                                 placeholder="Update Todo Title"
//                                 as="textarea"
//                                 rows={1}
//                                 value={todoTitle}
//                                 onChange={(e) => setTodoTitle(e.target.value)}
//                             />
//                         </Form.Group>
//                         <h2 style={{ fontSize: 50, fontFamily: 'Lilita One, cursive', color: "#FFBF00" }}>Update content</h2>
//                         <Form.Group controlId="todoContent">
//                             <Form.Control
//                                 placeholder="Update Todo Content"
//                                 as="textarea"
//                                 rows={3}
//                                 value={todoContent}
//                                 onChange={(e) => setTodoContent(e.target.value)}
//                             />
//                         </Form.Group>
//                         <h3 style={{ fontSize: 50, fontFamily: 'Lilita One, cursive', color: "#FFBF00" }}>Update deadline</h3>
//                         <Form.Group controlId="todoDeadline">
//                             <Form.Control
//                                 placeholder="Update Todo Deadline"
//                                 as="textarea"
//                                 rows={1}
//                                 value={todoDeadline}
//                                 onChange={(e) => setTodoDeadline(e.target.value)}
//                             />
//                         </Form.Group>
//                     </Form>
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button
//                         style={{ fontSize: 30, fontFamily: 'Lilita One, cursive', color: "white" }}
//                         variant="primary"
//                         className="rounded-pill"
//                         onClick={handleUpdate}
//                     >
//                         Update Todo
//                     </Button>
//                 </Modal.Footer>
//             </Modal>
//         </>
//     );
// }

// import { useState, useEffect } from "react";
// import { Button, Form, Modal } from "react-bootstrap";
// import axios from "axios";

// export default function UpdateTodo({ showUpdate, handleClose, title, content, deadline, todoId }) {
//     const [todoContent, setTodoContent] = useState("");
//     const [todoTitle, setTodoTitle] = useState("");
//     const [todoDeadline, setTodoDeadline] = useState("");
//     const BASE_URL = "https://12a8b481-2ba4-4259-ab39-99c9343fe889-00-2xxp2tgehd2zp.picard.replit.dev";

//     useEffect(() => {
//         if (showUpdate) {
//             setTodoTitle(title);
//             setTodoContent(content);
//             setTodoDeadline(deadline);
//         }
//     }, [showUpdate, title, content, deadline]);

//     const handleUpdate = async () => {
//         console.log(`Updating todo with ID: ${todoId}`);
//         console.log({
//             title: todoTitle,
//             content: todoContent,
//             deadline: todoDeadline
//         });

//         try {
//             const response = await axios.put(`${BASE_URL}/todo/${todoId}`, {
//                 title: todoTitle,
//                 content: todoContent,
//                 deadline: todoDeadline
//             });
//             console.log('Update response:', response.data);
//             handleClose();
//             setTodoTitle("");
//             setTodoContent("");
//             setTodoDeadline("");
//         } catch (error) {
//             console.error("Error updating post:", error);
//         }
//     };

//     return (
//         <Modal show={showUpdate} onHide={handleClose}>
//             <Modal.Header closeButton>
//                 <Modal.Title>Update Todo</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//                 <Form>
//                     <h1 style={{ fontSize: 50, fontFamily: 'Lilita One, cursive', color: "#FFBF00" }}>Update title</h1>
//                     <Form.Group controlId="todoTitle">
//                         <Form.Control
//                             placeholder="Update Todo Title"
//                             as="textarea"
//                             rows={1}
//                             value={todoTitle}
//                             onChange={(e) => setTodoTitle(e.target.value)}
//                         />
//                     </Form.Group>
//                     <h2 style={{ fontSize: 50, fontFamily: 'Lilita One, cursive', color: "#FFBF00" }}>Update content</h2>
//                     <Form.Group controlId="todoContent">
//                         <Form.Control
//                             placeholder="Update Todo Content"
//                             as="textarea"
//                             rows={3}
//                             value={todoContent}
//                             onChange={(e) => setTodoContent(e.target.value)}
//                         />
//                     </Form.Group>
//                     <h3 style={{ fontSize: 50, fontFamily: 'Lilita One, cursive', color: "#FFBF00" }}>Update deadline</h3>
//                     <Form.Group controlId="todoDeadline">
//                         <Form.Control
//                             placeholder="Update Todo Deadline"
//                             as="textarea"
//                             rows={1}
//                             value={todoDeadline}
//                             onChange={(e) => setTodoDeadline(e.target.value)}
//                         />
//                     </Form.Group>
//                 </Form>
//             </Modal.Body>
//             <Modal.Footer>
//                 <Button
//                     style={{ fontSize: 30, fontFamily: 'Lilita One, cursive', color: "white" }}
//                     variant="primary"
//                     className="rounded-pill"
//                     onClick={handleUpdate}
//                 >
//                     Update Todo
//                 </Button>
//             </Modal.Footer>
//         </Modal>
//     );
// }

import { useState, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import axios from "axios";

export default function UpdateTodo({ showUpdate, handleClose, title, content, deadline, todoId }) {
    const [todoContent, setTodoContent] = useState("");
    const [todoTitle, setTodoTitle] = useState("");
    const [todoDeadline, setTodoDeadline] = useState("");
    const BASE_URL = "https://12a8b481-2ba4-4259-ab39-99c9343fe889-00-2xxp2tgehd2zp.picard.replit.dev";

    useEffect(() => {
        if (showUpdate) {
            setTodoTitle(title);
            setTodoContent(content);
            setTodoDeadline(deadline);
        }
    }, [showUpdate, title, content, deadline]);

    const handleUpdate = async () => {
        console.log(`Updating todo with ID: ${todoId}`);
        console.log({
            title: todoTitle,
            content: todoContent,
            deadline: todoDeadline
        });

        try {
            const response = await axios.put(`${BASE_URL}/todo/${todoId}`, {
                title: todoTitle,
                content: todoContent,
                deadline: todoDeadline
            });
            console.log('Update response:', response.data);
            handleClose();
            setTodoTitle("");
            setTodoContent("");
            setTodoDeadline("");
        } catch (error) {
            console.error("Error updating post:", error.response ? error.response.data : error.message);
        }
    };

    return (
        <Modal show={showUpdate} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title style={{ fontSize: 50, fontFamily: 'Lilita One, cursive', color: "dodgerblue", textDecoration: "underline" }}>Update Todo</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <h1 style={{ fontSize: 50, fontFamily: 'Lilita One, cursive', color: "dodgerblue" }}>Title</h1>
                    <Form.Group controlId="todoTitle">
                        <Form.Control
                            placeholder="Update Todo Title"
                            as="textarea"
                            rows={1}
                            value={todoTitle}
                            onChange={(e) => setTodoTitle(e.target.value)}
                        />
                    </Form.Group>
                    <h2 style={{ fontSize: 50, fontFamily: 'Lilita One, cursive', color: "dodgerblue" }}>Content</h2>
                    <Form.Group controlId="todoContent">
                        <Form.Control
                            placeholder="Update Todo Content"
                            as="textarea"
                            rows={3}
                            value={todoContent}
                            onChange={(e) => setTodoContent(e.target.value)}
                        />
                    </Form.Group>
                    <h3 style={{ fontSize: 50, fontFamily: 'Lilita One, cursive', color: "dodgerblue" }}>Deadline</h3>
                    <Form.Group controlId="todoDeadline">
                        <Form.Control
                            placeholder="Update Todo Deadline"
                            as="textarea"
                            rows={1}
                            value={todoDeadline}
                            onChange={(e) => setTodoDeadline(e.target.value)}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    style={{ fontSize: 30, fontFamily: 'Lilita One, cursive', color: "white" }}
                    variant="primary"
                    className="rounded-pill"
                    onClick={handleUpdate}
                >
                    Update Todo
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
