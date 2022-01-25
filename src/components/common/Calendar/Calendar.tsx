import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
	DayPickerSingleDateController,
	isSameDay,
	ModifiersShape,
} from "react-dates";
import moment from "moment";
import type { Moment } from "moment";

import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import "./react_dates_overrides.scss";
import styles from "./Calendar.module.scss";
import useWindowSize from "@core/hooks/useWindowSize";
import { IAdventCalendarItem } from "@core/interface/advent-calendar";

// Todo Remove Dummy Data & Change to API Call
import { calendarAllData } from "@core/data/advent-calendar";
import { isInclusivelyBeforeDay, isInclusivelyAfterDay } from "react-dates";

// react dates
export default React.PureComponent;
export const pureComponentAvailable = true;

interface IInputs {
	focused: boolean;
	date: Moment | null;
}

export const Calendar = () => {
	const winSize = useWindowSize();
	const [calendars, setCalendars] = useState<IAdventCalendarItem[]>();
	const [Inputs, setInputs] = useState<IInputs>({
		focused: true,
		date: null,
	});

	const renderDayContents = useCallback(
		(day: moment.Moment, modifiers: ModifiersShape) => {
			return (
				<div className={styles.day_content}>
					<div className={styles.day_text}>{day.format("D")}</div>
					<div className={styles.day_profile}>
						<span>
							<img
								src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=30&h=30&q=80"
								width={20}
								height={20}
								alt=""
							/>
						</span>
						<span>{"@zp_advent"}</span>
					</div>
					<p>{"Introducing SQL asdasd"}</p>
				</div>
			);
		},
		[],
	);

	// Logics for Data Fetching
	const getCalendarData = useCallback(async () => {
		try {
			// const data = await getAllCalendar();
			const data = calendarAllData;
			setCalendars(data);
		} catch (err) {
			console.log("Data Fetching failed");
		}
	}, []);

	useEffect(() => {
		getCalendarData();
	}, [getCalendarData]);

	const getDateList = useMemo(() => {
		return calendars
			? calendars.map((data) => {
					return moment(data.regDateTime);
			  })
			: [];
	}, [calendars]);

	// Logics for Calendar Control
	const renderWeekHeaderElement = useCallback((day: string) => {
		return <div className={styles.week_header}>{day}</div>;
	}, []);

	const handleDateChange = () => {};

	const handleFocusChange = () => {
		setInputs({ ...Inputs, focused: true });
	};

	const renderCalendarInfo = () => {
		return (
			<ol>
				<li>한 칸에 한 명만 등록할 수 있습니다</li>
				<li>
					글을 등록할 수 있는 기한은
					{process.env.REACT_APP_CALENDAR_START_DATE}부터&nbsp;
					{process.env.REACT_APP_CALENDAR_END_DATE}입니다
				</li>
				<li>자신이 쓴 글을 수정할 수 없다면 관리자에게 문의해주세요</li>
			</ol>
		);
	};

	return (
		<DayPickerSingleDateController
			initialVisibleMonth={() => moment()}
			isOutsideRange={(day) =>
				!isInclusivelyAfterDay(
					day,
					moment(process.env.REACT_APP_CALENDAR_START_DATE),
				) ||
				!isInclusivelyBeforeDay(
					day,
					moment(process.env.REACT_APP_CALENDAR_END_DATE),
				)
			}
			transitionDuration={500}
			daySize={150}
			numberOfMonths={1}
			hideKeyboardShortcutsPanel
			focused={Inputs.focused}
			date={Inputs.date}
			isDayHighlighted={(day1) =>
				getDateList.some((day2) => isSameDay(day1, day2))
			}
			onDateChange={handleDateChange}
			onFocusChange={handleFocusChange}
			renderDayContents={renderDayContents}
			renderWeekHeaderElement={renderWeekHeaderElement}
			renderCalendarInfo={renderCalendarInfo}
		/>
	);
};
