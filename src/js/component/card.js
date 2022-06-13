import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const Carta = props => {
	return (
		<Card style={{ width: "20rem" }}>
			<Card.Img variant="top" src={props.image} />
			<Card.Body>
				<Card.Title>{props.title}</Card.Title>
				<Card.Text>{props.text}</Card.Text>
				<Button variant="danger">{props.button}</Button>
			</Card.Body>
		</Card>
	);
};

Carta.propTypes = {
	image: PropTypes.string,
	title: PropTypes.string,
	text: PropTypes.string,
	button: PropTypes.string
};
