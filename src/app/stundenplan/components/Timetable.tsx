'use client'
import { useState } from "react";



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
    [day in "Montag" | "Dienstag" | "Mittwoch" | "Donnerstag" | "Freitag" | "Samstag" ] : ClassEntry
}

type TimetableProps = {
    timeTableData: TimetableData[];
  };


export default function Timetable ( {timeTableData}: TimetableProps ) {

    const days = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]


    const [selectedDay, setSelectedDay] = useState(days[0]);






    return (
        <>
            
            <TimetableDisplay selectedDay={selectedDay} data={timeTableData} />

            <TimetableMenu selectedDay={selectedDay} setSelectedDay={setSelectedDay} />

        </>



    );
}