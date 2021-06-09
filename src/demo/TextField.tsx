import { forwardRef } from "react";

interface Props {
	placeholder?: string;
}

// const makeFullname = <
// 	T extends { firstName?: string | "Vu"; lastName: string }
// >(
// 	obj: T
// ) => {
// 	return {
// 		...obj,
// 		fullname: obj.firstName + " " + obj.lastName
// 	};
// };

const TextField = forwardRef<HTMLInputElement, Props>(
	({ placeholder }, ref) => <input placeholder={placeholder} ref={ref} />
);

export default TextField;
