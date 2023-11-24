import React, { useState } from 'react'
import { DateRangePicker, defaultInputRanges, defaultStaticRanges } from 'react-date-range'
import { addDays } from 'date-fns'
import { vi } from 'date-fns/locale'
import { Button, Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react'
import { BsCalendar3 } from 'react-icons/bs'

interface DateRangePickerProps {
  setDate: (date: { fromDate: number; toDate: number }) => void
}

const DateRangePickerComponent: React.FC<DateRangePickerProps> = ({ setDate }) => {
  const staticRangesLabels: Record<string, string> = {
    Today: 'Hôm nay',
    Yesterday: 'Hôm qua',
    'This Week': 'Tuần hiện tại',
    'Last Week': 'Tuần trước',
    'This Month': 'Tháng hiện tại',
    'Last Month': 'Tháng trước'
  }

  const inputRangesLabels: Record<string, string> = {
    'days up to today': 'ngày cho đến hôm nay',
    'days starting today': 'ngày bắt đầu từ hôm nay'
  }

  function translateRange(dictionary: Record<string, string>) {
    return (item: any) => (dictionary[item.label] ? { ...item, label: dictionary[item.label] } : item)
  }

  const ruStaticRanges = defaultStaticRanges.map(translateRange(staticRangesLabels))
  const ruInputRanges = defaultInputRanges.map(translateRange(inputRangesLabels))

  const [selectionRangeBar, setSelectionRangeBar] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection'
    }
  ])

  return (
    <>
      <Popover placement='bottom-end'>
        <PopoverTrigger>
          <Button color='default' endContent={<BsCalendar3 />}>
            Chọn thời gian
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <div className='px-1 py-2'>
            <DateRangePicker
              locale={vi}
              moveRangeOnFirstSelection={false}
              ranges={selectionRangeBar}
              showDateDisplay={false}
              months={2}
              staticRanges={ruStaticRanges}
              inputRanges={ruInputRanges}
              direction='horizontal'
              onChange={(item) => {
                if (item.selection && item.selection.startDate && item.selection.endDate) {
                  setSelectionRangeBar([item.selection])
                  const valueStartDate = Date.parse(item.selection.startDate.toISOString()).valueOf()
                  const valueEndDate = Date.parse(item.selection.endDate.toISOString()).valueOf()
                  setDate((prev) => ({ ...prev, fromDate: valueStartDate, toDate: valueEndDate }))
                }
              }}
            />
          </div>
        </PopoverContent>
      </Popover>
    </>
  )
}

export default DateRangePickerComponent
