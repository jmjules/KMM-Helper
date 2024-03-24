import { promises as fs } from "fs";

import Link from "next/link";
import Timetable from "./components/Timetable";
import SubPageHeader from "../components/SubPageHeader";

export default async function TimetablePage() {
  const file = await fs.readFile(
    process.cwd() + "/src/app/stundenplan/data.json",
    "utf8"
  );
  const data = JSON.parse(file);

  return (
    <main 
      className="min-h-screen flex-col items-center justify-between">
      <SubPageHeader pageTitle="Stundenplan" colorString="bg-fuchsia-900" />

      <Timetable timeTableData={data} />
    </main>
  );
}
