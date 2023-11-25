'use client'
import TextEditor from '@/components/dashboard/TextEditor'
import { Button, Card, CardBody, Input, Select, SelectItem, Tab, Tabs } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import Split from 'react-split'
import parse from 'html-react-parser'
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
import { usePathname, useRouter } from 'next/navigation'
import LoadingScreen from '@/components/dashboard/LoadingScreen'

interface InputValueExamsType {
  nameTitle?: string
  passage?: number
}

const Page = () => {
  const router = useRouter()
  const pathname = usePathname()
  const MySwal = withReactContent(Swal)
  const [loadingSubmit, setLoadingSubmit] = useState<boolean>(false)
  const [inputValuesExams, setInputValuesExams] = useState<InputValueExamsType>()
  const [selectedTab, setSelectedTab] = useState(1)

  const [groupQuestions, setGroupQuestions] = useState<{
    [key: number]: { exams: string; question: string }
  }>([])
  const [array, setArray] = useState<number[]>([])
  const [arrayMap, setArrayMap] = useState<{ [key: string]: number[] }>({
    1: [1],
    2: [1, 2],
    3: [1, 2, 3],
  })

  useEffect(() => {
    const newArray = arrayMap[inputValuesExams?.passage || '']
    setArray(newArray)
  }, [inputValuesExams?.passage])

  const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setInputValuesExams({ ...inputValuesExams, passage: parseInt(e.target.value) })
  }

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValuesExams((prev) => ({ ...prev, [e.target.name]: e.target.value }))
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
  // const handleEditorChange = (content: string, passage: number, editorName: string) => {
  //   const updatedGroupQuestions = { ...groupQuestions }
  //   if (!updatedGroupQuestions[passage]) {
  //     updatedGroupQuestions[passage] = { exams: '', question: '' }
  //   }
  //   updatedGroupQuestions[passage][editorName] = content
  //   setGroupQuestions(updatedGroupQuestions)
  // }
  const handleEditorChange = (content: string, passage: number, editorName: string) => {
    setGroupQuestions((prevGroupQuestions) => ({
      ...prevGroupQuestions,
      [passage]: {
        ...prevGroupQuestions[passage],
        [editorName]: content,
      },
    }))
  }
  console.log(groupQuestions)
  return (
    <>
      <div>{loadingSubmit && <LoadingScreen />}</div>
      <section className="h-full min-h-screen w-full bg-[#f1f1f1] p-4">
        <div className="rounded-md bg-white px-1 py-6">
          <div className="my-2 text-center text-rose-500">
            <h1 className="text-h1 uppercase">
              {inputValuesExams?.nameTitle || 'Tạo đề thi Reading'}
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
                label="Số lượng passage:"
                placeholder="Chọn số lượng passage"
                className="w-full"
                labelPlacement="outside"
                disableSelectorIconRotation
                selectedKeys={String(inputValuesExams?.passage)}
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
              {array.map((passage) => (
                <Tab key={passage} title={`PASSAGE ${passage}`}>
                  <Card className="!rounded-md">
                    <CardBody className="!p-0">
                      <Split
                        className="flex min-h-screen"
                        minSize={300}
                        sizes={[50, 50]}
                        direction="horizontal"
                      >
                        <div>
                          <p className="my-8 text-center text-xl font-semibold">
                            Đề thi cho PASSAGE {passage}
                          </p>
                          <TextEditor
                            setInputValues={(content) =>
                              handleEditorChange(content.toString(), passage, 'exams')
                            }
                            name="exams"
                            value={groupQuestions[passage]?.exams}
                          />
                        </div>
                        <Split minSize={300} expandToMin={false} direction="vertical">
                          <div>
                            <p className="my-8 text-center text-xl font-semibold">
                              Câu hỏi cho PASSAGE {passage}
                            </p>
                            <TextEditor
                              setInputValues={(content) =>
                                handleEditorChange(content.toString(), passage, 'question')
                              }
                              name="question"
                              value={groupQuestions[passage]?.question}
                            />
                          </div>
                        </Split>
                      </Split>
                    </CardBody>
                  </Card>
                </Tab>
              ))}
            </Tabs>
          )}
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
