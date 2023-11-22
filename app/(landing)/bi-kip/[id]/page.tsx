'use client'
import { useEffect, useState } from 'react'
import { useHeadsObserver } from '../../../components/blog/hook'

const DummyText =
  'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?'

const getClassName = (level: any) => {
  switch (level) {
    case 2:
      return 'head2'
    case 3:
      return 'head3'
    case 4:
      return 'head4'
    default:
      return null
  }
}
const DetailBlog = ({ params }: { params: string }) => {
  const [headings, setHeadings] = useState([])
  const { activeId } = useHeadsObserver()

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('h3, h4')).map((elem) => ({
      id: elem.id,
      text: (elem as HTMLElement).innerText,
      level: Number(elem.nodeName.charAt(1))
    }))
    setHeadings(elements)
  }, [])

  return (
    <>
      <div className='bg-gradient-to-r from-[#f598a8] to-[#EF4444]'>
        <div className='relative items-center w-full pt-12 mx-auto max-w-7xl'>
          <div className='text-center'>
            <h1 className='max-w-5xl text-2xl font-bold leading-none tracking-tighter text-white md:text-5xl lg:text-6xl lg:max-w-7xl'>
              Bí kíp IELTS
            </h1>

            <nav className='flex justify-center max-w-xl mx-auto mt-8 mb-5' aria-label='Breadcrumb'>
              <ol className='inline-flex items-center space-x-1 md:space-x-2'>
                <li className='inline-flex items-center'>
                  <a href='#' className='inline-flex items-center text-white hover:text-gray-200'>
                    <svg
                      className='w-5 h-5 mr-2.5'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z'></path>
                    </svg>
                    Trang chủ
                  </a>
                </li>
                <li>
                  <div className='flex items-center'>
                    <svg
                      className='w-6 h-6 text-white'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                        clipRule='evenodd'
                      ></path>
                    </svg>
                    <a href='#' className='ml-1 text-sm font-medium text-gray-100 hover:text-gray-200 md:ml-2'>
                      Bí kíp IELTS
                    </a>
                  </div>
                </li>
                <li>
                  <div className='flex items-center'>
                    <svg
                      className='w-6 h-6 text-gray-100'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                        clipRule='evenodd'
                      ></path>
                    </svg>
                    <span className='ml-1 text-sm font-medium text-gray-300 md:ml-2' aria-current='page'>
                      {params.id}
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div className='relative '>
          <svg
            viewBox='0 0 1428 174'
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
          >
            <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
              <g transform='translate(-2.000000, 44.000000)' fill='#FFFFFF' fillRule='nonzero'>
                <path
                  d='M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496'
                  opacity='0.100000001'
                ></path>
                <path
                  d='M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z'
                  opacity='0.100000001'
                ></path>
                <path
                  d='M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z'
                  id='Path-4'
                  opacity='0.200000003'
                ></path>
              </g>
              <g transform='translate(-4.000000, 76.000000)' fill='#FFFFFF' fillRule='nonzero'>
                <path d='M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z'></path>
              </g>
            </g>
          </svg>
        </div>
      </div>
      {/* body*/}
      <div className='container mx-auto mt-8'>
        <div className='flex flex-wrap justify-between'>
          <div className='w-full px-4 mb-8 md:w-8/12'>
            <div className=''>
              <h1 className='mb-2 text-xl'>Bỏ Túi Ngay 70+ Từ Vựng Tiếng Anh Chủ Đề Tết Trung Thu</h1>
              <p>{DummyText}</p>
              <h3 id='initial-header' className='text-xl'>
                Setting up React
              </h3>
              <p>{DummyText}</p>
              <h3 id='second-header' className='text-xl'>
                Create a table of content
              </h3>
              <p>{DummyText}</p>
              <p>{DummyText}</p>
              <h3 id='third-header' className='text-xl'>
                Create a TOC component
              </h3>
              <p>{DummyText}</p>
              <p>{DummyText}</p>
              <h3 id='fourth-header' className='text-xl'>
                Find the headings on the page
              </h3>
              <p>{DummyText}</p>
              <p>{DummyText}</p>
              <h3 id='fifth-header' className='text-xl'>
                Listing all found heading
              </h3>
              <p>{DummyText}</p>
              <p>{DummyText}</p>
              <h3 id='sixth-header className="text-xl"'>Linking heading to there respective sections</h3>
              <p>{DummyText}</p>
              <p>{DummyText}</p>
              <h3 id='find-highlight' className='text-xl'>
                Find and highlight the currently active heading
              </h3>
              <p>{DummyText}</p>
              <p>{DummyText}</p>
              <h2 id='conclusion' className='text-xl'>
                Conclusion
              </h2>
              <p>{DummyText}</p>
            </div>
            {/* comment */}
            <div className='pt-2'>
              <div className='items-center justify-between md:flex'>
                <div className='flex items-center mb-4 space-x-2 font-medium md:mb-0'>
                  <span>0 Bình luận</span>
                </div>
                <div className='flex items-center space-x-4'>
                  <div className='inline-flex overflow-hidden transition-all duration-200 rounded hover:text-blue-900'>
                    <button
                      aria-label='facebook'
                      className='react-share__ShareButton'
                      style={{
                        backgroundColor: 'transparent',
                        border: 'none',
                        padding: ' 0px',
                        font: 'inherit',
                        color: 'inherit',
                        cursor: 'pointer'
                      }}
                    >
                      Chia sẻ
                    </button>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <span className='flex items-center'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                        aria-hidden='true'
                        className='text-orange-500'
                        width='20'
                      >
                        <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                      </svg>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                        aria-hidden='true'
                        className='text-orange-500'
                        width='20'
                      >
                        <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                      </svg>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                        aria-hidden='true'
                        className='text-orange-500'
                        width='20'
                      >
                        <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                      </svg>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                        aria-hidden='true'
                        className='text-orange-500'
                        width='20'
                      >
                        <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                      </svg>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                        aria-hidden='true'
                        className='text-orange-500'
                        width='20'
                      >
                        <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                      </svg>
                    </span>
                    <span className='dark:text-white'>(1)</span>
                  </div>
                </div>
              </div>
              <div className='flex items-center justify-center mt-2'>
                <div className='h-80 px-7 w-full rounded-[12px] bg-white p-4 shadow-md border'>
                  <p className='text-xl font-semibold text-blue-900 transition-all cursor-pointer hover:text-black'>
                    Add Comment
                  </p>
                  <textarea
                    className='w-full h-40 px-3 py-1 mt-5 text-sm border border-gray-300 rounded-lg outline-none resize-none placeholder:text-sm'
                    placeholder='Add your comments here'
                  ></textarea>

                  <div className='flex justify-between mt-2'>
                    <p className='text-sm text-blue-900 '>Enter atleast 15 characters</p>
                    <button className='h-12 w-[150px] bg-red-400 text-sm text-white rounded-lg transition-all cursor-pointer hover:bg-red-600'>
                      Bình luận
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full px-4 mb-8 md:w-4/12'>
            <aside className=' lg:sticky top-28 h-fit'>
              <div className='w-full px-6 py-6 mb-10 bg-white border rounded-md shadow-md top-20 -left-56 '>
                <div className='pb-2 text-xl font-medium text-red-600'>Nội dung chính</div>
                <hr className='w-10 h-1 bg-red-600' />
                <nav>
                  <ul>
                    {headings.map((heading) => (
                      <li key={heading.id} className={getClassName(heading.level)}>
                        <a
                          href={`#${heading.id}`}
                          onClick={(e) => {
                            e.preventDefault()
                            document.querySelector(`#${heading.id}`).scrollIntoView({
                              behavior: 'smooth'
                            })
                          }}
                          className='mb-1 text-sm font-medium text-gray-600 hover:text-red-600'
                          style={{
                            fontWeight: activeId === heading.id ? 'bold' : 'normal'
                          }}
                        >
                          {heading.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <div className='p-6 bg-gray-100/70 rounded-xl'>
                <span className='block mb-6 text-lg font-bold tracking-wider'>Bài viết mới nhất</span>
                <ul className='text-sm divide-y'>
                  <li className='py-4 first:pt-0 last:pb-0'>
                    <a href='#'>
                      <div className='flex flex-row gap-2 related-tests'>
                        <img
                          className='object-cover w-24 rounded-lg aspect-1 h-fit'
                          src='https://www.izone.edu.vn/wp-content/uploads/2023/09/app-hoc-tu-vung-tieng-anh.jpg  '
                          alt='10 App học từ vựng tiếng Anh tốt nhất mọi người nên sử dụng'
                        />
                        <span className='px-1 font-medium tracking-wide text-gray-700'>
                          10 App học từ vựng tiếng Anh tốt nhất mọi người nên sử dụng{' '}
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className='py-4 first:pt-0 last:pb-0'>
                    <a href='#'>
                      <div className='flex flex-row gap-2 related-tests'>
                        <img
                          className='object-cover w-24 rounded-lg aspect-1 h-fit'
                          src='https://www.izone.edu.vn/wp-content/uploads/2023/09/trung-thu-tieng-anh-0.jpg  '
                          alt='Bỏ túi ngay 70+ từ vựng Tiếng Anh chủ đề Tết Trung thu'
                        />
                        <span className='px-1 font-medium tracking-wide text-gray-700'>
                          Bỏ túi ngay 70+ từ vựng Tiếng Anh chủ đề Tết Trung thu{' '}
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className='py-4 first:pt-0 last:pb-0'>
                    <a href='#'>
                      <div className='flex flex-row gap-2 related-tests'>
                        <img
                          className='object-cover w-24 rounded-lg aspect-1 h-fit'
                          src='https://www.izone.edu.vn/wp-content/uploads/2023/09/app-noi-chuyen-voi-nguoi-nuoc-ngoai-1-1.jpg  '
                          alt='Top 15+ App nói chuyện với người nước ngoài miễn phí học Tiếng Anh'
                        />
                        <span className='px-1 font-medium tracking-wide text-gray-700'>
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

export default DetailBlog
