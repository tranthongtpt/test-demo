'use client'
import { useMemo } from 'react'
import ScrollAnimationWrapper from '../ScrollAnimationWrapper'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Mousewheel } from 'swiper/modules'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import getScrollAnimation from 'utils/getScrollAnimation'
import Image from 'next/image'
const ExperiencePage = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), [])
  return (
    <section className="relative">
      <div className=" container relative z-10 mx-auto my-32 space-y-12 p-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-4 text-center text-3xl font-bold uppercase !leading-tight text-black sm:text-4xl">
            Trải nghiệm thi thử tại Dream
          </h2>
          <p className="mt-4 text-center text-base">
            Dream cung cấp một bài thi thử chất lượng, giúp thí sinh làm quen với độ khó và định
            dạng của các phần thi, từ đó tối ưu hóa kỹ năng làm bài.
          </p>
        </div>
        <ScrollAnimationWrapper className="">
          <Swiper
            // direction={'vertical'}
            slidesPerView={1}
            spaceBetween={30}
            mousewheel={true}
            pagination={{
              clickable: true,
            }}
            modules={[Mousewheel, Pagination]}
          >
            <SwiperSlide>
              <div className="flex w-full justify-center px-2 py-20">
                <div className="rounded-lg bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg">
                  <div className="relative lg:w-1/2">
                    <iframe
                      className="h-80 h-full w-full rounded-b-none border bg-cover lg:h-full lg:scale-110 lg:rounded-lg"
                      src="https://www.youtube.com/embed/e-ORhEE9VVg?list=RDM9XzHK4Hm4w"
                      title="Taylor Swift - Blank Space"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="max-w-xl rounded-t-none border px-6 py-12 lg:w-1/2 lg:max-w-5xl lg:rounded-lg lg:px-12">
                    <h2 className="text-3xl font-bold text-gray-800">
                      Học viên Hoàng Dũng<span className="text-red-600"> 8.5 IELTS </span> chia sẻ
                      trải nghiệm thi thử tại Dream
                    </h2>
                    <motion.p className="mt-4 text-gray-600" variants={scrollAnimation}>
                      Bạn Justin lại bày tỏ rằng; "Sau 4 tháng học em đã tiến bộ rất nhiều so với
                      ban đầu. Ngoài ra hai thầy cũng rất quan tâm học trò, nhiệt tình vui vẻ giúp
                      lớp tiếp thu nhanh. Nói chung em rất hài lòng về trung tâm ạ.
                    </motion.p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex w-full justify-center px-2 py-20">
                <div className="rounded-lg bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg">
                  <div className="relative lg:w-1/2">
                    <iframe
                      className="h-80 h-full w-full rounded-b-none border bg-cover lg:h-full lg:scale-110 lg:rounded-lg"
                      src="https://www.youtube.com/embed/HNjQ2pTv7FE"
                      title="Dimitri Vegas &amp; Like Mike - Bringing The Madness 2016 (FULL HD 2,5 HOUR LIVESET)"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="max-w-xl rounded-t-none border px-6 py-12 lg:w-1/2 lg:max-w-5xl lg:rounded-lg lg:px-12">
                    <h2 className="text-3xl font-bold text-gray-800">
                      Học viên Hoàng Dũng<span className="text-red-600"> 8.5 IELTS </span> chia sẻ
                      trải nghiệm thi thử tại Dream
                    </h2>
                    <motion.p className="mt-4 text-gray-600" variants={scrollAnimation}>
                      Bạn Justin lại bày tỏ rằng; "Sau 4 tháng học em đã tiến bộ rất nhiều so với
                      ban đầu. Ngoài ra hai thầy cũng rất quan tâm học trò, nhiệt tình vui vẻ giúp
                      lớp tiếp thu nhanh. Nói chung em rất hài lòng về trung tâm ạ.
                    </motion.p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex w-full justify-center px-2 py-20">
                <div className="rounded-lg bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg">
                  <div className="relative lg:w-1/2">
                    <iframe
                      className="h-80 h-full w-full rounded-b-none border bg-cover lg:h-full lg:scale-110 lg:rounded-lg"
                      src="https://www.youtube.com/embed/HNjQ2pTv7FE"
                      title="Dimitri Vegas &amp; Like Mike - Bringing The Madness 2016 (FULL HD 2,5 HOUR LIVESET)"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                    {/* <div className='absolute top-0 right-0 flex h-full w-full items-center justify-center'>
                          <button className='flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white bg-opacity-75 text-primary transition hover:bg-opacity-100'>
                            <svg width='16' height='18' viewBox='0 0 16 18' className='fill-current'>
                              <path d='M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.499999 17.564 0.499999 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z'></path>
                            </svg>
                          </button>
                        </div> */}
                    {/* <div onClick={() => setPlayVideo(!playVideo)} className='relative cursor-pointer aspect-video'>
                          {!playVideo && (
                            <button className='absolute inset-auto w-16 h-16 text-white transform -translate-x-1/2 -translate-y-1/2 lg:w-28 lg:h-28 top-1/2 left-1/2'>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='w-16 h-16  lg:w-28 lg:h-28'
                                viewBox='0 0 20 20'
                                fill='currentColor'
                              >
                                <path
                                  fillRule='evenodd'
                                  d='M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z'
                                  clipRule='evenodd'
                                />
                              </svg>
                              <span className='sr-only'>Play Video</span>
                            </button>
                          )}
                          {playVideo && (
                            <iframe
                              className='w-full h-full'
                              src='https://www.youtube.com/embed/HNjQ2pTv7FE'
                              title='Dimitri Vegas &amp; Like Mike - Bringing The Madness 2016 (FULL HD 2,5 HOUR LIVESET)'
                              frameBorder='0'
                              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                              allowFullScreen
                            ></iframe>
                          )}
                        </div> */}
                  </div>
                  <div className="max-w-xl rounded-t-none border px-6 py-12 lg:w-1/2 lg:max-w-5xl lg:rounded-lg lg:px-12">
                    <h2 className="text-3xl font-bold text-gray-800">
                      Học viên Hoàng Dũng<span className="text-red-600"> 8.5 IELTS </span> chia sẻ
                      trải nghiệm thi thử tại Dream
                    </h2>
                    <motion.p className="mt-4 text-gray-600" variants={scrollAnimation}>
                      Bạn Justin lại bày tỏ rằng; "Sau 4 tháng học em đã tiến bộ rất nhiều so với
                      ban đầu. Ngoài ra hai thầy cũng rất quan tâm học trò, nhiệt tình vui vẻ giúp
                      lớp tiếp thu nhanh. Nói chung em rất hài lòng về trung tâm ạ.
                    </motion.p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </ScrollAnimationWrapper>
      </div>
      <div className="absolute -top-10 -right-72">
        <Image
          src="/svg/test/svg-decorator-blob-3.svg"
          alt="VPN Illustrasi"
          layout="responsive"
          height={50}
          width={100}
          className="pointer-events-none z-10 opacity-25"
        />
      </div>
    </section>
  )
}
export default ExperiencePage
