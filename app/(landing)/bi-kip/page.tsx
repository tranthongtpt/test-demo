'use client'
import { ColorContainer } from '@/components/z_old_source_timlrx/ContainerColor'
import BlogCard from '@/components/page-bikip/BlogCard'
import { useEffect, useState } from 'react'
const data = [
  {
    id: 'page1',
    date: 'Ngày 29/09/2023 - Bởi Justin Nguyen',
    img: 'https://images.unsplash.com/photo-1476362555312-ab9e108a0b7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    title: 'Bỏ Túi Ngay 70+ Từ Vựng Tiếng Anh Chủ Đề Tết Trung Thu',
    description:
      ' Bạn có tò mò Tết Trung thu Tiếng Anh là gì? Bạn đang muốn viết một bài về Tết Trung thu bằng Tiếng Anh nhưng chưa có đủ vốn từ vựng? Hãy cùng bỏ túi ngay 70+ từ vựng về Tết Trung thu trong bài viết dưới đây',
  },
  {
    id: 'page2',
    date: 'Ngày 20/09/2023 - Bởi Justin Nguyen',
    img: 'https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
    title: ' Chiến thuật chinh phục dạng bài PTE Writing Summarize Written Text',
    description:
      'Trong bài viết dưới đây, Anh ngữ ZIM sẽ hướng dẫn cho người học phương pháp chinh phục dạng bài PTE Writing Summarize Written Text....',
  },
  {
    id: 'page3',
    date: 'Ngày 09/09/2023 - Bởi Justin Nguyen',
    img: 'https://images.unsplash.com/photo-1476362555312-ab9e108a0b7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    title: 'Tổng hợp từ vựng & bài mẫu Topic Hobby | VSTEP Speaking Part 1',
    description:
      ' Bạn có tò mò Tết Trung thu Tiếng Anh là gì? Bạn đang muốn viết một bài về Tết Trung thu bằng Tiếng Anh nhưng chưa có đủ vốn từ vựng? Hãy cùng bỏ túi ngay 70+ từ vựng về Tết Trung thu trong bài viết dưới đây',
  },
  {
    id: 'page4',
    date: 'Ngày 22/09/2023 - Bởi Justin Nguyen',
    img: 'https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
    title: 'Giải đề IELTS Writing Task 1 và Task 2 ngày 23/09/2023',
    description:
      'Trong bài viết dưới đây, Anh ngữ ZIM sẽ hướng dẫn cho người học phương pháp chinh phục dạng bài PTE Writing Summarize Written Text....',
  },
  //
  {
    id: 'page5',
    date: 'Ngày 29/09/2023 - Bởi Justin Nguyen',
    img: 'https://images.unsplash.com/photo-1476362555312-ab9e108a0b7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    title: ' Hướng dẫn làm dạng bài báo (articles) trong TOEIC Reading Part 6',
    description:
      ' Bạn có tò mò Tết Trung thu Tiếng Anh là gì? Bạn đang muốn viết một bài về Tết Trung thu bằng Tiếng Anh nhưng chưa có đủ vốn từ vựng? Hãy cùng bỏ túi ngay 70+ từ vựng về Tết Trung thu trong bài viết dưới đây',
  },
  {
    id: 'page6',
    date: 'Ngày 20/09/2023 - Bởi Justin Nguyen',
    img: 'https://images.unsplash.com/photo-1476362555312-ab9e108a0b7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    title: 'Từ vựng tiếng Anh về phép tính trong Toán học thường gặp kèm Audio & Ví dụ',
    description:
      'Trong bài viết dưới đây, Anh ngữ ZIM sẽ hướng dẫn cho người học phương pháp chinh phục dạng bài PTE Writing Summarize Written Text....',
  },
  {
    id: 'page7',
    date: 'Ngày 09/09/2023 - Bởi Justin Nguyen',
    img: 'https://images.unsplash.com/photo-1476362555312-ab9e108a0b7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    title: 'IELTS Writing Topic Technology - Phân tích, lên ý tưởng và bài mẫu',
    description:
      ' Bạn có tò mò Tết Trung thu Tiếng Anh là gì? Bạn đang muốn viết một bài về Tết Trung thu bằng Tiếng Anh nhưng chưa có đủ vốn từ vựng? Hãy cùng bỏ túi ngay 70+ từ vựng về Tết Trung thu trong bài viết dưới đây',
  },
  {
    id: 'page8',
    date: 'Ngày 22/09/2023 - Bởi Justin Nguyen',
    img: 'https://images.unsplash.com/photo-1476362555312-ab9e108a0b7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    title: 'Cách làm dạng bài Speaking Sample trong Doulingo English Test',
    description:
      'Trong bài viết dưới đây, Anh ngữ ZIM sẽ hướng dẫn cho người học phương pháp chinh phục dạng bài PTE Writing Summarize Written Text....',
  },
]

function Blog() {
  const [result, setResult] = useState<number | null>(null)
  const [datar, setDatar] = useState<any>(0)
  const [datal, setDatal] = useState<any>(0)
  const [datas, setDatas] = useState<any>(0)
  const [dataw, setDataw] = useState<any>(0)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    let sum: number =
      Math.round(
        ((parseFloat(datar.toString()) +
          parseFloat(datal.toString()) +
          parseFloat(dataw.toString()) +
          parseFloat(datas.toString())) /
          4.0) *
          2
      ) / 2

    setResult(sum)
  }

  return (
    <>
      <ColorContainer>
        <div className="relative mx-auto w-full  max-w-7xl items-center pt-12">
          <div className="text-center">
            <h1 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-white md:text-5xl lg:max-w-7xl lg:text-6xl">
              Bí kíp IELTS
            </h1>
            <p className="mx-auto mt-8 max-w-3xl text-base leading-relaxed text-white">
              Chúng tôi chia sẻ kiến thức tiếng Anh từ cơ bản đến nâng cao, từ ngữ pháp, từ vựng đến
              các kỹ năng giao tiếp. Hãy cùng chúng tôi chinh phục tiếng Anh nhé!
            </p>
            <nav className="mx-auto mb-5 mt-8 flex max-w-xl justify-center" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-2">
                <li className="inline-flex items-center">
                  <a href="#" className="inline-flex items-center text-white hover:text-gray-200">
                    <svg
                      className="mr-2.5 h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                    </svg>
                    Trang chủ
                  </a>
                </li>
                <li>
                  <div className="flex items-center">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <a
                      href="#"
                      className="ml-1 text-sm font-medium text-gray-100 hover:text-gray-200 md:ml-2"
                    >
                      Bí kíp IELTS
                    </a>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div className="relative ">
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
      <div className="container mx-auto mt-8">
        <div className="flex flex-wrap justify-between">
          <div className="mb-8 w-full px-4 md:w-8/12">
            <div className="divide-y">
              {data.map((post, index) => (
                <BlogCard
                  key={index}
                  id={post.id}
                  date={post.date}
                  img={post.img}
                  title={post.title}
                  description={post.description}
                />
              ))}
            </div>
            <div className="mx-auto items-center">
              <div className="w-full justify-center">
                <div className="flex flex-1 items-center justify-center">
                  <div>
                    <nav
                      className="relative z-0 inline-flex gap-2 -space-x-px text-lg"
                      aria-label="Pagination"
                    >
                      <span
                        aria-current="page"
                        className="bg-primary/5 text-primary relative z-10 inline-flex items-center rounded-lg px-4 py-2 font-semibold"
                      >
                        1{' '}
                      </span>
                      <a
                        href="#"
                        className="relative inline-flex items-center rounded-lg bg-white px-4 py-2 text-gray-500 hover:bg-gray-50"
                      >
                        2{' '}
                      </a>
                      <a
                        href="#"
                        className="relative inline-flex items-center rounded-lg bg-white px-4 py-2 text-gray-500 hover:bg-gray-50"
                      >
                        3{' '}
                      </a>

                      <span className="relative inline-flex select-none items-center rounded-lg bg-white px-4 py-2 text-gray-700">
                        ...{' '}
                      </span>
                      <a
                        href="#"
                        className="relative inline-flex items-center rounded-lg bg-white px-4 py-2 text-gray-500 hover:bg-gray-50"
                      >
                        10{' '}
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-8 w-full px-4 md:w-4/12">
            <div className="mb-10">
              <div className="dark:bg-primary-black-dark shadow-card flex flex-col space-y-4 overflow-hidden rounded-2xl bg-white p-4 shadow-xl  md:p-6">
                <p className="text-2xl font-bold text-black dark:text-white">Tính điểm thi IELTS</p>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div className="flex flex-col space-y-4 rounded-2xl bg-gray-100 p-6 dark:bg-white/10">
                      <div>
                        <div>
                          <div className="flex items-center dark:text-white">
                            <strong className="flex-1 ">Listening</strong>
                            <span className="flex items-center space-x-2">
                              <div className="w-full">
                                <input
                                  name="listening"
                                  autoComplete="off"
                                  className="undefined dark:bg-primary-black-darknest w-14 rounded border border-gray-200 bg-white  px-4 py-2 text-center  outline-none  transition-all   duration-200 focus:border-blue-300 focus:ring  dark:border-none dark:bg-slate-300 dark:bg-slate-700 dark:!text-white dark:text-slate-900"
                                  placeholder="0"
                                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                    setDatal(e.target.value)
                                  }
                                />
                              </div>
                              <label htmlFor="listening">9.0</label>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div className="flex items-center dark:text-white">
                            <strong className="flex-1 ">Reading</strong>
                            <span className="flex items-center space-x-2">
                              <div className="w-full">
                                <input
                                  name="reading"
                                  autoComplete="off"
                                  className="undefined dark:bg-primary-black-darknest w-14 rounded border border-gray-200 bg-white  px-4 py-2 text-center  outline-none  transition-all   duration-200 focus:border-blue-300 focus:ring  dark:border-none dark:bg-slate-300 dark:bg-slate-700 dark:!text-white dark:text-slate-900"
                                  placeholder="0"
                                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                    setDatar(e.target.value)
                                  }
                                />
                              </div>
                              <label htmlFor="reading">9.0</label>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div className="flex items-center dark:text-white">
                            <strong className="flex-1 ">Speaking</strong>
                            <span className="flex items-center space-x-2">
                              <div className="w-full">
                                <input
                                  name="speaking"
                                  autoComplete="off"
                                  className="undefined dark:bg-primary-black-darknest w-14 rounded border border-gray-200 bg-white  px-4 py-2 text-center  outline-none  transition-all   duration-200 focus:border-blue-300 focus:ring  dark:border-none dark:bg-slate-300 dark:bg-slate-700 dark:!text-white dark:text-slate-900"
                                  placeholder="0"
                                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                    setDatas(e.target.value)
                                  }
                                />
                              </div>
                              <label htmlFor="speaking">9.0</label>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div className="flex items-center dark:text-white">
                            <strong className="flex-1 ">Writing</strong>
                            <span className="flex items-center space-x-2">
                              <div className="w-full">
                                <input
                                  name="writing"
                                  autoComplete="off"
                                  className="undefined dark:bg-primary-black-darknest w-14 rounded border border-gray-200 bg-white  px-4 py-2 text-center  outline-none  transition-all   duration-200 focus:border-blue-300 focus:ring  dark:border-none dark:bg-slate-300 dark:bg-slate-700 dark:!text-white dark:text-slate-900"
                                  placeholder="0"
                                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                    setDataw(e.target.value)
                                  }
                                />
                              </div>
                              <label htmlFor="writing">9.0</label>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {result && (
                      <>
                        <p>Điểm IELTS Overall dự kiến của bạn:{result}</p>
                        <span>Mô tả: Kiến thức chưa vững ...</span>
                      </>
                    )}

                    <button
                      className="false undefined inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded rounded-full border border-red-700 bg-red-700  px-4 py-2 py-3 text-base font-medium text-white ring-red-400 ring-opacity-75 transition-colors duration-300 transition-background  hover:border-red-900 hover:bg-red-900 hover:text-white  focus:outline-none focus:ring dark:border-red-500 dark:bg-red-700 dark:hover:bg-red-900"
                      type="submit"
                    >
                      Tính điểm IELTS Overall
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <aside className=" top-28 h-fit lg:sticky">
              <div className="rounded-xl bg-gray-100/70 p-6">
                <span className="mb-6 block text-lg font-bold tracking-wider">
                  Bài viết mới nhất
                </span>
                <ul className="divide-y text-sm">
                  <li className="py-4 first:pt-0 last:pb-0">
                    <a href="#">
                      <div className="related-tests flex flex-row gap-2">
                        <img
                          className="aspect-1 h-fit w-24 rounded-lg object-cover"
                          src="https://images.unsplash.com/photo-1476362555312-ab9e108a0b7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                          alt="10 App học từ vựng tiếng Anh tốt nhất mọi người nên sử dụng"
                        />
                        <span className="px-1 font-medium tracking-wide text-gray-700">
                          10 App học từ vựng tiếng Anh tốt nhất mọi người nên sử dụng{' '}
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className="py-4 first:pt-0 last:pb-0">
                    <a href="#">
                      <div className="related-tests flex flex-row gap-2">
                        <img
                          className="aspect-1 h-fit w-24 rounded-lg object-cover"
                          src="https://images.unsplash.com/photo-1476362555312-ab9e108a0b7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                          alt="Bỏ túi ngay 70+ từ vựng Tiếng Anh chủ đề Tết Trung thu"
                        />
                        <span className="px-1 font-medium tracking-wide text-gray-700">
                          Bỏ túi ngay 70+ từ vựng Tiếng Anh chủ đề Tết Trung thu{' '}
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className="py-4 first:pt-0 last:pb-0">
                    <a href="#">
                      <div className="related-tests flex flex-row gap-2">
                        <img
                          className="aspect-1 h-fit w-24 rounded-lg object-cover"
                          src="https://images.unsplash.com/photo-1476362555312-ab9e108a0b7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                          alt="Top 15+ App nói chuyện với người nước ngoài miễn phí học Tiếng Anh"
                        />
                        <span className="px-1 font-medium tracking-wide text-gray-700">
                          Top 15+ App nói chuyện với người nước ngoài miễn phí học Tiếng Anh{' '}
                        </span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog
