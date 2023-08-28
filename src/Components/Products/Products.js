import React from "react";
import { useNavigate, Navigate, Link, Routes } from "react-router-dom";
import "./Products.css";
import { useState } from "react";
import { Button, Image, Divider, Col, Typography } from "antd";
import { useDispatch } from "react-redux";
import { updateMovieId } from "../../Store/cart";

const Products = ({ productitems }) => {
	const dispatch = useDispatch();
	const Navigate = useNavigate();
	const [movieid, setmovieid] = useState();

	return (
		<Col className="products">
			{productitems.map((productitem) => {
				return (
					<Col className="card">
						<Col>
							<Image
								src={productitem.image}
								className="product-image"
								width="100%"
							/>
						</Col>

						<Col>
							<Typography className="product-name">
								{productitem.name}
							</Typography>
						</Col>
						<Col>
							<Typography className="product-price">
								Genre: {productitem.Genre}
							</Typography>
						</Col>

						<Col>
							<Link to={`/BookDetails/?data=${productitem.id}`}>
								<Button
									className="product-add-button"
									onClick={() => {
										dispatch(updateMovieId(productitem.id));
									}}>
									Book Ticket
								</Button>
							</Link>
						</Col>
					</Col>
				);
			})}
		</Col>
	);
};

export default Products;
