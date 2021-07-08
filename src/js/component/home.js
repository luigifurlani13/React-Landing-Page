import React from "react";
import { Card } from "./card";
import { NavBar } from "./navbar";
import { Jumbotron } from "./jumbotron";
import PropTypes from "prop-types";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const myCards = [
	{ title: "Luis", description: "My name" },
	{ title: "Victor", description: "My father" },
	{ title: "Paolo", description: "My mentor" },
	{ title: "Valentina:", description: "My sister" }
];

export function Home() {
	return (
		<div className="text-center mt-5">
			<NavBar />
			<div className="container">
				<Jumbotron />
				{myCards.map((item, i) => {
					return (
						<div className="container" key={i}>
							<div className="row">
								<div className="col-6">
									<Card />
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
