function FormAdvise() {
  return (
    <div
      className='bg-cover rounded-md'
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)'
      }}
    >
      <div className='flex flex-col min-h-screen bg-black/60 rounded-md'>
        <div className='container flex flex-col flex-1 px-6 py-12 mx-auto'>
          <div className='flex-1 lg:flex lg:items-center lg:-mx-6'>
            <div className='text-white lg:w-1/2 lg:mx-6 text-center'>
              <h1 className='font-semibold capitalize font-semibold text-2xl lg:text-3xl items-center'>
                Đăng ký
                <span className='relative whitespace-nowrap text-orange-400'>
                  <svg
                    aria-hidden='true'
                    viewBox='0 0 418 42'
                    className='absolute top-2/3 left-0 h-[0.58em] w-full fill-orange-300/70'
                    preserveAspectRatio='none'
                  >
                    <path d='M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z'></path>
                  </svg>
                  <span className='relative'> Ngay</span>
                </span>
              </h1>

              <p className='pt-4'>
                Tặng voucher giảm giá 200k khi thi IELTS tại Hội đồng Anh. Giới thiệu càng nhiều bạn bè càng tốt và nhận
                được mức giảm giá hoành tráng. Bộ tài liệu thi này được cung cấp mà không phải trả thêm bất kỳ chi phí
                nào trong quá trình học tập.
              </p>
            </div>

            <div className='mt-8 lg:w-1/2 lg:mx-6'>
              <div className='w-full px-8 py-10 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl dark:bg-gray-900 lg:max-w-xl'>
                <h1 className='font-semibold capitalize font-semibold text-2xl lg:text-3xl text-center'>
                  Đăng ký tư vấn miễn phí
                </h1>
                <p className='mt-2 text-gray-500 dark:text-gray-400 text-center'>
                  Đăng ký để nhận ngay voucher giảm % cho khoá học đăng ký.
                </p>
                {/* them coutdown*/}
                <div className=' px-6 lg:px-8 flex flex-col items-center justify-center text-center'>
                  <div className='flex flex-wrap items-center justify-center gap-4 p-2'>
                    <div className='bg-rose-200 rounded-full px-6 py-2 '>
                      <div id='days' className='font-bold text-xl text-gray-800'></div>
                      <div className='text-xs uppercase text-gray-500'>ngày</div>
                    </div>
                    <div className='bg-rose-200 rounded-full px-6 py-2 '>
                      <div id='hours' className='font-bold text-xl text-gray-800'></div>
                      <div className='text-xs uppercase text-gray-500'>giờ</div>
                    </div>
                    <div className='bg-rose-200 rounded-full px-6 py-2 '>
                      <div id='minutes' className='font-bold text-xl text-gray-800'></div>
                      <div className='text-xs uppercase text-gray-500'>phút</div>
                    </div>
                    <div className='bg-rose-200 rounded-full px-6 py-2 '>
                      <div id='seconds' className='font-bold text-xl text-gray-800'></div>
                      <div className='text-xs uppercase text-gray-500'>giây</div>
                    </div>
                  </div>
                </div>

                <form className='mt-6'>
                  <div className='flex-1'>
                    <label className='block mb-2 text-sm text-gray-600 dark:text-gray-200'>Họ và tên</label>
                    <input
                      type='text'
                      placeholder='John Doe'
                      className='block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring'
                    />
                  </div>
                  <div className='flex-1 mt-6'>
                    <label className='block mb-2 text-sm text-gray-600 dark:text-gray-200'>Email</label>
                    <input
                      type='email'
                      placeholder='johndoe@example.com'
                      className='block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring'
                    />
                  </div>
                  <div className='flex-1 mt-6'>
                    <label className='block mb-2 text-sm text-gray-600 dark:text-gray-200'>Số điện thoại</label>
                    <input
                      type='text'
                      placeholder='0123456789'
                      className='block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring'
                    />
                  </div>

                  <div className='w-full mt-6'>
                    <label className='block mb-2 text-sm text-gray-600 dark:text-gray-200'>Câu hỏi thêm (nếu có)</label>
                    <textarea
                      className='block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring'
                      placeholder='Message'
                    ></textarea>
                  </div>

                  <button className='w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-md hover:bg-red-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50'>
                    Tư vấn cho tôi
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormAdvise
