import React, { useState } from "react";
import { Checkbox, Button, Divider, Typography, Image } from "antd";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "./SeatBook.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { updateMovieSeats } from "../../Store/cart";

const SeatBook = ({ productitems }) => {
	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);

	const receivedMovieID = searchParams.get("data");

	const movieDate = searchParams.get("movieDate");
	const movieTiming = searchParams.get("movieTiming");
	const movieCount = searchParams.get("MovieCount");
	const MovieID = searchParams.get("id");
	// const [temp, setTemp] = useState(data);

	const [c, setC] = useState(0);

	const [p, setP] = useState(0);

	const [details, setDetails] = useState([[]]);
	const [details1, setDetails1] = useState(details[0]);
	const obj = productitems.find((productitem) => {
		return productitem.id === receivedMovieID;
	});
	console.log(details[0]);
	const dispatch = useDispatch();
	return (
		<div>
			<div className>
				<Typography className="name">Book Seats For : {obj.name}</Typography>
			</div>

			<div className="theatre_screen">
				<Typography className="theatre_screen_typography">
					Screen This Side
				</Typography>
			</div>
			<div className="numbers">
				<div>1</div>
				<div>2</div>
				<div>3</div>
				<div>4</div>
				<div>5</div>
				<div>6</div>
				<div>7</div>
				<div>8</div>
				<div>9</div>
				<div>10</div>
			</div>
			<div className="seats">
				A
				<Checkbox
					onChange={(e) =>
						e.target.checked === true
							? (setC(c + 1), details[0].push("A1"))
							: (setC(c - 1), details[0].splice(details[0].indexOf("A1"), 1))
					}
					className="Individial_Seats"
				/>
				<Checkbox
					onChange={(e) =>
						e.target.checked === true
							? (setC(c + 1), details[0].push("A2"))
							: (setC(c - 1), details[0].splice(details[0].indexOf("A2"), 1))
					}
					className="Individial_Seats"
				/>
				<Checkbox
					onChange={(e) =>
						e.target.checked === true
							? (setC(c + 1), details[0].push("A3"))
							: (setC(c - 1), details[0].splice(details[0].indexOf("A3"), 1))
					}
					className="Individial_Seats"
				/>
				<Checkbox
					onChange={(e) =>
						e.target.checked === true
							? (setC(c + 1), details[0].push("A4"))
							: (setC(c - 1), details[0].splice(details[0].indexOf("A4"), 1))
					}
					className="Individial_Seats"
				/>
				<Checkbox
					onChange={(e) =>
						e.target.checked === true
							? (setC(c + 1), details[0].push("A5"))
							: (setC(c - 1), details[0].splice(details[0].indexOf("A5"), 1))
					}
					className="Individial_Seats"
				/>
				<Checkbox
					onChange={(e) =>
						e.target.checked === true
							? (setC(c + 1), details[0].push("A6"))
							: (setC(c - 1), details[0].splice(details[0].indexOf("A6"), 1))
					}
					className="Individial_Seats"
				/>
				<Checkbox
					onChange={(e) =>
						e.target.checked === true
							? (setC(c + 1), details[0].push("A7"))
							: (setC(c - 1), details[0].splice(details[0].indexOf("A7"), 1))
					}
					className="Individial_Seats"
				/>
				<Checkbox
					onChange={(e) =>
						e.target.checked === true
							? (setC(c + 1), details[0].push("A8"))
							: (setC(c - 1), details[0].splice(details[0].indexOf("A8"), 1))
					}
					className="Individial_Seats"
				/>
				<Checkbox
					onChange={(e) =>
						e.target.checked
							? (setC(c + 1), details[0].push("A9"))
							: (setC(c - 1), details[0].splice(details[0].indexOf("A9"), 1))
					}
					className="Individial_Seats"
				/>
				<Checkbox
					onChange={(e) =>
						e.target.checked === true
							? (setC(c + 1), details[0].push("A10"))
							: (setC(c - 1), details[0].splice(details[0].indexOf("A10"), 1))
					}
					className="Individial_Seats"
				/>
				<Divider></Divider>B
				<Checkbox
					onChange={(e) =>
						e.target.checked === true
							? (setC(c + 1), details[0].push("B1"))
							: (setC(c - 1), details[0].splice(details[0].indexOf("B1"), 1))
					}
					className="Individial_Seats"
				/>
				<Checkbox
					onChange={(e) =>
						e.target.checked === true
							? (setC(c + 1), details[0].push("B2"))
							: (setC(c - 1), details[0].splice(details[0].indexOf("B2"), 1))
					}
					className="Individial_Seats"
				/>
				<Checkbox
					onChange={(e) =>
						e.target.checked === true
							? (setC(c + 1), details[0].push("B3"))
							: (setC(c - 1), details[0].splice(details[0].indexOf("B3"), 1))
					}
					className="Individial_Seats"
				/>
				<Checkbox
					onChange={(e) =>
						e.target.checked === true
							? (setC(c + 1), details[0].push("B4"))
							: (setC(c - 1), details[0].splice(details[0].indexOf("B4"), 1))
					}
					className="Individial_Seats"
				/>
				<Checkbox
					onChange={(e) =>
						e.target.checked === true
							? (setC(c + 1), details[0].push("B5"))
							: (setC(c - 1), details[0].splice(details[0].indexOf("B5"), 1))
					}
					className="Individial_Seats"
				/>
				<Checkbox
					onChange={(e) =>
						e.target.checked === true
							? (setC(c + 1), details[0].push("B6"))
							: (setC(c - 1), details[0].splice(details[0].indexOf("B6"), 1))
					}
					className="Individial_Seats"
				/>
				<Checkbox
					onChange={(e) =>
						e.target.checked === true
							? (setC(c + 1), details[0].push("B7"))
							: (setC(c - 1), details[0].splice(details[0].indexOf("B7"), 1))
					}
					className="Individial_Seats"
				/>
				<Checkbox
					onChange={(e) =>
						e.target.checked === true
							? (setC(c + 1), details[0].push("B8"))
							: (setC(c - 1), details[0].splice(details[0].indexOf("B8"), 1))
					}
					className="Individial_Seats"
				/>
				<Checkbox
					onChange={(e) =>
						e.target.checked === true
							? (setC(c + 1), details[0].push("B9"))
							: (setC(c - 1), details[0].splice(details[0].indexOf("B9"), 1))
					}
					className="Individial_Seats"
				/>
				<Checkbox
					onChange={(e) =>
						e.target.checked === true
							? (setC(c + 1), details[0].push("B10"))
							: (setC(c - 1), details[0].splice(details[0].indexOf("B10"), 1))
					}
					className="Individial_Seats"
				/>
				<Divider></Divider>C
				<Checkbox
					onChange={(e) =>
						e.target.checked === true
							? (setC(c + 1), details[0].push("C1"))
							: (setC(c - 1), details[0].splice(details[0].indexOf("C1"), 1))
					}
					className="Individial_Seats"
				/>
				<Checkbox
					onChange={(e) =>
						e.target.checked === true
							? (setC(c + 1), details[0].push("C2"))
							: (setC(c - 1), details[0].splice(details[0].indexOf("C2"), 1))
					}
					className="Individial_Seats"
				/>
				<Checkbox
					onChange={(e) =>
						e.target.checked === true
							? (setC(c + 1), details[0].push("C3"))
							: (setC(c - 1), details[0].splice(details[0].indexOf("C3"), 1))
					}
					className="Individial_Seats"
				/>
				<Checkbox
					onChange={(e) =>
						e.target.checked === true
							? (setC(c + 1), details[0].push("C4"))
							: (setC(c - 1), details[0].splice(details[0].indexOf("C4"), 1))
					}
					className="Individial_Seats"
				/>
				<Checkbox
					onChange={(e) =>
						e.target.checked === true
							? (setC(c + 1), details[0].push("C5"))
							: (setC(c - 1), details[0].splice(details[0].indexOf("C5"), 1))
					}
					className="Individial_Seats"
				/>
				<Checkbox
					onChange={(e) =>
						e.target.checked === true
							? (setC(c + 1), details[0].push("C6"))
							: (setC(c - 1), details[0].splice(details[0].indexOf("C6"), 1))
					}
					className="Individial_Seats"
				/>
				<Checkbox
					onChange={(e) =>
						e.target.checked === true
							? (setC(c + 1), details[0].push("C7"))
							: (setC(c - 1), details[0].splice(details[0].indexOf("C7"), 1))
					}
					className="Individial_Seats"
				/>
				<Checkbox
					onChange={(e) =>
						e.target.checked === true
							? (setC(c + 1), details[0].push("C8"))
							: (setC(c - 1), details[0].splice(details[0].indexOf("C8"), 1))
					}
					className="Individial_Seats"
				/>
				<Checkbox
					onChange={(e) =>
						e.target.checked === true
							? (setC(c + 1), details[0].push("C9"))
							: (setC(c - 1), details[0].splice(details[0].indexOf("C9"), 1))
					}
					className="Individial_Seats"
				/>
				<Checkbox
					onChange={(e) =>
						e.target.checked === true
							? (setC(c + 1), details[0].push("C10"))
							: (setC(c - 1), details[0].splice(details[0].indexOf("C10"), 1))
					}
					className="Individial_Seats"
				/>
				<Divider></Divider>D
				<Checkbox
					onChange={(e) =>
						e.target.checked === true
							? (setC(c + 1), details[0].push("D1"))
							: (setC(c - 1), details[0].splice(details[0].indexOf("D1"), 1))
					}
					className="Individial_Seats"
				/>
				<Checkbox
					onChange={(e) =>
						e.target.checked === true
							? (setC(c + 1), details[0].push("D2"))
							: (setC(c - 1), details[0].splice(details[0].indexOf("D2"), 1))
					}
					className="Individial_Seats"
				/>
				<Checkbox
					onChange={(e) =>
						e.target.checked === true
							? (setC(c + 1), details[0].push("D3"))
							: (setC(c - 1), details[0].splice(details[0].indexOf("D3"), 1))
					}
					className="Individial_Seats"
				/>
				<Checkbox
					onChange={(e) =>
						e.target.checked === true
							? (setC(c + 1), details[0].push("D4"))
							: (setC(c - 1), details[0].splice(details[0].indexOf("D4"), 1))
					}
					className="Individial_Seats"
				/>
				<Checkbox
					onChange={(e) =>
						e.target.checked === true
							? (setC(c + 1), details[0].push("D5"))
							: (setC(c - 1), details[0].splice(details[0].indexOf("D5"), 1))
					}
					className="Individial_Seats"
				/>
				<Checkbox
					onChange={(e) =>
						e.target.checked === true
							? (setC(c + 1), details[0].push("D6"))
							: (setC(c - 1), details[0].splice(details[0].indexOf("D6"), 1))
					}
					className="Individial_Seats"
				/>
				<Checkbox
					onChange={(e) =>
						e.target.checked === true
							? (setC(c + 1), details[0].push("D7"))
							: (setC(c - 1), details[0].splice(details[0].indexOf("D7"), 1))
					}
					className="Individial_Seats"
				/>
				<Checkbox
					onChange={(e) =>
						e.target.checked === true
							? (setC(c + 1), details[0].push("D8"))
							: (setC(c - 1), details[0].splice(details[0].indexOf("D8"), 1))
					}
					className="Individial_Seats"
				/>
				<Checkbox
					onChange={(e) =>
						e.target.checked === true
							? (setC(c + 1), details[0].push("D9"))
							: (setC(c - 1), details[0].splice(details[0].indexOf("D9"), 1))
					}
					className="Individial_Seats"
				/>
				<Checkbox
					onChange={(e) =>
						e.target.checked === true
							? (setC(c + 1), details[0].push("D10"))
							: (setC(c - 1), details[0].splice(details[0].indexOf("D10"), 1))
					}
					className="Individial_Seats"
				/>
				<Divider></Divider>E
				<Checkbox
					onChange={(e) =>
						e.target.checked === true
							? (setC(c + 1), details[0].push("E1"))
							: (setC(c - 1), details[0].splice(details[0].indexOf("E1"), 1))
					}
					className="Individial_Seats"
				/>
				<Checkbox
					onChange={(e) =>
						e.target.checked === true
							? (setC(c + 1), details[0].push("E2"))
							: (setC(c - 1), details[0].splice(details[0].indexOf("E2"), 1))
					}
					className="Individial_Seats"
				/>
				<Checkbox
					onChange={(e) =>
						e.target.checked === true
							? (setC(c + 1), details[0].push("E3"))
							: (setC(c - 1), details[0].splice(details[0].indexOf("E3"), 1))
					}
					className="Individial_Seats"
				/>
				<Checkbox
					onChange={(e) =>
						e.target.checked === true
							? (setC(c + 1), details[0].push("E4"))
							: (setC(c - 1), details[0].splice(details[0].indexOf("E4"), 1))
					}
					className="Individial_Seats"
				/>
				<Checkbox
					onChange={(e) =>
						e.target.checked === true
							? (setC(c + 1), details[0].push("E5"))
							: (setC(c - 1), details[0].splice(details[0].indexOf("E5"), 1))
					}
					className="Individial_Seats"
				/>
				<Checkbox
					onChange={(e) =>
						e.target.checked === true
							? (setC(c + 1), details[0].push("E6"))
							: (setC(c - 1), details[0].splice(details[0].indexOf("E6"), 1))
					}
					className="Individial_Seats"
				/>
				<Checkbox
					onChange={(e) =>
						e.target.checked === true
							? (setC(c + 1), details[0].push("E7"))
							: (setC(c - 1), details[0].splice(details[0].indexOf("E7"), 1))
					}
					className="Individial_Seats"
				/>
				<Checkbox
					onChange={(e) =>
						e.target.checked === true
							? (setC(c + 1), details[0].push("E8"))
							: (setC(c - 1), details[0].splice(details[0].indexOf("E8"), 1))
					}
					className="Individial_Seats"
				/>
				<Checkbox
					onChange={(e) =>
						e.target.checked === true
							? (setC(c + 1), details[0].push("E9"))
							: (setC(c - 1), details[0].splice(details[0].indexOf("E9"), 1))
					}
					className="Individial_Seats"
				/>
				<Checkbox
					onChange={(e) =>
						e.target.checked === true
							? (setC(c + 1), details[0].push("E10"))
							: (setC(c - 1), details[0].splice(details[0].indexOf("E10"), 1))
					}
					className="Individial_Seats"
				/>
			</div>
			<div />
			<Link
				to={`/ConfirmScreen/?movieDate=${movieDate}&movieTiming=${movieTiming}&data=${obj.id}&Individial_Seats=${details[0]}`}>
				<Button
					className="submit"
					onClick={() => {
						dispatch(updateMovieSeats(details[0]));
					}}>
					Book Seats
				</Button>
			</Link>
		</div>
	);
};

export default SeatBook;
