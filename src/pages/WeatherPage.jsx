import { getAuth } from "firebase/auth";
import { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../components/AuthProvider";
import DashBoardNavbar from "../components/DashBoardNavbar";
import WeatherMid from "../components/WeatherMid";


export default function WeatherPage() {
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
                    <WeatherMid />
                </Row>
            </Container>
        </>
    );
}


