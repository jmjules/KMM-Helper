import { promises as fs } from "fs";

export default async function Timetable () {

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
        [day in "monday" | "tuesday" | "wednesday" | "thursday" | "friday" ] : ClassEntry
    }


    const file = await fs.readFile(process.cwd() + "/src/app/stundenplan/data.json", "utf8");
    const data =  JSON.parse(file);

    return (
        <main className="min-h-screen flex-col items-center justify-between p-24">
            <h1>Here you can see the timetable</h1>
            
            {data.monday.map( (entry : ClassEntry) => (
                <div className="bg-purple-800 rounded-lg m-2 p-1">
                    <p className="text-lg"> {entry.name} </p>
                    <p className="text-sm"> {entry.start} - {entry.end}, {entry.room} </p>
                    <p className="text-sm"> {entry.prof} </p>
                    <p className="text-sm"> {entry.body} </p>
                    <a href={entry.link[0]} target="_blank" className="text-green-500" > {entry.link[1]} </a>
                     
                </div>
            ))}
            
        </main>

    );
}