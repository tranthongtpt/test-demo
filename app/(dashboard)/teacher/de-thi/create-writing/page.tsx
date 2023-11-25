'use client'
import InputFile from '@/components/dashboard/InputFile/InputFile'
import LoadingScreen from '@/components/dashboard/LoadingScreen'
import TextEditor from '@/components/dashboard/TextEditor'
import { Button, Card, CardBody, Input, Select, SelectItem, Tab, Tabs } from '@nextui-org/react'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

interface InputValueExamsType {
  nameTitle?: string
  task?: number
}

const Page = () => {
  const router = useRouter()
  const pathname = usePathname()
  const MySwal = withReactContent(Swal)
  const [loadingSubmit, setLoadingSubmit] = useState<boolean>(false)
  const [inputValuesExams, setInputValuesExams] = useState<InputValueExamsType>()
  const [groupQuestion, setGroupQuestion] = useState([])
  const [array, setArray] = useState<number[]>([])
  const [selectedTab, setSelectedTab] = useState(1)
  const [groupQuestions, setGroupQuestions] = useState<{
    [key: number]: { exams: string; question: string }
  }>([])
  const [arrayMap, setArrayMap] = useState<{ [key: string]: number[] }>({
    1: [1],
    2: [1, 2],
    3: [1, 2, 3],
  })
  useEffect(() => {
    const newArray = arrayMap[inputValuesExams?.task || '']
    setArray(newArray)
  }, [inputValuesExams?.task])

  const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setInputValuesExams({ ...inputValuesExams, task: parseInt(e.target.value) })
  }
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValuesExams((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }
  const handleEditorChange = (content: string, passage: number, editorName: string) => {
    setGroupQuestions((prevGroupQuestions) => ({
      ...prevGroupQuestions,
      [passage]: {
        ...prevGroupQuestions[passage],
        [editorName]: content,
      },
    }))
  }
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    setLoadingSubmit(true)
    setTimeout(() => {
      MySwal.fire({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        },
        icon: 'success',
        title: 'Tạo đề thành công',
      }).then(() => {
        setLoadingSubmit(false)
        router.push(pathname.replace(/\/[^/]*$/, ''))
      })
    }, 2000)
  }

  console.log('groupQuestion', groupQuestion)
  return (
    <>
      <div>{loadingSubmit && <LoadingScreen />}</div>
      <section className="h-full min-h-screen w-full bg-[#f1f1f1] p-4">
        <div className="rounded-md bg-white px-1 py-6">
          <div className="my-2 text-center text-rose-500">
            <h1 className="text-h1 uppercase">
              {inputValuesExams?.nameTitle ? inputValuesExams?.nameTitle : 'Tạo đề thi Writing'}
            </h1>
          </div>
          <div className="">
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
                label="Số lượng task:"
                placeholder="Chọn số lượng task"
                className="mb-3 w-full"
                labelPlacement="outside"
                disableSelectorIconRotation
                selectedKeys={String(inputValuesExams?.task)}
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
              {array && (
                <Tabs
                  aria-label="Options"
                  selectedKey={selectedTab}
                  onSelectionChange={(key) => setSelectedTab(key as any)}
                >
                  {array.map((task) => (
                    <Tab key={task} title={`TASK ${task}`}>
                      <Card className="!rounded-md">
                        <CardBody className="!p-0">
                          <p className="my-8 text-center text-xl font-semibold">
                            Đề thi cho task {task}
                          </p>
                          <TextEditor
                            setInputValues={(content) =>
                              handleEditorChange(content.toString(), task, 'question')
                            }
                            name="question"
                            value={groupQuestions[task]?.question}
                          />
                        </CardBody>
                      </Card>
                    </Tab>
                  ))}
                </Tabs>
              )}
            </div>
          </div>
          <div className="text-center">
            <Button className="min-w-[200px]" onClick={(e) => handleSubmit(e)} color="danger">
              Tạo đề
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
export default Page
