//@ts-nocheck

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

export default function TimetableDisplay({
	selectedDayIndex,
	data,
}: TimetableDisplayProps) {

	const dayExceptionsArray: string[][] = data.daysArray[
		selectedDayIndex
	].classEntries.map((classObj: IClassEntriesItem) => {
		return classObj.exceptions.length > 0
			? [classObj.name, classObj.exceptions]
			: null;
	});

	// Filter out null values from dayExceptionsArray
	const filteredExceptions: string[][] = dayExceptionsArray.filter(
		(exceptions) => exceptions !== null
	);
	console.log(filteredExceptions);

	return (
		<div className="mt-3 pb-32">
			<h2 className="text-4xl font-bold text-center">
				{data.daysArray[selectedDayIndex].day}
			</h2>
			{filteredExceptions.length > 0 && (
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
						{filteredExceptions.map((arr) => (
							<>
								<p className="font-bold">
									{arr[0]}
								</p>
								<ul>
									{arr[1].map(
										(dateString) => (
											<>
												{compareToToday(
													dateString
												) >=
													0 &&
													compareToToday(
														dateString
													) <
														15 && (
														<li className="list-inside list-disc">
															{" "}
															{createWarningText(
																dateString
															)}{" "}
														</li>
													)}
											</>
										)
									)}
								</ul>
							</>
						))}
					</div>
				</div>
			)}

			{data.daysArray[selectedDayIndex].classEntries.map((classKey, idx) => {
					const classData = data.daysArray[selectedDayIndex].classEntries[idx];

					const bodyArr = classData.body.split("<br>");

					return (
						<div
							key={idx}
							className="bg-neutral-800 rounded-lg m-2 p-1 flex gap-4"
						>
							<p className="text-sm text-center leading-none self-center">
								{classData.start} <br />
								I <br />
								{classData.end}
							</p>
							<div>
								<p className="text-2xl font-bold">
									{classData.name}
								</p>
								<p className="text-xs mb-2">
									{classData.room} -{" "}
									{classData.prof}
								</p>

								{bodyArr.map((paragraph) => (
									<p
										key={paragraph}
										className="p-0"
									>
										{paragraph}
									</p>
								))}

								{classData.links.map(
									(linkObj, linkIndex) => (
										<a
											href={
												classData
													.links[
													linkIndex
												]
													.linkUrl
											}
											target="_blank"
											className="text-fuchsia-400"
										>
											{
												classData
													.links[
													linkIndex
												]
													.linkText
											}
										</a>
									)
								)}
							</div>
						</div>
					);
				}
			)}
		</div>
	);
}

//helper from here on
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
