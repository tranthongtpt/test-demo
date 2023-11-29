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
    <div className='px-[10%] py-12'>
      <div className='flex items-center justify-between'>
        <h1 className='text-2xl font-semibold text-rose-500'>Kết quả thi Reading</h1>
        <Button size='sm'>Báo cáo lỗi sai</Button>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <div className='w-[80vw] px-8 py-4 my-20 bg-white rounded-lg shadow-lg '>
          <div className='flex justify-center -mt-16'>
            <Avatar src='https://avatars.githubusercontent.com/u/30373425?v=4' className='w-32 h-32 text-large' />
          </div>
          <div className='flex flex-col items-center justify-center py-5'>
            <h2 className='mb-2 text-2xl font-semibold '>{userInfo?.name}</h2>
            <p className='text-lg text-gray-600'>Kết quả tổng quan</p>
            <div className='flex items-center justify-around w-full mt-8'>
              <div className='flex items-center justify-center p-2 rounded-full w-40 h-40 drop-shadow-md border-[10px] border-gray-300'>
                <div className='flex flex-col items-center font-semibold text-center'>
                  <BsCheckSquareFill className='mb-2 text-xl text-teal-500' />
                  Đáp án đúng
                  <p className='text-teal-500'>39/40</p>
                </div>
              </div>
              <div className='flex items-center justify-center p-2 rounded-full w-44 h-44 drop-shadow-md border-[10px] border-teal-500'>
                <div className='flex flex-col items-center text-2xl font-semibold text-center'>
                  <p className='text-teal-500'>390 points</p>
                </div>
              </div>
              <div className='flex items-center justify-center p-2 rounded-full w-40 h-40 drop-shadow-md border-[10px] border-teal-500'>
                <div className='flex flex-col items-center font-semibold text-center'>
                  <BsFillClockFill className='mb-2 text-xl text-teal-500' />
                  Thời gian làm bài
                  <p className='text-teal-500'>29:50</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-[80vw]'>
          <p className='my-4 text-xl font-semibold text-rose-500'>IELTS Reading</p>
          <Divider className='mb-4' />
          <div className='grid grid-cols-8 gap-4 px-1 py-2'>
            {Array.from({ length: 40 }, (_, index) => (
              <div key={index} className='flex items-center'>
                <div
                  className={`mr-2 flex items-center justify-center p-2 font-bold text-white bg-teal-500 rounded-full cursor-pointer w-7 h-7`}
                >
                  {index + 1}
                </div>
                <p className='truncate'>Answer</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
