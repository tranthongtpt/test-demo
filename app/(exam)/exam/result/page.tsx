'use client'
import { Avatar, Button, Divider } from '@nextui-org/react'
import { useSession } from 'next-auth/react'
import React from 'react'
import { BsCheckSquareFill, BsFillClockFill } from 'react-icons/bs'

const page = () => {
  const { data: session } = useSession()
  const userInfo = session?.user
  console.log(userInfo)
  return (
    <div className="px-[10%] py-12">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-rose-500">Kết quả thi</h1>
        <Button size="sm">Báo cáo lỗi sai</Button>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="my-20 w-[80vw] rounded-lg bg-white px-8 py-4 shadow-lg ">
          <div className="-mt-16 flex justify-center">
            <Avatar src={userInfo?.image || '#'} className="h-32 w-32 text-large" />
          </div>
          <div className="flex flex-col items-center justify-center py-5">
            <h2 className="mb-2 text-2xl font-semibold ">{userInfo?.name}</h2>
            <p className="text-lg text-gray-600">Kết quả tổng quan</p>
            <div className="mt-8 flex w-full items-center justify-around">
              <div className="flex h-40 w-40 items-center justify-center rounded-full border-[10px] border-gray-300 p-2 drop-shadow-md">
                <div className="flex flex-col items-center text-center font-semibold">
                  <BsCheckSquareFill className="mb-2 text-xl text-teal-500" />
                  Đáp án đúng
                  <p className="text-teal-500">39/40</p>
                </div>
              </div>
              <div className="flex h-44 w-44 items-center justify-center rounded-full border-[10px] border-teal-500 p-2 drop-shadow-md">
                <div className="flex flex-col items-center text-center text-2xl font-semibold">
                  <p className="text-teal-500">390 points</p>
                </div>
              </div>
              <div className="flex h-40 w-40 items-center justify-center rounded-full border-[10px] border-teal-500 p-2 drop-shadow-md">
                <div className="flex flex-col items-center text-center font-semibold">
                  <BsFillClockFill className="mb-2 text-xl text-teal-500" />
                  Thời gian làm bài
                  <p className="text-teal-500">29:50</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[80vw]">
          <p className="my-4 text-xl font-semibold text-rose-500">IELTS Reading</p>
          <Divider className="mb-4" />
          <div className="grid grid-cols-8 gap-4 px-1 py-2">
            {Array.from({ length: 40 }, (_, index) => (
              <div key={index} className="flex items-center">
                <div
                  className={`mr-2 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-teal-500 p-2 font-bold text-white`}
                >
                  {index + 1}
                </div>
                <p className="truncate">Answer</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
