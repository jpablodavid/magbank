import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Row, Col, Form, Button, Image } from "react-bootstrap";
import logo from "../assets/MAGbank.svg";

import "./Login.scss";

const Login = ({ auth }) => {
	const [name, setName] = useState();
	const [account, setAccount] = useState();

	const history = useHistory();
	const handleSubmit = () => {
		auth.login(name, account, history.push('/dashboard'))
	};

	return (
		<section className="login">
			<div className="login__container">
				<Row>
					<Col className="text-center text-light">
						<Image src={logo} className="mb-5" />
						<Form>
							<Form.Group controlId="formBasicName">
								<Form.Label className="lead">
									<strong>Nome e Sobrenome</strong>
								</Form.Label>
								<Form.Control
									type="text"
									value={name}
									onChange={(event) => setName(event.currentTarget.value)}
								/>
							</Form.Group>

							<Form.Group controlId="formBasicAccount">
								<Form.Label className="lead">
									<strong>Número da conta</strong>
								</Form.Label>
								<Form.Control
									type="number"
									value={account}
									onChange={(event) => setAccount(event.currentTarget.value)}
								/>
							</Form.Group>

							<Form.Group controlId="formBasicPassword">
								<Form.Label className="lead mt-3">
									<strong>Password</strong>
								</Form.Label>
								<Form.Control type="password" />
							</Form.Group>

							<Button className="mt-3" variant="success" type="submit" onClick={handleSubmit} >
								Criar Conta
							</Button>
						</Form>
					</Col>
				</Row>
			</div>
		</section>
	);
};

export default Login;
