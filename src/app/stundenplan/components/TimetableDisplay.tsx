
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




export default function TimetableDisplay({ selectedDay, data }: TimetableDisplayProps) {
  const dayReference: string[] = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];

  // Type guard to check if selectedDay is a valid key
  if (dayReference.includes(selectedDay as string)) {
    return (
      <>
        {Object.keys(data[selectedDay]).map((classKey) => {
          const classData = data[selectedDay][classKey];
          // Now TypeScript knows that classData is a valid ClassEntry
          return (
            <div key={classKey} className="bg-purple-800 rounded-lg m-2 p-1 flex gap-2">
              <p className="text-sm text-center leading-none self-center">
                {classData.start} <br /> I <br /> {classData.end}
              </p>
              <div>
                <p className="text-2xl font-bold">{classData.name}</p>
                <p className="text-sm">{classData.room}</p>
                <p className="text-sm">{classData.prof}</p>
                <p className="text-sm">{classData.body}</p>
                <a href={classData.link[0]} target="_blank" className="text-green-500">
                  {classData.link[1]}
                </a>
              </div>
            </div>
          );
        })}
      </>
    );
  } else {
    return null; // Handle the case where selectedDay is not a valid key
  }
}