import React from "react";
import "./Cart.css";
import { useSelector } from "react-redux";
import { productitems } from "../../App";
import { Button, Typography, Image } from "antd";
import { useDispatch } from "react-redux";
import { removeMovies } from "../../Store/cart";
const Cart = () => {
	const dispatch = useDispatch();
	const selectedmovielist = useSelector((state) => state.cart.movieList);

	// Create an array to hold JSX elements
	const movieElements = [];
	const RemoveMovie = (productID) => {
		dispatch(removeMovies(productID));
	};

	productitems.map((product) => {
		selectedmovielist.map((movie) => {
			if (movie != null && product.id === movie.movieId) {
				// Push JSX elements to the array
				movieElements.push(
					<div className="maincart">
						<Image
							src={product.image}
							width="200px"
							height="150px"
							className="image"></Image>
						<Typography key={product.id} className="name">
							{product.name}
						</Typography>
						<Typography key={product.id} className="nooftickets">
							The No of tickets are:- {movie.movieSeats.length}
						</Typography>
						<Button
							onClick={() => {
								RemoveMovie(product.id);
							}}
							className="button">
							Remove from cart
						</Button>
					</div>
				);
			}
		});
	});

	return <>{movieElements}</>;
};

export default Cart;
