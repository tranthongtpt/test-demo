import { format, isSameMinute, parseISO } from 'date-fns'
import { BsPatchCheck } from 'react-icons/bs'
import React, { memo, useMemo, useState } from 'react'
import { cn } from '../../utils/utils'

// eslint-disable-next-line react/display-name
const AvailableHours = memo(({ freeTimes }: { freeTimes: Date[] }) => {
  const [selectedTime, setSelectedTime] = useState<Date>()

  return (
    <>
      <div className=''>
        <div className='flex justify-between	'>
          <p>Sáng</p>
          <span>
            Chỗ trống còn lại: <span className='font-semibold text-orange-950'>{freeTimes.length}</span>
          </span>
        </div>
        {/* <button
          type='button'
          className={cn(
            'bg-green-200 rounded-lg px-2 text-gray-800 relative hover:border hover:border-green-400 w-[100px] h-[26px]'
          )}
        >
          <BsPatchCheck
            className={cn(
              'w-[16px] h-[16px] absolute hidden top-0 right-0 transform translate-x-1 -translate-y-1.5 text-green-700'
            )}
          />
          09:00 - 12:00
        </button> */}

        {/* <div className='mt-6 space-y-8 xl:mt-12'>

          <div className='flex items-center justify-between max-w-2xl px-8 py-4 mx-auto border cursor-pointer rounded-xl dark:border-gray-700'>
            <div className='flex items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-5 h-5 text-gray-400 sm:h-9 sm:w-9'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                  clipRule='evenodd'
                />
              </svg>

              <div className='flex flex-col items-center mx-5 space-y-1'>
                <h2 className='text-lg font-medium text-gray-700 sm:text-2xl dark:text-gray-200'>Sáng</h2>
                <div className='px-2 text-xs text-blue-500 bg-gray-100 rounded-full sm:px-4 sm:py-1 dark:bg-gray-700 '>
                  Slot còn lại: 10
                </div>
              </div>
            </div>

            <button
              type='button'
              className={cn(
                'bg-green-200 rounded-lg px-2 text-gray-800 relative hover:border hover:border-green-400 w-[100px] h-[26px]'
              )}
            >
              <BsPatchCheck
                className={cn(
                  'w-[16px] h-[16px] absolute hidden top-0 right-0 transform translate-x-1 -translate-y-1.5 text-green-700'
                )}
              />
              09:00 - 12:00
            </button>
          </div>

           <div className='flex items-center justify-between max-w-2xl px-8 py-4 mx-auto border border-blue-500 cursor-pointer rounded-xl'>
            <div className='flex items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-5 h-5 text-blue-600 sm:h-9 sm:w-9'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                  clipRule='evenodd'
                />
              </svg>

              <div className='flex flex-col items-center mx-5 space-y-1'>
                <h2 className='text-lg font-medium text-gray-700 sm:text-2xl dark:text-gray-200'>Popular</h2>
                <div className='px-2 text-xs text-blue-500 bg-gray-100 rounded-full sm:px-4 sm:py-1 dark:bg-gray-700 '>
                  Save 20%
                </div>
              </div>
            </div>

            <h2 className='text-2xl font-semibold text-blue-600 sm:text-4xl'>
              $99 <span className='text-base font-medium'>/Month</span>
            </h2>
          </div>

          <div className='flex items-center justify-between max-w-2xl px-8 py-4 mx-auto border cursor-pointer rounded-xl dark:border-gray-700'>
            <div className='flex items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-5 h-5 text-gray-400 sm:h-9 sm:w-9'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                  clipRule='evenodd'
                />
              </svg>

              <div className='flex flex-col items-center mx-5 space-y-1'>
                <h2 className='text-lg font-medium text-gray-700 sm:text-2xl dark:text-gray-200'>Enterprise</h2>
                <div className='px-2 text-xs text-blue-500 bg-gray-100 rounded-full sm:px-4 sm:py-1 dark:bg-gray-700 '>
                  Save 20%
                </div>
              </div>
            </div>

            <h2 className='text-2xl font-semibold text-gray-500 sm:text-4xl dark:text-gray-300'>
              $149 <span className='text-base font-medium'>/Month</span>
            </h2>
          </div> 

         
        </div> */}
      </div>
    </>
  )
})

export default AvailableHours
