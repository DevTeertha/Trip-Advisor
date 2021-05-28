import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom"
import './Header.css'

const Header = () => {
    return (
        <div>
            <Container className="header mt-4">
                <div>
                    <h1>Trip-Advisor</h1>
                </div>
                <div>
                    <Nav className="justify-content-end" activeKey="/home">
                        <Nav.Item>
                            <Nav.Link ><Link to="/home">Home</Link></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link ><Link to="/experience">Experience</Link></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link ><Link to="/help">Help</Link></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link><Link to="/login">LogIn</Link></Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
            </Container>
        </div>
    );
};

export default Header;