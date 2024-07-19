// import { useContext, useState } from "react";
// import { AuthContext } from "./AuthProvider";
// import { Button, Form, Modal } from "react-bootstrap";
// import { useDispatch } from "react-redux";
// import { savePost } from "../features/posts/postsSlice";

// export default function AddTodo({ show, handleClose }) {
//     const [postContent, setPostContent] = useState("");
//     const [file, setFile] = useState(null);
//     const dispatch = useDispatch();
//     const { currentUser } = useContext(AuthContext);
//     const userId = currentUser.uid;

//     const handleSave = () => {
//         dispatch(savePost({ userId, postContent, file }));
//         handleClose();
//         setPostContent("");
//         setFile(null);
//     };

//     const handleFileChange = (e) => {
//         setFile(e.target.files[0]);
//     }


//     return (
//         <>
//             <Modal show={show} onHide={handleClose}>
//                 <Modal.Header closeButton></Modal.Header>
//                 <Modal.Body>
//                     <Form>
//                         <Form.Group controlId="postContent">
//                             <h1>Todo Title</h1>
//                             <Form.Control
//                                 placeholder="Title"
//                                 as="textarea"
//                                 rows={1}
//                                 onChange={(e) => setPostContent(e.target.value)}
//                             />
//                             <h2>Todo Content</h2>
//                             <Form.Control
//                                 placeholder="Write your todo here !"
//                                 as="textarea"
//                                 rows={3}
//                                 onChange={(e) => setPostContent(e.target.value)}
//                             />
//                             <br />
//                             <Form.Control type="file" onChange={handleFileChange} />
//                         </Form.Group>
//                     </Form>
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button
//                         variant="primary"
//                         className="rounded-pill"
//                         onClick={handleSave}
//                     >
//                         Add Todo
//                     </Button>
//                 </Modal.Footer>
//             </Modal>
//         </>
//     )

// }