import Link from "next/link";

import TimetableMenu from "./components/TimetableMenu";
import TimetableDisplay from "./components/TimetableDisplay";


export default async function TimetablePage () {


    return (
        <main className="min-h-screen flex-col items-center justify-between md:p-24">
            
            <div className="h-24 bg-purple-700 p-3 flex flex-row gap-2 place-items-center">
                <Link href="/">
                <img src="favicon.ico" className="w-7 h-7" />
                </Link>
                <h1 className='text-lg'> {">"} Stundenplan</h1> 
            </div>
            
            <TimetableDisplay/>
            <TimetableMenu/>

        </main>



    );
}