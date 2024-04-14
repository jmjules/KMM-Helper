import { promises as fs } from "fs";
import SubPageHeader from "../components/SubPageHeader";


export default async function SemesterData () {

  const file = await fs.readFile(process.cwd() + "/src/app/semesterdaten/data.json", "utf8");
  const data =  JSON.parse(file);
  const semester = data.rahmendaten;

  return (
    <main className="min-h-screen flex-col items-center justify-between">
      <SubPageHeader pageTitle="Semesterdaten" />
      


      <div className="p-6 bg-orange-700 m-2 rounded-lg">
        <h2 className="text-2xl font-bold"> {data.title} </h2>
        <p className="text-xs"> {semester.start} - {semester.end} </p>
        <h2 className="text-xl mt-3">Vorlesungszeit</h2>
        <p className="text-xs"> {semester.startOfClasses} - {semester.endOfClasses} </p>
        
        <h2 className="text-xl mt-2">Prüfungszeit</h2>
        <p className="text-xs"> {semester.startOfExams} - {semester.endOfExams} </p>
        
        <h2 className="text-xl mt-2">Vorlesungsfreie Tage</h2>
        <p className="text-xs"> {semester.vacationDays[0].date} ({semester.vacationDays[0].reason}) </p>
        <p className="text-xs"> {semester.vacationDays[1].date} - {semester.vacationDays[4].date} ({semester.vacationDays[1].reason}) </p>
      </div>
    
    
    
    </main>
  )
}
