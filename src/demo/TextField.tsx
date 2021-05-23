import React, { forwardRef } from "react"

interface Props {
	placeholder?: string
	// ref: React.LegacyRef<HTMLInputElement>
}

const TextField = forwardRef<HTMLInputElement, Props>(
	({ placeholder }, ref) => <input placeholder={placeholder} ref={ref} />
)

export default TextField
