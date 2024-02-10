import { promises as fs } from "fs";
import Link from "next/link";


export default async function SemesterData () {

  const file = await fs.readFile(process.cwd() + "/src/app/semesterdaten/data.json", "utf8");
  const data =  JSON.parse(file);
  const semester = data.rahmendaten;

  return (
    <main className="min-h-screen flex-col items-center justify-between">
      <div className="h-32 bg-orange-700 mb-7 p-3 pt-7">
        <Link href="/" className="text-4xl font-extrabold rounded border">
          KMM-Hub
        {/* <img src="favicon.ico" className="w-10 h-10" /> */}
        </Link>
        <h1 className='text-2xl md:text-4xl font-bold ml-3'> {">"} Semestertermine</h1> 
      </div>
      


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
