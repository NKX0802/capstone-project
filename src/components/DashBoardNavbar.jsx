import { Button } from "react-bootstrap";
import AddTodo from "./AddTodo";
import { Navbar } from "react-bootstrap";
import { useState } from "react";

export default function DashBoardNavbar({ handleLogout }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Navbar bg="primary" variant="dark">
                <div className="d-flex flex-row justify-content-start align-items-start vh-1000">
                    <Button style={{ fontSize: 30, fontFamily: 'Lilita One, cursive' }} href="/dashboard">
                        DashBoard
                    </Button>
                    <Button style={{ fontSize: 30, fontFamily: 'Lilita One, cursive' }} onClick={handleShow}>
                        Add Todo
                    </Button>
                    <AddTodo show={show} handleClose={handleClose} />
                    <Button style={{ fontSize: 30, fontFamily: 'Lilita One, cursive' }} href="/weather">
                        Weather
                    </Button>
                    <Button style={{ fontSize: 30, fontFamily: 'Lilita One, cursive' }} href="/profile">
                        Profile
                    </Button>
                    <Button style={{ fontSize: 30, fontFamily: 'Lilita One, cursive' }} onClick={handleLogout} >
                        Logout
                    </Button>
                </div>
            </Navbar>
        </>

    )

}
// className="bi bi-journal-text"
// className="bi bi-clipboard-plus"
// className="bi bi-person"
// className="bi bi-cloud"
// className="bi bi-door-closed"