import { promises as fs } from "fs";

import Link from "next/link";
import Timetable from "./components/Timetable";

export default async function TimetablePage() {
  const file = await fs.readFile(
    process.cwd() + "/src/app/stundenplan/data.json",
    "utf8"
  );
  const data = JSON.parse(file);

  return (
    <main className="min-h-screen flex-col items-center justify-between">
      <div className="h-32 bg-purple-700 mb-7 p-3 pt-7">
        <Link href="/" className="text-4xl font-extrabold rounded border">
          KMM-Hub
          {/* <img src="favicon.ico" className="w-10 h-10" /> */}
        </Link>
        <h1 className="text-2xl md:text-4xl font-bold ml-3">
          {">"} Stundenplan
        </h1>
      </div>

      <Timetable timeTableData={data} />
    </main>
  );
}
