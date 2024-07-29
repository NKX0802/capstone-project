import { Button, Navbar, Nav, Container } from "react-bootstrap";
import AddTodo from "./AddTodo";
import { useState } from "react";

export default function DashBoardNavbar({ handleLogout }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Navbar bg="primary" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/dashboard" style={{ fontSize: 30, fontFamily: 'Lilita One, cursive', marginLeft: '20px' }}>
                        DashBoard
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ color: "white" }} />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Button className="me-2 mb-2 mb-lg-0" style={{ fontSize: 30, fontFamily: 'Lilita One, cursive' }} onClick={handleShow}>
                                Add Todo
                            </Button>
                            <AddTodo show={show} handleClose={handleClose} />
                            <Button className="me-2 mb-2 mb-lg-0" style={{ fontSize: 30, fontFamily: 'Lilita One, cursive' }} href="/weather">
                                Weather
                            </Button>
                            <Button className="me-2 mb-2 mb-lg-0" style={{ fontSize: 30, fontFamily: 'Lilita One, cursive' }} href="/profile">
                                Profile
                            </Button>
                            <Button className="mb-2 mb-lg-0" style={{ fontSize: 30, fontFamily: 'Lilita One, cursive' }} onClick={handleLogout}>
                                Logout
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

// import { Button, Navbar, Nav } from "react-bootstrap";
// import AddTodo from "./AddTodo";
// import { useState } from "react";

// export default function DashBoardNavbar({ handleLogout }) {
//     const [show, setShow] = useState(false);

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);

//     return (
//         <>
//             <Navbar bg="primary" variant="dark" expand="lg">
//                 <Navbar.Brand href="/dashboard" style={{ fontSize: 30, fontFamily: 'Lilita One, cursive', marginLeft: '20px' }}>
//                     DashBoard
//                 </Navbar.Brand>
//                 <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ color: "white" }} />
//                 <Navbar.Collapse id="basic-navbar-nav">
//                     <Nav className="ms-auto">
//                         <Button className="me-2 mb-2 mb-lg-0" style={{ fontSize: 30, fontFamily: 'Lilita One, cursive' }} onClick={handleShow}>
//                             Add Todo
//                         </Button>
//                         <AddTodo show={show} handleClose={handleClose} />
//                         <Button className="me-2 mb-2 mb-lg-0" style={{ fontSize: 30, fontFamily: 'Lilita One, cursive' }} href="/weather">
//                             Weather
//                         </Button>
//                         <Button className="me-2 mb-2 mb-lg-0" style={{ fontSize: 30, fontFamily: 'Lilita One, cursive' }} href="/profile">
//                             Profile
//                         </Button>
//                         <Button className="mb-2 mb-lg-0" style={{ fontSize: 30, fontFamily: 'Lilita One, cursive' }} onClick={handleLogout}>
//                             Logout
//                         </Button>
//                     </Nav>
//                 </Navbar.Collapse>
//             </Navbar>
//         </>
//     );
// }