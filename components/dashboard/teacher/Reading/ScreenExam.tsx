'use client'

import React, { useState } from 'react'
import parse from 'html-react-parser'
// import Highlightable from '@/components/Highlight'
interface DataProps {
  data: [
    {
      id: string
      title: string
      testId: string
      question: string
      questions: [
        {
          id: string
          questionGroupId: string
          question: string
          answers: []
          type: string
          options?: []
        },
      ]
    },
  ]
}

const ScreenExam = ({ data }: DataProps) => {
  const [ranges, setRanges] = useState([
    {
      id: 0,
      offset: 10,
      length: 29,
    },
  ])

  const handleHightlight = (range: any) => {
    setRanges([...ranges, range])
  }

  const deleteMark = (range: any) => {
    setRanges(ranges.filter((r) => r.id !== range))
    // console.log(ranges.filter(r => r.id !== range));
  }

  return (
    <div className="h-full w-full overflow-y-auto bg-slate-50/50 p-8 pt-8">
      {data?.map((item) => (
        <>
          {/* <p className='text-3xl font-bold uppercase'>{item.title}</p>
          <hr /> */}
          {/* <p className='text-3xl font-bold uppercase'> */}
          <div
            className="ck-content w-full"
            onMouseUp={() =>
              console.log(window.getSelection()?.getRangeAt(0).getBoundingClientRect())
            }
          >
            {parse(String(item.question))}
          </div>
        </>
      ))}
    </div>
  )
}

export default ScreenExam
