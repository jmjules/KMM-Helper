import React from 'react'
import SubPageHeader from '../components/SubPageHeader'

export default function Exams() {
  return (
    <>
      <SubPageHeader pageTitle={"Prüfungen"} />
      <div className="max-w-[690px] mx-auto">


        <div className='m-5 p-6 bg-neutral-800 rounded-lg' >
        <h2 className=' text-3xl font-bold'>Klausuren</h2>
        <p className='text-xs' >Prüfungsplan Version 5</p>
        <p className='text-xs'>Prüfungszeit: 08.07.2024 - 26.07.2024</p>
        <p className='text-xs bg-red-600'>Prüfungsanmeldung: 17.06.2024 - 24.06.2024</p>

        <p className='text-xl mt-3'>Interkulturelle Komm.</p>
        <div className="text-xs">
          <p>Tewes</p>
          <p>Di, 09.07.24</p>
          <p>09:00 - 10:30</p>
          <p>AM ???</p>
        </div>

        <p className='text-xl mt-3'>Sprachmanagement</p>
            <div className="text-xs">
              <p>Drewer</p>
              <p>Do, 11.07.24</p>
              <p>09:00 - 10:30</p>
              <p>AM ???</p>
            </div>

        </div>




        <div className='m-5 p-6 bg-neutral-800 rounded-lg' >
          <h2 className='text-2xl font-bold'>Projekt-Deadlines</h2>
          <p className='text-xl mt-3'>Technikdidaktik</p>
          <p className='text-xs'>Endpräsentation und Abgabe am letzten Termin: 21.06.</p>

          <p className='text-xl mt-3'>Sprachmanagement</p>
          <p className='text-xs'>Endpräsentation: Mo, 24.06. 14:15 - 17:30</p>
          <p className='text-xs'>Abgabe Ausarbeitung: 17.07. 23:59 per mail an chrisitane[punkt]glaeser[at]bluehorse[punkt]de</p>

          <p className='text-xl mt-3'>Info-Systeme</p>
          <p className='text-xs'>???</p>

          <p className='text-xl mt-3'>Visuelle Kommunikation</p>
          <p className='text-xs'>???</p>

        </div>

      </div>

    </>
  )
}
