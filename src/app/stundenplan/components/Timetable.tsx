'use client'
import { useState } from "react";



import TimetableDisplay from "./TimetableDisplay";
import TimetableMenu from "./TimetableMenu";


export default function Timetable ( {timeTableData} ) {

    const days = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]


    const [selectedDay, setSelectedDay] = useState(days[0]);






    return (
        <>
            
            <TimetableDisplay selectedDay={selectedDay} data={timeTableData} />

            <TimetableMenu selectedDay={selectedDay} setSelectedDay={setSelectedDay} />

        </>



    );
}