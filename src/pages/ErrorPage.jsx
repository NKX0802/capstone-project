import { Container, Button } from "react-bootstrap";
export default function ErrorPage() {
    return (
        <Container>
            <div>
                <h1 className="my-100"><strong>Error 404</strong></h1>
            </div>
            <p><strong>We cant seem to find the page you are looking for</strong></p>
            <Button className="rounded-pill" variant="primary" style={{ fontSize: 30 }} href="/dashboard">
                Back to DashBoard
            </Button>
        </Container>
    );
}