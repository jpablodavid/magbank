import React from "react";
import { Link, useHistory } from "react-router-dom";
import {
	Button,
	Navbar,
	Nav,
	NavDropdown,
	ButtonGroup,
	Container,
	Form,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./Navbar.scss";
import logo from "../assets/logo.svg";

const Navigation = ({ handleCreateAcc, logged, auth }) => {

	const history = useHistory();

	const handleClick = () => {
		auth.logout(() => history.push('/'))
	}

	return (
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
				{logged && (
					<>
						<Form>
							<div className="navbar__search-group d-none d-lg-flex">
								<Form.Control type="text" placeholder="O que você procura" />
								<Button>
									<FontAwesomeIcon icon={faSearch} color="#fff" />
								</Button>
							</div>
						</Form>

						<Button variant="outline-light" onClick={handleClick}>
							Sair
						</Button>
					</>
				)}

				{!logged && (
					<>
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="container-fluid">
								<div className='d-flex'>
									<Nav.Link href="#cartão">Cartão</Nav.Link>
									<Nav.Link href="#quemsomos">Quem Somos</Nav.Link>
									<Nav.Link href="#faq">FAQ</Nav.Link>
								</div>
								<ButtonGroup aria-label="Basic example">
									<Button variant="outline-light">
										<NavDropdown
											title="Acessar Minha Conta"
											id="basic-nav-dropdown"
										>
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
										Entrar
									</Button>
								</ButtonGroup>
							</Nav>
						</Navbar.Collapse>
					</>
				)}
			</Container>
		</Navbar>
	);
};

export default Navigation;
