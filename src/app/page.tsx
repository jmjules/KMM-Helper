import Image from "next/image";
import Link from "next/link";

import HowToNotice from "@/app/components/HowToNotice";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="h-36 p-3 mb-7 bg-fuchsia-900 flex place-items-center">
        <h1 className="text-4xl font-extrabold">KMM-Hub</h1>
      </div>



      <div className="p-2">
        <h2 className="text-2xl">Welcome!🌻</h2>

        <HowToNotice />

        <nav className="flex flex-col md:flex-row gap-5 mt-5">
          <Link
            href="/stundenplan"
            className="text-xl rounded-lg bg-stone-800 px-5 py-7 flex gap-5 items-center"
          >
            <img src="/icons/icon-timetable.svg" className="w-9" />
            Stundenplan
          </Link>

          <Link
            href="/semesterdaten"
            className="text-xl rounded-lg bg-stone-800 px-5 py-7 flex gap-5 items-center"
          >
            <img src="/icons/icon-calendar.svg" className="w-9" />
            Semesterdaten
          </Link>

          <Link
            href="/"
            className="text-xl rounded-lg bg-stone-800 px-5 py-7 flex gap-5 items-center"
          >
            {/* <img src="/icons/icon-calendar.svg" className="w-9" /> */}
            <h2 className="text-xl font-bold">???</h2>
            Prüfungen/ Abgaben
          </Link>


          {/* <Link
            href="/stundenplanSlider"
            className="text-xl rounded-lg bg-stone-800 px-5 py-7 flex gap-5 items-center"
          >
            <img src="/icons/icon-timetable.svg" className="w-9" />
            Stundenplan mit slider
          </Link> */}
        </nav>
      </div>
    </main>
  );
}
