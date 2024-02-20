//@ts-nocheck
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



  const dayExceptionsArray: string[][] = data[(selectedDay)].map((classObj: ClassEntry) => {
    return classObj.exceptions.length > 0 ? [classObj.name , classObj.exceptions] : null;
  })

  // Filter out null values from dayExceptionsArray
  const filteredExceptions: string[][] = dayExceptionsArray.filter(exceptions => exceptions !== null);
  console.log(filteredExceptions);
  
  

  // Type guard to check if selectedDay is a valid key
  if (dayReference.includes(selectedDay as string)) {
    return (
      <div className="mt-3 pb-32">
        <h2 className="text-4xl font-bold text-center">{selectedDay}</h2>
        {
          filteredExceptions.length > 0 &&
          (<div className="bg-red-700 rounded-lg m-2 p-2">
            <h3 className="text-2xl font-bold">⚠ Ausnahmen</h3>
            {filteredExceptions.map(arr => (
              <>
                <p>{arr[0]}</p>
                  <ul>
                    { arr[1].map((dateString) => (
                      <>
                        {
                          compareToToday(dateString) >= 0 && compareToToday(dateString) < 70 
                            &&
                          <li className="list-inside list-disc"> {new Date(dateString).toLocaleDateString("de-DE")} in {compareToToday(dateString)} Tagen </li>
                        }
                      </>
                    )) }

                  </ul>
              </>
            ))}
          </div>)
        }

        {Object.keys(data[selectedDay]).map((classKey) => {
          const classData = data[selectedDay][classKey];

          const bodyArr = classData.body.split("<br>")
          
          // Now TypeScript knows that classData is a valid ClassEntry
          return (
            <div key={classKey} className="bg-purple-800 rounded-lg m-2 p-1 flex gap-4">
              <p className="text-sm text-center leading-none self-center">
                {classData.start} <br />
                     I <br /> 
                {classData.end}
              </p>
              <div>
                <p className="text-2xl font-bold">{classData.name}</p>
                <p className="text-xs mb-2">{classData.room} - {classData.prof}</p>
              
                {bodyArr.map(paragraph => (
                  <p key={paragraph} className="py-1">{paragraph}</p>
                ))}
                
                <a href={classData.link[0]} target="_blank" className="text-green-500">
                  {classData.link[1]}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null; // Handle the case where selectedDay is not a valid key
  }
}


//helper from here on
function compareToToday(dayString : string) : number {
  const today = new Date()
  const dateToCompare = new Date(dayString)

  const differenceMs = dateToCompare.getTime() - today.getTime();
  // Convert milliseconds to days
  const differenceDays = Math.ceil(differenceMs / (1000 * 60 * 60 * 24));

  return differenceDays
}