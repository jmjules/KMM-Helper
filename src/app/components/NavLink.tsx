"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

export default function NavLink({pathString, iconString}) {

      return (
            <Link href={pathString} className={`text-xl rounded-lg ${usePathname() == pathString ? "bg-fuchsia-900" : "bg-stone-800"}  p-3 flex place-content-center `}>
             <img src={`/icons/icon-${iconString}.svg`} className="w-9" />
            </Link>
      )
}