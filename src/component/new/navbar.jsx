import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from "react-bootstrap";

class BagianNavbar extends React.Component {
    render(){
        return(
            <Navbar bg="success" variant="dark">
                <Container>
                <Navbar.Brand href="#home">React Class News</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        );
    }
}
export default BagianNavbar;