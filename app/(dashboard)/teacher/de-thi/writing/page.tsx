'use client'
import React, { useEffect, useState } from 'react'
import PageContainer from '@/components/container/PageContainer'
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
    <PageContainer title='Let goooo' description='this is Reading'>
      <section className='bg-[#f1f1f1] min-h-screen h-full w-full p-4'>
        <div className='flex items-center pt-4 pb-2'>{/* <Breadcrumbs /> */}</div>
        <div className='p-6 bg-white rounded-lg'>
          <Tabs aria-label='Options' selectedKey={selected} onSelectionChange={(key) => setSelected(key as any)}>
            {[1, 2, 3].map((section) => (
              <Tab key={`PASSAGE ${section}`} title={`Task ${section}`}>
                <Card>
                  <CardBody className='!p-0 h-[70vh]'>
                    <Screen data={dataHandle as any} />
                  </CardBody>
                </Card>
              </Tab>
            ))}
          </Tabs>
        </div>
      </section>
    </PageContainer>
  )
}

export default Page
