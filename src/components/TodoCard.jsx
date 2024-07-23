import { Button, Card } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

export default function TodoCard({ title, content, deadline }) {

    // const [showUpdate, setShowUpdate] = useState(false);
    // const handleShowUpdate = () => setShowUpdate(true)
    // const handleCloseUpdate = () => setShowUpdate(false);
    // const BASE_URL = "https://12a8b481-2ba4-4259-ab39-99c9343fe889-00-2xxp2tgehd2zp.picard.replit.dev";

    // const handleDelete = async () => {
    //     const response = await axios.delete(`${BASE_URL}/todo/${todoId}`)

    //     console.log(response.data)
    // };

    return (

        <Card className="my-3">
            <Card.Header style={{ backgroundColor: 'green', color: 'white', fontFamily: 'Lilita One, cursive', fontSize: 30 }}>Completed</Card.Header>
            <Card.Body style={{ backgroundColor: 'white', color: "dodgerblue" }}>
                <Card.Title style={{ fontSize: 30, fontFamily: 'Lilita One, cursive' }}><p>{title}</p></Card.Title>
                <Card.Text style={{ fontSize: 25, fontFamily: 'Lilita One, cursive' }}><p>{content}</p></Card.Text>
                <Card.Text style={{ fontSize: 25, fontFamily: 'Lilita One, cursive' }}><p>{deadline}</p></Card.Text>
                <div className="text-end">
                    <Button variant="primary" className="me-2" style={{ fontSize: 20, marginRight: '10px' }}>
                        <i className="bi bi-pencil-square"></i>
                    </Button>
                    <Button variant="primary" className="me-2" style={{ fontSize: 20, marginRight: '10px' }} >
                        <i className="bi bi-trash-fill"></i>
                    </Button>
                </div>
                {/* <Card.Check
                    type="checkbox"
                    id="completed"
                    label="Mark as completed"
                    checked={completed}
                    onChange={(e) => setCompleted(e.target.checked)}
                    className="mb-3"
                /> */}
            </Card.Body>
        </Card>
    );
}