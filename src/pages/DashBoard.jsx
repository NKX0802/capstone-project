import { getAuth } from "firebase/auth";
import { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../components/AuthProvider";
import DashBoardNavbar from "../components/DashBoardNavbar";
import TodoCard from "../components/TodoCard";
import DashBoardMid from "../components/DashBoardMid";

export default function DashBoard() {
    const auth = getAuth();
    const navigate = useNavigate();
    const { currentUser } = useContext(AuthContext)

    if (!currentUser) {
        navigate("/login");
    }

    const handleLogout = () => {
        auth.signOut();
    };

    return (
        <>

            <Container>
                <Row>
                    <DashBoardNavbar handleLogout={handleLogout} />
                    <DashBoardMid />
                    <TodoCard />
                </Row>
            </Container>
        </>
    );
}


