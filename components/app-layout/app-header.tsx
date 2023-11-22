'use client'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
// import Link from '@/components/Link'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
type AppHeaderProps = React.PropsWithChildren

const transition = {
  type: 'spring',
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
}
export const MenuItem = ({
  setActive,
  active,
  item,
  children,
  scrolling
}: {
  setActive: any
  active: any
  item: any
  children?: any
  scrolling:boolean
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className={scrolling ? 'relative text-red-500' : 'relative text-white'}>
      <motion.p
        animate={{
          color: active === item ? 'text-red-200' : 'text-white',
        }}
        transition={{ duration: 0.3 }}
        className="cursor-pointer"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute left-1/2 top-[calc(100%_+_0.7rem)] -translate-x-1/2 transform">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl "
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="h-full w-max p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  )
}

export const Menu = ({ setActive, children }: { setActive: any; children: any }) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="relative flex items-center justify-between space-x-4 py-10 sm:h-10 md:justify-center"
    >
      {children}
    </nav>
  )
}
{
  /* Bignav products */
}
const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string
  description: string
  href: string
  src: string
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="mb-1 text-xl font-bold text-black">{title}</h4>
        <p className="max-w-[10rem] text-sm text-neutral-700">{description}</p>
      </div>
    </Link>
  )
}

const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link {...rest} className="hover:black text-neutral-700 ">
      {children}
    </Link>
  )
}

export default function AppHeader({ children }: AppHeaderProps) {
  const [active, setActive] = useState(null)
  const [scrolling, setScrolling] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const offset = 100

      if (scrollPosition > offset) {
        setScrolling(true)
      } else {
        setScrolling(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <header className={`sticky top-0 z-[99999] ${scrolling ? 'bg-inherit	' : 'bg-gradient-to-r from-[#f598a8] to-[#EF4444]'}`}>
      <div className="container mx-auto">
        <Menu setActive={setActive}>
          <div className="flex flex-1 items-center md:absolute md:inset-y-0 md:left-0">
            <div className="flex w-full items-center justify-between md:w-auto">
              <a href="" aria-label="Home">
                <Image
                  src="/static/images/logos/logo.svg"
                  alt="logo"
                  height={100}
                  width={100}
                  priority
                />
              </a>
              <div className="-mr-2 flex items-center md:hidden">
                <button
                  type="button"
                  id="main-menu"
                  aria-label="Main menu"
                  aria-haspopup="true"
                  className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none"
                >
                  <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" className="h-6 w-6">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <MenuItem setActive={setActive} active={active} scrolling={scrolling} item="Khóa học">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/lich-khai-giang">Lịch khai giảng</HoveredLink>
              <HoveredLink href="/ielts-writing">IELTS Writing</HoveredLink>
              <HoveredLink href="/ielts-speaking">IELTS Speaking</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} scrolling={scrolling} item="Đăng ký thi IETLS">
            <div className="  grid grid-cols-2 gap-10 p-4 text-sm">
              <ProductItem
                title="Thi thử IELTS"
                href="/lich-khai-giang"
                src="/static/images/avatar.png"
                description="Thi thử IELTS giúp người học luyện tập và cải thiện kỹ năng Nghe, Đọc, Viết và Nói, tất cả những kỹ năng quan trọng được đánh giá trong bài thi IELTS."
              />
              <ProductItem
                title="Đăng ký IELTS"
                href="/ielts-writing"
                src="/static/images/avatar.png"
                description="Đăng ký IELTS là bước quan trọng cho những người muốn tham gia kỳ thi này để đánh giá kỹ năng tiếng Anh của mình. "
              />
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} scrolling={scrolling} item="Bí kíp">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/tieng-anh-giao-tiep">Tiếng anh giao tiếp</HoveredLink>
              <HoveredLink href="/phuong-phap-hoc">Phương pháp học</HoveredLink>
              <HoveredLink href="/tai-lieu">Tài liệu</HoveredLink>
            </div>
          </MenuItem>
          <div className="hidden md:absolute md:inset-y-0 md:right-0 md:flex md:items-center md:justify-end">
            <span className="inline-flex">
              <a
                href="/login"
                className={`inline-flex items-center border border-transparent px-4 py-2 ${scrolling ? 'text-red-500' :'text-white'} font-medium leading-6 transition duration-150 ease-in-out hover:text-red-100 focus:outline-none`}
              >
                Đăng nhập
              </a>
            </span>
            <span className="ml-2 inline-flex rounded-md shadow">
              <a
                href="/signup"
                className="inline-flex items-center rounded-md border border-red-500 bg-white px-4 py-2 text-red-500 font-medium leading-6  transition duration-150 ease-in-out hover:bg-red-100 focus:border-blue-700 focus:outline-none"
              >
                Đăng ký
              </a>
            </span>
          </div>
        </Menu>
      </div>
    </header>
  )
}
