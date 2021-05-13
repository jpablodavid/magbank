import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import {
	faCreditCard,
	faMobile,
	faShoppingCart,
	faWallet,
}from '@fortawesome/free-solid-svg-icons';
import Icone from './Icone';
import cartao from "../assets/credit-card.jpg";
import "./Cartao.scss";


const Cartao = () => (
	<Container className='my-5'>
		<Row>
			<Col xs={12} lg={7} className="mb-5 mb-lg-0 px-5 px-lg-0">
				<Row>
					<h2 className='my-5 cartao' >Cartão de crédito</h2>
				</Row>

				<Row>
					<Col xs={12} lg={6} className='mb-4'>
						<Icone icone={faCreditCard}
									size={2}
									color='#f05656'
									className='h5 text-muted'
						>Crédito Pessoal</Icone>
						
					</Col>

					<Col xs={12} lg={6} className='mb-4'>
						<Icone icone={faMobile}
									size={2}
									color='#f05656'
									className='h5 text-muted'
						>APP</Icone>
                        
					</Col>

					<Col xs={12} lg={6} className='mb-4'>
						<Icone icone={faShoppingCart}
									size={2}
									color='#f05656'
									className='h5 text-muted'
						>Pagamento Online</Icone>
                       
					</Col>
					
					<Col xs={12} lg={6} className='mb-4'>
						<Icone icone={faWallet}
									size={2}
									color='#f05656'
									className='h5 text-muted'
						>Pagamento Digital</Icone>
                        
					</Col>
			
				</Row>

			</Col>

			<Col xs={12} lg={5}>
				<Image src={cartao} alt='Magbank Credit card Example' fluid />
			</Col>
		</Row>
	</Container>
);

export default Cartao;
