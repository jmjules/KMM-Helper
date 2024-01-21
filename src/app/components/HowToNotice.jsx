'use client'
import { useState, useEffect } from "react";


export default function HowToNotice() {

    let initialHiddenState = localStorage.getItem("noticeAcknowledged") === "true";

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
    <>
        <h2 className="mt-16 text-xl">How to use:</h2>
        <p>
          Einfach am handy als Lesezeichen abspeichern, sodass man damit über den
          Home-screen mit einem App-Icon darauf zugreifen kann.
        </p>
        <button 
         className='bg-green-700 px-4 py-2 rounded-lg'
         onClick={savetNoticeAcknowledged}
         >Okay</button>
    </>
  )
}
