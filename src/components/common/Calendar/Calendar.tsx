import React, { useCallback, useEffect, useState } from "react";
import { DayPicker, ModifiersShape } from "react-dates";
import moment, { Moment } from "moment";
import "react-dates/initialize";
import "./react_dates_overrides.scss";
import "react-dates/lib/css/_datepicker.css";
import styles from "./Calendar.module.scss";
import useWindowSize from "@core/hooks/useWindowSize";
import { IAdventCalendarItem } from "@core/interface/advent-calendar";

// Todo Remove Dummy Data & Change to API Call
import { calendarAllData } from "@core/data/advent-calendar";

// react dates
export default React.PureComponent;
export const pureComponentAvailable = true;

export const Calendar = () => {
	const winSize = useWindowSize();
	const [curDate, setCurDate] = useState<Moment>(() => moment());
	const [calendars, setCalendars] = useState<IAdventCalendarItem[]>();

	const renderDayContents = useCallback(
		(day: moment.Moment, modifiers: ModifiersShape) => {
			return <div className={styles.date_box}>{day.format("YYYY")}</div>;
		},
		[],
	);

	const renderWeekHeaderElement = useCallback((day: string) => {
		return <div className={styles.week_header}>{day}</div>;
	}, []);

	const getCalendarData = async () => {
		// const data = await getAllCalendar();
		const data = calendarAllData;
		setCalendars(data);
	};

	useEffect(() => {
		getCalendarData();
	}, []);

	return (
		<div className={styles.container}>
			<DayPicker
				transitionDuration={10}
				daySize={150}
				numberOfMonths={1}
				hideKeyboardShortcutsPanel
				renderDayContents={renderDayContents}
				renderWeekHeaderElement={renderWeekHeaderElement}
			/>
		</div>
	);
};
