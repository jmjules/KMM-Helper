import { promises as fs } from "fs";
import SubPageHeader from "../components/SubPageHeader";


export default async function SemesterData () {

  const file = await fs.readFile(process.cwd() + "/src/app/semesterdaten/data.json", "utf8");
  const data =  JSON.parse(file);
  const semester = data.rahmendaten;

  return (
    <>
      <SubPageHeader pageTitle="Semesterdaten" />
      


      <div className="max-w-[690px] mx-auto">
        <div className="m-5 p-6 rounded-lg bg-neutral-800">
          <h2 className="text-2xl font-bold"> {data.title} </h2>
          <p className="text-xs"> {semester.start} - {semester.end} </p>
          <h2 className="text-xl mt-3">Vorlesungszeit</h2>
          <p className="text-xs"> {semester.startOfClasses} - {semester.endOfClasses} </p>
        
          <h2 className="text-xl mt-2">Prüfungszeit</h2>
          <p className="text-xs"> {semester.startOfExams} - {semester.endOfExams} </p>
        
          <h2 className="text-xl mt-2">Vorlesungsfreie Tage</h2>
          <p className="text-xs line-through"> {semester.vacationDays[0].date} ({semester.vacationDays[0].reason}) </p>
          <p className="text-xs line-through"> {semester.vacationDays[1].date} - {semester.vacationDays[2].date} ({semester.vacationDays[1].reason}) </p>
          <p className="text-xs"> {semester.vacationDays[3].date} ({semester.vacationDays[3].reason}) </p>
        </div>

        <div className="m-5 p-6 rounded-lg bg-neutral-800">
          <h2 className="text-2xl pb-1 font-bold">Links</h2>
          {
            data.links.map((link, linkIndex)=>(
              <p key={linkIndex}>
                <a 
                  href={link.linkUrl} 
                  target="_blank"
						      className="text-fuchsia-400" 
                >
                  {link.linkText}
                </a>
              </p>
            ))
          }
        </div>
      </div>
    
    
    
    </>
  )
}
