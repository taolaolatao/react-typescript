import React from "react";
import Counter from "demo/Counter";
import { RootState } from "demo/redux/store";
import { useSelector } from "react-redux";

import "App.css";

const App: React.FC = () => {
	const counter = useSelector((state: RootState) => state.counter);
	console.log("App rendered...", counter);

	return (
		<div className="App">
			<header className="App-header">
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<h2>{JSON.stringify(counter)}</h2>
				<Counter />
			</header>
		</div>
	);
};

export default App;
