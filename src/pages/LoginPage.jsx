import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    signInWithPopup,
} from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { Col, Button, Modal, Form, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../components/AuthProvider";

export default function LoginPage() {

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
        <Col>
            <Container>
                <div className="header">
                    <div className="text">Log In</div>
                    <div className="underline"></div>
                </div>

                <div className="input">
                    <input type="text" placeholder="Email Id" />
                </div>

                <div className="input">
                    <input type="password" placeholder="Password" />
                </div>
                <Button className="rounded-pill" style={{ fontSize: 20, fontWeight: "bold" }} onClick={handleShowLogin}>
                    Log In
                </Button>

                <Col>
                    <Button className="rounded-pill" style={{ fontSize: 20, fontWeight: "bold" }} onClick={handleShowSignUp}>
                        Create an account
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

                                <p style={{ fontSize: "15px" }}>
                                    By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.
                                    Icey Todo App may use your contact information, including your email address and phone number for purposes outlined in our Privacy Policy.

                                </p>
                                <Button className="rounded-pill" type="submit">
                                    {modalShow === "SignUp" ? "Sign up" : "Log in"}
                                </Button>
                            </Form>
                        </Modal.Body>
                    </Modal>
                </Col>
            </Container>
        </Col>
    )
}