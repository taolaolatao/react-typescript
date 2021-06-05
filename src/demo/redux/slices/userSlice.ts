import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import userApi, { UserInfoTypes } from "demo/api/userApi";

export const getInfo = createAsyncThunk<UserInfoTypes, { uid: string }>(
	"user/getInfo",
	async (params, thunkAPI) => {
		const infoUser = await userApi.getInfo(params.uid);
		return infoUser as UserInfoTypes;
	}
);

const userSlice = createSlice({
	name: "user",
	initialState: {
		data: {},
		loading: false,
		error: ""
	},
	reducers: {},
	extraReducers: {
		[getInfo.pending as any]: state => {
			state.loading = true;
		},
		[getInfo.rejected as any]: (state, action) => {
			state.error = action.payload;
		},
		[getInfo.fulfilled as any]: (
			state,
			action: PayloadAction<UserInfoTypes>
		) => {
			state.data = action.payload;
		}
	}
});

const { reducer: userReducer } = userSlice;
export default userReducer;
