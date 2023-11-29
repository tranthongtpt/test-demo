'use client'
import { Button } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { BsArrowRightCircle } from 'react-icons/bs'
import { FaRegDotCircle } from 'react-icons/fa'
const Exam = () => {
  const router = useRouter()
  return (
    <section className='bg-[#f1f1f1] h-screen'>
      <header className=' inset-x-0 top-0 z-30 mx-auto w-full border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg '>
        <div className='px-4'>
          <div className='flex items-center justify-between'>
            <Link href='/'>
              <Image src='/images/logos/logo.svg' alt='logo' height={100} width={100} />
            </Link>
            <Image
              src='/svg/dashboard/notepad.svg'
              alt='chu thich'
              height={40}
              width={40}
              className='cursor-pointer'
              // onClick={() => setShownote(!shownote)}
            />
          </div>
        </div>
      </header>
      <div className='py-6 sm:py-12'>
        <div className='container p-6 mx-auto space-y-8 bg-white '>
          <div className='space-y-2 text-center text-red-500'>
            <h1 className='text-h1'>IELTS Listening - Reading - Writing Test 1</h1>
            <hr />
            <h6 className='text-gray-600'>Thời gian và số lượng câu hỏi</h6>
          </div>
          <div className='grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3'>
            <div className='bg-red-master p-4 rounded-xl	'>
              <div className='flex justify-center mb-8'>
                <Image
                  src='svg/listening.svg'
                  width={150}
                  height={150}
                  alt='loader'
                  className='object-contain text-red-400 pr-1'
                />
              </div>
              <div className='my-4 	'>
                <h2 className='text-red-500	 uppercase mb-3 pt-2 text-center text-h2'>Listening</h2>
                <ul className='lh-base list-unstyled text-black fw-500'>
                  <li className='flex flex-wrap items-center	'>
                    <div className='w-auto pr-2'>
                      <FaRegDotCircle className='text-red-400	' />
                    </div>
                    <div className='col'>3 Part</div>
                  </li>
                  <li className='flex flex-wrap items-center'>
                    <div className='w-auto pr-2'>
                      <FaRegDotCircle className='text-red-400	' />
                    </div>
                    <div className='col'>80 câu hỏi</div>
                  </li>
                </ul>
              </div>
            </div>
            <div className='bg-red-master p-4 rounded-xl	'>
              <div className='flex justify-center mb-8'>
                <Image
                  src='svg/reading.svg'
                  width={150}
                  height={150}
                  alt='loader'
                  className='object-contain text-red-400 pr-1'
                />
              </div>
              <div className='my-4 	'>
                <h2 className='text-red-500	 uppercase mb-3 pt-2 text-center text-h2'>Reading</h2>
                <ul className='lh-base list-unstyled text-black fw-500'>
                  <li className='flex flex-wrap items-center	'>
                    <div className='w-auto pr-2'>
                      <FaRegDotCircle className='text-red-400	' />
                    </div>
                    <div className='col'>3 Part</div>
                  </li>
                  <li className='flex flex-wrap items-center'>
                    <div className='w-auto pr-2'>
                      <FaRegDotCircle className='text-red-400	' />
                    </div>
                    <div className='col'>80 câu hỏi</div>
                  </li>
                </ul>
              </div>
            </div>
            <div className='bg-red-master p-4 rounded-xl	'>
              <div className='flex justify-center mb-8'>
                <Image
                  src='svg/pencil.svg'
                  width={150}
                  height={150}
                  alt='loader'
                  className='object-contain text-red-400 pr-1'
                />
              </div>
              <div className='my-4 	'>
                <h2 className='text-red-500	 uppercase mb-3 pt-2 text-center text-h2'>Writing</h2>
                <ul className='lh-base list-unstyled text-black fw-500'>
                  <li className='flex flex-wrap items-center	'>
                    <div className='w-auto pr-2'>
                      <FaRegDotCircle className='text-red-400	' />
                    </div>
                    <div className='col'>3 Part</div>
                  </li>
                  <li className='flex flex-wrap items-center'>
                    <div className='w-auto pr-2'>
                      <FaRegDotCircle className='text-red-400	' />
                    </div>
                    <div className='col'>80 câu hỏi</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='py-1 text-center flex flex-col items-center		'>
            <svg
              className='w-20 h-20 text-gray-300'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 20 20'
            >
              <path
                stroke='currentColor'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M10 6v4l3.276 3.276M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
              />
            </svg>
            <h5 className='text-2xl'>
              <strong>160</strong> phút
            </h5>
          </div>
          <div className='text-center'>
            <span className='italic'>
              Khi đến với phần thi IELTS Listening, hãy chọn không gian yên tĩnh để tập trung và nhấn bắt đầu để làm bài
              nhé.
            </span>
          </div>
          <div className='text-center flex justify-center'>
            <button
              type='button'
              className='justify-center	 w-60 border border-rose-500	 text-red-500 bg-white hover:bg-red-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center mr-2'
            >
              <svg
                className='w-6 h-6 mr-2'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 14 10'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M13 5H1m0 0 4 4M1 5l4-4'
                />
              </svg>
              Quay lại
            </button>
            <button
              onClick={() => router.push('/exam/listening/1')}
              type='button'
              className='justify-center	 w-60 border border-rose-500	 text-white bg-red-500 font-semibold rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center mr-2'
            >
              Bắt đầu làm bài
              <svg
                className='w-6 h-6 ml-2 text-white dark:text-white'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 14 10'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M1 5h12m0 0L9 1m4 4L9 9'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Exam
