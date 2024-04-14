import HowToNotice from "@/app/components/HowToNotice";
import SubPageHeader from "./components/SubPageHeader";
import Timetable from "./components/Stundenplan/Timetable";

import { promises as fs } from "fs";


export default async function Home() {
	const file = await fs.readFile(process.cwd() + "/src/app/stundenplan/data.json", "utf8");
	const data = JSON.parse(file);

	return (
		<>
			<SubPageHeader pageTitle="Stundenplan" />
    			<Timetable timetableData={data} />
    		</>
	);
}
