'use client'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Mousewheel } from 'swiper/modules'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { useRef } from 'react'
import Image from 'next/image'

const data = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
    name: 'Justin Nguyen',
    score_speaking: '7.0',
    score_listening: '4.5',
    score_reading: '6.4',
    score_writing: '9.0',
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
    name: 'Justin Nguyen1',
    score_speaking: '9.0',
    score_listening: '4.5',
    score_reading: '9.4',
    score_writing: '9.0',
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
    name: 'Justin Nguyen2',
    score_speaking: '7.0',
    score_listening: '2.5',
    score_reading: '9.4',
    score_writing: '9.0',
  },
  {
    id: 4,
    img: 'https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
    name: 'Justin Nguyen3',
    score_speaking: '7.0',
    score_listening: '4.5',
    score_reading: '6.4',
    score_writing: '9.0',
  },
  {
    id: 5,
    img: 'https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
    name: 'Justin Nguyen4',
    score_speaking: '5.0',
    score_listening: '4.5',
    score_reading: '7.4',
    score_writing: '9.0',
  },
]
const AchievementPage = () => {
  return (
    <section className="relative">
      <div className="container mx-auto space-y-12">
        <div className="mx-auto max-w-2xl">
          {' '}
          <h2 className="mb-4 text-center text-3xl font-bold uppercase !leading-tight text-black sm:text-4xl">
            Học sinh đạt thành tích tiêu biểu
          </h2>
          <p className="mt-4 text-center text-base">
            Với sự chăm chỉ và nỗ lực không ngừng, học sinh đã xuất sắc vượt qua các thách thức học
            tập và ghi điểm ấn tượng trên bảng điểm.
          </p>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          slidesPerView={4}
          autoplay={{
            delay: 5500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          style={{ paddingBottom: '50px' }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="m-2 mt-20 max-w-sm rounded-lg rounded-xl bg-white px-8 py-4 shadow-lg">
                <div className="-mt-16 flex justify-center">
                  <img
                    className="h-32 w-32 transform rounded-full border-2 border-white object-cover transition duration-200 hover:scale-110"
                    src={item.img}
                  />
                </div>
                <div className="py-5">
                  <h2 className="text-3xl font-semibold text-gray-800">{item.name}</h2>
                  <div className="flex items-center space-x-1 py-2">
                    <Image
                      src="/static/svg/mic.svg"
                      width={25}
                      height={25}
                      alt="loader"
                      className="object-contain pr-1 text-red-400"
                    />
                    <p className="font-semibold">Speaking: {item.score_speaking}</p>
                  </div>
                  <div className="flex items-center space-x-1 pb-2">
                    <Image
                      src="/static/svg/listening.svg"
                      width={25}
                      height={25}
                      alt="loader"
                      className="object-contain pr-1 text-red-400 "
                    />
                    <p className="font-semibold">Listening: {item.score_listening}</p>
                  </div>
                  <div className="flex items-center space-x-1 pb-2">
                    <Image
                      src="/static/svg/reading.svg"
                      width={25}
                      height={25}
                      alt="loader"
                      className="object-contain pr-1 text-red-400 "
                    />
                    <p className="font-semibold">Reading: {item.score_reading}</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Image
                      src="/static/svg/pencil.svg"
                      width={25}
                      height={25}
                      alt="loader"
                      className="object-contain pr-1 text-red-400 "
                    />
                    <p className="font-semibold">Writing: {item.score_writing}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* <span className="absolute right-0 top-7 z-[-1]">
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
      </span> */}
      <div className="absolute -left-80 -top-72">
        <Image
          src="/static/svg/test/svg-decorator-blob-3.svg"
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
export default AchievementPage
