'use client'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import React from 'react'

const Breadcrumbs = () => {
  const pathname = usePathname()
  // console.log(pathname.replace(/\/[^/]*$/, ''))
  return (
    <>
      <nav className='flex' aria-label='Breadcrumb'>
        <ol className='inline-flex items-center space-x-1 md:space-x-3'>
          <li className='inline-flex items-center'>
            <Link
              href={'/' + pathname.split('/')[1]}
              className='inline-flex items-center text-gray-700 hover:text-gray-900'
            >
              <svg
                className='w-5 h-5 mr-2.5'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z'></path>
              </svg>
              Trang chủ
            </Link>
          </li>
          {pathname.split('/')[2] && (
            <li>
              <div className='flex items-center'>
                <svg
                  className='w-6 h-6 text-gray-400'
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
                <Link
                  href={pathname.replace(/\/[^/]*$/, '')}
                  className='ml-1 text-base font-medium text-gray-400 capitalize md:ml-2'
                >
                  {pathname.split('/')[2].replace(/-/g, ' ')}
                </Link>
              </div>
            </li>
          )}
          {pathname.split('/')[3] && (
            <li>
              <div className='flex items-center'>
                <svg
                  className='w-6 h-6 text-gray-400'
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
                <p className='ml-1 text-base font-medium text-gray-400 capitalize md:ml-2'>
                  {pathname.split('/')[3].replace(/-/g, ' ')}
                </p>
              </div>
            </li>
          )}
        </ol>
      </nav>
    </>
  )
}

export default Breadcrumbs
