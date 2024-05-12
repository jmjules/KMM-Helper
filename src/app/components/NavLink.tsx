"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { VscOutput, VscCalendar } from "react-icons/vsc";
import { GiBurningBook } from "react-icons/gi";

export default function NavLink({pathString, iconString}) {

      return (
            <Link href={pathString} className={`text-xl rounded-lg ${usePathname() == pathString ? "text-fuchsia-500" : ""}  p-3 flex place-content-center `}>
             
                  {iconString === "timetable" ? <VscOutput className='h-9 w-9' /> : null}
                  {iconString === "calendar" ? <VscCalendar className='h-9 w-9' /> : null}
                  {iconString === "exams" ? <GiBurningBook className='h-9 w-9' /> : null}
             
            </Link>
      )
}
