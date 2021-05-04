import React from 'react';
import {Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 

const Icone = ({
    icone, 
    size= '1x', 
    color='#000', 
    className='', 
    children,
}) => (
	<Row>
		<Col xs={2} className="d-flex justify-content-center">
			<FontAwesomeIcon icon={icone} size={size} color={color} />
		</Col>

		<Col xs={10} className={className}>
			{children}
		</Col>
	</Row>
);

export default Icone;