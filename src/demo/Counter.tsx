import React, { useState } from "react"

interface Props {
	children: (data: {
		count: number
		setCount: React.Dispatch<React.SetStateAction<number>>
	}) => JSX.Element
	fn?: (count: number) => number
}

function makeFullname<
	T extends { firstName?: string | "Vu"; lastName: string }
>(obj: T) {
	return {
		...obj,
		fullname: obj.firstName + " " + obj.lastName
	}
}

const Counter: React.FC<Props> = ({ children }) => {
	const [count, setCount] = useState(0)
	const makeName = makeFullname({
		// firstName: "Vu",
		lastName: "Minh",
		age: 20
	})
	console.log("Counter rendered...", makeName)

	return <div>{children({ count, setCount })}</div>
}

export default Counter
