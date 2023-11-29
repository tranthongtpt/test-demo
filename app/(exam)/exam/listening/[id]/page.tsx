'use client'
import { questionGroupListening } from '@/data/dummy'
import { Card, CardBody, Tab, Tabs, useDisclosure } from '@nextui-org/react'
// import Screen from '@/components/dashboard/Reading/Screen/Screen'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { AudioPlayer } from '@/components/dashboard/AudioPlayer/AudioPlayer'
import ScreenExam from '@/components/dashboard/student/Reading/ScreenExam'
import Footer from '@/components/dashboard/student/Footer'
import ModalResult from '@/components/dashboard/student/ModalResult'

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
const dataset = [
  {
    note: 'Question',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    note: 'Question1',
    content:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
  },
]
const Page = () => {
  const [selected, setSelected] = useState('SECTION 1')
  // const [data, setData] = useState<DataProps | undefined>(questionGroup)
  const data = questionGroupListening
  const [dataHandle, setDataHandle] = useState<DataProps | undefined>()

  useEffect(() => {
    const filteredData = data.filter((item) => item.title.includes(selected))
    setDataHandle(filteredData as any)
  }, [selected])
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [shownote, setShownote] = useState<Boolean>(false)
  return (
    <>
      <div className="flex h-screen flex-col">
        {/* <header className='relative flex  justify-between px-8 py-4 text-indigo-900  md:items-center shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]'>
          <Link href='/'>
            <Image src='/images/logos/logo.svg' alt='logo' height={100} width={100} />
          </Link>
          <div className='flex flex-col flex-wrap'>
            <div className='flex flex-wrap items-center justify-center w-full space-x-4 '>
              <span className='items-center justify-center hidden w-8 h-8 text-white bg-red-500 rounded-full shadow md:inline-flex'>
                1
              </span>
              <span className='hidden text-red-500 md:inline'>Listening</span>
              <span className='hidden h-0.5 w-10 bg-red-400 md:inline'></span>
              <span className='flex items-center justify-center w-8 h-8 text-white bg-red-600 rounded-full shadow'>
                2
              </span>
              <span className='font-semibold text-red-600'>Writing</span>
              <span className='hidden w-10 h-0 border-t-2 border-gray-400 border-dashed md:inline'></span>
              <span className='items-center justify-center hidden w-8 h-8 text-red-700 bg-white rounded-full shadow md:inline-flex'>
                3
              </span>
              <span className='hidden text-gray-600 md:inline'>Reading</span>
            </div>
          </div>
          <Image
            src='/svg/dashboard/notepad.svg'
            alt='chu thich'
            height={40}
            width={40}
            className='cursor-pointer'
            onClick={() => setShownote(!shownote)}
          />
        </header> */}
        <header className="inset-x-0 top-0 z-30 mx-auto w-full border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg">
          <div className="px-4">
            <div className="flex items-center justify-between">
              <Link href="/">
                <Image src="/images/logos/logo.svg" alt="logo" height={100} width={100} />
              </Link>
              <div className="flex flex-col flex-wrap">
                <div className="flex w-full flex-wrap items-center justify-center space-x-4 ">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-white shadow">
                    1
                  </span>
                  <span className="font-semibold text-red-600">Listening</span>
                  <span className="hidden h-0 w-10 border-t-2 border-dashed border-gray-400 md:inline"></span>
                  <span className="hidden h-8 w-8 items-center justify-center rounded-full bg-white text-red-700 shadow md:inline-flex">
                    2
                  </span>
                  <span className="hidden text-gray-600 md:inline">Reading</span>
                  <span className="hidden h-0 w-10 border-t-2 border-dashed border-gray-400 md:inline"></span>
                  <span className="hidden h-8 w-8 items-center justify-center rounded-full bg-white text-red-700 shadow md:inline-flex">
                    3
                  </span>
                  <span className="hidden text-gray-600 md:inline">Writing</span>
                </div>
              </div>
              <Image
                src="/svg/dashboard/notepad.svg"
                alt="chu thich"
                height={40}
                width={40}
                className="cursor-pointer"
                onClick={() => setShownote(!shownote)}
              />
            </div>
          </div>
        </header>
        <main className="flex-grow bg-white">
          <AudioPlayer data={dataHandle as any} />
          <div className="flex">
            <div className="relative mt-1 w-full overflow-y-auto ">
              <Tabs
                aria-label="Options"
                selectedKey={selected}
                onSelectionChange={(key) => setSelected(key as any)}
              >
                {[1, 2, 3, 4].map((section) => (
                  <Tab key={`SECTION ${section}`} title={`SECTION ${section}`}>
                    <Card>
                      <CardBody className="h-[69vh] !p-0">
                        <ScreenExam data={dataHandle as any} />
                      </CardBody>
                    </Card>
                  </Tab>
                ))}
              </Tabs>
            </div>
            {shownote && (
              <div className="z-20 flex w-96 flex-shrink-0 translate-x-0 flex-col duration-300 ease-in-out lg:flex">
                <div className="relative z-10 mt-10 flex w-full flex-col rounded-lg p-5 md:ml-auto md:mt-0">
                  <h2 className="title-font mb-1 text-center text-lg font-medium font-semibold text-gray-900">
                    Ghi chú
                  </h2>
                  <form action="/search" className="">
                    <div className="relative">
                      <input
                        type="text"
                        name="q"
                        className="h-10 w-full rounded-full border p-4 shadow focus:outline-none focus:ring focus:ring-red-100"
                        placeholder="Tìm kiếm ghi chú"
                      />
                      <button type="submit">
                        <svg
                          className="absolute right-3 top-3 h-5 w-5 fill-current text-red-400"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          version="1.1"
                          x="0px"
                          y="0px"
                          viewBox="0 0 56.966 56.966"
                          xmlSpace="preserve"
                        >
                          <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"></path>
                        </svg>
                      </button>
                    </div>
                  </form>
                  <div className="h-[60vh] overflow-scroll">
                    <div className="divide-y py-3">
                      {dataset.map((item, index) => (
                        <div key={index} className="flex flex-col gap-3">
                          <div className="flex justify-between">
                            <p className="whitespace-normal break-normal text-base font-semibold text-slate-600 underline underline-offset-2">
                              {item.content}
                            </p>
                            <svg
                              className="h-3 w-3 text-gray-800 dark:text-white"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 4 15"
                            >
                              <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                            </svg>
                          </div>
                          <span>{item.note}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>

        <Footer onOpen={onOpen} link={'/exam/reading/1'} />
      </div>
      <ModalResult isOpen={isOpen} onOpen={onOpen} onOpenChange={onOpenChange} />
    </>
  )
}
export default Page
