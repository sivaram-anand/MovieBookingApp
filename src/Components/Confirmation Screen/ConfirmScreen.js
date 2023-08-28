import { Typography, Image, Col, Button } from "antd";
import React from "react";
import { useLocation } from "react-router-dom";
import "./ConfirmScreen.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addMovies } from "../../Store/cart";
const ConfirmScreen = ({ productitems }) => {
	const dispatch = useDispatch();
	const bookedMovie = useSelector((state) => state.cart?.currentmovie);
	console.log({ bookedMovie });
	const location = useLocation();

	const searchParams = new URLSearchParams(location.search);

	const receivedMovieID = searchParams.get("data");

	const movieDate = searchParams.get("movieDate");
	const movieTiming = searchParams.get("movieTiming");
	const movieCount = searchParams.get("MovieCount");
	const MovieID = searchParams.get("id");
	const seatnumbers = searchParams.get("Individial_Seats");
	const objs = productitems.find((productitem) => {
		return productitem.id === receivedMovieID;
	});

	return (
		<div>
			<div>
				<Image src={objs.image} className="final_image" width="50%"></Image>
			</div>
			<Typography className="Title">
				The Ticket Has Been Booked for the Movie : {objs.name}
			</Typography>
			<Typography className="sub">
				The Ticket has been booked on: {movieDate}
			</Typography>
			<Typography className="sub">
				The Ticket has been booked on Timing: {movieTiming}
			</Typography>
			<Typography className="sub">
				The Seat Numbers Are : {seatnumbers}
			</Typography>
			<Button
				onClick={() => {
					dispatch(addMovies([bookedMovie]));
				}}>
				Add to cart
			</Button>
		</div>
	);
};

export default ConfirmScreen;
