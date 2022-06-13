import React from "react";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";

export const Banner = () => {
	return (
		<Container>
			<h1>A Warm Welcome!</h1>
			<p>
				Donec ullamcorper nulla non metus auctor fringilla. Vestibulum
				id ligula porta felis euismod semper. Praesent commodo cursus
				magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus
				ac cursus commodo.
			</p>
			<Button variant="primary">Call to action!</Button>
		</Container>
	);
};
