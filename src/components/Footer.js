import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import {
	faFacebookSquare,
	faTwitter,
	faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Icone from "./Icone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/MAGbank.png";
import applestore from "../assets/applestore.png";
import googleplay from "../assets/googleplay.png";
import './Footer.scss';

const Footer = () => (
	<footer className="footer">
		<Container>
			<Row className="text-center py-5">
				<Col xs={12} lg={6} className="text-lg-left mb-3 -lg">
					<Image src={logo} />
				</Col>

				<Col xs={12} lg={4} className='mb-3 -lg"'>
					<Image src={applestore} className="mr-2" />

					<Image src={googleplay} />
				</Col>

				<Col
					xs={12}
					lg={2}
					className="d-flex align-items-center justify-content-center mb-3 -lg"
				>
					<a href="http://facebook.com.br" target="_blank" rel="noreferrer">
						<FontAwesomeIcon
							icon={faFacebookSquare}
							color="#7c7c7c"
							size="2x"
						/>
					</a>

					<FontAwesomeIcon
						icon={faTwitter}
						color="#7c7c7c"
						size="2x"
						className="ml-2"
					/>

					<FontAwesomeIcon
						icon={faYoutube}
						color="#7c7c7c"
						size="2x"
						className="ml-2"
					/>
				</Col>
			</Row>
		</Container>
	</footer>
);

export default Footer;
