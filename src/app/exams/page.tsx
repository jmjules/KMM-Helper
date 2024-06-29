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

          <p className='text-xl mt-3'>Info-Systeme</p>
          <p className='text-xs'>Abgabe: 16.07. 14 Uhr, Intranet-Ordner</p>

          <p className='text-xl mt-3'>Visuelle Kommunikation</p>
          <p className='text-xs'>Endpräsentation: 03.07. </p>
          <p className='text-xs'>Abgabe: Mo 08.07. 24Uhr Ilias/ Sekretariat</p>

          <p className='text-xl mt-3'>Sprachmanagement</p>
          <p className='text-xs line-through'>Endpräsentation: Mo, 24.06.</p>
          <p className='text-xs'>Abgabe Ausarbeitung: 17.07. 23:59 per mail</p>

          <p className='text-xl mt-3 line-through'>Technikdidaktik</p>
          <p className='text-xs line-through'>Endpräsentation und Abgabe</p>

        </div>

      </div>

    </>
  )
}
