import React, { useState, useMemo } from 'react'
import Image from 'next/image'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { BsPatchCheck } from 'react-icons/bs'
import {
  add,
  addDays,
  addHours,
  eachDayOfInterval,
  eachMinuteOfInterval,
  endOfDay,
  endOfMonth,
  endOfWeek,
  format,
  getDay,
  isAfter,
  isBefore,
  isEqual,
  isSameMonth,
  isThisMonth,
  isToday,
  parse,
  parseISO,
  set,
  startOfDay,
  startOfToday,
  startOfWeek,
  startOfYesterday
} from 'date-fns'
import { cn, dayNames } from '@/utils/utils'

import {Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react'
import TimesBar from './timesBar'
const reservations = [
  addHours(startOfToday(), 5).toString(),
  addHours(startOfToday(), 6).toString(),
  addHours(startOfToday(), 7).toString(),
  addHours(startOfToday(), 8).toString(),
  addHours(startOfToday(), 9).toString(),
  addDays(new Date(addHours(startOfToday(), 4)), 3).toString()
]
let colStartClasses = ['', 'col-start-2', 'col-start-3', 'col-start-4', 'col-start-5', 'col-start-6', 'col-start-7']
const PopoverDatePicker = ({
  setSelectedDay,
  selectedDay,
  selectRadios,
  setSelectRadios,
  setErrorMessage
}: {
  setSelectedDay: any
  selectedDay: any
  selectRadios: any
  setSelectRadios: any
  setErrorMessage: any
}) => {
  // display div of availables times
  const [calendarTouched, setCalendarTouched] = useState<Boolean>(false)
  const [radioTouched, setRadioTouched] = useState<Boolean>(false)

  // handle dates
  let today = startOfToday()
  let [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'))
  //   let [selectedDay, setSelectedDay] = useState<String>()
  let firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date())
  const time = new Date(selectedDay).toUTCString()

  // Chuyển đổi thời gian sang ngày tháng năm
  const dates = new Date(time).toLocaleDateString('vi-VN')

  const handleChangeValue = (e: any) => {
    setSelectRadios(e.target.value)
    setRadioTouched(true)
  }
  let days = useMemo(
    () =>
      eachDayOfInterval({
        start: startOfWeek(firstDayCurrentMonth, { weekStartsOn: 1 }),
        end: endOfWeek(endOfMonth(firstDayCurrentMonth), { weekStartsOn: 1 })
      }),
    [firstDayCurrentMonth]
  )
  // all days avaiilable times in this month until you change it
  const [availableTimesInThisMonth, setAvailableTimesInThisMonth] = useState<number[]>([])
  const [availableTimesInThisMonthForEachDay, setAvailableTimesInThisMonthForEachDay] = useState<Date[][]>([])

  // next and prev month functions
  function prevMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
  }
  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
  }

  // calculate the number of available times for each day in this month
  useMemo(() => {
    let thisMonthTimesLength: number[] = []
    let thisMonthTimesEachDay: Date[][] = []
    days.map((day, dayIdx) => {
      // get times

      const StartOfToday = startOfDay(day)
      const endOfToday = endOfDay(day)
      // change your working hours here
      const startHour = set(StartOfToday, { hours: 1 })
      const endHour = set(endOfToday, { hours: 17, minutes: 45 })
      let hoursInDay = eachMinuteOfInterval(
        {
          start: startHour,
          end: endHour
        },
        { step: 15 }
      )
      // filter the available hours
      let freeTimes = hoursInDay.filter((hour) => !reservations.includes(parseISO(hour.toISOString()).toString()))
      thisMonthTimesLength.push(freeTimes.length)
      thisMonthTimesEachDay.push(freeTimes)
    })

    setAvailableTimesInThisMonth(thisMonthTimesLength)
    setAvailableTimesInThisMonthForEachDay(thisMonthTimesEachDay)
  }, [currentMonth])
  return (
    <>
      {/* button left */}
      <div className='flex items-center flex-1 px-4 border rounded-2xl border-slate-400 '>
        <div className='w-full py-3'>
          <div className='flex items-center justify-between '>
            <Popover placement='bottom' showArrow={true} offset={20}>
              <PopoverTrigger>
                <div className='flex items-start flex-1 space-x-2 cursor-pointer'>
                  <div className='flex items-center justify-center w-4 h-4'>
                    <Image src='/svg/calendar.svg' width={150} height={150} alt='loader' />
                  </div>
                  <div>
                    <p className='text-xs font-bold text-black dark:text-white'>Ngày</p>
                    <p className='text-base text-black dark:text-white'>
                      {calendarTouched === true ? dates : 'Chọn ngày thi'}
                    </p>
                  </div>
                </div>
              </PopoverTrigger>
              <PopoverContent>
                <div className='flex flex-col gap-2 h-[390px] w-[410px] mt-12'>
                  <div className='grid grid-cols-3'>
                    <button type='button' onClick={prevMonth} disabled={isThisMonth(new Date(currentMonth))}>
                      <FaChevronLeft
                        size={20}
                        aria-hidden='true'
                        className={cn(isThisMonth(new Date(currentMonth)) && 'text-gray-300')}
                      />
                    </button>
                    <h2 className='flex justify-center font-semibold text-orange-950'>
                      {format(firstDayCurrentMonth, ' MMMM yyyy')}
                    </h2>
                    <button type='button' className='flex justify-end' onClick={nextMonth}>
                      <FaChevronRight size={20} aria-hidden='true' />
                    </button>
                  </div>

                  <div>
                    <div className='grid grid-cols-7 mt-4'>
                      {dayNames.map((day, i) => {
                        return (
                          <div
                            key={i}
                            className={cn('flex justify-center items-center text-sm text-blue-500 w-full py-2', {
                              'text-orange-400 bg-orange-50 rounded-t-lg': day === 'Sun' || day === 'Sat'
                            })}
                          >
                            {day}
                          </div>
                        )
                      })}
                    </div>

                    <div className='grid grid-cols-7 text-sm'>
                      {days.map((day, dayIdx) => {
                        return (
                          <div
                            key={day.toString()}
                            className={cn(
                              dayIdx === 0 && colStartClasses[getDay(day) - 1],
                              'h-14 justify-center flex items-center',
                              (getDay(day) === 0 || getDay(day) === 6) && 'bg-orange-50 rounded-lg'
                            )}
                          >
                            <button
                              onClick={() => {
                                setCalendarTouched(true)
                                setSelectedDay(day)
                                setRadioTouched(false)
                                setSelectRadios('')
                              }}
                              className={cn(
                                'w-12 h-12 flex flex-col p-2 justify-center items-center rounded-xl gap-0 group bg-gray-50 relative group',
                                isEqual(day, selectedDay) && 'bg-orange-100 text-slate-900 text-lg',
                                isEqual(today, day) && 'text-blue-900 bg-blue-50',
                                isBefore(day, today) && 'text-red-800 bg-red-50 cursor-not-allowed',
                                isEqual(today, day) && 'text-blue-900 bg-blue-50',
                                isBefore(day, today) && 'cursor-not-allowed',
                                isEqual(day, selectedDay) && isToday(day) && 'bg-blue-200',
                                !isEqual(day, selectedDay) &&
                                  !isToday(day) &&
                                  !isSameMonth(day, firstDayCurrentMonth) &&
                                  'text-gray-400',
                                !isEqual(day, selectedDay) &&
                                  !isToday(day) &&
                                  isSameMonth(day, firstDayCurrentMonth) &&
                                  'text-gray-900'
                              )}
                              disabled={isBefore(day, today)}
                            >
                              {isAfter(day, startOfYesterday()) && (
                                <span className='hidden group-hover:flex absolute top-0 -translate-x-.5 -translate-y-4 z-10 text-[11px] bg-slate-900 text-slate-100 px-1 rounded-md gap-1 items-center'>
                                  {/* <span>{availableTimesInThisMonth[dayIdx]}</span>
                                              <span>Chỗ trống</span> */}
                                  <svg
                                    className='w-3 h-3 text-white dark:text-white'
                                    aria-hidden='true'
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 20 20'
                                  >
                                    <path
                                      stroke='currentColor'
                                      strokeLinecap='round'
                                      strokeLinejoin='round'
                                      strokeWidth='2'
                                      d='M4.333 6.764a3 3 0 1 1 3.141-5.023M2.5 16H1v-2a4 4 0 0 1 4-4m7.379-8.121a3 3 0 1 1 2.976 5M15 10a4 4 0 0 1 4 4v2h-1.761M13 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-4 6h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z'
                                    />
                                  </svg>
                                  <span>3/30</span>
                                </span>
                              )}

                              <time
                                dateTime={format(day, 'yyyy-MM-dd')}
                                className={cn(
                                  'group-hover:text-lg',
                                  (isEqual(day, selectedDay) || isToday(day)) && 'font-semibold'
                                )}
                              >
                                {format(day, 'd')}
                              </time>

                              <BsPatchCheck
                                className={cn(
                                  'hidden',
                                  isEqual(day, selectedDay) &&
                                    'absolute block top-0 right-0 h-[18px] w-[18px] translate-x-1 -translate-y-1 text-orange-900',
                                  isEqual(day, today) && 'text-blue-900'
                                )}
                              />

                              {isAfter(day, startOfYesterday()) && (
                                <TimesBar times={availableTimesInThisMonthForEachDay[dayIdx]} />
                              )}
                            </button>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>

            {/* end datepicktime */}
            {calendarTouched && (
              <span
                role='button'
                aria-label='clear value'
                onClick={() => {
                  setCalendarTouched(false)
                  setRadioTouched(false)
                  setSelectRadios('')
                  setSelectedDay('')
                  setErrorMessage('')
                }}
              >
                <span className='text-black/70 text-sm bg-gray-100 py-1 px-2 rounded-full hover:bg-gray-200 transition-all duration-200 leading-[1]'>
                  Chọn lại
                </span>
              </span>
            )}
          </div>
        </div>
      </div>
      {/* button right */}
      <div className='flex items-center flex-1 px-4 border rounded-2xl border-slate-400'>
        <div className='flex flex-col items-start w-full gap-2 cursor-pointer rounded-2xl'>
          <div className='w-full'>
            <div
              className='flex items-start gap-2 text-sm cursor-pointer focus:outline'
              id='headlessui-menu-button-64'
              aria-haspopup='true'
              aria-expanded='false'
              data-headlessui-state=''
            >
              <div className='w-full py-3'>
                <div className='flex items-center justify-between '>
                  <Popover placement='bottom' showArrow={true} offset={20} size='sm'>
                    <PopoverTrigger>
                      <div className='flex items-start flex-1 space-x-2 cursor-pointer'>
                        <div className='flex items-center justify-center w-4 h-4'>
                          <Image src='/svg/clock.svg' width={400} height={400} alt='loader' />
                        </div>
                        <div>
                          <p className='text-xs font-bold text-black dark:text-white'>Ca thi L-R-W</p>
                          <p className='text-base text-black dark:text-white'>
                            {radioTouched === true ? selectRadios : 'Chọn thời gian thi'}
                          </p>
                        </div>
                      </div>
                    </PopoverTrigger>
                    <PopoverContent>
                      {/* add datepicktime */}
                      {calendarTouched === false ? (
                        'Vui lòng chọn ngày thi trước'
                      ) : (
                        <div className='block'>
                          <span className='flex items-center justify-center w-full gap-1'>
                            <span>
                              Chọn thời gian đặt chỗ của bạn cho ngày
                              <span className='pl-1 font-semibold text-orange-950'>{dates}</span>
                            </span>
                          </span>
                          <ul className='uls' style={{ display: 'flex', flexDirection: 'column' }}>
                            <li className='lis'>
                              <input
                                type='radio'
                                id='f-option'
                                name='selector'
                                value='09:00 - 12:00'
                                onChange={handleChangeValue}
                                checked={selectRadios === '09:00 - 12:00'}
                              />
                              <label htmlFor='f-option' className='border cursor-pointer rounded-xl'>
                                <div className='flex items-center justify-between p-5 mx-auto'>
                                  <div className='flex flex-col items-center mx-10 space-y-1'>
                                    <h2 className='text-lg font-medium text-gray-700'>Buổi sáng</h2>
                                    <div className='px-2 text-xs text-red-500 bg-gray-100 rounded-full sm:px-4 sm:py-1 dark:bg-gray-700 '>
                                      09:00 - 12:00
                                    </div>
                                  </div>
                                  <span className='text-2xl font-semibold text-gray-500'>Còn 9 slot</span>
                                </div>
                              </label>
                              <div className='check'></div>
                            </li>

                            <li className='lis'>
                              <input
                                type='radio'
                                id='s-option'
                                name='selector'
                                value='14:00 - 17:00'
                                onChange={handleChangeValue}
                                checked={selectRadios === '14:00 - 17:00'}
                              />
                              <label htmlFor='s-option' className='border cursor-pointer rounded-xl'>
                                <div className='flex items-center justify-between p-5 mx-auto'>
                                  <div className='flex flex-col items-center mx-10 space-y-1'>
                                    <h2 className='text-lg font-medium text-gray-700'>Buổi chiều</h2>
                                    <div className='px-2 text-xs text-red-500 bg-gray-100 rounded-full sm:px-4 sm:py-1 dark:bg-gray-700 '>
                                      14:00 - 17:00
                                    </div>
                                  </div>
                                  <span className='text-2xl font-semibold text-gray-500'>Còn 10 slot</span>
                                </div>
                              </label>
                              <div className='check'>
                                <div className='inside'></div>
                              </div>
                            </li>

                            <li className='lis'>
                              <input
                                type='radio'
                                id='t-option'
                                name='selector'
                                value='18:00 - 21:00'
                                onChange={handleChangeValue}
                                checked={selectRadios === '18:00 - 21:00'}
                              />
                              <label htmlFor='t-option' className='border cursor-pointer rounded-xl'>
                                <div className='flex items-center justify-between p-5 mx-auto'>
                                  <div className='flex flex-col items-center mx-10 space-y-1'>
                                    <h2 className='text-lg font-medium text-gray-700'>Buổi tối</h2>
                                    <div className='px-2 text-xs text-red-500 bg-gray-100 rounded-full sm:px-4 sm:py-1 dark:bg-gray-700 '>
                                      18:00 - 21:00
                                    </div>
                                  </div>
                                  <span className='text-2xl font-semibold text-gray-500'>Còn 12 slot</span>
                                </div>
                              </label>
                              <div className='check'>
                                <div className='inside'></div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      )}
                    </PopoverContent>
                  </Popover>
                  {radioTouched && (
                    <span
                      role='button'
                      aria-label='clear value'
                      onClick={() => {
                        setRadioTouched(false)
                        setSelectRadios('')
                        setErrorMessage('')
                      }}
                    >
                      <span className='text-black/70 text-sm bg-gray-100 py-1 px-2 rounded-full hover:bg-gray-200 transition-all duration-200 leading-[1]'>
                        Chọn lại
                      </span>
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default PopoverDatePicker
