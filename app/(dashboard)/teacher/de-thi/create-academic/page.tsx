'use client'
import Breadcrumbs from '@/components/dashboard/Layout/Breadcrumbs'
import TextEditor from '@/components/dashboard/teacher/TextEditor'
import {
  Button,
  Card,
  CardBody,
  Input,
  Select,
  SelectItem,
  Selection,
  Tab,
  Tabs,
} from '@nextui-org/react'
import dynamic from 'next/dynamic'
import React, { useEffect, useState } from 'react'
import { BsPlus, BsTrash } from 'react-icons/bs'
import { FiEye } from 'react-icons/fi'
import Split from 'react-split'
import parse from 'html-react-parser'

interface InputValueExamsType {
  nameTitle?: string
  practice?: number
}

// const TextEditor = dynamic(() => import('@/components/dashboard/TextEditor/TextEditor'), { ssr: false })
// const TextEditor = dynamic(() => import('@/components/dashboard/CKEditor'), { ssr: false })

const Page = () => {
  const [inputValuesExams, setInputValuesExams] = useState<InputValueExamsType>()
  const [array, setArray] = useState<number[]>([])
  const [selectedTab, setSelectedTab] = useState(1)

  const [groupQuestion, setGroupQuestion] = useState([])
  const [arrayMap, setArrayMap] = useState<{ [key: string]: number[] }>({
    1: [1],
    2: [1, 2],
    3: [1, 2, 3],
    4: [1, 2, 3, 4],
    5: [1, 2, 3, 4, 5],
  })
  useEffect(() => {
    const newArray = arrayMap[inputValuesExams?.practice || '']
    setArray(newArray)
  }, [inputValuesExams?.practice])

  const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setInputValuesExams({ ...inputValuesExams, practice: parseInt(e.target.value) })
  }
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValuesExams((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }
  console.log('groupQuestion', groupQuestion)
  return (
    <>
      <section className="h-full min-h-screen w-full bg-[#f1f1f1] p-4">
        <div className="rounded-md bg-white px-1 py-6">
          <div className="my-2 text-center text-rose-500">
            <h1 className="text-h1 uppercase">
              {inputValuesExams?.nameTitle ? inputValuesExams?.nameTitle : 'Academic Test'}
            </h1>
          </div>
          <div className="max-h-[300px]">
            <div className="grid gap-2 p-4">
              <Input
                type="text"
                label="Tên đề thi:"
                labelPlacement="outside"
                placeholder="Nhập tên đề thi"
                name="nameTitle"
                value={inputValuesExams?.nameTitle}
                onChange={handleOnChange}
              />
              <Select
                label="Số lượng practice:"
                placeholder="Chọn số lượng practice"
                className="w-full"
                labelPlacement="outside"
                disableSelectorIconRotation
                selectedKeys={String(inputValuesExams?.practice)}
                onChange={handleSelectionChange}
              >
                <SelectItem key={1} value={1}>
                  1
                </SelectItem>
                <SelectItem key={2} value={2}>
                  2
                </SelectItem>
                <SelectItem key={3} value={3}>
                  3
                </SelectItem>
              </Select>
            </div>
          </div>
          {array && (
            <Tabs
              aria-label="Options"
              selectedKey={selectedTab}
              onSelectionChange={(key) => setSelectedTab(key as any)}
            >
              {array.map((section) => (
                <Tab key={`${section}`} title={`PRACTICE ${section}`}>
                  <Card className="!rounded-md">
                    <CardBody className="!p-0">
                      <Split
                        className="flex min-h-screen"
                        minSize={300}
                        sizes={[35, 65]}
                        direction="horizontal"
                      >
                        <div>
                          <p className="my-8 text-center text-xl font-semibold">
                            Đề thi cho PRACTICE {section}
                          </p>
                        </div>
                        <Split minSize={300} expandToMin={false} direction="vertical">
                          <div>content</div>
                        </Split>
                      </Split>
                    </CardBody>
                  </Card>
                </Tab>
              ))}
            </Tabs>
          )}
          {/* <TextEditor setInputValues={setGroupQuestion} />
        <div>{groupQuestion.content && parse(String(groupQuestion.content))}</div> */}
        </div>
      </section>
    </>
  )
}
export default Page
