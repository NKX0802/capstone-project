import { Button } from "react-bootstrap";
import { useState } from "react";
import NewTodo from "./NewTodo";
import { Navbar, Container } from "react-bootstrap";
import IconButton from "./IconButton";

export default function DashBoardNavbar({ handleLogout }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="/dashboard">
                        <IconButton className="bi bi-journal-text" text="DashBoard">
                        </IconButton>
                        DashBoard
                    </Navbar.Brand>
                    <Button className="bi bi-lus-circle" onClick={handleShow}>
                        Add Todo
                    </Button>
                    <Button className="bi bi-person">
                        Profile
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

