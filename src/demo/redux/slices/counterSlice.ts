import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CouterState } from "demo/types/app";

const couter = createSlice({
	name: "couter",
	initialState: { count: 0, prev: 0 },
	reducers: {
		increment: (state: CouterState, action: PayloadAction<number>) => {
			state.prev = state.count;
			state.count += action.payload;
		},
		decrement: (state: CouterState, action: PayloadAction<number>) => {
			state.prev = state.count;
			state.count -= action.payload;
		}
	}
});

const { reducer, actions } = couter;

export const { increment, decrement } = actions;
export default reducer;
