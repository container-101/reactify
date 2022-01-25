import React, {
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState,
} from "react";
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
import { toast } from "react-toastify";
import useWindowSize from "@core/hooks/useWindowSize";
import { IAdventCalendarItem } from "@core/interface/advent-calendar";

// Todo Remove Dummy Data & Change to API Call
import { getAllCalendar } from "@core/api/advent-calendar";
import { calendarAllData } from "@core/data/advent-calendar";
import { isInclusivelyBeforeDay, isInclusivelyAfterDay } from "react-dates";
import { ModalConext } from "@src/core/context/ModalStore";

// react dates
export default React.PureComponent;
export const pureComponentAvailable = true;

interface IInputs {
	focused: boolean;
	date: Moment | null;
}

export const Calendar = () => {
	const { handleModal } = useContext(ModalConext);
	const [calendars, setCalendars] = useState<IAdventCalendarItem[]>();
	const [Inputs, setInputs] = useState<IInputs>({
		focused: true,
		date: null,
	});

	// Logics for Data Fetching
	const getCalendarData = useCallback(async () => {
		try {
			// const data = await getAllCalendar();
			const data = calendarAllData;
			setCalendars(data);
		} catch (err) {
			toast.error("Data Fetching failed");
		}
	}, []);

	useEffect(() => {
		getCalendarData();
	}, [getCalendarData]);

	const DateList = useMemo(() => {
		let mapObj = new Map<string, IAdventCalendarItem>();
		for (const key in calendars) {
			const newKey = moment(calendars[Number(key)].regDateTime).format(
				"YYYY-MM-DD",
			);
			mapObj.set(newKey, calendars[Number(key)]);
		}
		return mapObj;
	}, [calendars]);

	// Logics for Calendar Control
	const renderWeekHeaderElement = useCallback((day: string) => {
		return <div className={styles.week_header}>{day}</div>;
	}, []);

	const handleDateChange = useCallback((date: Moment | null) => {
		setInputs((prev) => ({ ...prev, date }));
	}, []);

	const handleFocusChange = () => {
		setInputs({ ...Inputs, focused: true });
	};

	const renderCalendarInfo = useCallback(() => {
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
	}, []);

	const handleDayCellClick = useCallback(() => {}, []);

	const renderDayContents = useCallback(
		(day: moment.Moment, modifiers: ModifiersShape) => {
			const result = DateList.get(day.format("YYYY-MM-DD"));
			return (
				<div className={styles.day_content} onClick={handleDayCellClick}>
					<div className={styles.day_text}>{day.format("D")}</div>
					{modifiers.has("valid") &&
						(modifiers.has("highlighted-calendar") ? (
							<>
								<div className={styles.day_profile}>
									<span>
										<img
											src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=30&h=30&q=80"
											width={20}
											height={20}
											alt=""
										/>
									</span>
									<span>{result?.name}</span>
								</div>
								<p>{result?.body}&nbsp;</p>
							</>
						) : (
							<>
								<div className={styles.plus}>+</div>
								<div />
							</>
						))}
				</div>
			);
		},
		[DateList, handleDayCellClick],
	);

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
			transitionDuration={300}
			daySize={150}
			numberOfMonths={1}
			hideKeyboardShortcutsPanel
			focused={Inputs.focused}
			date={Inputs.date}
			isDayHighlighted={(day1) =>
				Array.from(DateList.keys()).some((day2) =>
					isSameDay(day1, moment(day2)),
				)
			}
			onDateChange={handleDateChange}
			onFocusChange={handleFocusChange}
			renderDayContents={renderDayContents}
			renderWeekHeaderElement={renderWeekHeaderElement}
			renderCalendarInfo={renderCalendarInfo}
		/>
	);
};
