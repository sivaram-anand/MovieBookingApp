import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { Button } from "antd";

const Header = () => {
	return (
		<div className="header">
			<div className="headerheading">
				<h1>
					<Link to="/moviedetails" className="logo">
						Movie Ticket Booking app
					</Link>
				</h1>
				<Link to={`/Cart`}>
					<Button>Cart</Button>
				</Link>
			</div>
		</div>
	);
};

export default Header;
