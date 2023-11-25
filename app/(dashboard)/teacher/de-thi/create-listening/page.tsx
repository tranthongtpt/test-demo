'use client'
import InputFile from '@/components/dashboard/InputFile/InputFile'
import LoadingScreen from '@/components/dashboard/LoadingScreen'
import TextEditor from '@/components/dashboard/TextEditor'
import {
  Button,
  Card,
  CardBody,
  Input,
  Select,
  SelectItem,
  Switch,
  Tab,
  Tabs,
} from '@nextui-org/react'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { FiUpload, FiUploadCloud } from 'react-icons/fi'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

interface InputValueExamsType {
  nameTitle?: string
  section?: number
  timeSection?: string
  file?: File[]
}

const Page = () => {
  const router = useRouter()
  const pathname = usePathname()
  const MySwal = withReactContent(Swal)
  const [isOneFile, setIsOneFile] = React.useState<boolean>(true)
  const [loadingSubmit, setLoadingSubmit] = useState<boolean>(false)
  const [inputValuesExams, setInputValuesExams] = useState<InputValueExamsType | undefined>()
  const [array, setArray] = useState<number[]>([])
  const [selectedTab, setSelectedTab] = useState(1)
  const [groupQuestions, setGroupQuestions] = useState<{
    [key: number]: { exams: string; question: string; file: File[] }
  }>([])
  const [arrayMap, setArrayMap] = useState<{ [key: string]: number[] }>({
    1: [1],
    2: [1, 2],
    3: [1, 2, 3],
    4: [1, 2, 3, 4],
  })
  useEffect(() => {
    const newArray = arrayMap[inputValuesExams?.section || '']
    setArray(newArray)
  }, [inputValuesExams?.section])

  const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setInputValuesExams({ ...inputValuesExams, section: parseInt(e.target.value) })
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
  // Xu ly input file
  const [fileBefore, setFileBefore] = useState<File[]>([])

  const fileAfter = fileBefore.filter((item, index) => {
    return index === fileBefore.findIndex((obj) => obj.name === item.name)
  })
  useEffect(() => {
    setFileBefore([])
  }, [isOneFile])

  console.log('groupQuestions', groupQuestions)

  return (
    <>
      <div>{loadingSubmit && <LoadingScreen />}</div>
      <section className="h-full min-h-screen w-full bg-[#f1f1f1] p-4">
        <div className="rounded-md bg-white px-1 py-6">
          <div className="text-center text-rose-500">
            <h1 className="text-h1 uppercase">
              {inputValuesExams?.nameTitle ? inputValuesExams?.nameTitle : 'Tạo đề thi Listening'}
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
                label="Số lượng section:"
                placeholder="Chọn số lượng section"
                className="mb-3 w-full"
                labelPlacement="outside"
                disableSelectorIconRotation
                selectedKeys={String(inputValuesExams?.section)}
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
                <SelectItem key={4} value={4}>
                  4
                </SelectItem>
              </Select>
              <Switch
                className=""
                isSelected={isOneFile}
                onValueChange={setIsOneFile}
                size="md"
                color="default"
                thumbIcon={({ isSelected, className }) =>
                  isSelected ? (
                    <FiUploadCloud className={className} />
                  ) : (
                    <FiUpload className={className} />
                  )
                }
              >
                <p className="text-sm">1 File nghe cho tất cả session ?</p>
              </Switch>
              {isOneFile && (
                <Input
                  type="text"
                  label="Thời gian bắt đầu section:"
                  labelPlacement="outside"
                  placeholder="vd: 05:30, 10:20, 15:30, 22:30"
                  name="timeSection"
                  value={inputValuesExams?.timeSection}
                  onChange={handleOnChange}
                />
              )}
              {isOneFile && (
                <InputFile
                  setInputValues={(values) =>
                    setInputValuesExams({ ...inputValuesExams, file: values.files })
                  }
                  setFileBefore={setFileBefore}
                  fileAfter={fileAfter}
                  multi={false}
                />
              )}
              {array && (
                <Tabs
                  aria-label="Options"
                  selectedKey={selectedTab}
                  onSelectionChange={(key) => setSelectedTab(key as any)}
                >
                  {array.map((section) => (
                    <Tab key={section} title={`SECTION ${section}`}>
                      <Card className="!rounded-md">
                        <CardBody className="!p-0">
                          <p className="my-4 text-center text-xl font-semibold">
                            Đề thi cho section {section}
                          </p>
                          <TextEditor
                            setInputValues={(content) =>
                              handleEditorChange(content.toString(), section, 'question')
                            }
                            name="question"
                            value={groupQuestions[section]?.question}
                          />
                          {!isOneFile && (
                            <div className="py-2 pl-4">
                              <InputFile
                                setInputValues={(values) =>
                                  setGroupQuestions((prevGroupQuestions) => ({
                                    ...prevGroupQuestions,
                                    [section]: {
                                      ...prevGroupQuestions[section],
                                      file: values?.files,
                                    },
                                  }))
                                }
                                setFileBefore={setFileBefore}
                                fileAfter={fileAfter}
                                multi={true}
                              />
                            </div>
                          )}
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
