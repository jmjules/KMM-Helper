'use client'
import { useState, useEffect } from "react";


export default function HowToNotice() {

    // Check if localStorage is available
    const isLocalStorageAvailable = typeof localStorage !== 'undefined';

    // Retrieve the initial hidden state from localStorage or default to false
    const initialHiddenState = isLocalStorageAvailable && localStorage.getItem("noticeAcknowledged") === "true";

    const [isHidden, setIsHidden] = useState(initialHiddenState);

    useEffect(() => {
        localStorage.setItem("noticeAcknowledged", String(isHidden));
    }, [isHidden] );

    const savetNoticeAcknowledged = () => {
        setIsHidden(true);        
    }


  if (isHidden) {
    return null;
  }
  return (
    <div className="p-5 bg-green-900 rounded-lg">
        <h2 className="text-2xl">Tipp:</h2>
        <p>
          Einfach am handy als Lesezeichen abspeichern, sodass man damit über den
          Home-screen mit einem App-Icon darauf zugreifen kann.
        </p>
        <button 
         className='bg-green-700 mt-2 px-4 py-2 rounded-lg'
         onClick={savetNoticeAcknowledged}
         >Okay
        </button>
    </div>
  )
}
