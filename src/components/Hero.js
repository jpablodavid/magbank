import React from 'react';
import {Row, Col, Jumbotron , Button, Image} from 'react-bootstrap';
import logo from '../assets/logoPay_mobile.png';
import logoDesktop from '../assets/logoPay.png';
import './Hero.scss';

const Hero = ({ click}) => (
	<Jumbotron className="text-center text-light hero">
		<Row className="my-lg-5">
			<Col lg className="text-lg-right my-lg-5">
				<Image className="d-lg-none" src={logo} />
				<Image className="d-none d-lg-inline-block" src={logoDesktop} />
			</Col>

			<Col lg className="text-lg-left my-lg-5">
				<p>Pague suas contas pelo nosso APP</p>
				<Button variant="outline-light" onClick={ click }>
					Abra sua conta
				</Button>
			</Col>
		</Row>
	</Jumbotron>
);

export default Hero;