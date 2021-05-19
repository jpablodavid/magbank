import React from "react";
import {
	Col,
	Button,
	Tabs,
	Tab,
	Form,
	FormLabel,
	FormCheck,
} from "react-bootstrap";

const AccountPayments = () => (
	<>
		<Col xs={12} lg={8} className="mt-lg-5 pt-lg-5">
			<h3 className="mt-4">Pagamentos</h3>

			<Tabs
				className="mt-5 pt-lg-2"
				defaultActiveKey="boleto"
				id="uncontrolled-tab-example"
			>
				<Tab eventKey="boleto" title="Boleto">
					<Form>
						<Form.Group controlId="formBarCode" className="my-5">
							<Form.Label>Codigo de Barras</Form.Label>
							<Form.Control
								type="number"
								placeholder="Insira o codigo de barras"
							/>
						</Form.Group>

						<Form.Group
							controlId="formPaymentType"
							key="inline-radio"
							className="mb-5"
						>
							<FormLabel>Forma de Pagamento</FormLabel>
							<div className="d-flex">
								<Form.Check
									type="radio"
									id="debit"
									label="Débito em conta Corrente"
									name="paymentType"
								/>

								<Form.Check
									type="radio"
									id="credit"
									className="ml-4"
									label="Cartão de Credito"
									name="paymentType"
								/>
							</div>
						</Form.Group>

						<Button variant="success" type="submit">
							Continuar
						</Button>
					</Form>
				</Tab>

				<Tab eventKey="transfer" title="Transferência" disable>
					<Form>
						<Form.Row className='my-4'>
							<Form.Group as={Col} controlId="banco">
								<Form.Label>Banco</Form.Label>
								<Form.Control as="select" id="inlineFormCustomSelect" custom>
									<option value="0"></option>
									<option value="1">One</option>
									<option value="2">Two</option>
									<option value="3">Three</option>
								</Form.Control>
							</Form.Group>

							<Form.Group as={Col} controlId="ag">
								<Form.Label>Agência</Form.Label>
								<Form.Control type="text" />
							</Form.Group>

							<Form.Group as={Col} controlId="c/c">
								<Form.Label>Conta corrente</Form.Label>
								<Form.Control type="text" />
							</Form.Group>
						</Form.Row>

						<Form.Row>
							<Form.Group as={Col} controlId="valueTransfer">
								<Form.Label>Valor Transferência</Form.Label>
								<Form.Control type="text" />
							</Form.Group>

							<Form.Group as={Col} controlId="idExtrato">
								<Form.Label>Identificação nos extratos</Form.Label>
								<Form.Control type="text" />
							</Form.Group>
						</Form.Row>

						<Button className='mt-4' variant="success" type="submit">
							Continuar
						</Button>
					</Form>
				</Tab>
			</Tabs>
		</Col>
	</>
);

export default AccountPayments;
