'use client'

import { useState } from 'react'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
type Card = {
  id: string
  date: string
  img: string
  title: string
  description: string
}
const BlogCard = ({ id, date, img, title, description }: Card) => {

  const pathName = usePathname()
  const router = useRouter()

  const handleProfileClick = () => {
    router.push(`/bi-kip/${id}`)
  }

  return (
    <article className='flex flex-col items-center gap-4 md:flex-row lg:gap-6 py-4' onClick={handleProfileClick}>
      <a
        href='#'
        className='group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40'
      >
        <img
          src={img}
          loading='lazy'
          alt=''
          className='absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
        />
      </a>
      <div className='flex flex-col gap-2'>
        <span className='text-sm text-gray-400'>{date}</span>
        <h2 className='text-xl font-bold text-gray-800'>
          <a href='#' className='transition duration-100 hover:text-rose-500 active:text-rose-600'>
            {title}
          </a>
        </h2>
        <p className='text-gray-500'>{description}</p>
        <div>
          <a
            href='#'
            className='font-semibold text-rose-500 transition duration-100 hover:text-rose-600 active:text-rose-700'
          >
            Xem ngay
          </a>
        </div>
      </div>
    </article>
  )
}

export default BlogCard
