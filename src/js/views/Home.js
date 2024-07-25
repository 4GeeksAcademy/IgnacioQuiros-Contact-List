import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => (
	<div className="text-center mt-5">
		<Link to="/edit-contact">
			<button className="btn btn-primary"> Add Contact </button>
		</Link>

		<Link to="/new-contact">
			<button className="btn btn-primary"> Add Contact </button>
		</Link>
	</div>
);
