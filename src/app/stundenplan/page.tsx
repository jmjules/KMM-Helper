import { promises as fs } from "fs";

import SubPageHeader from "../components/SubPageHeader";
import Timetable from "../components/Stundenplan/Timetable";

export default async function TimetablePage() {
	const file = await fs.readFile(
		process.cwd() + "/src/app/stundenplan/data.json",
		"utf8"
	);
	const data = JSON.parse(file);

	return (
		<main className="min-h-screen flex-col items-center justify-between">
			<SubPageHeader
				pageTitle="Stundenplan"
			/>

			<Timetable timetableData={data} />
		</main>
	);
}
