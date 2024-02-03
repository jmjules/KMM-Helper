
// import { useState } from "react";


export default function TimetableDisplay( {selectedDay, data} ) {
    
    type ClassEntry = {
        name: string;
        prof: string;
        room: string;
        start: string;
        end: string;
        body: string;
        link: [string, string]; //extract into separate if there are multiple
        exceptions: string[];
    }

    type TimetableData = {
        [day in "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" ] : ClassEntry
    }


    const test = selectedDay

    const dayReference = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]



  return (
    <>
    
    {data[selectedDay].map( (entry : ClassEntry) => (
                <div className="bg-purple-800 rounded-lg m-2 p-1 flex gap-2">
                    <p className="text-sm text-center leading-none self-center"> {entry.start} <br /> I <br /> {entry.end}</p>
                    <div>
                      <p className="text-2xl  font-bold"> {entry.name} </p>
                      <p className="text-sm"> {entry.room} </p>
                      <p className="text-sm"> {entry.prof} </p>
                      <p className="text-sm"> {entry.body} </p>
                      <a href={entry.link[0]} target="_blank" className="text-green-500" > {entry.link[1]} </a>
                    </div>
                </div>
            ))}
    
    
    </>
  )
}
