import Image from "next/image";
import Link from "next/link";

import HowToNotice from "@/app/components/HowToNotice";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="h-36 p-3 mb-7 bg-red-700 flex place-items-center">
        <h1 className="text-4xl font-extrabold">KMM-Hub</h1>
      </div>

      <h2 className="text-2xl m-2">Welcome!🌻</h2>
      <nav className="text-purple-500 flex flex-col md:flex-row gap-5 mt-5 p-2">
        <Link 
         href="/stundenplan" 
         className="text-xl rounded-lg bg-slate-800 p-5 pb-7">
          <Image 
            src="/images/unsplash-calendar.jpg"
            width={350}
            height={300}
            alt="Image of calendar"
          />
          Hier gehts zum Stundenplan
        </Link>

        
        <Link 
         href="/semesterdaten" 
         className="text-xl rounded-lg bg-slate-800 p-5 pb-7">
          <Image 
            src="/images/unsplash-clock.jpg"
            width={350}
            height={300}
            alt="Image of calendar"
          />
          Semesterdaten
        </Link>
      </nav>

      <HowToNotice />

    </main>
  );
}
