import { Button, Card } from "react-bootstrap";

export default function TodoCard() {
    return (


        <Card className="my-3">
            <Card.Header style={{ backgroundColor: 'green', color: 'white', fontFamily: 'Lilita One, cursive', fontSize: 30 }}> Completed</Card.Header>
            <Card.Body style={{ backgroundColor: 'white', color: "dodgerblue" }}>
                <Card.Title style={{ fontSize: 30, fontFamily: 'Lilita One, cursive' }}>Do Homework</Card.Title>
                <Card.Text style={{ fontSize: 25, fontFamily: 'Lilita One, cursive' }}>Content</Card.Text>
                <div className="text-end">
                    <Button variant="primary" className="me-2" style={{ fontSize: 20, marginRight: '10px' }}>
                        <i className="bi bi-pencil-square"></i>
                    </Button>
                    <Button variant="primary" className="me-2" style={{ fontSize: 20, marginRight: '10px' }}>
                        <i className="bi bi-trash-fill"></i>
                    </Button>
                </div>
                <input type="checkbox" id="todo-checkbox" className="ms-10" />
                <label style={{ fontSize: 20 }} htmlFor="todo-checkbox" className="me-20"><strong>Mark as completed</strong></label>
            </Card.Body>
        </Card>

    )
}