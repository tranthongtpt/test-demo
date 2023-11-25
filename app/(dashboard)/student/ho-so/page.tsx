'use client'

import { useSession } from 'next-auth/react'
import Image from 'next/image'

function Profile() {
  const { data: session } = useSession()
  return (
    <div className='p-10'>
      <div className='grid grid-cols-4 sm:grid-cols-12 gap-6 px-4'>
        <div className='col-span-4 sm:col-span-3'>
          <div className=' bg-white shadow rounded-lg text-gray-900'>
            <div className='rounded-t-lg h-32 overflow-hidden'>
              <img
                className='object-cover object-top w-full'
                src='https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ'
                alt='Mountain'
              />
            </div>
            <div className='mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden'>
              <img
                className='object-cover object-center h-32'
                src={session?.user?.image}
                alt='hinh anh dai dien'
              />
            </div>
            <div className='text-center mt-2'>
              <h2 className='font-semibold'>{session?.user?.name}</h2>
              <p className='text-gray-500'>Học viên</p>
            </div>
            <ul className='py-4 mt-2 text-gray-700 flex items-center justify-around'>
              <li className='flex flex-col items-center justify-around'>
                <Image
                  src='/svg/mic.svg'
                  width={25}
                  height={25}
                  alt='loader'
                  className='object-contain text-red-400 pr-1'
                />
                <div>7.0</div>
              </li>
              <li className='flex flex-col items-center justify-between'>
                <Image
                  src='/svg/listening.svg'
                  width={25}
                  height={25}
                  alt='loader'
                  className='object-contain text-red-400 pr-1 	 '
                />
                <div>7.5</div>
              </li>
              <li className='flex flex-col items-center justify-around'>
                <Image
                  src='/svg/pencil.svg'
                  width={25}
                  height={25}
                  alt='loader'
                  className='object-contain text-red-400 pr-1 	 '
                />
                <div>8.0</div>
              </li>{' '}
              <li className='flex flex-col items-center justify-around'>
                <Image
                  src='/svg/reading.svg'
                  width={25}
                  height={25}
                  alt='loader'
                  className='object-contain text-red-400 pr-1 	 '
                />
                <div>9.0</div>
              </li>
            </ul>
            {/* <div className='p-4 border-t mx-8 mt-2'>
              <button className='w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2'>
                Follow
              </button>
            </div> */}
          </div>
        </div>

        <div className='col-span-4 sm:col-span-9'>
          <div className='bg-white rounded-lg shadow relative'>
            <div className='flex items-start justify-between p-5 border-b rounded-t'>
              <h3 className='text-xl font-semibold'>Thông tin của tôi</h3>
            </div>

            <div className='p-6 space-y-6'>
              <form action='#'>
                <div className='grid grid-cols-6 gap-6'>
                  <div className='col-span-6 sm:col-span-3'>
                    <label htmlFor='product-name' className='text-sm font-medium text-gray-900 block mb-2'>
                      Tên
                    </label>
                    <input
                      type='text'
                      name='product-name'
                      id='product-name'
                      defaultValue={session?.user?.name}
                      className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5'
                      placeholder='Justin nguyen'
                    />
                  </div>
                  <div className='col-span-6 sm:col-span-3'>
                    <label htmlFor='category' className='text-sm font-medium text-gray-900 block mb-2'>
                      Email
                    </label>
                    <input
                      type='email'
                      name='category'
                      id='category'
                      defaultValue={session?.user?.email}
                      className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5'
                      placeholder='abcd@gmail.com'
                    />
                  </div>
                  <div className='col-span-6 sm:col-span-3'>
                    <label htmlFor='brand' className='text-sm font-medium text-gray-900 block mb-2'>
                      Số điện thoại
                    </label>
                    <input
                      type='text'
                      name='brand'
                      id='brand'
                      className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5'
                      placeholder='0123456789'
                    />
                  </div>
                  <div className='col-span-6 sm:col-span-3'>
                    <label htmlFor='price' className='text-sm font-medium text-gray-900 block mb-2'>
                      Địa chỉ
                    </label>
                    <input
                      type='text'
                      name='price'
                      id='price'
                      className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5'
                      placeholder='Viet nam'
                    />
                  </div>
                  <div className='col-span-6 sm:col-span-3'>
                    <label htmlFor='brand' className='text-sm font-medium text-gray-900 block mb-2'>
                      Ngày sinh
                    </label>
                    <input
                      type='text'
                      name='brand'
                      id='brand'
                      className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5'
                      placeholder='27/01/2023'
                    />
                  </div>
                </div>
              </form>
            </div>

            <div className='p-6 border-t border-gray-200 rounded-b'>
              <button
                className='text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
                type='submit'
              >
                Cập nhật
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
