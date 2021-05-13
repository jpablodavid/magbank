import React from "react";
import { Link } from "react-router-dom";
import {
	Button,
	Navbar,
	Nav,
	NavDropdown,
	ButtonGroup,
	Container,
} from "react-bootstrap";
import logo from "../assets/logo.svg";
import "./Navbar.scss";

const Navigation = ({ handleCreateAcc }) => (
	<Navbar variant="dark" expand="lg">
		<Container>
			<Navbar.Brand href="#home">
				<Link to="/">
					<img
						src={logo}
						height="30"
						className="d-inline-block aling-top"
						alt="Magbank logo"
					/>
				</Link>
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
								<NavDropdown.Item>
									<Link to="/login">Pessoa Fisica</Link>
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action/3.2">
									<Link to="/login">Pessoa Juridica</Link>
								</NavDropdown.Item>
							</NavDropdown>
						</Button>
						<Button variant="outline-light" onClick={handleCreateAcc}>
							Abra sua Conta
						</Button>
					</ButtonGroup>
				</Nav>
			</Navbar.Collapse>
		</Container>
	</Navbar>
);

export default Navigation;
