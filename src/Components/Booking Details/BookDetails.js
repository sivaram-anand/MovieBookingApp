import React, { useState, useEffect } from "react";
import Products from "../Products/Products";
import { useLocation, Link } from "react-router-dom";
import {
	DatePicker,
	Space,
	Radio,
	Select,
	Button,
	Image,
	Typography,
} from "antd";
import moment from "moment/moment";
import ConfirmScreen from "../Confirmation Screen/ConfirmScreen";
import "./BookDetails.css";
import { updateMovieDate } from "../../Store/cart";
import { updateMovieTiming } from "../../Store/cart";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const BookDetails = ({ productitems }) => {
	const dispatch = useDispatch();
	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
	const receivedMovieID = searchParams.get("data");
	const obj = productitems.find((productitem) => {
		return productitem.id === receivedMovieID;
	});
	const onChange = (date, dateString) => {
		console.log({ dateString });
		setMovieDate(dateString);
	};
	const onDateChange = (Timing) => {
		console.log({ Timing });
		setmovieTiming(Timing);
	};

	// const Dates = useSelector((state) => {
	// 	const currentMovie = state.cart?.currentmovie;

	// 	if (currentMovie && currentMovie.movieDate instanceof Date) {
	// 		return currentMovie.movieDate.toLocaleDateString("en-US");
	// 	} else {
	// 		return "";
	// 	}
	// });
	// console.log({ Dates });
	// const Times = useSelector((state) => state.cart?.currentmovie?.movieTime);
	// console.log({ Times });
	const [movieDate, setMovieDate] = useState();

	const [movieTiming, setmovieTiming] = useState();
	const [MovieCount, setMovieCount] = useState();

	return (
		<div className="mainscreen">
			<div className="imagesection">
				<Image src={obj.image} className="movie-image" width="50%" />
			</div>
			<div className="infosection">
				<Typography className="name">{obj.name}</Typography>
				<Typography className="Genre">Genre: {obj.Genre}</Typography>
				<Typography className="Director">
					Directed by: {obj.Director}
				</Typography>
				<Typography className="Actors">Actors: {obj.Actors}</Typography>
				<Typography className="Synopsis">{obj.Synopsis}</Typography>
				{/* <h2>{obj.price}</h2> */}
				<div>
					<Typography className="Date_Title">Movie Date:</Typography>
					<Space direction="vertical">
						<DatePicker selected={movieDate} onChange={onChange} />
					</Space>
				</div>

				<div>
					<Typography className="Timing_Title">Movie Timing:</Typography>
					<Radio.Group
						buttonStyle="solid"
						onChange={(e) => onDateChange(e.target.value)}
						className="Slot">
						<Radio.Button value="10:00 AM">10:00 AM</Radio.Button>
						<Radio.Button value="01:00 PM">01:00 PM</Radio.Button>
						<Radio.Button value="04:00 PM">04:00 PM</Radio.Button>
						<Radio.Button value="10:00 PM">10:00 PM</Radio.Button>
					</Radio.Group>
				</div>

				<div>
					<Link
						to={`/BookSeat/?movieDate=${movieDate}&movieTiming=${movieTiming}&MovieCount=${MovieCount}&data=${obj.id}`}>
						<Button
							className="Button"
							onClick={() => {
								dispatch(updateMovieDate(movieDate));
								dispatch(updateMovieTiming(movieTiming));
							}}>
							Submit
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default BookDetails;
