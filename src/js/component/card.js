import React from "react";
import PropTypes from "prop-types";

export function Card(props) {
	return (
		<div className="card w-75 p-3" style={{ width: "18rem" }}>
			<img src={props.image} className="card-img-top" alt="..."></img>
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.description}</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
}

Card.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	image: PropTypes.string
};

Card.defaultProps = {
	title: "Luis",
	image:
		"https://cdn.faithgateway.com/uploads/2015/10/quiet-breaks-with-god-500x325.jpg"
};
