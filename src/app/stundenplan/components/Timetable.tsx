'use client'
import { useEffect, useState } from "react";



import TimetableDisplay from "./TimetableDisplay";
import TimetableMenu from "./TimetableMenu";



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
    [day in "Montag" | "Dienstag" | "Mittwoch" | "Donnerstag" | "Freitag" | "Samstag"]: {
      [classKey: string]: ClassEntry;
    };
  };

type TimetableProps = {
    timeTableData: TimetableData;
  };


export default function Timetable ( {timeTableData}: TimetableProps ) {

  const days: ('Montag' | 'Dienstag' | 'Mittwoch' | 'Donnerstag' | 'Freitag' | 'Samstag')[] = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]


  const [selectedDay, setSelectedDay] = useState<'Montag' | 'Dienstag' | 'Mittwoch' | 'Donnerstag' | 'Freitag' | 'Samstag'>(days[0]);



  useEffect(() => {
    const currentDate = new Date;
    const currentDayIndex = currentDate.getDay();

    if (currentDayIndex !==  0) {
      setSelectedDay(days[currentDayIndex-1]);
    }

  }, []);


  return (
    <>
        <TimetableDisplay selectedDay={selectedDay} data={timeTableData} />
        <TimetableMenu selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
    </>
  );
}