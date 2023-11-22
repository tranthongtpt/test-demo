'use client'
import { motion } from 'framer-motion'
import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper'
import { useMemo } from 'react'
import getScrollAnimation from 'utils/getScrollAnimation'
import Image from 'next/image'
const ReasonPage = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), [])
  return (
    <section className="relative">
      <div className="container mx-auto my-32 space-y-12 p-6 lg:px-8 	">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center text-3xl font-bold uppercase sm:text-4xl">
            Lý do để thi thử tại Anh ngữ Dream
          </h2>
          <p className="mt-4 text-center text-base">
            Đây là cơ hội tốt để đánh giá chính xác kỹ năng Anh ngữ của bạn trong môi trường thực
            tế, giúp bạn làm quen với định dạng và yêu cầu của kỳ thi chính thức,
          </p>
        </div>
        <ScrollAnimationWrapper className="relative grid lg:grid-cols-2 lg:items-center lg:gap-8">
          <div className="mt-4 space-y-12">
            <motion.div className="flex" variants={scrollAnimation}>
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-md dark:bg-emerald-400 dark:text-gray-900">
                  <svg
                    width="24"
                    height="24"
                    className="lucide lucide-rocket"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 18"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 13v-3a9 9 0 1 0-18 0v3m2-3h3v7H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2Zm11 0h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3v-7Z"
                    />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h4 className="leading text-lg font-medium">
                  Thi Speaking cùng 100% giáo viên nước ngoài
                </h4>
                <p className="mt-2 ">
                  Gặp giám thị nước ngoài giúp bạn vượt qua cảm giác bối rối và ngại ngùng, nơi
                  nhiều thí sinh "ngợp" và mất điểm nói. Đảm bảo bạn tự tin và chuẩn bị tốt cho kỳ
                  thi thực tế.
                </p>
              </div>
            </motion.div>
            <motion.div className="flex" variants={scrollAnimation}>
              <div className="flex-shrink-0">
                <div className="dark-bg-emerald-400 dark-text-gray-900 flex h-12 w-12 items-center justify-center rounded-md">
                  <svg
                    className="lucide lucide-bookmark-plus"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    width="24"
                    height="24"
                    viewBox="0 0 18 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 4c0 1.657-3.582 3-8 3S1 5.657 1 4m16 0c0-1.657-3.582-3-8-3S1 2.343 1 4m16 0v6M1 4v6m0 0c0 1.657 3.582 3 8 3s8-1.343 8-3M1 10v6c0 1.657 3.582 3 8 3s8-1.343 8-3v-6"
                    />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h4 className="leading text-lg font-medium ">
                  Kho đề được cập nhật LỚN NHẤT VIỆT NAM
                </h4>
                <p className="mt-2 ">
                  Với hơn 1000+ đề thi IELTS liên tục được cập nhật, bạn có cơ hội ôn tập đa dạng và
                  hiệu quả. Sẵn sàng cho mọi hình thức đề thi mà bạn có thể gặp.
                </p>
              </div>
            </motion.div>
            <motion.div className="flex" variants={scrollAnimation}>
              <div className="flex-shrink-0">
                <div className="dark-bg-emerald-400 dark-text-gray-900 flex h-12 w-12 items-center justify-center rounded-md">
                  <svg
                    className="lucide lucide-video"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                    width="24"
                    height="24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4.333 6.764a3 3 0 1 1 3.141-5.023M2.5 16H1v-2a4 4 0 0 1 4-4m7.379-8.121a3 3 0 1 1 2.976 5M15 10a4 4 0 0 1 4 4v2h-1.761M13 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-4 6h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z"
                    />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h4 className="leading text-lg font-medium ">
                  Cố Vấn Chương Trình bởi Cựu Giám Khảo IELTS
                </h4>
                <p className="mt-2 ">
                  Không chỉ giúp bạn học thi, mà còn hướng dẫn cách giáo viên chấm điểm. Hiểu rõ
                  tiêu chí chấm điểm giúp bạn nâng cao hiệu suất và đạt được điểm số tối ưu.
                </p>
              </div>
            </motion.div>
            <motion.div className="flex" variants={scrollAnimation}>
              <div className="flex-shrink-0">
                <div className="dark-bg-emerald-400 dark-text-gray-900 flex h-12 w-12 items-center justify-center rounded-md">
                  <svg
                    className="lucide lucide-file-question"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 21 20"
                    width="24"
                    height="24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m8.806 5.614-4.251.362-2.244 2.243a1.058 1.058 0 0 0 .6 1.8l3.036.356m9.439 1.819-.362 4.25-2.243 2.245a1.059 1.059 0 0 1-1.795-.6l-.449-2.983m9.187-12.57a1.536 1.536 0 0 0-1.26-1.26c-1.818-.313-5.52-.7-7.179.96-1.88 1.88-5.863 9.016-7.1 11.275a1.05 1.05 0 0 0 .183 1.25l.932.939.937.936a1.049 1.049 0 0 0 1.25.183c2.259-1.24 9.394-5.222 11.275-7.1 1.66-1.663 1.275-5.365.962-7.183Zm-3.332 4.187a2.115 2.115 0 1 1-4.23 0 2.115 2.115 0 0 1 4.23 0Z"
                    />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h4 className="leading text-lg font-medium ">
                  Nhận Kết Quả Phân Tích Chi Tiết 4 Kỹ Năng Sớm
                </h4>
                <p className="mt-2 ">
                  Được cung cấp kết quả phân tích chi tiết về 4 kỹ năng giúp bạn nhận biết rõ ràng
                  về sai sót và điểm mạnh. Điều này giúp bạn hiệu chỉnh chiến lược ôn tập và nhanh
                  chóng cải thiện điểm số.
                </p>
              </div>
            </motion.div>
            <motion.div className="flex" variants={scrollAnimation}>
              <div className="flex-shrink-0">
                <div className="dark-bg-emerald-400 dark-text-gray-900 flex h-12 w-12 items-center justify-center rounded-md">
                  <svg
                    className="lucide lucide-file-question"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 20"
                    width="24"
                    height="24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m6 9 2 3 5-5M9 19A18.55 18.55 0 0 1 1 4l8-3 8 3a18.549 18.549 0 0 1-8 15Z"
                    />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h4 className="leading text-lg font-medium ">Thi Thử Giá Rẻ - Kết Quả Thật</h4>
                <p className="mt-2 ">
                  Tham gia ngay để trải nghiệm chất lượng với giá trị hữu ích. Anh Ngữ Dream cam kết
                  mang lại trải nghiệm thi thử chân thật với chi phí hợp lý, vì chúng tôi tin rằng
                  việc đầu tư vào sự nâng cao kỹ năng IELTS của bạn là một quyết định thông minh.
                </p>
              </div>
            </motion.div>
          </div>
          <div aria-hidden="true" className="mt-10 lg:mt-0">
            <img
              width="600"
              height="600"
              src="https://images.unsplash.com/photo-1516542076529-1ea3854896f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxNHx8Y29tcHV0ZXJ8ZW58MHwwfHx8MTY5OTE3MDk1N3ww&ixlib=rb-4.0.3&q=80&w=1080"
              className="dark-bg-gray-500 mx-auto rounded-lg shadow-lg"
            />
            <div className="absolute right-96 top-[18rem] -z-10">
              <Image
                src="/svg/test/svg-decorator-blob-6.svg"
                alt="VPN Illustrasi"
                layout="responsive"
                height={50}
                width={100}
                className="pointer-events-none z-10 fill-current text-gray-900 opacity-25"
              />
            </div>
          </div>
        </ScrollAnimationWrapper>
      </div>
      <div className="absolute -right-72 top-0">
        <Image
          src="/static/svg/test/svg-decorator-blob-3.svg"
          alt="VPN Illustrasi"
          layout="responsive"
          height={50}
          width={100}
          className="pointer-events-none z-10 fill-current text-gray-900 opacity-25"
        />
      </div>
      <div className="absolute -bottom-80 -left-80">
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
export default ReasonPage
