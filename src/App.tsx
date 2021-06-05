import React from "react";
import { v4 } from "uuid";
import { RootState } from "demo/redux/store";
import { useSelector, useDispatch } from "react-redux";
import { getInfo } from "demo/redux/slices/userSlice";
import { AsyncThunkAction } from "@reduxjs/toolkit";
import { UserInfoTypes } from "demo/api/userApi";
import Counter from "demo/Counter";

import "App.css";

const App: React.FC = () => {
	const dispatch = useDispatch();
	const counter = useSelector((state: RootState) => state.counter);
	// console.log("App rendered...", counter);

	const GetUserInfo = async () => {
		const actionResult: AsyncThunkAction<
			UserInfoTypes,
			{
				uid: string;
			},
			{}
		> = await dispatch(getInfo({ uid: v4() }));

		console.log({ actionResult });
	};

	return (
		<div className="App">
			<header className="App-header">
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<h2>{JSON.stringify(counter)}</h2>
				<Counter />
				<button onClick={GetUserInfo}>Get Info</button>
			</header>
		</div>
	);
};

export default App;
