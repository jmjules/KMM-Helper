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
            <button onClick={()=> handleClick("previous")} className="bg-fuchsia-900 rounded px-4">
                <svg xmlns="http://www.w3.org/2000/svg" width={30} id="left" x="0" y="0" version="1.1" viewBox="0 0 29 29">
                    <path fill="none" stroke="#c8c8c8" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="m17.5 20.5-6-6 6-6"></path>
                </svg>
            </button>
            <select 
            className="text-3xl bg-fuchsia-900 rounded px-3 py-1 text-center"
            value={selectedDay}
            onChange={(e) => setSelectedDay(e.target.value as 'Montag' | 'Dienstag' | 'Mittwoch' | 'Donnerstag' | 'Freitag')}
            >
                {options.map((option) => (
                    <option key={option} value={option} className="bg-fuchsia-900"> {option} </option> 
                ))}
            </select>
            <button onClick={()=> handleClick("next")} className="bg-fuchsia-900 rounded px-4">
                <svg className="scale-x-[-1]" xmlns="http://www.w3.org/2000/svg" width={30} id="left" x="0" y="0" version="1.1" viewBox="0 0 29 29">
                    <path fill="none" stroke="#c8c8c8" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="m17.5 20.5-6-6 6-6"></path>
                </svg>    
             </button>
        </div>
    )
}