'use client'
import React from 'react'

import Split from 'react-split'
import ScreenExam from './ScreenExam'
import ScreenDoing from './ScreenDoing'

interface DataProps {
  data: [
    {
      id: string
      title: string
      testId: string
      question: string
      answer: string
      questions: [
        {
          id: string
          questionGroupId: string
          question: string
          answers: []
          type: string
          options?: []
        }
      ]
    }
  ]
}

const Screen = ({ data }: DataProps) => {
  console.log('12312', data)
  return (
    <Split sizes={[50, 50]} minSize={300} expandToMin={false} direction='horizontal' className='flex min-h-full'>
      <ScreenExam data={data} />
      <ScreenDoing data={data} />
    </Split>
  )
}

export default Screen
