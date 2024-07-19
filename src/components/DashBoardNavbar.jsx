import { Button } from "react-bootstrap";
import { useState } from "react";
//import AddTodo from "./AddTodo";
import { Navbar, Container } from "react-bootstrap";

export default function DashBoardNavbar({ handleLogout }) {
    //const [show, setShow] = useState(false);

    //const handleClose = () => setShow(false);
    //const handleShow = () => setShow(true);

    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Container className="d-flex flex-row justify-content-start align-items-start vh-1000">
                    <Button className="bi bi-journal-text" style={{ fontSize: 25 }} href="/dashboard">
                        DashBoard
                    </Button>
                    {/* <Button className="bi bi-plus-circle" style={{ fontSize: 25 }} onClick={handleShow}>
                        Add Todo
                    </Button> */}
                    <Button className="bi bi-person" style={{ fontSize: 25 }}>
                        Profile
                    </Button>
                    <Button className="bi bi-cloud" style={{ fontSize: 25 }}>
                        Weather
                    </Button>
                    <Button className="bi bi-door-closed" style={{ fontSize: 25 }} onClick={handleLogout} >
                        Logout
                    </Button>
                    {/* <AddTodo show={show} handleClose={handleClose} /> */}
                </Container>
            </Navbar>
        </>

    )

}

