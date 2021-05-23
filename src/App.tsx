import React, { useEffect, useRef } from "react"
import "./App.css"
import Counter from "./demo/Counter"
import TextField from "./demo/TextField"

const App: React.FC = () => {
	const inputRef = useRef<HTMLInputElement>(null)
	console.log("App rendered...")

	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.focus()
		}

		console.log({ inputRef })
	}, [])

	const onClick = (
		count: number,
		setCount: React.Dispatch<React.SetStateAction<number>>
	) => {
		setCount(count + 1)
		console.log({ __value: inputRef.current?.value })
	}

	return (
		<div className="App">
			<header className="App-header">
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<Counter>
					{({ count, setCount }) => (
						<div>
							<div>{count}</div>
							<button onClick={() => onClick(count, setCount)}>
								+
							</button>
						</div>
					)}
				</Counter>
				<div>
					<TextField ref={inputRef} />
				</div>
			</header>
		</div>
	)
}

export default App
