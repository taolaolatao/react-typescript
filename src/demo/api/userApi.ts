import uuidv4 from "uuid/v4";

export interface UserApiTypes {
	delay: number;
	getInfo: (uid: string) => Promise<object>;
}

export interface UserInfoTypes {
	uid: string;
	email: string;
	password: string;
	status: number;
	token: string;
}

const userApi: UserApiTypes = {
	delay: 2000,
	getInfo: function (uid: string) {
		return new Promise((resolve, reject) => {
			// return reject(new Error("I Love u baby..."));
			setTimeout(() => {
				resolve({
					uid,
					email: "admin@gmail.com",
					password: "YWRtaW5AMTIzCg==",
					status: 1,
					token: uuidv4()
				});
			}, this.delay);
		});
	}
};

export default userApi;
