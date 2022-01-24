import React from "react";
import { DayPicker } from "react-dates";

type Props = {};

const Calendar = (props: Props) => {
	return <DayPicker numberOfMonths={1} hideKeyboardShortcutsPanel />;
};

export default Calendar;
