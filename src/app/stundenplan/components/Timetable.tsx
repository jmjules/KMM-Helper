'use client'
import { useEffect, useState, useRef } from "react";
// import Hammer from "hammerjs";




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
    [day in "Montag" | "Dienstag" | "Mittwoch" | "Donnerstag" | "Freitag"]: {
      [classKey: string]: ClassEntry;
    };
  };

type TimetableProps = {
    timeTableData: TimetableData;
  };


export default function Timetable ( {timeTableData}: TimetableProps ) {

  const days: ('Montag' | 'Dienstag' | 'Mittwoch' | 'Donnerstag' | 'Freitag')[] = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag"]


  const [selectedDay, setSelectedDay] = useState<'Montag' | 'Dienstag' | 'Mittwoch' | 'Donnerstag' | 'Freitag'>(days[0]);

  const [hasRendered, setHasRendered] = useState(false)


  useEffect(() => {
    const currentDate = new Date;
    const currentDayIndex = currentDate.getDay();

    if (currentDayIndex > 0 && currentDayIndex < 6) {
      setSelectedDay(days[currentDayIndex-1]);
    }

    setHasRendered(true)
  }, []);


//swipe support
  const [startX, setStartX] = useState(null);

  const handleTouchStart = (event) => {
    setStartX(event.touches[0].clientX);
    console.log("touch started");
    
  };

  const handleTouchEnd = (event) => {
    console.log("handle end or cancel");
    
    const endX = event.changedTouches[0].clientX;
    const deltaX = endX - startX;

    const selectedIndex = days.indexOf(selectedDay);
    
    if (deltaX > 50 && selectedIndex > 0) {
      setSelectedDay(days[selectedIndex-1]); // Swipe right, go to previous day
      console.log("right");
      
    } else if (deltaX < -50 && selectedIndex < days.length - 1) {
      setSelectedDay(days[selectedIndex+1]); // Swipe left, go to next day
      console.log("left");
      
    }
  };


  return (
    <>
      {hasRendered ? 
        <TimetableDisplay selectedDay={selectedDay} data={timeTableData} /> : null
      }
      <TimetableMenu selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
        {/*<div 
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
        // onPointerDown={e => console.log("down")}
        // onPointerMove={e => console.log("move")}
        className="absolute top-32 bottom-32 left-0 right-0 z-1 bg-transparent">
      </div>*/}
    </>
  );
}
