import Image from 'next/image'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FiPhoneCall, FiMapPin } from 'react-icons/fi'
export default function Footer() {
  return (
    <footer>
       <footer className=' bg-[#011C2A]'>
        <div className='mx-auto max-w-screen-xl p-4  sm:p-6 '>
          <div>
            <div className='sm:flex sm:items-center text-center'>
              <div className='mb-6 md:mb-0'>
                <Image src='/images/logos/logo.svg' alt='logo' height={200} width={200} priority />
              </div>
              <h1 className='text-3xl	font-extrabold text-white pl-40'>
                Anh ngữ Dream - <span className='text-red-600	'>10 năm</span> hình thành và phát triển
              </h1>
            </div>

            <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
            <div className='grid grid-cols-4 gap-4 sm:gap-6 sm:grid-cols-4'>
              <div>
                <ul className='text-gray-600 dark:text-gray-400'>
                  <li className='mb-4'>
                    <h2 className='mb-6 text-xl font-semibold text-white'>Thông tin liên hệ</h2>
                  </li>
                  <li className='flex items-center text-white'>
                    <FiPhoneCall />
                    <p className='pl-3'>+84 395557279</p>
                  </li>
                  <li className='flex items-center text-white'>
                    <AiOutlineMail />
                    <p className='pl-3'>demo@gmail.com</p>
                  </li>
                  <li className='flex items-center text-white'>
                    <FiMapPin />
                    <p className='pl-3'>viet nam</p>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className='mb-6 text-xl font-semibold text-white'>Về chúng tôi</h2>
                <ul className='text-gray-600 dark:text-gray-400'>
                  <li className='mb-4'>
                    <a href='https://github.com/themesberg/flowbite' className='hover:underline text-white '>
                      Hoạt động hợp tác
                    </a>
                  </li>
                  <li>
                    <a href='https://discord.gg/4eeurUVvTy' className='hover:underline text-white'>
                      Đội ngũ giảng viên
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className='mb-6 text-xl font-semibold text-white'>Chính sách & Bảo mật</h2>
                <ul className='text-gray-600 dark:text-gray-400'>
                  <li className='mb-4'>
                    <a href='#' className='hover:underline text-white'>
                      Chính sách bảo mật
                    </a>
                  </li>
                  <li>
                    <a href='#' className='hover:underline text-white'>
                      Chính sách thanh toán
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className='mb-6 text-xl font-semibold text-white'>Liên kết</h2>
                <ul className='text-gray-600 dark:text-gray-400'>
                  <li className='mb-4'>
                    <a href='#' className='hover:underline text-white'>
                      Tư vấn khóa học
                    </a>
                  </li>
                  <li>
                    <a href='#' className='hover:underline text-white'>
                      Cơ hội nghề nghiệp
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* <div className='text-center	pt-5'>
          <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
            © 2023{' '}
            <a href='#' className='hover:underline text-white'>
              TTH Team
            </a>
            . All Rights Reserved.
          </span>
        </div> */}
        </div>
        <div className=''>
          <div>
            <svg
              className='waves'
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
              viewBox='0 24 150 28'
              preserveAspectRatio='none'
              shapeRendering='auto'
            >
              <defs>
                <path id='gentle-wave' d='M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z' />
              </defs>
              <g className='parallax'>
                <use xlinkHref='#gentle-wave' x='48' y='0' fill='rgba(255,255,255,0.7' />
                <use xlinkHref='#gentle-wave' x='48' y='3' fill='rgba(255,255,255,0.5)' />
                <use xlinkHref='#gentle-wave' x='48' y='5' fill='rgba(255,255,255,0.3)' />
                <use xlinkHref='#gentle-wave' x='48' y='7' fill='#fff' />
              </g>
            </svg>
          </div>
        </div>

        <div className='content-footer text-center	'>
          <p>Anh Ngữ Dream | Copyright © 2023 All Right Reserved. | Developed by TTH Team </p>
        </div>
      </footer>
    </footer>
  )
}
