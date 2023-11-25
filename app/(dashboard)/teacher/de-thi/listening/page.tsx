'use client'
import React, { useEffect, useState } from 'react'
import { questionGroupListening } from '@/data/dummy'
import { Card, CardBody, Tab, Tabs } from '@nextui-org/react'
import { AudioPlayer } from '@/components/dashboard/AudioPlayer/AudioPlayer'
import ScreenExam from '@/components/dashboard/Reading/Screen/ScreenExam'

interface Question {
  id: string
  questionGroupId: string
  question: string
  answers: { answer: string; correct: boolean }[]
  type: string
  options?: string[]
}

interface DataProps {
  data: {
    id: string
    title: string
    testId: string
    question: string
    questions: Question[]
  }[]
}

const Page = () => {
  const [selected, setSelected] = useState('SECTION 1')
  // const [data, setData] = useState<DataProps | undefined>(questionGroup)
  const data = questionGroupListening
  const [dataHandle, setDataHandle] = useState<DataProps | undefined>()

  useEffect(() => {
    const filteredData = data.filter((item) => item.title.includes(selected))
    setDataHandle(filteredData as any)
  }, [selected, data])
  return (
    <>
      <section className="h-full min-h-screen w-full bg-[#f1f1f1] p-4">
        <div className="flex items-center pb-2 pt-4">{/* <Breadcrumbs /> */}</div>
        <div className="rounded-lg bg-white p-6">
          <Tabs
            aria-label="Options"
            selectedKey={selected}
            onSelectionChange={(key) => setSelected(key as any)}
          >
            {[1, 2, 3, 4].map((section) => (
              <Tab key={`SECTION ${section}`} title={`SECTION ${section}`}>
                <Card>
                  <CardBody className="h-[70vh] !p-0">
                    <ScreenExam data={dataHandle as any} />
                    {/* <Screen data={dataHandle as any} /> */}
                  </CardBody>
                </Card>
                <AudioPlayer data={dataHandle as any} />
              </Tab>
            ))}
          </Tabs>
        </div>
      </section>
    </>
  )
}

export default Page
