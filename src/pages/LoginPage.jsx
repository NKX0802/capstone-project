import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    signInWithPopup,
} from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { Col, Button, Modal, Form, Container, Row, } from "react-bootstrap"; //Image
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../components/AuthProvider";
import Box from "../Box";

export default function LoginPage() {
    //const loginImage = "https://preview.redd.it/drawing-random-tpot-characters-day-3-ice-cube-comment-who-i-v0-5mv39tvoexcb1.png?width=1080&crop=smart&auto=webp&s=08ec985dee611ef7ab1b95433a45869ed8128176"

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
            <div className="container min-vh-100 d-flex justify-content-center align-items-center">
                <Box style={{ fontWeight: 'bold' }}>
                    <Form>
                        <Col className="d-grid gap-20">
                            <h2
                                className="my-4"
                                style={{
                                    fontSize: 100,
                                    textAlign: "center",
                                    color: "#00CCFF",
                                    fontWeight: "bold",
                                    position: "relative",
                                    display: "inline-block",
                                }}>Todo App</h2>
                            <Button
                                className="rounded-pill"
                                //variant="outline-dark"
                                onClick={handleGoogleLogin}
                                style={{ fontSize: "40px", fontWeight: "bold" }}
                            >
                                <i className="bi bi-google"></i> Sign up with Google
                            </Button>
                            <p className="mt-2" style={{ fontSize: "27px", textAlign: "center", fontWeight: "bold" }}>Or</p>
                            <Button
                                className="rounded-pill"
                                onClick={handleShowSignUp}
                                style={{ fontSize: "40px", fontWeight: "bold" }}
                            >
                                Sign Up
                            </Button>
                            <p className="mt-3" style={{ fontSize: "25px", textAlign: "center", fontWeight: "bold" }}>
                                Already have an account?
                            </p>
                            <Button
                                className="rounded-pill"
                                //variant="outline-primary"
                                onClick={handleShowLogin}
                                style={{ fontSize: "40px", fontWeight: "bold" }}
                            >
                                Sign In
                            </Button>
                        </Col>
                    </Form>
                </Box>
            </div>




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
                                ? "Create your account🔐"
                                : "Sign in to your account🔐"}
                        </h2>
                        <Form
                            className="d-grid gap-2 px-5"
                            onSubmit={modalShow === "SignUp" ? handleSignUp : handleLogin}
                        >
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control
                                    className="bi bi-person"
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
                                {modalShow === "SignUp" ? "Submit" : "Sign in"}
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </Col>
        </Row>
    );
}