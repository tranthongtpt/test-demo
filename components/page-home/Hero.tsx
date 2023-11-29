'use client'
import { animate, motion, stagger, useAnimate } from 'framer-motion'
import Image from 'next/image'
import { useEffect } from 'react'
import { Highlighter } from './Highlighter'
import { useTheme } from 'next-themes'
import { ColorContainer } from '../z_old_source_timlrx/ContainerColor'

const words = `   Tham gia sự kiện thi thử IELTS ngay hôm nay cùng cựu giám khảo IDP và Hội đồng Anh. Đừng bỏ lỡ cơ
hội hiếm có này để trải nghiệm môi trường thi thử chân thực và nhận phản hồi chi tiết từ những
chuyên gia hàng đầu.`
const wordsArray = words.split(' ')

function HeroHome() {
  const [scope, animate] = useAnimate()
  const { setTheme, resolvedTheme, theme } = useTheme()
  useEffect(() => {
    animate(
      'span',
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    )
  }, [scope.current])
  const textVariants = {
    hidden: { x: '-150%' },
    visible: { x: '0%', transition: { duration: 1, ease: 'easeInOut' } },
  }
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeInOut' } },
  }
  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word) => {
          return <motion.span className="text-white opacity-0">{word} </motion.span>
        })}
      </motion.div>
    )
  }

  return (
    <ColorContainer>
      <div className="container mx-auto p-6 md:px-12 lg:px-6 xl:px-0">
        <div className="relative ml-auto">
          <div className="gap-12 md:flex md:items-center">
            <div className="sm:px-12 md:w-2/3 md:px-0 md:text-left lg:w-1/2">
              <motion.h1
                className="font-display relative z-50 text-5xl font-black tracking-tight text-white md:text-6xl xl:text-7xl	"
                initial="hidden"
                animate="visible"
                variants={textVariants}
              >
                🌟 Thi thử
                <span className="relative text-yellow-200">
                  {' '}
                  IELTS{' '}
                  <div className="absolute bottom-0 right-0 -z-10 hidden md:flex">
                    <Highlighter
                      theme={theme}
                      type="yellow"
                      props={{ viewBox: '0 0 219 66', height: '60px' }}
                    />
                  </div>
                </span>
                và nhận điểm
                <span className="relative text-yellow-200">
                  {' '}
                  THẬT{' '}
                  <div className="absolute bottom-0 right-0 -z-10 hidden md:flex">
                    <Highlighter
                      theme={theme}
                      type="yellow"
                      props={{ viewBox: '0 0 219 66', height: '60px' }}
                    />
                  </div>
                </span>
                với trình độ của bạn! 🌟
              </motion.h1>
              <div className="mb-12">
                <div className="mt-8 text-lg leading-snug tracking-wide text-white">
                  {renderWords()}
                </div>
                <motion.div
                  className="mt-12 flex justify-center gap-4 sm:gap-6 md:justify-start"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 2, ease: 'easeInOut' } },
                  }}
                >
                  <button className="learn-more" id="hihih">
                    <span className="circle" aria-hidden="true">
                      <span className="icon arrow"></span>
                    </span>
                    <span className="button-text"> Tôi đã sẵn sàng thi thử</span>
                  </button>
                </motion.div>
              </div>
              <motion.div
                className=""
                initial="hidden"
                animate="visible"
                variants={containerVariants}
              >
                <hr className="o-divider"></hr>
                <span className="text-xl font-semibold tracking-wider text-white dark:text-white">
                  Đối tác của Dream
                </span>
                <div className="mt-4 flex flex-wrap items-center gap-6 lg:gap-24">
                  <motion.img
                    className=" object-contain"
                    src="/images/british-council.png"
                    loading="lazy"
                    alt="british"
                    width="180"
                    height=""
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: 'easeInOut' }}
                  />
                  <motion.img
                    className=" object-contain"
                    src="/images/idp-education.png"
                    loading="lazy"
                    alt="idp"
                    width="180"
                    height=""
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4, ease: 'easeInOut' }}
                  />
                </div>
              </motion.div>
            </div>
            <div className="relative z-50 md:mt-0 md:w-2/5 lg:w-1/2">
              <motion.div
                className="absolute bottom-0 left-0 right-0 top-0 -z-10 h-full w-full"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <svg
                  width="596"
                  height="594"
                  viewBox="0 0 596 594"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse opacity="0.2" cx="298" cy="296.5" rx="224" ry="223.5" fill="#fff" />
                  <ellipse opacity="0.15" cx="298" cy="297" rx="298" ry="297" fill="#fff" />
                </svg>
              </motion.div>
              <motion.div className="z-40" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <Image src="/images/heroman.webp" width={600} height={600} alt="hinh anh hero" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.2 } },
        }}
        className={`absolute bottom-[123px] right-[36rem] z-50 w-auto rounded-xl border-1 border-white/20 bg-white/50 shadow-small backdrop-sepia-0`}
      >
        <div className="grid grid-cols-5 gap-y-2 p-5">
          <div>
            <Image
              src="https://picsum.photos/seed/2/200/200"
              className="max-w-16 max-h-16 rounded-full"
              alt="Random Image"
              width={64}
              height={64}
            />
          </div>
          <div className="col-span-5 ml-4 md:col-span-4">
            <p className="font-bold text-white">Thành công</p>
            <p className="text-white">500+ học viên đã tham gia</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.2 } },
        }}
        className="absolute right-9 top-20 z-50  flex w-full max-w-[26rem] flex-col rounded-xl border-white/20 bg-white/50 p-5 text-gray-700 shadow-none backdrop-sepia-0"
      >
        <div className="relative mx-0 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pb-8 pt-0 text-gray-700 shadow-none">
          <Image
            alt="tania andrew"
            src="/images/heroman.webp"
            className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
            height={58}
            width={58}
          />
          <div className="flex w-full flex-col gap-0.5">
            <div className="flex items-center justify-between">
              <h5 className="text-blue-gray-900 block font-sans text-xl font-semibold leading-snug tracking-normal antialiased">
                Andy Nguyen
              </h5>
              <div className="5 flex items-center gap-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5 text-yellow-600"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5 text-yellow-600"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5 text-yellow-600"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5 text-yellow-600"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5 text-yellow-600"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <p className="text-blue-gray-900 block font-sans text-base font-light leading-relaxed antialiased">
              Học viên lớp - KTP123
            </p>
          </div>
        </div>
        <div className="mb-6 p-0">
          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            "Trung tâm Anh ngữ Dream tuyệt vời! Giáo viên nhiệt tình, phương pháp giảng dạy linh
            hoạt, giúp tôi tiến bộ mỗi buổi học. Không gian học tập thoải mái và chất lượng."
          </p>
        </div>
      </motion.div>
      <div className="relative">
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
  )
}

export default HeroHome
