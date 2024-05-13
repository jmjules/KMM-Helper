import React from 'react'
import SubPageHeader from '../components/SubPageHeader'

export default function Exams() {
  return (
    <>
      <SubPageHeader pageTitle={"Prüfungen"} />
      <div className="max-w-[690px] mx-auto">
        <p className='bg-stone-800 rounded-lg mt-3 mx-3 p-3'>
          Prüfungszeit: 08.07.2024 - 26.07.2024
        <p>Prüfungsplan Version 4</p>
        </p>
        <h2 className='text-center text-2xl font-bold'>Prüfungen</h2>
        <ul className='flex flex-col gap-2'>
          <li className='bg-stone-800 mx-10 p-2 rounded-lg'>
            <p className='text-xl'>Interkulturelle Komm.</p>
            <div className="text-xs">
              <p>Tewes</p>
              <p>Di, 09.07.24</p>
              <p>09:00 - 10:30</p>
              <p>AM ???</p>
            </div>
          </li>
          <li className='bg-stone-800 mx-10 p-2 rounded-lg'>
            <p className='text-xl'>Sprachmanagement</p>
            <div className="text-xs">
              <p>Drewer</p>
              <p>Do, 11.07.24</p>
              <p>09:00 - 10:30</p>
              <p>AM ???</p>
            </div>
          </li>
        </ul>
      </div>

      <div className="text-center max-w-[690px] mx-auto mt-7">
        <h2 className='text-2xl font-bold'>Projekt-Deadlines</h2>
        <p className='bg-stone-800 mx-10 rounded-lg'>???</p>
      </div>

      <div className='py-5'></div>
    </>
  )
}
