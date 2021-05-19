import { Col, Table } from "react-bootstrap";

const AccountHistory = ({ data }) => {
	const { history } = data;

	return (
		<Col xs={12} lg={8} className="mt-lg-5 pt-lg-5">
			<h3 className="mt-4 mb-5" >Extrato de Conta corrente</h3>
			<Table striped>
				<thead>
					<tr>
						<th>Data</th>
						<th>Descrição</th>
						<th>Valor (R$)</th>
						<th>Saldo (R$)</th>
					</tr>
				</thead>
				<tbody>
					{history.map(({ date, description, value, saldo }) => (
						<tr>
							<td>{date}</td>
							<td>{description}</td>
							<td className={`${ value.includes('-') ?`text-danger` : ' '}`}>{value}</td>
							<td>{saldo}</td>
						</tr>
					))}
				</tbody>
			</Table>
		</Col>
	);
};

export default AccountHistory;
