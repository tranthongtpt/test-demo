'use client'
import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import CheckGrammarGPT from './CheckGrammarGPT'
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
        },
      ]
    },
  ]
}

const ScreenDoing = ({ data }: DataProps) => {
  console.log('DATA', data)
  const { data: session } = useSession()
  const userInfo = session?.user as User
  const [textareaValue, setTextareaValue] = useState('')

  useEffect(() => {
    setTextareaValue(userInfo?.typeUser === 'admin' ? data?.[0].answer || '' : '')
  }, [data, userInfo])

  const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (userInfo?.typeUser !== 'admin') {
      setTextareaValue(event.target.value)
    }
  }
  return (
    <div className="h-full w-full overflow-y-auto bg-slate-50/50 p-8 pt-8">
      <textarea
        className="h-[50vh] w-full rounded-lg border border-slate-200 px-3 py-3 hover:shadow focus:border-slate-500 focus:outline-none dark:bg-gray-600 dark:text-gray-100"
        name="bio"
        value={textareaValue}
        onChange={handleTextareaChange}
      ></textarea>
      <p>
        Words Count: <span>{textareaValue.split(/\s+/).filter((word) => word !== '').length}</span>
      </p>
      <CheckGrammarGPT data={textareaValue} />
    </div>
  )
}

export default ScreenDoing
