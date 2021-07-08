import React from "react";

export function Jumbotron() {
	return (
		<div className="bg-secondary">
			<h1>A Warm Welcome!</h1>
			<p>
				Donec ullamcorper nulla non metus auctor fringilla. Vestibulum
				id ligula porta felis euismod semper. Praesent commodo cursus
				magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus
				ac cursus commodo.
			</p>
			<button type="button" className="btn btn-primary">
				Call to action!
			</button>
		</div>
	);
}
