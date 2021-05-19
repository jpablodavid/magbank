import React, { useState} from "react";
import { useHistory } from 'react-router-dom';
import { Modal, Button, Form } from "react-bootstrap";

const AccountModal = ({ show, handleClose, auth }) => {

    const history = useHistory();
	const [name, setName ] = useState();

	const handleSubmit = () => {
		auth.login(name, '12345', history.push("/dashboard"));
		handleClose();
	};
    
	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Abra sua conta</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Group controlId="formBasicName">
						<Form.Label>Seu nome</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter your Name"
							value={name}
							onChange={(event) => setName(event.currentTarget.value)}
						/>
					</Form.Group>

					<Form.Group controlId="formBasicEmail">
						<Form.Label>Seu email</Form.Label>
						<Form.Control type="email" placeholder="Enter Email" />
					</Form.Group>

					<Form.Group controlId="formCity">
						<Form.Label className="mr-sm-2" htmlFor="formCitySelect" srOnly>
							Preference
						</Form.Label>
						<Form.Control
							as="select"
							className="mr-sm-2"
							id="formCitySelect"
							custom
						>
							<option value="0">Florianopolis</option>
							<option value="1">Curitiba</option>
							<option value="2">São Paulo</option>
							<option value="3">Rio de janeiro</option>
						</Form.Control>
					</Form.Group>

					<Form.Group controlId="formBasicCheckbox">
						<Form.Check
							type="checkbox"
							label="Eu li e concordo com os termos de uso."
						/>
					</Form.Group>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>
					Cancelar
				</Button>
				<Button variant="primary" onClick={handleSubmit}>
					Criar conta
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default AccountModal;
