import axios from "axios";

export const getAllCalendar = async (): Promise<any> => {
	try {
		const { data } = await axios.get("/advent-window");
		return data;
	} catch (err) {
		throw err;
	}
};
