"use client"
import { useState } from "react";

export default function TimetableMenu() {
    const options = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
    const [selectedOption, setSelectedOption] = useState(options[0])

    const handleClick = (direction : string) => {
        const currentIndex = options.indexOf(selectedOption);


        setSelectedOption(options[currentIndex + 1]);
    }

  return (
    <div className="fixed bottom-10 left-2/4 -translate-x-1/2 flex gap-2">
        <button onClick={()=> handleClick("previous")} className="border border-stone-50 rounded px-3"> {"<"} </button>
        <select 
         className="text-3xl bg-transparent border border-stone-50 rounded px-3 text-center"
         onChange={(e) => setSelectedOption(e.target.value)} 
         value={selectedOption}
        >
            {options.map((option) => (
                <option key={option} value={option} className="bg-slate-700"> {option} </option> 
            ))}
        </select>
        <button onClick={()=> handleClick("next")} className="border border-stone-50 rounded px-3"> {">"} </button>
    </div>
  )
}
