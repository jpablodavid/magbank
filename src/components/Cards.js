import React from "react";
import { Container, Row, Col, Card, Button} from "react-bootstrap";
import "./Cards.scss";

const Cards = ({posts}) => (
	<Container>
		<Row>
			{posts.map(({ id, image, title, excerpt, action}) => (
				<Col xs={12} lg={4} key={id}>
					<Card className='mx-auto my-3'>
						<Card.Img variant="top" src={image} />
						<Card.Body>
							<Card.Title>{title}</Card.Title>
							<Card.Text >{excerpt}</Card.Text>
							<Button variant="danger">{action}</Button>
						</Card.Body>
					</Card>
				</Col>
			))}

		</Row>

		<Row className='d-flex justify-content-center'>
        	<Button className='my-5 px-5 py-3' variant='success' size="lg">Abra sua conta</Button>
		</Row>
	</Container>
);

export default Cards;
