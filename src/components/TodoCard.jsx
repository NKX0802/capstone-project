// import { Button, Card, CardHeader } from "react-bootstrap";
// import { useState } from "react";
// import axios from "axios";
// import UpdateTodo from "./UpdateTodo";

// export default function TodoCard({ title, content, deadline, todoId, }) {
//     const [showUpdate, setShowUpdate] = useState(false);
//     const handleShowUpdate = () => setShowUpdate(true)
//     const handleCloseUpdate = () => setShowUpdate(false);
//     const BASE_URL = "https://12a8b481-2ba4-4259-ab39-99c9343fe889-00-2xxp2tgehd2zp.picard.replit.dev";

//     const handleDelete = async () => {
//         try {
//             const response = await axios.delete(`${BASE_URL}/todo/${todoId}`);
//             console.log('Delete response:', response.data);
//         } catch (error) {
//             console.error('Error deleting todo:', error);
//         }
//     };

//     // Conditionally render card only if title and content are available
//     if (!title || !content) {
//         console.warn('Missing title or content:', { title, content, deadline, todoId });
//         return null; // Don't render empty cards
//     }

//     console.log('Rendering card:', { title, content, deadline, todoId });


//     return (
//         <>
//             <Card className="my-3">
//                 <CardHeader style={{ fontSize: 33, fontFamily: 'Lilita One, cursive', backgroundColor: 'dodgerblue', color: "white" }}>{title}</CardHeader>
//                 <Card.Body style={{ backgroundColor: 'white', color: "dodgerblue" }}>
//                     <Card.Text style={{ fontSize: 30, fontFamily: 'Lilita One, cursive' }}>{content}</Card.Text>
//                     <Card.Text style={{ fontSize: 30, fontFamily: 'Lilita One, cursive' }}>
//                         Deadline: {deadline}
//                     </Card.Text>
//                     <div className="text-end">
//                         <Button variant="primary" className="me-2" style={{ fontSize: 25, width: "55px" }} onClick={handleShowUpdate}>
//                             <UpdateTodo showUpdate={showUpdate} handleClose={handleCloseUpdate} postId={todoId} title={title} content={content} deadline={deadline} />
//                             <i className="bi bi-pencil-square"></i>
//                         </Button>
//                         <Button variant="primary" className="me-2" style={{ fontSize: 25, width: "55px" }} onClick={handleDelete}>
//                             <i className="bi bi-trash-fill"></i>
//                         </Button>
//                     </div>
//                 </Card.Body>
//             </Card>
//         </>
//     );
// }

// import { Button, Card, CardHeader } from "react-bootstrap";
// import { useState } from "react";
// import axios from "axios";
// import UpdateTodo from "./UpdateTodo";

// export default function TodoCard({ title, content, deadline, todoId }) {
//     const [showUpdate, setShowUpdate] = useState(false);
//     const handleShowUpdate = () => setShowUpdate(true);
//     const handleCloseUpdate = () => setShowUpdate(false);
//     const BASE_URL = "https://12a8b481-2ba4-4259-ab39-99c9343fe889-00-2xxp2tgehd2zp.picard.replit.dev";

//     const handleDelete = async () => {
//         try {
//             const response = await axios.delete(`${BASE_URL}/todo/${todoId}`);
//             console.log('Delete response:', response.data);
//         } catch (error) {
//             console.error('Error deleting todo:', error);
//         }
//     };

//     // Conditionally render card only if title and content are available
//     if (!title || !content) {
//         console.warn('Missing title or content:', { title, content, deadline, todoId });
//         return null; // Don't render empty cards
//     }

//     console.log('Rendering card:', { title, content, deadline, todoId });

//     return (
//         <>
//             <Card className="my-3">
//                 <CardHeader style={{ fontSize: 33, fontFamily: 'Lilita One, cursive', backgroundColor: 'dodgerblue', color: "white" }}>{title}</CardHeader>
//                 <Card.Body style={{ backgroundColor: 'white', color: "dodgerblue" }}>
//                     <Card.Text style={{ fontSize: 30, fontFamily: 'Lilita One, cursive' }}>{content}</Card.Text>
//                     <Card.Text style={{ fontSize: 30, fontFamily: 'Lilita One, cursive' }}>
//                         Deadline: {deadline}
//                     </Card.Text>
//                     <div className="text-end">
//                         <Button variant="primary" className="me-2" style={{ fontSize: 25, width: "55px" }} onClick={handleShowUpdate}>
//                             <i className="bi bi-pencil-square"></i>
//                         </Button>
//                         <Button variant="primary" className="me-2" style={{ fontSize: 25, width: "55px" }} onClick={handleDelete}>
//                             <i className="bi bi-trash-fill"></i>
//                         </Button>
//                     </div>
//                 </Card.Body>
//             </Card>

//             <UpdateTodo
//                 showUpdate={showUpdate}
//                 handleClose={handleCloseUpdate}
//                 postId={todoId}
//                 title={title}
//                 content={content}
//                 deadline={deadline}
//             />
//         </>
//     );
// }
import { Button, Card, CardHeader } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import UpdateTodo from "./UpdateTodo";

export default function TodoCard({ title, content, deadline, todoId }) {
    const [showUpdate, setShowUpdate] = useState(false);
    const handleShowUpdate = () => setShowUpdate(true);
    const handleCloseUpdate = () => setShowUpdate(false);
    const BASE_URL = "https://12a8b481-2ba4-4259-ab39-99c9343fe889-00-2xxp2tgehd2zp.picard.replit.dev";

    const handleDelete = async () => {
        try {
            const response = await axios.delete(`${BASE_URL}/todo/${todoId}`);
            console.log('Delete response:', response.data);
        } catch (error) {
            console.error('Error deleting todo:', error.response ? error.response.data : error.message);
        }
    };

    // Conditionally render card only if title and content are available
    if (!title || !content) {
        console.warn('Missing title or content:', { title, content, deadline, todoId });
        return null; // Don't render empty cards
    }

    console.log('Rendering card:', { title, content, deadline, todoId });

    return (
        <>
            <Card className="my-3">
                <CardHeader style={{ fontSize: 33, fontFamily: 'Lilita One, cursive', backgroundColor: 'dodgerblue', color: "white" }}>{title}</CardHeader>
                <Card.Body style={{ backgroundColor: 'white', color: "dodgerblue" }}>
                    <Card.Text style={{ fontSize: 30, fontFamily: 'Lilita One, cursive' }}>{content}</Card.Text>
                    <Card.Text style={{ fontSize: 30, fontFamily: 'Lilita One, cursive' }}>
                        Deadline: {deadline}
                    </Card.Text>
                    <div className="text-end">
                        <Button variant="primary" className="me-2" style={{ fontSize: 25, width: "55px" }} onClick={handleShowUpdate}>
                            <i className="bi bi-pencil-square"></i>
                        </Button>
                        <Button variant="primary" className="me-2" style={{ fontSize: 25, width: "55px" }} onClick={handleDelete}>
                            <i className="bi bi-trash-fill"></i>
                        </Button>
                    </div>
                </Card.Body>
            </Card>

            <UpdateTodo
                showUpdate={showUpdate}
                handleClose={handleCloseUpdate}
                todoId={todoId}
                title={title}
                content={content}
                deadline={deadline}
            />
        </>
    );
}
