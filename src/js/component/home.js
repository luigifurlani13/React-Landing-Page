import React from "react";
import { Card } from "./card";
import { NavBar } from "./navbar";
import { Jumbotron } from "./jumbotron";
import PropTypes from "prop-types";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const myCards = [
	{ title: "Luis", description: "My Name" },
	{ title: "Victor", description: "My Father" },
	{ title: "Paolo", description: "My Mentor" },
	{ title: "Valentina:", description: "My Sister" }
];

export function Home() {
	return (
		<div>
			<NavBar />
			<div className="container">
				<Jumbotron />
				<div className="container">
					<div className="row">
						{myCards.map((item, i) => {
							return (
								<div className="col-3" key={i}>
									<Card />
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}
