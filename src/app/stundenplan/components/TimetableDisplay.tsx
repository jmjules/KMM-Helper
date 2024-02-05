
// import { useState } from "react";


type ClassEntry = {
  name: string;
  prof: string;
  room: string;
  start: string;
  end: string;
  body: string;
  link: [string, string];
  exceptions: string[];
};

type TimetableData = {
  [day in "Montag" | "Dienstag" | "Mittwoch" | "Donnerstag" | "Freitag" | "Samstag"]: {
    [classKey: string]: ClassEntry;
  };
};

type TimetableDisplayProps = {
  selectedDay: keyof TimetableData;
  data: TimetableData;
};




export default function TimetableDisplay( {selectedDay, data}: TimetableDisplayProps ) {
    
    

   
    const dayReference: string[] = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]



  return (
    <>
      {Object.keys(data[selectedDay]).map((classKey) => (
        <div key={classKey} className="bg-purple-800 rounded-lg m-2 p-1 flex gap-2">
          <p className="text-sm text-center leading-none self-center">
            {data[selectedDay][classKey].start} <br /> I <br /> {data[selectedDay][classKey].end}
          </p>
          <div>
            <p className="text-2xl font-bold">{data[selectedDay][classKey].name}</p>
            <p className="text-sm">{data[selectedDay][classKey].room}</p>
            <p className="text-sm">{data[selectedDay][classKey].prof}</p>
            <p className="text-sm">{data[selectedDay][classKey].body}</p>
            <a href={data[selectedDay][classKey].link[0]} target="_blank" className="text-green-500">
              {data[selectedDay][classKey].link[1]}
            </a>
          </div>
        </div>
      ))}
    </>
  )
}
