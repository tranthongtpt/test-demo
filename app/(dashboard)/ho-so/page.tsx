'use client'

import { useSession } from 'next-auth/react'
import Image from 'next/image'

type TypeUser = {
  typeUser: string
}

function Profile() {
  const { data: session } = useSession()
  const user = session?.user as TypeUser
  return (
    <div className="p-10">
      <div className="grid grid-cols-4 gap-6 px-4 sm:grid-cols-12">
        <div className="col-span-4 sm:col-span-3">
          <div className="text-gray-900 bg-white rounded-lg shadow ">
            <div className="h-32 overflow-hidden rounded-t-lg">
              <img
                className="object-cover object-top w-full"
                src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                alt="Mountain"
              />
            </div>
            <div className="relative w-32 h-32 mx-auto -mt-16 overflow-hidden border-4 border-white rounded-full">
              <img
                className="object-cover object-center h-32"
                src={session?.user?.image || '#'}
                alt="hinh anh dai dien"
              />
            </div>
            <div className="mt-2 text-center">
              <h2 className="font-semibold">{session?.user?.name}</h2>
              <p className="text-gray-500">
                {user.typeUser === 'admin' ? 'Giáo viên' : 'Học viên'}
              </p>
            </div>
            <ul className="flex items-center justify-around py-4 mt-2 text-gray-700">
              <li className="flex flex-col items-center justify-around">
                <Image
                  src="/svg/mic.svg"
                  width={25}
                  height={25}
                  alt="loader"
                  className="object-contain pr-1 text-red-400"
                />
                <div>7.0</div>
              </li>
              <li className="flex flex-col items-center justify-between">
                <Image
                  src="/svg/listening.svg"
                  width={25}
                  height={25}
                  alt="loader"
                  className="object-contain pr-1 text-red-400 "
                />
                <div>7.5</div>
              </li>
              <li className="flex flex-col items-center justify-around">
                <Image
                  src="/svg/pencil.svg"
                  width={25}
                  height={25}
                  alt="loader"
                  className="object-contain pr-1 text-red-400 "
                />
                <div>8.0</div>
              </li>{' '}
              <li className="flex flex-col items-center justify-around">
                <Image
                  src="/svg/reading.svg"
                  width={25}
                  height={25}
                  alt="loader"
                  className="object-contain pr-1 text-red-400 "
                />
                <div>9.0</div>
              </li>
            </ul>
            {/* <div className='p-4 mx-8 mt-2 border-t'>
              <button className='block w-1/2 px-6 py-2 mx-auto font-semibold text-white bg-gray-900 rounded-full hover:shadow-lg'>
                Follow
              </button>
            </div> */}
          </div>
        </div>

        <div className="col-span-4 sm:col-span-9">
          <div className="relative bg-white rounded-lg shadow">
            <div className="flex items-start justify-between p-5 border-b rounded-t">
              <h3 className="text-xl font-semibold">Thông tin của tôi</h3>
            </div>

            <div className="p-6 space-y-6">
              <form action="#">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="product-name"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Tên
                    </label>
                    <input
                      type="text"
                      name="product-name"
                      id="product-name"
                      defaultValue={session?.user?.name || ''}
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm focus:border-cyan-600 focus:ring-cyan-600 sm:text-sm"
                      placeholder="Justin nguyen"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="category"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="category"
                      id="category"
                      defaultValue={session?.user?.email || ''}
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm focus:border-cyan-600 focus:ring-cyan-600 sm:text-sm"
                      placeholder="abcd@gmail.com"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="brand" className="block mb-2 text-sm font-medium text-gray-900">
                      Số điện thoại
                    </label>
                    <input
                      type="text"
                      name="brand"
                      id="brand"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm focus:border-cyan-600 focus:ring-cyan-600 sm:text-sm"
                      placeholder="0123456789"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900">
                      Địa chỉ
                    </label>
                    <input
                      type="text"
                      name="price"
                      id="price"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm focus:border-cyan-600 focus:ring-cyan-600 sm:text-sm"
                      placeholder="Viet nam"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="brand" className="block mb-2 text-sm font-medium text-gray-900">
                      Ngày sinh
                    </label>
                    <input
                      type="text"
                      name="brand"
                      id="brand"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm focus:border-cyan-600 focus:ring-cyan-600 sm:text-sm"
                      placeholder="27/01/2023"
                    />
                  </div>
                </div>
              </form>
            </div>

            <div className="p-6 border-t border-gray-200 rounded-b">
              <button
                className="rounded-lg bg-red-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-700 focus:ring-4 focus:ring-cyan-200"
                type="submit"
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
