import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../src/Components/Header/Header";
import Products from "../src/Components/Products/Products";
import BookDetails from "../src/Components/Booking Details/BookDetails";
import ConfirmScreen from "./Components/Confirmation Screen/ConfirmScreen";
import SeatBook from "./Components/Seat Book/SeatBook";
import Cart from "./Components/Cart/Cart";
export const productitems = [
	{
		id: "1",
		name: "I am Lisa",
		Director: "	Patrick Rea",
		Genre: "Horror",
		Actors: "Kristen Vaganos,Jennifer Seward",
		Synopsis:
			"The film follows Lisa, a young woman who runs a bookstore that was left to her by her deceased grandmother. She is bullied by the local mean girl and drug dealer Jess, who also steals a rare book from the store and later sexually assaults her when the two are alone in the bookstore.",
		image:
			"https://cdnb.artstation.com/p/assets/images/images/026/475/643/large/spencer-owen-i-am-lisa-landscape.jpg?1588873984",
	},
	{
		id: "2",
		name: "Dune ",
		Director: "Denis Villeneuve",
		Genre: "Si-Fi",
		Actors: "Timothée Chalamet,Rebecca Ferguson",
		Synopsis:
			"In the distant future, Duke Leto Atreides, ruler of the planet Caladan, is assigned by the Padishah Emperor Shaddam IV to replace Baron Vladimir Harkonnen as the fiefholder of Arrakis, a harsh desert planet and sole source of spice",
		image:
			"https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2021/07/dune-movie-art.png?w=991&ssl=1",
	},
	{
		id: "3",
		name: "Goodfellas",
		Director: "Martin Scorsese",
		Genre: "Crime",
		Actors: "Robert De Niro, Joe Pessi",
		Synopsis:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
		image:
			"https://www.vintagemovieposters.co.uk/wp-content/uploads/2017/10/IMG_8729-1.jpg",
	},
	{
		id: "4",
		name: "The Wizard of Oz ",
		Director: "	Victor Fleming",
		Genre: "Fantasy",
		Actors: "Judy Garland,Rebecca Ferguson",
		Synopsis:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
		image:
			"https://mediacloud.theweek.co.uk/image/private/s--ZY6La2wd--/f_auto,t_primary-image-desktop@1/v1604775512/theweek/2018/05/tin-man-poster-hamlin.jpg",
	},
	{
		id: "5",
		name: "Justice leauge",

		Director: "Denis Villeneuve",

		Genre: "Super Hero",

		Actors: "Timothée Chalamet,Rebecca Ferguson",

		Synopsis:
			"Thousands of years ago, Steppenwolf and his legions of Parademons attempted to take over the Earth using the combined energies of the three Mother Boxes. The attempt was foiled by a unified alliance including the Olympian Gods, Amazons, Atlanteans, humanity, and extraterrestrial beings",

		image:
			"https://i0.wp.com/www.supermanhomepage.com/clickandbuilds/SupermanHomepage/wp-content/uploads/2017/04/JL-Desktop_1920x1080.jpg?ssl=1",
	},
	{
		id: "6",
		name: "Indiana Jones and the Temple of Doom",
		Director: " Steven Spielberg",
		Genre: "Adenture",
		Actors: " Steven Spielberg, Gloria Katz, Willard Huyck",
		Synopsis:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
		image: "https://www.chisholm-poster.com/large/CL63703.jpg",
	},
	{
		id: "7",
		name: "Brides Of Dracula ",
		Director: " Terence Fisher",
		Genre: "Horror",
		Actors: "Peter Cushing",
		Synopsis:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
		image:
			"https://images.squarespace-cdn.com/content/v1/539dffebe4b080549e5a5df5/1474585157139-7QOA3KCINM3VQGP5GVS1/HM-179+brides_of_dracula+++Classic+Horror+Movie+Posters.jpg?format=750w",
	},
	{
		id: "8",
		name: "12 Angry Men ",
		Director: "Sidney Lumet",
		Genre: "Drama",
		Actors: "Timothée Chalamet,Hendry Fonda",
		Synopsis:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
		image:
			"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f0565513909969.5627a230c1b8f.jpg",
	},
	{
		id: "9",
		name: "GreenLand",
		Director: "Ric Roman Waugh",
		Genre: "Si-Fi",
		Actors: "Gerard Butler",
		Synopsis:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
		image:
			"https://i.pinimg.com/736x/68/1b/ff/681bfff6540dacf6dcf0d4822cb4cac9.jpg",
	},
];
function App() {
	return (
		<div className="App">
			<Router>
				<Header></Header>
				<Routes>
					<Route
						path="/moviedetails"
						element={<Products productitems={productitems}></Products>}></Route>

					<Route
						path="/BookDetails"
						component={BookDetails}
						element={<BookDetails productitems={productitems} />}></Route>
					<Route
						path="/BookSeat"
						component={SeatBook}
						element={<SeatBook productitems={productitems} />}></Route>
					<Route
						path="/ConfirmScreen"
						component={ConfirmScreen}
						element={<ConfirmScreen productitems={productitems} />}></Route>
					<Route
						path="/Cart"
						component={ConfirmScreen}
						element={<Cart productitems={productitems} />}></Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
