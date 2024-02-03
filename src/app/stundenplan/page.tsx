import { promises as fs } from 'fs';


import Link from "next/link";
import Timetable from './components/Timetable';


export default async function TimetablePage () {


    
    const file = await fs.readFile(process.cwd() + "/src/app/stundenplan/data.json", "utf8");
    const data =  JSON.parse(file);


    return (
        <main className="min-h-screen flex-col items-center justify-between md:p-24">
            
            <div className="h-24 bg-purple-700 mb-5 p-3 flex flex-row gap-2 place-items-center">
                <Link href="/">
                <img src="favicon.ico" className="w-7 h-7" />
                </Link>
                <h1 className='text-lg'> {">"} Stundenplan</h1> 
            </div>
            
            <Timetable timeTableData={ data } />

        </main>



    );
}