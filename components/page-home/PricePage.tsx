'use client'
import { useMemo } from "react"
import ScrollAnimationWrapper from "../ScrollAnimationWrapper"
import { motion } from "framer-motion"
import getScrollAnimation from "utils/getScrollAnimation"
import Image from "next/image"
const PricePage = () => {
    const scrollAnimation = useMemo(() => getScrollAnimation(), [])
  return (
    <section className="relative my-32 space-y-12">
      <div className="min-h-full pb-12">
        <div className="w-full bg-[#D01F1B] pb-24 pt-16 text-center">
          <h2 className="text-center text-3xl font-bold uppercase text-white sm:text-4xl">
            Thông tin các gói thi thử
          </h2>
          <p className="mt-2 text-sm text-gray-100">Chọn gói phù hợp với nhu cầu của bạn</p>
          <ScrollAnimationWrapper className="">
            <motion.div
              className="absolute right-96 top-24 flex -translate-x-1/2 flex-col items-center justify-center"
              variants={scrollAnimation}
            >
              <h1 className="pl-36 text-lg text-white">Bán chạy nhất</h1>
              {/* <Image src='svg/letter_send.svg' width={300} height={300} alt='loader' className='object-contain' /> */}
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="128px"
                height="128px"
                viewBox="0,0,256,256"
              >
                <g
                  fill="#fff"
                  fillRule="nonzero"
                  stroke="none"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeMiterlimit="10"
                  strokeDasharray=""
                  strokeDashoffset="0"
                  fontFamily="none"
                  fontWeight="none"
                  fontSize="none"
                  textAnchor="none"
                >
                  <g transform="translate(260.24569,254.4) rotate(180) scale(2,2)">
                    <path d="M126.6,2.5c-0.5,-0.9 -1.5,-1.5 -2.6,-1.5v0l-69.5,0.1c-1.1,0 -2.1,0.6 -2.6,1.5c-0.5,0.9 -0.5,2.1 0,3l11.9,20.3l-5.6,13.8c-0.4,0.9 -0.3,1.8 0.2,2.6c0.5,0.8 1.3,1.3 2.2,1.5l14.8,1.9l11.9,20.3c0.5,0.9 1.5,1.5 2.6,1.5v0c1.1,0 2.1,-0.6 2.6,-1.5l34.1,-60.5c0.5,-1 0.5,-2.1 0,-3zM89.8,58.5l-10,-17.1c-0.5,-0.8 -1.3,-1.3 -2.2,-1.5l-9.4,-1.2l32.1,-19.7v0c1.2,-0.7 1.8,-2.1 1.4,-3.4c-0.5,-1.6 -2.1,-2.5 -3.7,-2l-29.4,8.6l-8.8,-15l59.1,-0.2zM48.8,43.2c-0.1,0 -0.8,0.4 -2,1c-1.5,0.8 -2,2.6 -1.2,4.1c0.5,1 1.6,1.6 2.6,1.6c0.5,0 1,-0.1 1.4,-0.4c1,-0.5 1.5,-0.8 1.6,-0.8c1.5,-0.7 2.2,-2.4 1.6,-3.9c-0.7,-1.5 -2.5,-2.2 -4,-1.6zM69.2,88.8c0.1,0 0.3,0 0.4,0c1.5,0 2.7,-1.1 3,-2.6c0.2,-1.6 -0.9,-3.2 -2.5,-3.4c-1.4,-0.2 -2.9,-0.3 -4.4,-0.4c-1.7,-0.1 -3.1,1.2 -3.1,2.9c-0.1,1.7 1.2,3.1 2.9,3.1c1.2,0.1 2.5,0.2 3.7,0.4zM23,83.8c0.1,1.5 0.2,3 0.5,4.4c0.2,1.5 1.5,2.5 3,2.5c0.2,0 0.3,0 0.5,0c1.6,-0.3 2.7,-1.8 2.5,-3.5c-0.2,-1.2 -0.4,-2.5 -0.4,-3.7c-0.1,-1.7 -1.5,-2.9 -3.1,-2.8c-1.8,0 -3.1,1.4 -3,3.1zM56.7,126.1c0.3,0.1 0.6,0.1 0.9,0.1c1.3,0 2.5,-0.8 2.9,-2.1c0.5,-1.6 -0.4,-3.3 -1.9,-3.8c-1.2,-0.4 -2.4,-0.8 -3.5,-1.4c-1.5,-0.7 -3.3,0 -4,1.5c-0.7,1.5 0,3.3 1.5,4c1.3,0.7 2.7,1.3 4.1,1.7zM18.6,100.6c-1.2,1.1 -1.4,3 -0.3,4.2c0.6,0.7 1.4,1 2.2,1c0.7,0 1.4,-0.2 2,-0.8c1,-0.9 2,-1.7 3,-2.5c1.3,-1 1.5,-2.9 0.5,-4.2c-1,-1.3 -2.9,-1.5 -4.2,-0.5c-1,0.9 -2.1,1.9 -3.2,2.8zM34.6,57.9c-1.4,-1 -3.2,-0.6 -4.2,0.7c-0.9,1.2 -1.7,2.5 -2.4,3.8c-0.8,1.4 -0.3,3.3 1.2,4.1c0.5,0.3 1,0.4 1.5,0.4c1.1,0 2.1,-0.6 2.6,-1.5c0.6,-1.1 1.3,-2.2 2,-3.2c1,-1.5 0.7,-3.3 -0.7,-4.3zM40.3,87.1c-1.5,0.6 -2.3,2.4 -1.7,3.9c0.5,1.2 1.6,1.9 2.8,1.9c0.4,0 0.8,-0.1 1.1,-0.2c1.2,-0.5 2.5,-0.9 3.7,-1.4c1.6,-0.5 2.4,-2.2 1.9,-3.8c-0.5,-1.6 -2.2,-2.4 -3.8,-1.9c-1.3,0.5 -2.6,1 -4,1.5zM33,103.9c-1.3,1 -1.6,2.9 -0.6,4.2c0.9,1.2 1.8,2.3 2.8,3.4c0.6,0.7 1.4,1 2.2,1c0.7,0 1.4,-0.2 2,-0.8c1.2,-1.1 1.4,-3 0.3,-4.2c-0.9,-1 -1.7,-2 -2.4,-3c-1.1,-1.3 -3,-1.6 -4.3,-0.6zM78.4,116.6c-0.8,0.9 -1.7,1.6 -2.7,2.2c-1.4,0.9 -1.7,2.8 -0.8,4.2c0.6,0.9 1.5,1.3 2.5,1.3c0.6,0 1.2,-0.2 1.7,-0.5c1.3,-0.9 2.5,-1.9 3.6,-3c1.2,-1.2 1.1,-3.1 -0.1,-4.2c-1.2,-1.2 -3.1,-1.1 -4.2,0zM84.6,100.4c0.2,1.5 1.5,2.6 3,2.6c0.1,0 0.3,0 0.4,0c1.6,-0.2 2.8,-1.7 2.6,-3.4c-0.2,-1.7 -0.7,-3.3 -1.4,-4.8c-0.7,-1.5 -2.5,-2.2 -4,-1.5c-1.5,0.7 -2.2,2.5 -1.5,4c0.5,1 0.8,2 0.9,3.1zM8.7,121.8c0.3,-0.6 0.7,-1.1 1,-1.6c0.9,-1.4 0.5,-3.2 -0.9,-4.1c-1.4,-0.9 -3.2,-0.5 -4.1,0.9c-0.4,0.6 -0.7,1.2 -1.1,1.8c-0.9,1.4 -0.4,3.3 1,4.1c0.5,0.3 1,0.4 1.6,0.4c0.9,-0.1 1.9,-0.6 2.5,-1.5z"></path>
                  </g>
                </g>
              </svg>
            </motion.div>
          </ScrollAnimationWrapper>
          <div className="mt-10 flex items-center justify-center space-x-4">
            <span className="text-base font-medium text-white">Theo tháng</span>
            <button className="relative rounded-full focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2">
              <div className="h-8 w-16 rounded-full bg-white shadow-md outline-none transition"></div>
              <div className="absolute left-1 top-1 inline-flex h-6 w-6 transform items-center justify-center rounded-full bg-rose-500 shadow-sm transition-all duration-200 ease-in-out"></div>
            </button>
            <span className="text-base font-medium text-white">Theo năm</span>
          </div>
        </div>
        <div className="mx-auto -mt-8 flex w-full items-center justify-center px-8 md:px-32 lg:px-16 2xl:w-3/4 2xl:px-0">
          <div className="relative grid w-full grid-cols-1 gap-8 xl:grid-cols-3">
            <div className="rounded-lg bg-white py-4 shadow-2xl hover:translate-y-0 hover:scale-110 ">
              <p className="text-center text-xl font-bold text-red-500 ">Basic</p>
              <p className="py-8 text-center">
                <span className="text-4xl font-bold text-gray-700">
                  <span x-text="basicPrice">1,497,000đ </span>
                </span>
                <span className="text-xs uppercase text-gray-500">
                  / <span x-text="billingType">month</span>
                </span>
              </p>
              <ul className="space-y-6 border-t border-gray-300 py-8">
                <li className="flex items-center space-x-2 px-8">
                  <span className="rounded-full bg-red-600 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="capitalize text-gray-600">Ưu đãi giảm xx%</span>
                </li>
                <li className="flex items-center space-x-2 px-8">
                  <span className="rounded-full bg-red-600 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="capitalize text-gray-600">Chọn lịch theo lịch của Dream</span>
                </li>
                <li className="flex items-center space-x-2 px-8">
                  <span className="rounded-full bg-red-600 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="capitalize text-gray-600">
                    Full bộ tài liệu bổ trợ của 4 kỹ năng
                  </span>
                </li>
                <li className="flex items-center space-x-2 px-8">
                  <span className="rounded-full bg-gray-300 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="capitalize text-gray-400">
                    Voucher …% gói học kỹ năng Speaking/Writing
                  </span>
                </li>
              </ul>
              <div className="mt-20 flex items-center justify-center">
                <a className="block cursor-pointer rounded-md border border-rose-500 bg-transparent px-8 py-2 text-center text-base font-semibold text-red-500 transition hover:border-rose-500 hover:bg-red-500 hover:text-white">
                  Chi tiết
                </a>
              </div>
              <div>
                <span className="absolute right-0 top-7 z-[-1]">
                  <svg
                    width="77"
                    height="172"
                    viewBox="0 0 77 172"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="86" cy="86" r="86" fill="url(#paint0_linear)" />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="86"
                        y1="0"
                        x2="86"
                        y2="172"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#EF4444" stopOpacity="0.09" />
                        <stop offset="1" stopColor="#C4C4C4" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span className="absolute right-4 top-4 z-[-1]">
                  <svg
                    width="41"
                    height="89"
                    viewBox="0 0 41 89"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="38.9138"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 38.9138 87.4849)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="38.9138"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 38.9138 74.9871)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="38.9138"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 38.9138 62.4892)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="38.9138"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 38.9138 38.3457)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="38.9138"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 38.9138 13.634)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="38.9138"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 38.9138 50.2754)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="38.9138"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 38.9138 26.1319)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="38.9138"
                      cy="1.42021"
                      r="1.42021"
                      transform="rotate(180 38.9138 1.42021)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="26.4157"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 26.4157 87.4849)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="26.4157"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 26.4157 74.9871)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="26.4157"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 26.4157 62.4892)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="26.4157"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 26.4157 38.3457)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="26.4157"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 26.4157 13.634)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="26.4157"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 26.4157 50.2754)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="26.4157"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 26.4157 26.1319)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="26.4157"
                      cy="1.4202"
                      r="1.42021"
                      transform="rotate(180 26.4157 1.4202)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="13.9177"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 13.9177 87.4849)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="13.9177"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 13.9177 74.9871)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="13.9177"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 13.9177 62.4892)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="13.9177"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 13.9177 38.3457)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="13.9177"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 13.9177 13.634)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="13.9177"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 13.9177 50.2754)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="13.9177"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 13.9177 26.1319)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="13.9177"
                      cy="1.42019"
                      r="1.42021"
                      transform="rotate(180 13.9177 1.42019)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="1.41963"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 1.41963 87.4849)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="1.41963"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 1.41963 74.9871)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="1.41963"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 1.41963 62.4892)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="1.41963"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 1.41963 38.3457)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="1.41963"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 1.41963 13.634)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="1.41963"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 1.41963 50.2754)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="1.41963"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 1.41963 26.1319)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="1.41963"
                      cy="1.4202"
                      r="1.42021"
                      transform="rotate(180 1.41963 1.4202)"
                      fill="#EC2229"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div className="rounded-lg bg-white py-4 shadow-2xl hover:translate-y-0 hover:scale-110">
              <p className="text-center text-xl font-bold text-red-500 ">Premium</p>
              <p className="py-8 text-center">
                <span className="text-4xl font-bold text-gray-700">
                  <span x-text="premiumPrice">2,994,000đ</span>
                </span>
                <span className="text-xs uppercase text-gray-500">
                  / <span x-text="billingType">month</span>
                </span>
              </p>
              <ul className="space-y-6 border-t border-gray-300 py-8">
                <li className="flex items-center space-x-2 px-8">
                  <span className="rounded-full bg-red-600 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="capitalize text-gray-600">Ưu đãi giảm xx%</span>
                </li>
                <li className="flex items-center space-x-2 px-8">
                  <span className="rounded-full bg-red-600 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="capitalize text-gray-600">Ưu tiên lịch</span>
                </li>
                <li className="flex items-center space-x-2 px-8">
                  <span className="rounded-full bg-red-600 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="capitalize text-gray-600">
                    Full bộ tài liệu bổ trợ của 4 kỹ năng
                  </span>
                </li>
                <li className="flex items-center space-x-2 px-8">
                  <span className="rounded-full bg-red-600 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="capitalize text-gray-600">
                    Voucher …% gói học kỹ năng Speaking/Writing
                  </span>
                </li>
              </ul>
              <div className="mt-20 flex items-center justify-center">
                {/* <a
                      href='#'
                      className='px-8 py-2 text-sm font-bold text-gray-200 uppercase transition duration-150 bg-blue-600 rounded hover:bg-blue-700'
                      title='Purchase'
                    >
                      Chi tiết
                    </a> */}
                <a className="block cursor-pointer rounded-md border border-rose-500 bg-transparent px-8 py-2 text-center text-base font-semibold text-red-500 transition hover:border-rose-500 hover:bg-red-500 hover:text-white">
                  Chi tiết
                </a>
              </div>
              <div className="">
                <span className="absolute right-0 top-7 z-[-1]">
                  <svg
                    width="77"
                    height="172"
                    viewBox="0 0 77 172"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="86" cy="86" r="86" fill="url(#paint0_linear)" />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="86"
                        y1="0"
                        x2="86"
                        y2="172"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#EF4444" stopOpacity="0.09" />
                        <stop offset="1" stopColor="#C4C4C4" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span className="absolute right-4 top-4 z-[-1]">
                  <svg
                    width="41"
                    height="89"
                    viewBox="0 0 41 89"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="38.9138"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 38.9138 87.4849)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="38.9138"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 38.9138 74.9871)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="38.9138"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 38.9138 62.4892)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="38.9138"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 38.9138 38.3457)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="38.9138"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 38.9138 13.634)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="38.9138"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 38.9138 50.2754)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="38.9138"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 38.9138 26.1319)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="38.9138"
                      cy="1.42021"
                      r="1.42021"
                      transform="rotate(180 38.9138 1.42021)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="26.4157"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 26.4157 87.4849)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="26.4157"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 26.4157 74.9871)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="26.4157"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 26.4157 62.4892)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="26.4157"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 26.4157 38.3457)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="26.4157"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 26.4157 13.634)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="26.4157"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 26.4157 50.2754)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="26.4157"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 26.4157 26.1319)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="26.4157"
                      cy="1.4202"
                      r="1.42021"
                      transform="rotate(180 26.4157 1.4202)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="13.9177"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 13.9177 87.4849)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="13.9177"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 13.9177 74.9871)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="13.9177"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 13.9177 62.4892)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="13.9177"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 13.9177 38.3457)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="13.9177"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 13.9177 13.634)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="13.9177"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 13.9177 50.2754)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="13.9177"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 13.9177 26.1319)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="13.9177"
                      cy="1.42019"
                      r="1.42021"
                      transform="rotate(180 13.9177 1.42019)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="1.41963"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 1.41963 87.4849)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="1.41963"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 1.41963 74.9871)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="1.41963"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 1.41963 62.4892)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="1.41963"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 1.41963 38.3457)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="1.41963"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 1.41963 13.634)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="1.41963"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 1.41963 50.2754)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="1.41963"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 1.41963 26.1319)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="1.41963"
                      cy="1.4202"
                      r="1.42021"
                      transform="rotate(180 1.41963 1.4202)"
                      fill="#EC2229"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div className="rounded-lg bg-white py-4 shadow-2xl hover:translate-y-0 hover:scale-110">
              <p className="text-center text-xl font-bold text-red-500 ">Pro</p>
              <p className="py-8 text-center">
                <span className="text-4xl font-bold text-gray-700">
                  <span x-text="proPrice">4,491,000đ</span>
                </span>
                <span className="text-xs uppercase text-gray-500">
                  / <span x-text="billingType">month</span>
                </span>
              </p>
              <ul className="space-y-6 border-t border-gray-300 py-8">
                <li className="flex items-center space-x-2 px-8">
                  <span className="rounded-full bg-red-600 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="capitalize text-gray-600">Ưu đãi giảm xx%</span>
                </li>
                <li className="flex items-center space-x-2 px-8">
                  <span className="rounded-full bg-red-600 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="capitalize text-gray-600">Ưu tiên lịch</span>
                </li>
                <li className="flex items-center space-x-2 px-8">
                  <span className="rounded-full bg-red-600 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="capitalize text-gray-600">
                    Full bộ tài liệu bổ trợ của 4 kỹ năng
                  </span>
                </li>
                <li className="flex items-center space-x-2 px-8">
                  <span className="rounded-full bg-red-600 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="capitalize text-gray-600">
                    Voucher …% gói học kỹ năng Speaking/Writing
                  </span>
                </li>
              </ul>
              <div className="mt-20 flex items-center justify-center">
                <a className="block cursor-pointer rounded-md border border-rose-500 bg-transparent px-8 py-2 text-center text-base font-semibold text-red-500 transition hover:border-rose-500 hover:bg-red-500 hover:text-white">
                  Chi tiết
                </a>
              </div>
              <div>
                <span className="absolute right-0 top-7 z-[-1]">
                  <svg
                    width="77"
                    height="172"
                    viewBox="0 0 77 172"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="86" cy="86" r="86" fill="url(#paint0_linear)" />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="86"
                        y1="0"
                        x2="86"
                        y2="172"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#EF4444" stopOpacity="0.09" />
                        <stop offset="1" stopColor="#C4C4C4" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span className="absolute right-4 top-4 z-[-1]">
                  <svg
                    width="41"
                    height="89"
                    viewBox="0 0 41 89"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="38.9138"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 38.9138 87.4849)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="38.9138"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 38.9138 74.9871)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="38.9138"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 38.9138 62.4892)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="38.9138"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 38.9138 38.3457)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="38.9138"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 38.9138 13.634)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="38.9138"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 38.9138 50.2754)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="38.9138"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 38.9138 26.1319)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="38.9138"
                      cy="1.42021"
                      r="1.42021"
                      transform="rotate(180 38.9138 1.42021)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="26.4157"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 26.4157 87.4849)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="26.4157"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 26.4157 74.9871)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="26.4157"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 26.4157 62.4892)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="26.4157"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 26.4157 38.3457)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="26.4157"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 26.4157 13.634)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="26.4157"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 26.4157 50.2754)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="26.4157"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 26.4157 26.1319)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="26.4157"
                      cy="1.4202"
                      r="1.42021"
                      transform="rotate(180 26.4157 1.4202)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="13.9177"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 13.9177 87.4849)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="13.9177"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 13.9177 74.9871)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="13.9177"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 13.9177 62.4892)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="13.9177"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 13.9177 38.3457)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="13.9177"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 13.9177 13.634)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="13.9177"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 13.9177 50.2754)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="13.9177"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 13.9177 26.1319)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="13.9177"
                      cy="1.42019"
                      r="1.42021"
                      transform="rotate(180 13.9177 1.42019)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="1.41963"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 1.41963 87.4849)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="1.41963"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 1.41963 74.9871)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="1.41963"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 1.41963 62.4892)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="1.41963"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 1.41963 38.3457)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="1.41963"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 1.41963 13.634)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="1.41963"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 1.41963 50.2754)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="1.41963"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 1.41963 26.1319)"
                      fill="#EC2229"
                    />
                    <circle
                      cx="1.41963"
                      cy="1.4202"
                      r="1.42021"
                      transform="rotate(180 1.41963 1.4202)"
                      fill="#EC2229"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <svg
        className="absolute right-0 top-56 h-full -z-10"
        xmlns="http://www.w3.org/2000/svg"
        width="375"
        height="658"
      >
        <g fill="none" fillRule="evenodd" stroke="#d15f5d" strokeWidth="2">
          <path d="M172.71-101C70.623-79.38 17.478-39.688 13.273 18.074c-6.307 86.643 231.598 17.186 136.358 198-95.241 180.813-181.318 185.29-136.358 298C58.233 626.784 178.96 685.954 319.21 641.2c93.501-29.836 144.652-140.545 153.453-332.126" />
          <path d="M214.7-101C134.617-82.012 92.926-47.154 89.628 3.575c-4.948 76.093 181.679 15.094 106.966 173.89C121.882 336.262 54.36 340.192 89.628 439.18c35.269 98.986 129.974 150.95 239.995 111.646C402.97 524.622 443.096 427.395 450 259.141" />
          <path d="M250.935-103c-60.604 16.56-92.153 46.963-94.65 91.208-3.743 66.367 137.488 13.165 80.949 151.664-56.54 138.5-107.638 141.927-80.948 228.261 26.69 86.335 98.359 131.656 181.618 97.376C393.41 442.655 423.775 357.855 429 211.108" />
        </g>
      </svg>
      <div className="absolute -bottom-96 -left-80">
        <Image
          src="/svg/test/svg-decorator-blob-3.svg"
          alt="VPN Illustrasi"
          layout="responsive"
          height={50}
          width={100}
          className="pointer-events-none z-10 fill-current text-gray-900 opacity-25"
        />
      </div>
    </section>
  )
}
export default PricePage
