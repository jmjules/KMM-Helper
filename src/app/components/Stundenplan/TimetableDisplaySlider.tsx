//@ts-nocheck

import { register } from "swiper/element/bundle";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import "swiper/css"
import { Fragment } from "react";
// register swiper slider
register();

type TimetableDisplayProps = {
	selectedDayIndex: number;
	data: ITimetableData;
};
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

function ClassItem ({classEntry} ) {
	const bodyTextArr = classEntry.body.split("<br>")

	return (
		<div className="bg-neutral-800 rounded-lg m-2 p-1 flex gap-4">
			<div className="text-sm text-center leading-none self-center">
				{classEntry.start} <br />
				I <br />
				{classEntry.end}
			</div>
			<div>
				<h3 className="text-xl font-bold"> {classEntry.name} </h3>
				<p className="text-xs mb-2">
					{classEntry.room} -{" "}
					{classEntry.prof}
				</p>

				{bodyTextArr.map((paragraph) => (
					<p key={paragraph} className="p-0">
						{paragraph}
					</p>
				))}

				{classEntry.links.map((linkObj, linkIndex) => (
					<p key={linkIndex}>
						<a
						 href={linkObj.linkUrl}
						 target="_blank"
						 className="text-fuchsia-400"
						>
							{linkObj.linkText}
						</a>
					</p>
				))}
			</div>
		</div>
	)
}

function DayItem({dayData, dayIndex}){
	const dayExceptionsArray = getExceptions(dayData)

	return (
		<div >
			<h2 className="text-4xl font-bold text-center"> {dayData.day} </h2>
			
			{isToday(dayIndex) &&
			<p className="text-xs text-center">Heute</p>
			}

			{dayExceptionsArray.length > 0 &&
				<ExceptionDisplay exceptionsArray={dayExceptionsArray} />
			}

			{dayData.classEntries.map((classEntry, index) => (
				<ClassItem classEntry={classEntry} key={index} />
			))}

			

		</div>
	);
}



export default function TimetableDisplaySlider({ selectedDayIndex, data}: TimetableDisplayProps) {

	const daysArray = data.daysArray
	
	return (
		<div className="mt-3 mx-auto px-3 max-w-[690px] relative">
			<swiper-container
			 loop="true"
			 initial-slide={selectedDayIndex}
			 navigation-prev-el=".prev-arrow"
			 navigation-next-el=".next-arrow"
			>
			{daysArray.map((dayData, index) => (
				<swiper-slide key={index} >

					<DayItem dayData={dayData} dayIndex={index}  />

				</swiper-slide>
			))
			}	
			</swiper-container>	
			<div className="prev-arrow content-center px-1 absolute z-[300] top-[5px] md:top-[10%] md:bottom-[10%] left-[10%] md:left-[-5%]">
				<FaArrowLeft className="w-8 h-8" />
			</div>
			<div className="next-arrow content-center px-1 absolute z-[300] top-[5px] md:top-[10%] md:bottom-[10%] right-[10%] md:right-[-5%]">
				<FaArrowRight className="w-8 h-8" />
			</div>
		</div>
	);
}

function ExceptionDisplay( {exceptionsArray} ) {
	
	if (exceptionsArray[0] === undefined) {
		return;
	}

	const MAX_DAYS_BEFORE_HIDING = 15

	let hideExceptionsBox = true
	for(const lectureIdx in exceptionsArray){		
		const lectureExeptions = exceptionsArray[lectureIdx][1]	
		for (const exceptionDateIdx in lectureExeptions){			
			if(compareToToday(lectureExeptions[exceptionDateIdx]) >= 0 && compareToToday(lectureExeptions[exceptionDateIdx]) < MAX_DAYS_BEFORE_HIDING) {				
				hideExceptionsBox = false
			}
		}
	}
	if (hideExceptionsBox) {
		return;
	}


	return (
	<div className="bg-yellow-800 rounded-lg border-2 border-yellow-600  m-4 p-2 flex gap-4">
		<div className="self-start py-1 text-yellow-500">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="currentColor"
				height="33"
				width="33"
				viewBox="0 -960 960 960"
			>
				<path d="M109-120q-11 0-20-5.5T75-140q-5-9-5.5-19.5T75-180l370-640q6-10 15.5-15t19.5-5q10 0 19.5 5t15.5 15l370 640q6 10 5.5 20.5T885-140q-5 9-14 14.5t-20 5.5H109Zm69-80h604L480-720 178-200Zm302-40q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm0-120q17 0 28.5-11.5T520-400v-120q0-17-11.5-28.5T480-560q-17 0-28.5 11.5T440-520v120q0 17 11.5 28.5T480-360Zm0-100Z" />
			</svg>
		</div>
		<div>
			<h3 className="text-2xl font-bold">
				Ausnahmen
			</h3>
			{exceptionsArray.map((arr, index) => (
				<Fragment key={index}>
					<p className="font-bold">
						{arr[0]}
					</p>
					<ul>
						{arr[1].map((dateString, index) => (
							<Fragment key={index}>
								{compareToToday(dateString) >= 0 && compareToToday(dateString) < MAX_DAYS_BEFORE_HIDING && (
										<li className="list-inside list-disc">
											{" "}
											{createWarningText(
												dateString
											)}{" "}
										</li>
									)}
							</Fragment>
						)
						)}
					</ul>
				</Fragment>
			))}
		</div>
	</div>)
}


//helper from here on
function getExceptions(dayData : IDaysArrayItem) {
	const dayExceptionsArray = dayData.classEntries
	.map((classObj: IClassEntriesItem) => {
		if (classObj.exceptions.length > 0) {
			return [classObj.name, classObj.exceptions]
		}
	})
	.filter((exception) => exception !== undefined)
	
	return dayExceptionsArray;
}

function compareToToday(dayString: string): number {
	const today = new Date();
	const dateToCompare = new Date(dayString);

	const differenceMs = dateToCompare.getTime() - today.getTime();
	// Convert milliseconds to days
	const differenceDays = Math.ceil(differenceMs / (1000 * 60 * 60 * 24));

	return differenceDays;
}

function createWarningText(dayString: string): string {
	const dayDiff: number = compareToToday(dayString);
	const formattedDate: string = new Date(dayString).toLocaleDateString(
		"de-DE"
	);

	if (dayDiff === 0) {
		return "Heute";
	} else if (dayDiff === 1) {
		return `Morgen am ${formattedDate}`;
	} else {
		return `In ${dayDiff} Tagen am ${formattedDate}`;
	}
}

function isToday(dayIndex : number): boolean {
	const today = new Date().getDay() // Sunday - Saturday : 0 - 6
	
	//DaysArray in source data start with monday
	if (dayIndex === today -1) {
		return true;
	} else {
		return false;
	}
}