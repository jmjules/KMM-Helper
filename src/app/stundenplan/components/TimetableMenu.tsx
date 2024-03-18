import PropTypes from "prop-types";

type TimetableMenuProps = {
    selectedDay: 'Montag' | 'Dienstag' | 'Mittwoch' | 'Donnerstag' | 'Freitag';
    setSelectedDay: React.Dispatch<React.SetStateAction<'Montag' | 'Dienstag' | 'Mittwoch' | 'Donnerstag' | 'Freitag'>>;
  };

export default function TimetableMenu( {selectedDay, setSelectedDay}: TimetableMenuProps ) {
    const sD = selectedDay
    const test2 = setSelectedDay
    const options: ('Montag' | 'Dienstag' | 'Mittwoch' | 'Donnerstag' | 'Freitag')[] = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag"]
    // const [selectedOption, setSelectedOption] = useState(options[0])

    const handleClick = (direction : string) => {
        const currentIndex = options.indexOf(selectedDay);


        // setSelectedDay(options[currentIndex + 1]);
        if (direction === 'next' && currentIndex === options.length - 1) {
            setSelectedDay(options[0])
        }
        else if (direction === 'previous' && currentIndex === 0) {
            setSelectedDay(options[options.length - 1])
        }
        else if (direction === 'next') {
            setSelectedDay(options[currentIndex + 1]);
            } 
        else if (direction === 'previous') {
            setSelectedDay(options[currentIndex - 1]);
            }

    }

    return (
        <div className="fixed z-10 bottom-16 left-2/4 -translate-x-1/2 flex gap-2">
            <button onClick={()=> handleClick("previous")} className="bg-zinc-900 border border-stone-50 rounded px-4"> {"<"} </button>
            <select 
            className="text-3xl bg-zinc-900 border border-stone-50 rounded px-3 text-center"
            value={selectedDay}
            onChange={(e) => setSelectedDay(e.target.value as 'Montag' | 'Dienstag' | 'Mittwoch' | 'Donnerstag' | 'Freitag')}
            >
                {options.map((option) => (
                    <option key={option} value={option} className="bg-zinc-700"> {option} </option> 
                ))}
            </select>
            <button onClick={()=> handleClick("next")} className="bg-zinc-900 border border-stone-50 rounded px-4"> {">"} </button>
        </div>
    )
}