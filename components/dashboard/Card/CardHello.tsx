import React, { useEffect, useState } from 'react'
import { AiFillClockCircle } from 'react-icons/ai'

const CardHello: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<{ hour: number; minute: string; second: string }>({
    hour: 0,
    minute: '00',
    second: '00'
  })

  useEffect(() => {
    const updateCurrentTime = () => {
      const now = new Date()
      const currentHour = now.getHours()
      const currentMinute = now.getMinutes().toString().padStart(2, '0') // Add leading zero to minutes
      const currentSecond = now.getSeconds().toString().padStart(2, '0') // Add leading zero to seconds
      setCurrentTime({ hour: currentHour, minute: currentMinute, second: currentSecond })
    }

    // Update the current time initially
    updateCurrentTime()

    // Set up an interval to update the time every second
    const intervalId = setInterval(updateCurrentTime, 1000)

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId)
  }, [])

  return (
    <div
      className='p-6 bg-no-repeat border bg-rose-100 border-rose-200 rounded-xl'
      style={{
        backgroundImage:
          'url(https://previews.dropbox.com/p/thumb/AAvyFru8elv-S19NMGkQcztLLpDd6Y6VVVMqKhwISfNEpqV59iR5sJaPD4VTrz8ExV7WU9ryYPIUW8Gk2JmEm03OLBE2zAeQ3i7sjFx80O-7skVlsmlm0qRT0n7z9t07jU_E9KafA9l4rz68MsaZPazbDKBdcvEEEQPPc3TmZDsIhes1U-Z0YsH0uc2RSqEb0b83A1GNRo86e-8TbEoNqyX0gxBG-14Tawn0sZWLo5Iv96X-x10kVauME-Mc9HGS5G4h_26P2oHhiZ3SEgj6jW0KlEnsh2H_yTego0grbhdcN1Yjd_rLpyHUt5XhXHJwoqyJ_ylwvZD9-dRLgi_fM_7j/p.png?fv_content=true&size_mode=5)',
        backgroundPosition: '90% center'
      }}
    >
      <div className='text-4xl text-rose-400'>
        Welcome to
        <p className='font-semibold'>Anh ngữ Dream ✨</p>
      </div>
      <div className='flex items-center justify-start mt-12'>
        <span className='inline-block px-4 py-1 text-lg text-white rounded-xl bg-rose-400 w-fit h-fit'>
          <p className='flex items-center font-semibold'>
            <AiFillClockCircle className='mr-2' />
            {currentTime.hour} : {currentTime.minute} : {currentTime.second}
          </p>
        </span>
      </div>
    </div>
  )
}

export default CardHello
