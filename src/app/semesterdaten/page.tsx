import { promises as fs } from "fs";

export default async function SemesterData () {

  const file = await fs.readFile(process.cwd() + "/src/app/semesterdaten/data.json", "utf8");
  const data =  JSON.parse(file);
  const semester = data.rahmendaten;

  return (
    <main className="min-h-screen flex-col items-center justify-between p-24">
      {/* würde das vllt weiter oben in ne kleinere Hero section packen */}
      <h1 className='text-lg'>Semestertermine</h1> 
      <h2> {data.title} </h2>
      <p className="text-xs"> {semester.start} - {semester.end} </p>

      <br />

      <h2>Vorlesungszeit</h2>
      <p className="text-xs"> {semester.startOfClasses} - {semester.endOfClasses} </p>

      <h2>Prüfungszeit</h2>
      <p className="text-xs"> {semester.startOfExams} - {semester.endOfExams} </p>
    
      <h2>Vorlesungsfreie Tage</h2>
      <p className="text-xs"> {semester.vacationDays[0].date} ({semester.vacationDays[0].reason}) </p>
      <p className="text-xs"> {semester.vacationDays[1].date} - {semester.vacationDays[4].date} ({semester.vacationDays[1].reason}) </p>
    
    
    
    
    </main>
  )
}
