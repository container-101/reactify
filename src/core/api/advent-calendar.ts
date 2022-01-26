import axios from "axios";

export const getAllCalendars = async (): Promise<any> => {
	try {
		const { data } = await axios.get("/advent-window");
		return data;
	} catch (err) {
		throw err;
	}
};
