import { Button } from "react-bootstrap";
import { useState } from "react";
import NewTodo from "./NewTodo";
import { Navbar, Container } from "react-bootstrap";

export default function DashBoardNavbar({ handleLogout }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="/dashboard" className="bi bi-journal-text" text="DashBoard"></Navbar.Brand>
                    <Button className="rounded-pill w-100 mb-3" onClick={handleShow}>
                        Add Todo
                    </Button>
                    <Button
                        className="bi bi-door-closed"
                        text="Logout"
                        onClick={handleLogout}
                    />
                    <NewTodo show={show} handleClose={handleClose} />
                </Container>
            </Navbar>
        </>

    )

}

