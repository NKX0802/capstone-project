import { Container, Button } from "react-bootstrap";
export default function ErrorPage() {
    return (
        <Container>
            <div>
                <h1 className="my-100"><strong>Error 404</strong></h1>
            </div>
            <Button variant="primary" type="Back to DashBoard">
                Back to DashBoard
            </Button>
        </Container>
    );
}