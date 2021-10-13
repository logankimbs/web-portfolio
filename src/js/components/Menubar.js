import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'

class Menubar extends React.Component {
    render() {
        return (
            <Navbar>
                <Container>
                    <Navbar.Brand>Logan Kimball</Navbar.Brand>
                    <Nav>
                        <Nav.Item>
                            <Nav.Link>About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>Skills</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>Projects</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>Contact</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Container>
            </Navbar>
        )
    }
}

export default Menubar;