import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/slices/counterSlice";
import { RootState } from "demo/redux/store";

interface Props {
	// children: (data: {
	// 	count: number;
	// 	setCount: React.Dispatch<React.SetStateAction<number>>;
	// }) => JSX.Element;
	// fn?: (count: number) => number;
}

const Counter: React.FC<Props> = ({}) => {
	const counter = useSelector((state: RootState) => state.counter);
	const dispatch = useDispatch();
	console.log("Counter rendered...", counter);

	const OnIncrement = () => {
		dispatch(increment(counter.count > 1 ? counter.count : 1));
	};

	const OnDecrement = () => {
		dispatch(decrement(counter.count > counter.prev ? counter.prev : 1));
	};

	return (
		<div>
			<button onClick={OnIncrement}>Increment</button>
			<button onClick={OnDecrement}>Decrement</button>
		</div>
	);
};

export default Counter;
