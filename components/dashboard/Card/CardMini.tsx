import React from 'react'

const CardMini = ({ color, title, des, data }: any) => {
  return (
    <div
      className={`flex flex-col items-center w-full border border-gray-200 rounded-lg min-h-[120px] md:flex-row bg-gradient-to-l from-indigo-100 via-rose-50 to-amber-50`}
    >
      <div className='flex flex-col justify-between w-full p-4 leading-normal'>
        <h5 className={`mb-2 text-xl font-semibold tracking-tight text-gray-600 uppercase`}>{title}</h5>
        <p className={`mb-3 font-normal text-gray-700`}>{des}</p>
      </div>
      <p
        className={`object-cover p-4 text-4xl font-bold rounded-t-lg w-fit text-end md:h-auto md:rounded-none md:rounded-l-lg text-gray-500`}
      >
        {data}
      </p>
    </div>
  )
}

export default CardMini
