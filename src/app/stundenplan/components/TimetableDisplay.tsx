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
  [day in "Montag" | "Dienstag" | "Mittwoch" | "Donnerstag" | "Freitag" ]: {
    [classKey: string]: ClassEntry;
  };
};

type TimetableDisplayProps = {
  selectedDay: keyof TimetableData;
  data: TimetableData;
};




export default function TimetableDisplay({ selectedDay, data }: TimetableDisplayProps) {
  const dayReference: string[] = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag"];



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
          (<div className="bg-yellow-800 rounded-lg border-2 border-yellow-600  m-4 p-2 flex gap-4">
            <div className="self-start py-1 text-yellow-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="33" width="33" viewBox="0 -960 960 960" ><path d="M109-120q-11 0-20-5.5T75-140q-5-9-5.5-19.5T75-180l370-640q6-10 15.5-15t19.5-5q10 0 19.5 5t15.5 15l370 640q6 10 5.5 20.5T885-140q-5 9-14 14.5t-20 5.5H109Zm69-80h604L480-720 178-200Zm302-40q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm0-120q17 0 28.5-11.5T520-400v-120q0-17-11.5-28.5T480-560q-17 0-28.5 11.5T440-520v120q0 17 11.5 28.5T480-360Zm0-100Z"/></svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Ausnahmen</h3>
              {filteredExceptions.map(arr => (
                <>
                  <p className="font-bold">{arr[0]}</p>
                    <ul>
                      { arr[1].map((dateString) => (
                        <>
                          {
                            compareToToday(dateString) >= 0 && compareToToday(dateString) < 15
                              &&
                            <li className="list-inside list-disc"> {createWarningText(dateString)} </li>
                          }
                        </>
                      )) }
                    </ul>
                </>
              ))}
            </div>
          </div>)
        }

        {Object.keys(data[selectedDay]).map((classKey) => {
          const classData = data[selectedDay][classKey];

          const bodyArr = classData.body.split("<br>")
          
          return (
            <div key={classKey} className="bg-neutral-800 rounded-lg m-2 p-1 flex gap-4">
              <p className="text-sm text-center leading-none self-center">
                {classData.start} <br />
                     I <br /> 
                {classData.end}
              </p>
              <div>
                <p className="text-2xl font-bold">{classData.name}</p>
                <p className="text-xs mb-2">{classData.room} - {classData.prof}</p>
              
                {bodyArr.map(paragraph => (
                  <p key={paragraph} className="p-0">{paragraph}</p>
                ))}
                
                <a href={classData.link[0]} target="_blank" className="text-fuchsia-400">
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



function createWarningText(dayString : string) : string {
	const dayDiff : number = compareToToday(dayString)
	const formattedDate : string = new Date(dayString).toLocaleDateString("de-DE")

	if (dayDiff === 0) {
		return "Heute"
	} 
	else if (dayDiff === 1) {
		return `Morgen am ${formattedDate}`
	}
	else {
		return `In ${dayDiff} Tagen am ${formattedDate}`
	}
}