import Image from "next/image";
import Link from "next/link";

import HowToNotice from "@/app/components/HowToNotice";

export default function Home() {
  return (
    <main className="min-h-screen flex-col items-center justify-between md:p-24">
      <h1 className="text-2xl">Welcome!🌻</h1>
      <nav className="text-purple-500 flex flex-col md:flex-row gap-5 mt-5">
        <Link 
         href="/stundenplan" 
         className="rounded-lg bg-slate-800 p-2 pb-10">
          Hier gehts zum Stundenplan
        </Link>

        <Link 
         href="/semesterdaten" 
         className="rounded-lg bg-slate-800 p-2 pb-10">
          Semesterdaten
        </Link>
      </nav>

      <HowToNotice />

    </main>
  );
}
