"use client";
import { useEffect, useState, useRef } from "react";

import TimetableDisplaySlider from "./TimetableDisplaySlider";
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

		if (currentDayIndex > 0 && currentDayIndex < 5) {	// 1-5 are mon to fri		|| No friday classes so only 1-4
			setSelectedDayIndex(currentDayIndex-1);     	//-1 bc Date.getDay() => 0 for sunday, 1 for monday, etc...
		}

		setHasRendered(true);
	}, []);

	

	return (
		<>
			{hasRendered ? (
				<TimetableDisplaySlider
					selectedDayIndex={selectedDayIndex}
					data={timetableData}
				/>
			) : null}
			{/* <TimetableMenu
				selectedDayIndex={selectedDayIndex}
				setSelectedDayIndex={setSelectedDayIndex}
			/> */}

		</>
	);
}

