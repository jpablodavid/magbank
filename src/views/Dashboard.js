import React, { useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faUser } from "@fortawesome/free-solid-svg-icons";

import AccountBalance from "../components/AccountBalance";
import AccountPayments from "../components/AccountPayments";
import AccountHistory from "../components/AccountHistory";

import "./Dashboard.scss";

const Dashboard = ({ className = false, name, account }) => {
	const [activeLink, setActiveLink] = useState(0);

	const links = [
		{ text: "Minha Conta", path: "/dashboard", exact: true },
		{ text: "Pagamentos", path: "/dashboard/payments" },
		{ text: "Extrato", path: "/dashboard/history" },
	];

	const data = {
		latestBalance: [
			{ date: "27/07", description: "SAQUE 24H 012345", value: "300,00" },
			{ date: "21/07", description: "SUPERMERCADO 02323626", value: "275,90" },
			{ date: "21/07", description: "NETFLIX 235236", value: "30,00" },
			{ date: "15/07", description: "FARMACIA 121256", value: "350,00" },
		],
		futureBalance: [
			{ date: "29/07", description: "CONTA DE LUZ", value: "290,90" },
			{ date: "30/07", description: "ESCOLA JARDIM SONHAR", value: "900,00" },
			{ date: "30/07", description: "CARTÃO 121256", value: "350,00" },
		],
		history: [
			{
				date: "17/07",
				description: "SAQUE 24H 012345",
				value: "300,00-",
				saldo: "",
			},
			{
				date: "17/07",
				description: "SALDO DO DIA",
				value: "",
				saldo: "2.500,00",
			},
			{
				date: "19/07",
				description: "NETFLIX 235236",
				value: "30,00-",
				saldo: "",
			},
			{
				date: "19/07",
				description: "FARMACIA 121256",
				value: "350,00-",
				saldo: "",
			},
			{
				date: "19/07",
				description: "SALDO DO DIA",
				value: "",
				saldo: "2780,00",
			},

			{
				date: "21/07",
				description: "POSTO RAIO",
				value: "12,00-",
				saldo: "",
			},
			{
				date: "21/07",
				description: "CASAS BAHIA 121256",
				value: "450,00-",
				saldo: "",
			},
			{
				date: "19/07",
				description: "SALDO DO DIA",
				value: "",
				saldo: "2.318,00",
			},
			{
				date: "21/07",
				description: "POSTO RAIO 012345",
				value: "12,00-",
				saldo: "",
			},

			{
				date: "22/07",
				description: "NETFLIX 235236",
				value: "180,00-",
				saldo: "",
			},
			{
				date: "21/07",
				description: "SALDO DO DIA",
				value: "",
				saldo: "1.851,00",
			},
			{
				date: "22/07",
				description: "FARMACIA 121256",
				value: "275,90-",
				saldo: "",
			},
			{
				date: "22/07",
				description: "DEPOSITO",
				value: "1.000,00",
				saldo: "",
			},
			{
				date: "22/07",
				description: "SALDO DO DIA",
				value: "",
				saldo: "2.576,00",
			},
			{
				date: "26/07",
				description: "ESCOLA JARDIM SONHAR",
				value: "300,00-",
				saldo: "",
			},
			{
				date: "26/07",
				description: "SALDO DO DIA",
				value: "",
				saldo: "2.876,00",
			},
		],
	};

	return (
		<Container className="dashboard py-5">
			<Row>
				<Col xs={12} lg={4}>
					<Row className="align-items-center mb-5">
						<Col xs={3}>
							<span className="dashboard__user-avatar">
								<FontAwesomeIcon icon={faCircle} size="5x" color="#f8f9fa" />
								<FontAwesomeIcon
									className="dashboard__user-icon"
									icon={faUser}
									size="3x"
									color="#7c7d7d"
								/>
							</span>
						</Col>

						<Col xs={9}>
							<h4>{name}</h4>
							<p className="text-muted">{account}</p>
						</Col>
					</Row>

					{links.map(({ text, path }, key) => (
						<Link className='dashboard__link' to={path} key={key}>
							<Button
								className={`dashboard__button text-left ${
									key === activeLink ? `dashboard__button--active` : " "
								}`}
								variant="link"
								size="lg"
								block
								onClick={() => setActiveLink(key)}
							>
								{text}
							</Button>
						</Link>
					))}
				</Col>

				<Switch>
					<Route path="/dashboard/history">
						<AccountHistory data={data} />
					</Route>

					<Route path="/dashboard/payments">
						<AccountPayments />
					</Route>

					<Route path="/dashboard">
						<AccountBalance data={data} />
					</Route>
				</Switch>
			</Row>
		</Container>
	);
};

export default Dashboard;
