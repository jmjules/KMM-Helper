"use client";
import { useEffect, useState, useRef } from "react";

import TimetableDisplay from "./TimetableDisplay";
import TimetableMenu from "./TimetableMenu";


type TimetableProps = {
  timetableData: ITimetableData;
}
interface ITimetableData {
  daysArray: IDaysArrayItem[];
}
interface IDaysArrayItem {
  day: string;
  classEntries: IClassEntriesItem[];
}
interface IClassEntriesItem {
  name: string;
  prof: string;
  room: string;
  start: string;
  end: string;
  body: string;
  links: ILinksItem[];
  exceptions: string[];
}
interface ILinksItem {
  linkUrl: string;
  linkText: string;
}

export default function Timetable({timetableData} : TimetableProps) {

  const [selectedDayIndex, setSelectedDayIndex] = useState(0)  

	const [hasRendered, setHasRendered] = useState(false);

	useEffect(() => {
		const currentDate = new Date();
		const currentDayIndex = currentDate.getDay();

		if (currentDayIndex > 0 && currentDayIndex < 5) {
			setSelectedDayIndex(currentDayIndex-1);     //-1 bc Date.getDay() => 0 for sunday, 1 for monday, etc...
		}

		setHasRendered(true);
	}, []);

	//swipe support
	// const [startX, setStartX] = useState(null);

	// const handleTouchStart = (event) => {
	// 	setStartX(event.touches[0].clientX);
	// 	console.log("touch started");
	// };

	// const handleTouchEnd = (event) => {
	// 	console.log("handle end or cancel");

	// 	const endX = event.changedTouches[0].clientX;
	// 	const deltaX = endX - startX;

	// 	const selectedIndex = days.indexOf(selectedDay);

	// 	if (deltaX > 50 && selectedIndex > 0) {
	// 		setSelectedDay(days[selectedIndex - 1]); // Swipe right, go to previous day
	// 		console.log("right");
	// 	} else if (deltaX < -50 && selectedIndex < days.length - 1) {
	// 		setSelectedDay(days[selectedIndex + 1]); // Swipe left, go to next day
	// 		console.log("left");
	// 	}
	// };

	return (
		<>
			{hasRendered ? (
				<TimetableDisplay
					selectedDayIndex={selectedDayIndex}
					data={timetableData}
				/>
			) : null}
			<TimetableMenu
				selectedDayIndex={selectedDayIndex}
				setSelectedDayIndex={setSelectedDayIndex}
			/>
			{/* <div
				onTouchStart={handleTouchStart}
				onTouchEnd={handleTouchEnd}
				onTouchCancel={handleTouchEnd}
				// onPointerDown={e => console.log("down")}
				// onPointerMove={e => console.log("move")}
				className="absolute top-32 bottom-32 left-0 right-0 z-1 bg-transparent"
			></div> */}
		</>
	);
}
