'use client'
import { Button, Divider, Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { BsClock } from 'react-icons/bs'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import LoadingScreen from '../../LoadingScreen'
const Footer = ({ onOpen, link }: any) => {
  const [minutes, setMinutes] = useState(30)
  const [seconds, setSeconds] = useState(0)
  const [loadingSubmit, setLoadingSubmit] = useState(false)
  const [openPopover, setOpenPopover] = useState(false)
  const router = useRouter()
  const MySwal = withReactContent(Swal)
  const pathname = usePathname()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Ẩn popover khi trang được tải
    setIsVisible(false)
  }, [])

  // Hiển thị popover khi người dùng nhấp vào phần tử kích hoạt
  const handleClick = () => {
    setIsVisible(true)
  }

  useEffect(() => {
    const timerID = setInterval(() => {
      if (seconds === 0) {
        if (minutes === 0) {
          // Thời gian đếm ngược đã kết thúc
          clearInterval(timerID)
        } else {
          setMinutes(minutes - 1)
          setSeconds(59)
        }
      } else {
        setSeconds(seconds - 1)
      }
    }, 1000)

    return () => {
      // Xoá bộ đếm thời gian khi component bị unmount
      clearInterval(timerID)
    }
  }, [minutes, seconds])

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    // onOpen()
    setLoadingSubmit(true)
    setOpenPopover(false)
    setMinutes(0)
    setSeconds(0)
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
      title: 'Đã nộp bài',
    }).then(() => {
      router.push(pathname + '/result')
      setLoadingSubmit(false)
    })
  }

  return (
    <>
      {loadingSubmit && <LoadingScreen />}

      <footer className="relative flex w-full justify-between px-8 py-4 text-center shadow-[5px_0px_0px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]">
        <div className="">
          <button
            onClick={handleClick}
            className="inline-block rounded border border-red-600 px-12 py-3 text-sm font-medium text-red-600 hover:bg-red-600 hover:text-white active:bg-red-500 "
          >
            Bảng câu hỏi
          </button>
          {isVisible && (
            <div className="absolute inset-x-0 top-[-160px] z-50 mx-8 rounded-md bg-slate-100 pb-4 pt-3 shadow-md">
              <div className="flex w-full justify-between p-2">
                <div className="flex">
                  <div className="mr-4 flex items-center justify-center text-sm text-gray-600">
                    <div className="mr-1 h-5 w-5 rounded-full bg-teal-700" />
                    Đã trả lời
                  </div>
                  <div className="flex items-center justify-center text-sm text-gray-600">
                    <div className="mr-1 h-5 w-5 rounded-full bg-teal-500" />
                    Chưa trả lời
                  </div>
                </div>
                <button
                  onClick={() => setIsVisible(false)}
                  className="absolute -right-1 -top-1 rounded-full border border-gray-300 bg-red-100 p-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <div className="grid grid-cols-[repeat(10,minmax(0,_1fr))] gap-2 p-2 md:grid-cols-[repeat(20,minmax(0,_1fr))]  lg:grid-cols-[repeat(25,minmax(0,_1fr))] ">
                {Array.from({ length: 40 }, (_, index) => (
                  <div
                    key={index}
                    className={`${
                      index < 22 && index > 10 ? ' bg-teal-700 ' : ''
                    } m-1 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-teal-500 p-2 font-bold text-white`}
                  >
                    {index + 1}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="flex items-center text-2xl font-semibold text-rose-500">
          <BsClock className="mr-4 h-8 w-8" />
          <p>{`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</p>
        </div>
        <div>
          <button
            onClick={onOpen}
            className="mr-4 inline-block rounded border border-red-600 px-12 py-3 text-sm font-medium text-red-600 hover:bg-red-600 hover:text-white active:bg-red-500 "
          >
            Review
          </button>
          {minutes < 5 && (
            <button
              onClick={(e) => handleSubmit(e)}
              className="inline-block rounded border border-red-600 bg-red-500 px-12 py-3 text-sm font-medium text-white hover:bg-red-700 hover:text-white"
            >
              Tiếp theo
            </button>
          )}
          {minutes > 5 && (
            <Popover placement="top" showArrow={false} className="mb-4" isOpen={openPopover}>
              <PopoverTrigger>
                {/* <Button color='danger' variant='solid' onClick={() => setOpenPopover(true)}>
                  Nộp bài
                </Button> */}
                <button
                  onClick={() => {
                    // setOpenPopover(true)
                    router.push(link)
                  }}
                  className="inline-block rounded border border-red-600 bg-red-500 px-12 py-3 text-sm font-medium text-white hover:bg-red-700 hover:text-white"
                >
                  Tiếp theo
                </button>
              </PopoverTrigger>
              <PopoverContent className="px-4 py-2">
                <div className="text-center">
                  <p>
                    Vẫn còn hơn{' '}
                    <span className="mx-1 text-lg font-semibold text-rose-500">{minutes}</span>{' '}
                    phút!
                  </p>
                  Bạn chắc chắn muốn nộp bài chứ !
                </div>
                <Divider className="my-2" />
                <div className="flex w-full items-center justify-end">
                  <Button
                    color="default"
                    variant="light"
                    size="sm"
                    className="mr-2"
                    onClick={() => setOpenPopover(false)}
                  >
                    Hủy
                  </Button>
                  {/* <Button
                    color='danger'
                    variant='solid'
                    size='sm'
                    onClick={(e) => {
                      handleSubmit(e)
                    }}
                  >
                    Nộp bài
                  </Button> */}
                  <button
                    onClick={(e) => handleSubmit(e)}
                    className="inline-block rounded border border-red-600 bg-red-500 px-12 py-3 text-sm font-medium text-white hover:bg-red-700 hover:text-white"
                  >
                    Tiếp theo
                  </button>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </footer>
    </>
  )
}

export default Footer
