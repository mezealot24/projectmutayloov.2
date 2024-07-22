import React from 'react'

export const HoroscopeHeader = () => {
  return (
    <div className="container">
        <div className="flex flex-col justify-center pl-4 pr-4 py-8 bg-violet-200 text-neutral-700">
            <div className="text-sm leading-6">Home &gt; Horoscope</div>
            <div className="mt-4 text-3xl font-bold leading-6 text-black">
            Horoscope
            </div>
            <div className="mt-4 text-base leading-6">Horoscope Description</div>
        </div>
    </div>
   
  )
}
