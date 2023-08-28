import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	movieList: [],
	currentmovie: {
		movieId: null,
		movieDate: null,
		movieTime: "",
		movieSeats: [],
	},
};

export const cartSlice = createSlice({
	name: "cartSlice",
	initialState,
	reducers: {
		addMovies: (state, action) => {
			return {
				...state,
				movieList: [...state.movieList, ...action.payload],
			};
		},
		removeMovies: (state, action) => {
			return {
				...state,
				movieList: state.movieList.filter((item) => {
					return item != null && action.payload != item.movieId;
				}),
			};
		},

		updateMovieId: (state, action) => {
			return {
				...state,
				currentmovie: { ...state.currentmovie, movieId: action.payload },
			};
		},
		updateMovieDate: (state, action) => {
			return {
				...state,
				currentmovie: { ...state.currentmovie, movieDate: action.payload },
			};
		},
		updateMovieTiming: (state, action) => {
			return {
				...state,
				currentmovie: { ...state.currentmovie, movieTime: action.payload },
			};
		},
		updateMovieSeats: (state, action) => {
			return {
				...state,
				currentmovie: {
					...state.currentmovie,
					movieSeats: action.payload,
				},
			};
		},
	},
});

export const {
	addMovies,
	updateMovieId,
	updateMovieDate,
	updateMovieTiming,
	updateMovieSeats,
	removeMovies,
} = cartSlice.actions;

export default cartSlice.reducer;
