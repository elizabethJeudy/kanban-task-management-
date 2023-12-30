import React from "react";
import { createSlice } from "@reduxjs/toolkit";
import data from "../data/data.json";

const boardsSlice = createSlice({
	name: "boards",
	initialState: data.boards,
	reducer: {
		// write reducers
	},
});

export default boardsSlice;
