import React from 'react';
import { Button, Navbar, Nav, NavDropdown, ButtonGroup, Container } from 'react-bootstrap';
import logo from '../assets/logo.svg';
import './Navbar.scss';

const Navigation = () => (
    <Navbar variant="dark" expand="lg">
        <Container>
            <Navbar.Brand href="#home">
                <img 
                    src={logo}
                    height="30"
                    className="d-inline-block aling-top"
                    alt="Magbank logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#cartão">Cartão</Nav.Link>
                    <Nav.Link href="#quemsomos">Quem Somos</Nav.Link>
                    <Nav.Link href="#faq">FAQ</Nav.Link>

                    <ButtonGroup aria-label="Basic example">
                        <Button variant="outline-light">
                            <NavDropdown title="Acessar Minha Conta" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Button>
                        <Button variant="outline-light">Abra sua Conta</Button>
                    </ButtonGroup>

                    
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);

export default Navigation;