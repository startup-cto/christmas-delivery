import { createSlice } from "@reduxjs/toolkit";
import { Pixel } from "../models/Pixel";

export const { reducer, actions } = createSlice({
  name: "houses",
  initialState: [
    {
      id: "1",
      position: {
        x: 100 as Pixel,
        y: 100 as Pixel,
      },
    },
  ],
  reducers: {},
});
