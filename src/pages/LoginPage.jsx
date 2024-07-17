import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    signInWithPopup,
} from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { Col, Button, Modal, Form, Container, Row, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../components/AuthProvider";

export default function LoginPage() {
    const loginImage = "https://preview.redd.it/drawing-random-tpot-characters-day-3-ice-cube-comment-who-i-v0-5mv39tvoexcb1.png?width=1080&crop=smart&auto=webp&s=08ec985dee611ef7ab1b95433a45869ed8128176"

    const [modalShow, setModalShow] = useState(null);
    const handleShowSignUp = () => setModalShow("SignUp");
    const handleShowLogin = () => setModalShow("Login");
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const auth = getAuth();
    const { currentUser } = useContext(AuthContext);
    useEffect(() => {
        if (currentUser) navigate("/profile");

    }, [currentUser, navigate]);

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const res = await createUserWithEmailAndPassword(
                auth,
                username,
                password
            );
            console.log(res.user);
        } catch (error) {
            console.log(error);
        }
    };

    const provider = new GoogleAuthProvider();
    const handleGoogleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithPopup(auth, provider);
        } catch (error) {
            console.error(error);
        }
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, username, password);
        } catch (error) {
            console.log(error);
        }
    };
    const handleClose = () => setModalShow(null);
    return (
        <Row>
            <Col sm={6}>
                <Image src={loginImage} fluid />
            </Col>
            <Col>
                <Container>
                    <div className="header">
                        <div className="text">Icey Todo App</div>
                        <div className="underline"></div>
                    </div>

                    <Button className="rounded-pill" style={{ fontSize: 20, fontWeight: "bold" }} onClick={handleShowLogin}>
                        Sign In
                    </Button>

                    <Col>
                        <Button className="rounded-pill" style={{ fontSize: 20, fontWeight: "bold" }} onClick={handleShowSignUp}>
                            Sign Up
                        </Button>
                        <Button
                            className="rounded-pill"
                            onClick={handleGoogleLogin}
                        >
                            <i className="bi bi-google"></i> Sign up with Google
                        </Button>
                    </Col>
                    <Col>
                        <Modal
                            show={modalShow !== null}
                            onHide={handleClose}
                            animation={false}
                            centered
                        >
                            <Modal.Body>
                                <h2 className="mb-4" style={{ fontWeight: "bold" }}>
                                    {modalShow === "SignUp"
                                        ? "Create your account"
                                        : "Log in to your account"}
                                </h2>
                                <Form
                                    className="d-grid gap-2 px-5"
                                    onSubmit={modalShow === "SignUp" ? handleSignUp : handleLogin}
                                >
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control
                                            onChange={(e) => setUserName(e.target.value)}
                                            type="email"
                                            placeholder="Enter Email"
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Control
                                            onChange={(e) => setPassword(e.target.value)}
                                            type="password"
                                            placeholder="Enter Password"
                                        />
                                    </Form.Group>

                                    <Button className="rounded-pill" type="submit">
                                        {modalShow === "SignUp" ? "Sign up" : "Log in"}
                                    </Button>
                                </Form>
                            </Modal.Body>
                        </Modal>
                    </Col>
                </Container>
            </Col>
        </Row>
    );
}