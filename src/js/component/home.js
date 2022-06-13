import React from "react";
import { Carta } from "./card";
import { NavBar } from "./navbar";
import { Banner } from "./jumbotron";
import { Row, Col } from "react-bootstrap";

const information = [
	{
		title: "Austan",
		text: "My Name",
		image: "http://personal.psu.edu/xqz5228/jpg.jpg",
		button: "instagram"
	},
	{
		title: "Luis",
		text: "My Father",
		image: "https://kinsta.com/wp-content/uploads/2019/08/jpg-vs-jpeg.jpg",
		button: "facebook"
	},
	{
		title: "4Geeks",
		text: "My Mentor",
		image: "http://www.personal.psu.edu/kbl5192/jpg.jpg",
		button: "twitter"
	},
	{
		title: "Mario",
		text: "My Sister",
		image: "http://www.personal.psu.edu/jyc5774/jpg.jpg",
		button: "tiktok"
	}
];

export const Home = () => {
	return (
		<div>
			<NavBar />
			<Banner />

			<Row>
				{information.map((item, i) => {
					return (
						<Col md={3} key={i}>
							<Carta
								title={item.title}
								text={item.text}
								image={item.image}
								button={item.button}
							/>
						</Col>
					);
				})}
			</Row>
		</div>
	);
};
