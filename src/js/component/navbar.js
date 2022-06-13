import React from "react";
import { Navbar } from "react-bootstrap";

export const NavBar = () => {
	return (
		<Navbar bg="dark" variant="dark">
			<Navbar.Brand href="#home">
				<img
					alt=""
					src="https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png"
					width="30"
					height="30"
					className="d-inline-block align-top"
				/>{" "}
				React Bootstrap
			</Navbar.Brand>
		</Navbar>
	);
};
