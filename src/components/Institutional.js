import React from 'react';
import { Container, Row, Col, Button} from 'react-bootstrap';
import {
	faMobileAlt,
	faMobile,
	faGlobe,
	faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";
import Icone from './Icone';
import './Institutional.scss';

const Institutional = ({ click }) => (
	<section className="institutional text-light py-5">
		<Container>
			<Row>
				<Col lg={5}></Col>

				<Col xs={12} lg={7}>
					<h2 className="institutional-titulo my-5">Já nascemos digital</h2>

					<p className="mb-5">
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book. It has survived not
						only five centuries, but also the leap into electronic typesetting,
						remaining essentially unchanged. It was popularised in the 1960s
						with the release of Letraset sheets containing Lorem Ipsum passages,
						and more recently with desktop publishing software like Aldus
						PageMaker including versions of Lorem Ipsum.
					</p>

					<Icone 
						icone={faMobileAlt}
						size={2} 
						color="#fff" 
						className="h5 text-light"
					>
						Sem fila e sem burocracia
					</Icone>
					<br />
					<Icone
						icone={faMobile}
						size={2}
						color="#fff"
						className="h5 text-light"
					>
						Simples e prático
					</Icone>
					<br />
					<Icone
						icone={faGlobe}
						size={2}
						color="#fff"
						className="h5 text-light"
					>
						Abertura de conta 100% online
					</Icone>
					<br />
					<Icone
						icone={faShieldAlt}
						size={2}
						color="#fff"
						className="h5 text-light"
					>
						Transações mais seguras
					</Icone>

					<Button className="mt-5" variant="outline-light" onClick={ click } >
						Abra sua conta
					</Button>
				</Col>
			</Row>
		</Container>
	</section>
);

export default Institutional;