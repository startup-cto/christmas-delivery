import { createSlice } from "@reduxjs/toolkit";
import { Pixel } from "../models/Pixel";
import { House } from "./House";

const initialState: House[] = [
  {
    id: "1",
    position: {
      x: 100 as Pixel,
      y: 100 as Pixel,
    },
  },
];

export const { reducer, actions } = createSlice({
  name: "houses",
  initialState,
  reducers: {},
});
