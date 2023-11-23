'use client'
import React, { useState, useMemo, useEffect } from 'react'
import Image from 'next/image'
// import PopoverDatePicker from '@/components/PopoverDatePicker'
// import PopoverDatePickerS2 from '@/components/PopoverDatePickerS2'
// import Controls from '@/components/Controls/Controls'
// import BannerPayment from '@/components/BannerPayment'
import { useRouter } from 'next/navigation'
import { ColorContainer } from '@/components/ContainerColor'
import { motion, stagger, useAnimate } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Highlighter } from '@/components/page-home/Highlighter'
import PopoverDatePicker from '@/components/PopoverDatePicker'

const data = [
  // {
  //   id: 1,
  //   img: 'https://randomuser.me/api/portraits/men/85.jpg',
  //   name: 'Nguyen Van A',
  //   score: '9.0'
  // },
  // {
  //   id: 2,
  //   img: 'https://randomuser.me/api/portraits/men/39.jpg',
  //   name: 'Nguyen Van B',
  //   score: '8.5'
  // },
  // {
  //   id: 3,
  //   img: 'https://randomuser.me/api/portraits/men/30.jpg',
  //   name: 'Nguyen Van C',
  //   score: '7.0'
  // },
  {
    id: 4,
    img: 'https://randomuser.me/api/portraits/women/29.jpg',
    name: 'Nguyen Van D',
    score: '6.0',
  },
  {
    id: 5,
    img: 'https://randomuser.me/api/portraits/women/85.jpg',
    name: 'Nguyen Van F',
    score: '5.0',
  },
  {
    id: 6,
    img: 'https://randomuser.me/api/portraits/men/88.jpg',
    name: 'Nguyen Van G',
    score: '3.0',
  },
  {
    id: 7,
    img: 'https://randomuser.me/api/portraits/men/88.jpg',
    name: 'Nguyen Van L',
    score: '3.0',
  },
  {
    id: 8,
    img: 'https://randomuser.me/api/portraits/men/77.jpg',
    name: 'Nguyen Van E',
    score: '2.0',
  },
  {
    id: 9,
    img: 'https://randomuser.me/api/portraits/men/77.jpg',
    name: 'Nguyen Van R',
    score: '2.0',
  },
  {
    id: 10,
    img: 'https://randomuser.me/api/portraits/men/77.jpg',
    name: 'Nguyen Van T',
    score: '2.0',
  },
  {
    id: 11,
    img: 'https://randomuser.me/api/portraits/men/77.jpg',
    name: 'Nguyen Van Q',
    score: '2.0',
  },
]
function DayInfo({ selectedDay }: { selectedDay: any }) {
  const p = new Date(selectedDay)
  const year = p.getFullYear()
  const month = p.getMonth() + 1
  const day = p.getDate()
  const dayOfWeek = p.getDay()
  const dayname = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7']

  return (
    <div>
      <p className="text-xl	">
        {dayname[dayOfWeek] && day && month && year
          ? dayname[dayOfWeek] + ', ' + day + '/' + month + '/' + year
          : ''}
      </p>
    </div>
  )
}

const words = `  Trải nghiệm bài thi thử IELTS giống thi thật với bộ đề thi IELTS độc quyền do Dream
biên soạn, đánh giá chính xác trình độ IELTS của thí sinh. Làm bài thi thử IELTS có
độ khó cao dưới áp lực lớn giúp thí sinh có sự chuẩn bị tốt nhất cho bài thi chính
thức.`
const wordsArray = words.split(' ')

export default function RegisterTest() {
  // display div of availables times
  const router = useRouter()

  const [selectRadios, setSelectRadios] = useState<any>('')
  const [selectRadio, setSelectRadio] = useState<any>()
  // // ---------------
  const [isSelected, setIsSelected] = React.useState(false)
  const [isSelecteds, setIsSelecteds] = React.useState(false)
  const [selectCheckbox, setSelectCheckbox] = useState('')
  const [selectCheckboxs, setSelectCheckboxs] = useState('')
  // // handle dates
  let [selectedDay, setSelectedDay] = useState<String>()
  let [selectedDays, setSelectedDays] = useState<String>()

  const [errorMessage, setErrorMessage] = useState<String>('')

  const handleChangeCheckbox = (e) => {
    if (isSelected) {
      setSelectCheckbox('')
    } else {
      setSelectCheckbox(e.target.value)
    }
  }
  const handleChangeCheckboxs = (e) => {
    if (isSelecteds) {
      setSelectCheckboxs('')
    } else {
      setSelectCheckboxs(e.target.value)
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (selectRadios === '') {
      setErrorMessage('Chọn ca thi Listening - Reading - Writing')
    } else {
      setErrorMessage('')
    }
    router.push('/thanh-toan')
  }
  return (
    <section className="bg-slate-50	">
      <ColorContainer>
        <div className="container mx-auto p-6 md:px-12 lg:px-6 xl:px-0">
          <div className="relative ml-auto">
            <div className="gap-12 md:flex md:items-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="sm:px-12 md:w-2/3 md:px-0 md:text-left lg:w-1/2"
              >
                <h1 className="font-display relative z-50 text-5xl font-black tracking-tight text-white md:text-6xl xl:text-7xl	">
                  Thi thử IELTS 4 kỹ năng
                </h1>
                <div className="mb-12">
                  <div className="mt-8 text-lg leading-snug tracking-wide text-white">
                    <span>
                      Trải nghiệm bài thi thử IELTS giống thi thật với bộ đề thi IELTS độc quyền do
                      Dream biên soạn, đánh giá chính xác trình độ IELTS của thí sinh. Làm bài thi
                      thử IELTS có độ khó cao dưới áp lực lớn giúp thí sinh có sự chuẩn bị tốt nhất
                      cho bài thi chính thức.
                    </span>
                  </div>
                </div>
                <button className="group relative h-12 w-48 overflow-hidden rounded-xl bg-white text-lg shadow">
                  <div className="absolute inset-0 w-3 bg-amber-300 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                  <span className="relative font-semibold text-black group-hover:text-white	">
                    Đăng ký ngay
                  </span>
                </button>
              </motion.div>
              <div className="relative z-50 md:mt-0 md:w-2/5 lg:w-1/2">
                <div className="wow fadeInUp relative z-10 mx-auto w-full  lg:mr-0">
                  <motion.div className="z-40" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <Image
                      src="/static/svg/Saly-22.svg"
                      width={600}
                      height={600}
                      alt="loader"
                      className="z-50  object-contain"
                    />
                  </motion.div>
                  <div className="absolute bottom-10 right-10">
                    <svg
                      width="72"
                      height="51"
                      viewBox="0 0 72 51"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_5_3665)">
                        <path
                          d="M22.378 0.4157C22.3814 0.342879 22.3851 0.270712 22.3891 0.199219C22.3857 0.271606 22.382 0.343766 22.378 0.4157C22.0401 7.83785 25.7079 22.0514 43.163 21.2025C36.0333 21.7022 21.9045 26.7677 22.3875 43.0291C22.1659 35.9367 17.5749 21.9221 1.00683 21.8442C0.856728 21.8465 0.709534 21.8469 0.56543 21.8454C0.713499 21.8439 0.86063 21.8435 1.00683 21.8442C8.04005 21.7355 21.4537 17.3609 22.378 0.4157Z"
                          fill="#e4d8da"
                        ></path>
                        <path
                          d="M59.3487 24.4888C59.3506 24.4451 59.3528 24.4018 59.3552 24.3589C59.3532 24.4023 59.351 24.4456 59.3487 24.4888C59.1459 28.942 61.3466 37.4702 71.8196 36.9608C67.5418 37.2606 59.0645 40.3 59.3543 50.0568C59.2213 45.8014 56.4667 37.3926 46.5259 37.3459C46.4359 37.3473 46.3475 37.3475 46.261 37.3466C46.3499 37.3457 46.4382 37.3454 46.5259 37.3459C50.7458 37.2807 58.794 34.6559 59.3487 24.4888Z"
                          fill="#ffffff"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_5_3665">
                          <rect
                            width="71.2541"
                            height="49.8779"
                            fill="white"
                            transform="translate(0.56543 0.199219)"
                          ></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative -mt-12 lg:-mt-24">
          <svg
            viewBox="0 0 1428 174"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF" fillRule="nonzero">
                <path
                  d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                  opacity="0.100000001"
                ></path>
                <path
                  d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                  opacity="0.100000001"
                ></path>
                <path
                  d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                  id="Path-4"
                  opacity="0.200000003"
                ></path>
              </g>
              <g transform="translate(-4.000000, 76.000000)" fill="#FFFFFF" fillRule="nonzero">
                <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
              </g>
            </g>
          </svg>
        </div>
      </ColorContainer>
      <div className="bg-rose-500">
        <div className="flex flex-col items-center  justify-center bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32	">
          <div className="mt-4 py-2 text-xs sm:mt-0 sm:text-base">
            <div className="relative">
              <ul className="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
                <li className="flex items-center space-x-3 text-left sm:space-x-4">
                  <a
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500 text-xl	 font-semibold text-white ring ring-red-200 ring-offset-2"
                    href="#"
                  >
                    1
                  </a>
                  <span className="font-semibold text-gray-500">Đăng ký thi thử</span>
                </li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                <li className="flex items-center space-x-3 text-left sm:space-x-4">
                  <a
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-red-400 text-xl	 font-semibold text-white"
                    href="#"
                  >
                    2
                  </a>
                  <span className="font-semibold text-gray-500">Thanh toán</span>
                </li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                <li className="flex items-center space-x-3 text-left sm:space-x-4">
                  <a
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-red-400 text-xl	 font-semibold text-white"
                    href="#"
                  >
                    3
                  </a>
                  <span className="font-semibold text-gray-500">Xác nhận</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <p className="mt-3 rounded-md bg-[#fef1ef] p-3">
          Vui lòng{' '}
          <span className="cursor-pointer	font-semibold uppercase text-red-500">đăng ký</span> tài
          khoản để được tiếp tục thanh toán
        </p>
  
        <div className="py-5">
          <div className="shadow-card flex grid-cols-12 flex-col gap-8 rounded-2xl bg-white p-4 md:p-6 lg:grid">
            <div className="lg:col-span-7">
              <form onSubmit={handleSubmit}>
                <div className="mt-2">
                  <p className="pb-2 font-bold dark:text-white">
                    Lịch thi Listening - Reading - Writing
                  </p>
                  {/* <div className="flex flex-col gap-3 sm:flex-row">
                    <PopoverDatePicker
                      setSelectedDay={setSelectedDay}
                      selectedDay={selectedDay}
                      setSelectRadios={setSelectRadios}
                      selectRadios={selectRadios}
                      setErrorMessage={setErrorMessage}
                    />
                  </div> */}
                  {errorMessage && (
                    <p className="mt-2 pl-2 text-sm text-red-600 dark:text-red-500">
                      {errorMessage}
                    </p>
                  )}
                </div>
                {/* <div className="mt-2">
                  <p className="pb-2 font-bold dark:text-white">
                    Chọn Feedback Writing chi tiết (không bắt buộc)
                  </p>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <div className="relative w-full ">
                      <Checkbox
                        classNames={{
                          base: cn(
                            'inline-flex w-full max-w-md bg-content1',
                            'hover:bg-content2 items-center justify-start',
                            'cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent',
                            'data-[selected=true]:border-rose-500	'
                          ),
                          label: 'w-full',
                        }}
                        isSelected={isSelected}
                        onValueChange={setIsSelected}
                        onChange={handleChangeCheckbox}
                        className="m-0 rounded-2xl  border border-slate-400"
                        color="danger"
                        value="Writing Task 1"
                      >
                        <div className="flex w-full items-center justify-between gap-2	">
                          <p>Writing Task 1 (125.000đ)</p>
                          <div className="flex flex-col items-end gap-1">
                            <span className="text-tiny text-default-500"> +10 phút</span>
                          </div>
                        </div>
                      </Checkbox>
                    </div>
                    <div className="relative w-full ">
                      <Checkbox
                        classNames={{
                          base: cn(
                            'inline-flex w-full max-w-md bg-content1',
                            'hover:bg-content2 items-center justify-start',
                            'cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent',
                            'data-[selected=true]:border-rose-500	'
                          ),
                          label: 'w-full',
                        }}
                        isSelected={isSelecteds}
                        onValueChange={setIsSelecteds}
                        onChange={handleChangeCheckboxs}
                        className="m-0 rounded-2xl  border border-slate-400"
                        color="danger"
                        value="Writing Task 2"
                      >
                        <div className="flex w-full items-center justify-between gap-2	">
                          <p>Writing Task 2 (125.000đ)</p>
                          <div className="flex flex-col items-end gap-1">
                            <span className="text-tiny text-default-500"> +10 phút</span>
                          </div>
                        </div>
                      </Checkbox>
                    </div>
                  </div>
                  {isSelecteds === true || isSelected === true ? (
                    <div className="flex items-center gap-x-2">
                      <svg
                        className="h-5 w-5 text-red-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7.529 7.988a2.502 2.502 0 0 1 5 .191A2.441 2.441 0 0 1 10 10.582V12m-.01 3.008H10M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                      <span className="">
                        Feedback Writing sẽ được chấm sau khi thi Speaking. Thời gian sẽ được cộng
                        vào ca thi Speaking.
                      </span>
                    </div>
                  ) : (
                    ''
                  )}
                </div>
                <div className="mt-2">
                  <p className="pb-2 font-bold dark:text-white">Lịch thi Speaking</p>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <PopoverDatePickerS2
                      setSelectedDays={setSelectedDays}
                      selectedDays={selectedDays}
                      setSelectRadio={setSelectRadio}
                      selectRadio={selectRadio}
                    />
                  </div>
                </div> */}
                {/* <Button
                  color="danger"
                  fullWidth
                  size="lg"
                  className="mt-4 bg-rose-500"
                  type="submit"
                >
                  Thanh toán ngay
                </Button> */}
              </form>
            </div>
            <div className="bg-gray-primary rounded-2xl p-4 shadow-md dark:bg-white/10 md:p-6 lg:col-span-5">
              <p className="pb-3 text-2xl font-semibold	text-slate-600">Chi tiết đăng ký</p>
              <div className="rounded-2xl border border-slate-400 p-4 text-slate-600">
                <div className="flex justify-between pb-3">
                  <p className="text-lg	font-semibold text-slate-600	">Thi L-R-W</p>
                  <p className="text-lg	font-semibold text-slate-600	">Thi Speaking</p>
                </div>
                <div className="flex justify-between pb-3">
                  <div className="flex flex-col font-semibold">
                    <DayInfo selectedDay={selectedDay} />
                    <p className="">{selectRadios}</p>
                  </div>
                  <div className="my-auto hidden h-[48px] w-[1px] bg-black/10 dark:bg-white/10 md:block"></div>
                  <div className="flex flex-col items-end font-semibold		">
                    <DayInfo selectedDay={selectedDays} />
                    <p className="">{selectRadio}</p>
                  </div>
                </div>
                <div className="text-sm	">
                  <p className="font-semibold		 text-black/70 dark:text-white/70">
                    Hình thức thi:{' '}
                    <span className=" font-semibold text-black dark:text-white">Online</span>
                  </p>
                  <p className="font-semibold		 text-black/70 dark:text-white/70">
                    Examiner:{' '}
                    <span className=" font-semibold text-black dark:text-white">Vietnamese</span>
                  </p>
                  <p className="font-semibold		 text-black/70 dark:text-white/70">
                    Feedback Writing chi tiết:{' '}
                    <span className=" font-semibold text-black dark:text-white">
                      {selectCheckbox ?? ''} {selectCheckboxs ?? ''}
                    </span>
                  </p>
                </div>
              </div>
              <p className="py-3 text-2xl font-semibold	text-slate-600">Mã giảm giá</p>
              {/* <div className="flex gap-3">
                <Input type="email" size="lg" variant="bordered" />
                <Button size="lg" variant="ghost">
                  Đồng ý
                </Button>
              </div> */}
              <div className="py-3">
                <div className="flex justify-between">
                  <p className="font-semibold text-black/70 dark:text-white/70">Tổng tiền:</p>
                  <span className=" font-semibold text-black dark:text-white">
                    300.000 <strong>VNĐ</strong>
                  </span>
                </div>
                <div className="flex justify-between">
                  <p className="font-semibold text-black/70 dark:text-white/70">Mã giảm giá: </p>
                  <span className=" font-semibold text-black dark:text-white">
                    300.000 <strong>VNĐ</strong>
                  </span>
                </div>
                <div className="flex justify-between">
                  <p className="font-semibold text-black/70 dark:text-white/70">Thành tiền: </p>
                  <span className=" font-semibold text-black dark:text-white">
                    0 <strong>VNĐ</strong>
                  </span>
                </div>
              </div>
              {/* <Divider className="my-4" /> */}
              <p>
                Lưu ý:
                <ul>
                  <li>
                    Thời hạn chốt danh sách là 2 ngày trước đợt thi diễn ra, thí sinh không được
                    hoàn tiền nếu huỷ thi sau khi chốt danh sách thi.
                  </li>
                  <li>
                    Suất thi sẽ được ưu tiên cho thí sinh thanh toán thành công trước. Thanh toán
                    qua Momo sẽ được xác nhận tự động ngay lập tức.
                  </li>
                </ul>
                <br />
              </p>
            </div>
          </div>
        </div>
        {/* <div className="pb-5">
          <div className="shadow-card flex grid-cols-12 flex-col gap-8 rounded-2xl bg-white p-4 md:p-6 lg:grid">
            <div className="pb-40 lg:col-span-7">
              <div className="pb-5">
                <h4 className="mt-2 text-xl font-extrabold leading-8 text-gray-900 dark:text-white  sm:leading-9">
                  Hướng dẫn đăng ký lịch thi thử IELTS
                </h4>
                <ul className="mt-4 space-y-3 font-medium">
                  <li className="flex items-start lg:col-span-1">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-indigo-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <p className="ml-3 leading-5 text-gray-600">
                      Thí sinh chọn chi tiết thông tin thi trong các đợt thi.
                    </p>
                  </li>
                  <li className="flex items-start lg:col-span-1">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-indigo-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <p className="ml-3 leading-5 text-gray-600">
                      Hạn đăng ký và thanh toán là trước ngày bắt đầu thi 02 ngày. Sau thời gian này
                      mọi hồ sơ đăng ký nhưng chưa thanh toán sẽ bị hủy. Thí sinh thanh toán thành
                      công trước sẽ được ưu tiên chốt danh sách trước.{' '}
                    </p>
                  </li>
                  <li className="flex items-start lg:col-span-1">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-indigo-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <p className="ml-3 leading-5 text-gray-600">
                      Với thí sinh thanh toán thành công, trước ngày thi 02 ngày thí sinh sẽ nhận
                      email chốt danh sách thi, cung cấp thông tin đợt thi bao gồm: họ tên thí sinh,
                      số báo danh và thời gian thi của các kỹ năng
                    </p>
                  </li>
                  <li className="flex items-start lg:col-span-1">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-indigo-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <p className="ml-3 leading-5 text-gray-600">
                      Thí sinh vui lòng sử dụng thông tin nhận được trong email để khai báo điểm
                      danh vào phòng thi Speaking
                    </p>
                  </li>
                  <li className="flex items-start lg:col-span-1">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-indigo-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <p className="ml-3 leading-5 text-gray-600">
                      Kết quả thi sẽ được gửi về email của thí sinh và lưu trữ trong phần quản lý
                      thông tin cá nhân của thí sinh trên website
                    </p>
                  </li>
                </ul>
              </div>
              <div className="pb-5">
                <h4 className="dark:text-whitesm:leading-9 mt-2 text-xl font-extrabold leading-8 text-gray-900">
                  Thanh toán phí thi
                </h4>
                <div className="space-y-4 font-medium leading-relaxed" itemProp="text">
                  <div>
                    <strong>Trung tâm hiện tại chỉ chấp nhận thanh toán:</strong>
                    <ul>
                      <li className="flex items-center gap-2">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 1024 1024"
                          className="h-4 w-4"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M723 620.5C666.8 571.6 593.4 542 513 542s-153.8 29.6-210.1 78.6a8.1 8.1 0 0 0-.8 11.2l36 42.9c2.9 3.4 8 3.8 11.4.9C393.1 637.2 450.3 614 513 614s119.9 23.2 163.5 61.5c3.4 2.9 8.5 2.5 11.4-.9l36-42.9c2.8-3.3 2.4-8.3-.9-11.2zm117.4-140.1C751.7 406.5 637.6 362 513 362s-238.7 44.5-327.5 118.4a8.05 8.05 0 0 0-1 11.3l36 42.9c2.8 3.4 7.9 3.8 11.2 1C308 472.2 406.1 434 513 434s205 38.2 281.2 101.6c3.4 2.8 8.4 2.4 11.2-1l36-42.9c2.8-3.4 2.4-8.5-1-11.3zm116.7-139C835.7 241.8 680.3 182 511 182c-168.2 0-322.6 59-443.7 157.4a8 8 0 0 0-1.1 11.4l36 42.9c2.8 3.3 7.8 3.8 11.1 1.1C222 306.7 360.3 254 511 254c151.8 0 291 53.5 400 142.7 3.4 2.8 8.4 2.3 11.2-1.1l36-42.9c2.9-3.4 2.4-8.5-1.1-11.3zM448 778a64 64 0 1 0 128 0 64 64 0 1 0-128 0z"></path>
                        </svg>
                        <p>Thanh toán Online qua (Ví MoMo, Cổng Onepay)</p>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 16 16"
                          className="h-4 w-4"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M8 .95 14.61 4h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.379l.5 2A.5.5 0 0 1 15.5 17H.5a.5.5 0 0 1-.485-.621l.5-2A.5.5 0 0 1 1 14V7H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 4h.89L8 .95zM3.776 4h8.447L8 2.05 3.776 4zM2 7v7h1V7H2zm2 0v7h2.5V7H4zm3.5 0v7h1V7h-1zm2 0v7H12V7H9.5zM13 7v7h1V7h-1zm2-1V5H1v1h14zm-.39 9H1.39l-.25 1h13.72l-.25-1z"></path>
                        </svg>
                        <p>Chuyển khoản ngân hàng</p>
                      </li>
                    </ul>
                  </div>
                  <p>
                    Hình thức thanh toán Online sẽ được <strong> xác nhận tự động 24/7</strong>.{' '}
                  </p>
                  <p>
                    Nếu gặp trục trặc gì trong quá trình thanh toán liên hệ chúng tôi qua hotline:
                    <strong> 0123456789</strong>
                  </p>
                </div>
              </div>
              <div className="">
                <h4 className="dark:text-whitesm:leading-9 my-2 text-xl font-extrabold leading-8 text-gray-900">
                  Các gói thi thử và so sánh các ưu đãi đi kèm
                </h4>
                <div className="relative mx-auto flex w-full max-w-screen-lg flex-col rounded-lg rounded-br-none shadow-md ">
                  <div className="space relative flex h-20 items-center border-b border-gray-200 px-4">
                    <div className="w-40"></div>
                    <div className="w-28 flex-grow rounded-t-md py-2 text-center text-lg font-semibold">
                      Basic
                    </div>
                    <div className="relative w-28 flex-grow rounded-md  py-6 text-center text-lg font-semibold">
                      <div className="pointer-events-none absolute top-0 hidden h-[25rem] w-full rounded-lg border-4 border-orange-600 sm:block"></div>
                      Premium
                    </div>
                    <div className="w-28 flex-grow rounded-t-md py-2 text-center text-lg font-semibold">
                      Pro
                    </div>
                  </div>

                  <div className="flex h-12 items-center border-b border-gray-200 px-4">
                    <div className="w-40">Ưu Đãi Giảm Xx%</div>
                    <div className="flex w-0 flex-grow justify-center">
                      <svg
                        className="h-4 w-4 fill-current text-green-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="flex w-0 flex-grow justify-center">
                      <svg
                        className="h-4 w-4 fill-current text-green-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="flex w-0 flex-grow justify-center">
                      <svg
                        className="h-4 w-4 fill-current text-green-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex h-12 items-center border-b border-gray-200 px-4">
                    <div className="w-40">Ưu Tiên Lịch</div>
                    <div className="w-0 flex-grow"></div>
                    <div className="flex w-0 flex-grow justify-center">
                      <svg
                        className="h-4 w-4 fill-current text-green-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="flex w-0 flex-grow justify-center">
                      <svg
                        className="h-4 w-4 fill-current text-green-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex h-12 items-center border-b border-gray-200 px-4">
                    <div className="w-40">Full Bộ Tài Liệu Bổ Trợ Của 4 Kỹ Năng</div>
                    <div className="flex w-0 flex-grow justify-center">
                      <svg
                        className="h-4 w-4 fill-current text-green-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="flex w-0 flex-grow justify-center">
                      <svg
                        className="h-4 w-4 fill-current text-green-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="flex w-0 flex-grow justify-center">
                      <svg
                        className="h-4 w-4 fill-current text-green-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex h-12 items-center border-b border-gray-200 px-4">
                    <div className="w-40">Voucher …% Kỹ Năng Speaking/Writing</div>
                    <div className="w-0 flex-grow"></div>
                    <div className="flex w-0 flex-grow justify-center">
                      <svg
                        className="h-4 w-4 fill-current text-green-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="flex w-0 flex-grow justify-center">
                      <svg
                        className="h-4 w-4 fill-current text-green-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="hidden h-0 items-center sm:flex">
                    <div className="w-40"></div>
                    <div className="mr-4 mt-24 flex h-24 w-0 flex-grow flex-col items-center space-y-2 rounded-b-lg bg-white px-8 shadow-md">
                      <span className="text-xl font-bold">
                        $1,497,000đ<span className="text-sm font-normal">/tháng</span>
                      </span>
                      <button className="flex h-8 w-32 items-center justify-center whitespace-nowrap rounded-md bg-red-500 py-2 text-sm text-white shadow-lg shadow-indigo-200 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-blue-300">
                        Xem chi tiết
                      </button>
                    </div>
                    <div className="mt-28 flex h-36 w-0 flex-grow flex-col items-center space-y-2 rounded-b-lg bg-white px-8 py-2 shadow-md">
                      <span className="text-xl font-bold">
                        2,994,000đ<span className="text-sm font-normal">/tháng</span>
                      </span>
                      <button className="flex h-8 w-32 items-center justify-center whitespace-nowrap rounded-md bg-red-500 py-2 text-sm text-white shadow-lg shadow-indigo-200 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-blue-300">
                        Xem chi tiết
                      </button>
                    </div>
                    <div className="ml-4 mt-24 flex h-24 w-0 flex-grow flex-col items-center space-y-2 rounded-b-lg bg-white px-8 shadow-md">
                      <span className="text-xl font-bold">
                        4,491,000đ<span className="text-sm font-normal">/tháng</span>
                      </span>
                      <button className="flex h-8 w-32 items-center justify-center whitespace-nowrap rounded-md bg-red-500 py-2 text-sm text-white shadow-lg shadow-indigo-200 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-blue-300">
                        Xem chi tiết
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-primary rounded-2xl p-4 shadow-md dark:bg-white/10 md:p-6 lg:col-span-5">
              <h1 className="mb-10 text-center text-2xl font-semibold text-slate-600">
                Thí sinh tiêu biểu
              </h1>
              <div className="center">
                <div className="top3">
                  <div className="two item">
                    <div className="pos">2</div>
                    <div
                      className="pic"
                      style={{
                        backgroundImage: 'url(https://randomuser.me/api/portraits/men/85.jpg)',
                      }}
                    ></div>
                    <div className="name">Nguyễn Văn A</div>
                    <div className="score ">8.0</div>
                  </div>
                  <div className="one item">
                    <div className="pos">1</div>
                    <div
                      className="pic"
                      style={{
                        backgroundImage: 'url(https://randomuser.me/api/portraits/women/39.jpg)',
                      }}
                    ></div>
                    <div className="name">Nguyễn Thị B</div>
                    <div className="score">9.0</div>
                  </div>
                  <div className="three item">
                    <div className="pos">3</div>
                    <div
                      className="pic"
                      style={{
                        backgroundImage: 'url(https://randomuser.me/api/portraits/men/30.jpg)',
                      }}
                    ></div>
                    <div className="name">Justin Nguyen</div>
                    <div className="score">8.5</div>
                  </div>
                </div>
                <div className="list">
                  {data.map((item, index) => (
                    <div
                      className="item  bg-gradient-to-l from-rose-300 to-rose-500 shadow"
                      key={index}
                    >
                      <div className="pos">{item.id}</div>
                      <div className="pic" style={{ backgroundImage: `url(${item.img})` }}></div>
                      <div className="name">{item.name}</div>
                      <div className="score">{item.score}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      {/* <div className="">
        <h1 className="mx-auto mt-2 max-w-3xl text-center text-2xl font-semibold leading-tight sm:text-4xl md:text-5xl">
          Đánh giá của học viên
        </h1>
        <div className="brand-wheel infinite-scroller my-10">
          <div className="flex flex-row gap-5">
            <div className=" scrollers  flex  rounded-xl border border-gray-100 p-4 text-left text-gray-600 shadow-lg ">
              <img
                className="mr-5 block h-8 w-8 max-w-full text-left align-middle sm:h-16 sm:w-16"
                src="https://www.uifaces.co/wp-content/themes/uifaces-theme/src/img/home-animation/avatar-3.svg"
                alt="Profile Picture"
              />
              <div className="w-full text-left">
                <div className="mb-2 flex flex-col justify-between text-gray-600 sm:flex-row">
                  <div className="flex flex-col">
                    {' '}
                    <h3 className="font-medium">Nguyen Tung</h3>
                    <span className="text-xs	text-slate-400	">Thi thử</span>
                  </div>

                  <time className="text-xs" dateTime="2022-11-13T20:00Z">
                    July 18, 2022
                  </time>
                </div>
                <p className="text-sm">Môi trường học tập và chất lượng thi ổn</p>
              </div>
            </div>
            <div className=" scrollers  flex  rounded-xl border border-gray-100 p-4 text-left text-gray-600 shadow-lg ">
              <img
                className="mr-5 block h-8 w-8 max-w-full text-left align-middle sm:h-16 sm:w-16"
                src="https://www.uifaces.co/wp-content/themes/uifaces-theme/src/img/home-animation/avatar-3.svg"
                alt="Profile Picture"
              />
              <div className="w-full text-left">
                <div className="mb-2 flex flex-col justify-between text-gray-600 sm:flex-row">
                  <div className="flex flex-col">
                    {' '}
                    <h3 className="font-medium">Nguyen Tung</h3>
                    <span className="text-xs	text-slate-400	">Thi thử</span>
                  </div>

                  <time className="text-xs" dateTime="2022-11-13T20:00Z">
                    July 18, 2022
                  </time>
                </div>
                <p className="text-sm">Môi trường học tập và chất lượng thi ổn</p>
              </div>
            </div>
            <div className=" scrollers  flex  rounded-xl border border-gray-100 p-4 text-left text-gray-600 shadow-lg ">
              <img
                className="mr-5 block h-8 w-8 max-w-full text-left align-middle sm:h-16 sm:w-16"
                src="https://www.uifaces.co/wp-content/themes/uifaces-theme/src/img/home-animation/avatar-3.svg"
                alt="Profile Picture"
              />
              <div className="w-full text-left">
                <div className="mb-2 flex flex-col justify-between text-gray-600 sm:flex-row">
                  <div className="flex flex-col">
                    {' '}
                    <h3 className="font-medium">Nguyen Tung</h3>
                    <span className="text-xs	text-slate-400	">Thi thử</span>
                  </div>

                  <time className="text-xs" dateTime="2022-11-13T20:00Z">
                    July 18, 2022
                  </time>
                </div>
                <p className="text-sm">Môi trường học tập và chất lượng thi ổn</p>
              </div>
            </div>
            <div className=" scrollers  flex  rounded-xl border border-gray-100 p-4 text-left text-gray-600 shadow-lg ">
              <img
                className="mr-5 block h-8 w-8 max-w-full text-left align-middle sm:h-16 sm:w-16"
                src="https://www.uifaces.co/wp-content/themes/uifaces-theme/src/img/home-animation/avatar-3.svg"
                alt="Profile Picture"
              />
              <div className="w-full text-left">
                <div className="mb-2 flex flex-col justify-between text-gray-600 sm:flex-row">
                  <div className="flex flex-col">
                    {' '}
                    <h3 className="font-medium">Nguyen Tung</h3>
                    <span className="text-xs	text-slate-400	">Thi thử</span>
                  </div>

                  <time className="text-xs" dateTime="2022-11-13T20:00Z">
                    July 18, 2022
                  </time>
                </div>
                <p className="text-sm">Môi trường học tập và chất lượng thi ổn</p>
              </div>
            </div>
            <div className=" scrollers  flex  rounded-xl border border-gray-100 p-4 text-left text-gray-600 shadow-lg ">
              <img
                className="mr-5 block h-8 w-8 max-w-full text-left align-middle sm:h-16 sm:w-16"
                src="https://www.uifaces.co/wp-content/themes/uifaces-theme/src/img/home-animation/avatar-3.svg"
                alt="Profile Picture"
              />
              <div className="w-full text-left">
                <div className="mb-2 flex flex-col justify-between text-gray-600 sm:flex-row">
                  <div className="flex flex-col">
                    {' '}
                    <h3 className="font-medium">Nguyen Tung</h3>
                    <span className="text-xs	text-slate-400	">Thi thử</span>
                  </div>

                  <time className="text-xs" dateTime="2022-11-13T20:00Z">
                    July 18, 2022
                  </time>
                </div>
                <p className="text-sm">Môi trường học tập và chất lượng thi ổn</p>
              </div>
            </div>
            <div className=" scrollers  flex  rounded-xl border border-gray-100 p-4 text-left text-gray-600 shadow-lg ">
              <img
                className="mr-5 block h-8 w-8 max-w-full text-left align-middle sm:h-16 sm:w-16"
                src="https://www.uifaces.co/wp-content/themes/uifaces-theme/src/img/home-animation/avatar-3.svg"
                alt="Profile Picture"
              />
              <div className="w-full text-left">
                <div className="mb-2 flex flex-col justify-between text-gray-600 sm:flex-row">
                  <div className="flex flex-col">
                    {' '}
                    <h3 className="font-medium">Nguyen Tung</h3>
                    <span className="text-xs	text-slate-400	">Thi thử</span>
                  </div>

                  <time className="text-xs" dateTime="2022-11-13T20:00Z">
                    July 18, 2022
                  </time>
                </div>
                <p className="text-sm">Môi trường học tập và chất lượng thi ổn</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-5">
            <div className=" scrollers-else  flex  rounded-xl border border-gray-100 p-4 text-left text-gray-600 shadow-lg ">
              <img
                className="mr-5 block h-8 w-8 max-w-full text-left align-middle sm:h-16 sm:w-16"
                src="https://www.uifaces.co/wp-content/themes/uifaces-theme/src/img/home-animation/avatar-3.svg"
                alt="Profile Picture"
              />
              <div className="w-full text-left">
                <div className="mb-2 flex flex-col justify-between text-gray-600 sm:flex-row">
                  <div className="flex flex-col">
                    {' '}
                    <h3 className="font-medium">Nguyen Tung</h3>
                    <span className="text-xs	text-slate-400	">Thi thử</span>
                  </div>

                  <time className="text-xs" dateTime="2022-11-13T20:00Z">
                    July 18, 2022
                  </time>
                </div>
                <p className="text-sm">Môi trường học tập và chất lượng thi ổn</p>
              </div>
            </div>
            <div className=" scrollers-else  flex  rounded-xl border border-gray-100 p-4 text-left text-gray-600 shadow-lg ">
              <img
                className="mr-5 block h-8 w-8 max-w-full text-left align-middle sm:h-16 sm:w-16"
                src="https://www.uifaces.co/wp-content/themes/uifaces-theme/src/img/home-animation/avatar-3.svg"
                alt="Profile Picture"
              />
              <div className="w-full text-left">
                <div className="mb-2 flex flex-col justify-between text-gray-600 sm:flex-row">
                  <div className="flex flex-col">
                    {' '}
                    <h3 className="font-medium">Nguyen Tung</h3>
                    <span className="text-xs	text-slate-400	">Thi thử</span>
                  </div>

                  <time className="text-xs" dateTime="2022-11-13T20:00Z">
                    July 18, 2022
                  </time>
                </div>
                <p className="text-sm">Môi trường học tập và chất lượng thi ổn</p>
              </div>
            </div>
            <div className=" scrollers-else  flex  rounded-xl border border-gray-100 p-4 text-left text-gray-600 shadow-lg ">
              <img
                className="mr-5 block h-8 w-8 max-w-full text-left align-middle sm:h-16 sm:w-16"
                src="https://www.uifaces.co/wp-content/themes/uifaces-theme/src/img/home-animation/avatar-3.svg"
                alt="Profile Picture"
              />
              <div className="w-full text-left">
                <div className="mb-2 flex flex-col justify-between text-gray-600 sm:flex-row">
                  <div className="flex flex-col">
                    {' '}
                    <h3 className="font-medium">Nguyen Tung</h3>
                    <span className="text-xs	text-slate-400	">Thi thử</span>
                  </div>

                  <time className="text-xs" dateTime="2022-11-13T20:00Z">
                    July 18, 2022
                  </time>
                </div>
                <p className="text-sm">Môi trường học tập và chất lượng thi ổn</p>
              </div>
            </div>
            <div className=" scrollers-else  flex  rounded-xl border border-gray-100 p-4 text-left text-gray-600 shadow-lg ">
              <img
                className="mr-5 block h-8 w-8 max-w-full text-left align-middle sm:h-16 sm:w-16"
                src="https://www.uifaces.co/wp-content/themes/uifaces-theme/src/img/home-animation/avatar-3.svg"
                alt="Profile Picture"
              />
              <div className="w-full text-left">
                <div className="mb-2 flex flex-col justify-between text-gray-600 sm:flex-row">
                  <div className="flex flex-col">
                    {' '}
                    <h3 className="font-medium">Nguyen Tung</h3>
                    <span className="text-xs	text-slate-400	">Thi thử</span>
                  </div>

                  <time className="text-xs" dateTime="2022-11-13T20:00Z">
                    July 18, 2022
                  </time>
                </div>
                <p className="text-sm">Môi trường học tập và chất lượng thi ổn</p>
              </div>
            </div>
            <div className=" scrollers-else  flex  rounded-xl border border-gray-100 p-4 text-left text-gray-600 shadow-lg ">
              <img
                className="mr-5 block h-8 w-8 max-w-full text-left align-middle sm:h-16 sm:w-16"
                src="https://www.uifaces.co/wp-content/themes/uifaces-theme/src/img/home-animation/avatar-3.svg"
                alt="Profile Picture"
              />
              <div className="w-full text-left">
                <div className="mb-2 flex flex-col justify-between text-gray-600 sm:flex-row">
                  <div className="flex flex-col">
                    {' '}
                    <h3 className="font-medium">Nguyen Tung</h3>
                    <span className="text-xs	text-slate-400	">Thi thử</span>
                  </div>

                  <time className="text-xs" dateTime="2022-11-13T20:00Z">
                    July 18, 2022
                  </time>
                </div>
                <p className="text-sm">Môi trường học tập và chất lượng thi ổn</p>
              </div>
            </div>
            <div className=" scrollers-else  flex  rounded-xl border border-gray-100 p-4 text-left text-gray-600 shadow-lg ">
              <img
                className="mr-5 block h-8 w-8 max-w-full text-left align-middle sm:h-16 sm:w-16"
                src="https://www.uifaces.co/wp-content/themes/uifaces-theme/src/img/home-animation/avatar-3.svg"
                alt="Profile Picture"
              />
              <div className="w-full text-left">
                <div className="mb-2 flex flex-col justify-between text-gray-600 sm:flex-row">
                  <div className="flex flex-col">
                    {' '}
                    <h3 className="font-medium">Nguyen Tung</h3>
                    <span className="text-xs	text-slate-400	">Thi thử</span>
                  </div>

                  <time className="text-xs" dateTime="2022-11-13T20:00Z">
                    July 18, 2022
                  </time>
                </div>
                <p className="text-sm">Môi trường học tập và chất lượng thi ổn</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-5">
            <div className=" scrollers  flex  rounded-xl border border-gray-100 p-4 text-left text-gray-600 shadow-lg ">
              <img
                className="mr-5 block h-8 w-8 max-w-full text-left align-middle sm:h-16 sm:w-16"
                src="https://www.uifaces.co/wp-content/themes/uifaces-theme/src/img/home-animation/avatar-3.svg"
                alt="Profile Picture"
              />
              <div className="w-full text-left">
                <div className="mb-2 flex flex-col justify-between text-gray-600 sm:flex-row">
                  <div className="flex flex-col">
                    {' '}
                    <h3 className="font-medium">Nguyen Tung</h3>
                    <span className="text-xs	text-slate-400	">Thi thử</span>
                  </div>

                  <time className="text-xs" dateTime="2022-11-13T20:00Z">
                    July 18, 2022
                  </time>
                </div>
                <p className="text-sm">Môi trường học tập và chất lượng thi ổn</p>
              </div>
            </div>
            <div className=" scrollers  flex  rounded-xl border border-gray-100 p-4 text-left text-gray-600 shadow-lg ">
              <img
                className="mr-5 block h-8 w-8 max-w-full text-left align-middle sm:h-16 sm:w-16"
                src="https://www.uifaces.co/wp-content/themes/uifaces-theme/src/img/home-animation/avatar-3.svg"
                alt="Profile Picture"
              />
              <div className="w-full text-left">
                <div className="mb-2 flex flex-col justify-between text-gray-600 sm:flex-row">
                  <div className="flex flex-col">
                    {' '}
                    <h3 className="font-medium">Nguyen Tung</h3>
                    <span className="text-xs	text-slate-400	">Thi thử</span>
                  </div>

                  <time className="text-xs" dateTime="2022-11-13T20:00Z">
                    July 18, 2022
                  </time>
                </div>
                <p className="text-sm">Môi trường học tập và chất lượng thi ổn</p>
              </div>
            </div>
            <div className=" scrollers  flex  rounded-xl border border-gray-100 p-4 text-left text-gray-600 shadow-lg ">
              <img
                className="mr-5 block h-8 w-8 max-w-full text-left align-middle sm:h-16 sm:w-16"
                src="https://www.uifaces.co/wp-content/themes/uifaces-theme/src/img/home-animation/avatar-3.svg"
                alt="Profile Picture"
              />
              <div className="w-full text-left">
                <div className="mb-2 flex flex-col justify-between text-gray-600 sm:flex-row">
                  <div className="flex flex-col">
                    {' '}
                    <h3 className="font-medium">Nguyen Tung</h3>
                    <span className="text-xs	text-slate-400	">Thi thử</span>
                  </div>

                  <time className="text-xs" dateTime="2022-11-13T20:00Z">
                    July 18, 2022
                  </time>
                </div>
                <p className="text-sm">Môi trường học tập và chất lượng thi ổn</p>
              </div>
            </div>
            <div className=" scrollers  flex  rounded-xl border border-gray-100 p-4 text-left text-gray-600 shadow-lg ">
              <img
                className="mr-5 block h-8 w-8 max-w-full text-left align-middle sm:h-16 sm:w-16"
                src="https://www.uifaces.co/wp-content/themes/uifaces-theme/src/img/home-animation/avatar-3.svg"
                alt="Profile Picture"
              />
              <div className="w-full text-left">
                <div className="mb-2 flex flex-col justify-between text-gray-600 sm:flex-row">
                  <div className="flex flex-col">
                    {' '}
                    <h3 className="font-medium">Nguyen Tung</h3>
                    <span className="text-xs	text-slate-400	">Thi thử</span>
                  </div>

                  <time className="text-xs" dateTime="2022-11-13T20:00Z">
                    July 18, 2022
                  </time>
                </div>
                <p className="text-sm">Môi trường học tập và chất lượng thi ổn</p>
              </div>
            </div>
            <div className=" scrollers  flex  rounded-xl border border-gray-100 p-4 text-left text-gray-600 shadow-lg ">
              <img
                className="mr-5 block h-8 w-8 max-w-full text-left align-middle sm:h-16 sm:w-16"
                src="https://www.uifaces.co/wp-content/themes/uifaces-theme/src/img/home-animation/avatar-3.svg"
                alt="Profile Picture"
              />
              <div className="w-full text-left">
                <div className="mb-2 flex flex-col justify-between text-gray-600 sm:flex-row">
                  <div className="flex flex-col">
                    {' '}
                    <h3 className="font-medium">Nguyen Tung</h3>
                    <span className="text-xs	text-slate-400	">Thi thử</span>
                  </div>

                  <time className="text-xs" dateTime="2022-11-13T20:00Z">
                    July 18, 2022
                  </time>
                </div>
                <p className="text-sm">Môi trường học tập và chất lượng thi ổn</p>
              </div>
            </div>
            <div className=" scrollers  flex  rounded-xl border border-gray-100 p-4 text-left text-gray-600 shadow-lg ">
              <img
                className="mr-5 block h-8 w-8 max-w-full text-left align-middle sm:h-16 sm:w-16"
                src="https://www.uifaces.co/wp-content/themes/uifaces-theme/src/img/home-animation/avatar-3.svg"
                alt="Profile Picture"
              />
              <div className="w-full text-left">
                <div className="mb-2 flex flex-col justify-between text-gray-600 sm:flex-row">
                  <div className="flex flex-col">
                    {' '}
                    <h3 className="font-medium">Nguyen Tung</h3>
                    <span className="text-xs	text-slate-400	">Thi thử</span>
                  </div>

                  <time className="text-xs" dateTime="2022-11-13T20:00Z">
                    July 18, 2022
                  </time>
                </div>
                <p className="text-sm">Môi trường học tập và chất lượng thi ổn</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  )
}
