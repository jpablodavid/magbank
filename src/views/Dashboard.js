import { Container, Row, Col, Button, Tabs, Tab, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faUser } from "@fortawesome/free-solid-svg-icons";
import "./Dashboard.scss";

const Dashboard = () => {
	const latestDados = [
		{date: '27/07', description: 'SAQUE 24H 012345', value: '300,00'},
		{date: '21/07', description: 'SUPERMERCADO 02323626', value:'275,90'},
		{date: '21/07', description:'NETFLIX 235236', value:'30,00'},
		{date:'15/07', description:'FARMACIA 121256', value:'350,00'}
	];

	const futureDados = [
		{ date: "29/07", description: "CONTA DE LUZ", value: "290,90" },
		{ date: "30/07", description: "ESCOLA JARDIM SONHAR", value: "900,00" },
		{ date: "30/07", description: "CARTÃO 121256", value: "350,00" },
	];
	
	return (
		<Container className="dashboard py-5">
			<Row>
				<Col xs={12} lg={4}>
					<Row className="align-items-center mb-5">
						<Col xs={3}>
							<span className="dashboard__user">
								<FontAwesomeIcon icon={faCircle} size="5x" color="#f8f9fa" />
								<FontAwesomeIcon
									className="dashboard__user-icon"
									icon={faUser}
									size="4x"
									color="#7c7d7d"
								/>
							</span>
						</Col>

						<Col xs={9}>
							<h4>Pablo David</h4>
							<p className="text-muted">ag: 1234 c/c: 4321-5 </p>
						</Col>
					</Row>

					<Button
						className="dashboard__button dashboard__button--active text-left"
						variant="link"
						size="lg"
						block
					>
						Minha Conta
					</Button>

					<Button
						className="dashboard__button text-left"
						variant="link"
						size="lg"
						block
					>
						Pagamentos
					</Button>

					<Button
						className="dashboard__button text-left"
						variant="link"
						size="lg"
						block
					>
						Extratos
					</Button>
				</Col>

				<Col xs={12} lg={3} className="mt-lg-5 pt-lg-4">
					<h3 className="my-5">Conta Corrente</h3>
					<h6>Saldo em conta corrente</h6>
					<h4 className="text-success mb-4">
						<small>R$ </small> 3.500<small>,00</small>
					</h4>
					<h6>Cheque especial</h6>
					<p className="mb-0">Limite disponível</p>
					<p className="mb-4">R$ 5.000,00</p>
					<Button variant="secondary">Ver extrato</Button>
				</Col>

				<Col xs={12} lg={5} className="mt-lg-5">
					<Tabs
						className="mt-5 pt-lg-5"
						defaultActiveKey="latestDeposits"
						id="uncontrolled-tab-example"
					>
						<Tab eventKey="latest"
							title="Últimos lançamentos"
						>
							<Table striped hover>
								<thead>
									<tr>
										<th>Data</th>
										<th>Descrição</th>
										<th>Valor (R$)</th>
									</tr>
								</thead>
								<tbody>
									{latestDados.map(({ date, description, value }) => (
										<tr>
											<td>{date}</td>
											<td>{description}</td>
											<td>{value}</td>
										</tr>
									))}
								</tbody>
							</Table>
						</Tab>
						<Tab eventKey="future"
							title="Lançamentos futuros"
							disable
						>
							<Table striped hover>
								<thead>
									<tr>
										<th>Data</th>
										<th>Descrição</th>
										<th>Valor (R$)</th>
									</tr>
								</thead>
								<tbody>
									{futureDados.map(({ date, description, value }) => (
										<tr>
											<td>{date}</td>
											<td>{description}</td>
											<td>{value}</td>
										</tr>
									))}
								</tbody>
							</Table>
						</Tab>
					</Tabs>
				</Col>
			</Row>
		</Container>
	);
};

export default Dashboard;
