'use client'
import React, { useEffect, useState } from 'react'
import { questionGroup } from '@/data/dummy'
import { Card, CardBody, Tab, Tabs } from '@nextui-org/react'
import Screen from '@/components/dashboard/Writing/Screen'

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
  const [selected, setSelected] = useState('PASSAGE 1')
  // const [data, setData] = useState<DataProps | undefined>(questionGroup)
  const data = questionGroup
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
            {[1, 2, 3].map((section) => (
              <Tab key={`PASSAGE ${section}`} title={`Task ${section}`}>
                <Card>
                  <CardBody className="h-[70vh] !p-0">
                    <Screen data={dataHandle as any} />
                  </CardBody>
                </Card>
              </Tab>
            ))}
          </Tabs>
        </div>
      </section>
    </>
  )
}

export default Page
