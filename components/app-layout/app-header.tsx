'use client'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
// import Link from '@/components/Link'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { signOut, useSession } from 'next-auth/react'
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, User } from '@nextui-org/react'
import { usePathname, useRouter } from 'next/navigation'
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
  scrolling,
  href,
}: {
  setActive: any
  active: any
  item: any
  children?: any
  scrolling: boolean
  href: string
}) => {
  return (
    <a
      href={href}
      onMouseEnter={() => setActive(item)}
      className={`relative  ${scrolling ? 'text-red-500' : 'text-white'}`}
    >
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
                className="overflow-hidden bg-white border shadow-xl rounded-2xl border-slate-200 "
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="h-full p-4 w-max"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </a>
  )
}

export const Menu = ({ setActive, children }: { setActive: any; children: any }) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="relative flex items-center justify-between py-10 space-x-4 sm:h-10 md:justify-center"
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
  const { data: session } = useSession()
  const userInfo = session?.user as User
  const router = useRouter()
  const pathname = usePathname()
  const iconClasses = 'text-xl text-default-500 pointer-events-none flex-shrink-0'
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
    <header
      className={`sticky top-0 z-[99999] ${
        scrolling
          ? 'bg-gray-50/90 shadow-lg backdrop-blur-sm transition duration-300 dark:bg-gray-900/90'
          : 'bg-[#D01F1B]'
      }`}
    >
      <div className="container mx-auto">
        <Menu setActive={setActive}>
          <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
            <div className="flex items-center justify-between w-auto w-full md:">
              <a href={userInfo ? `/teacher` : '/'} aria-label="Home">
                <Image
                  src="/images/logos/logo.svg"
                  alt="logo"
                  height={100}
                  width={100}
                  priority
                  className="bg-white border border-red-600 border-dashed rounded-md"
                />
              </a>
              <div className="flex items-center -mr-2 md:hidden">
                <button
                  type="button"
                  id="main-menu"
                  aria-label="Main menu"
                  aria-haspopup="true"
                  className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none"
                >
                  <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" className="w-6 h-6">
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
          <MenuItem
            setActive={setActive}
            active={active}
            scrolling={scrolling}
            item="Khóa học"
            href="/khoa-hoc"
          >
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/lich-khai-giang">Lịch khai giảng</HoveredLink>
              <HoveredLink href="/ielts-writing">IELTS Writing</HoveredLink>
              <HoveredLink href="/ielts-speaking">IELTS Speaking</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem
            setActive={setActive}
            active={active}
            scrolling={scrolling}
            item="Đăng ký thi IETLS"
            href=""
          >
            <div className="grid grid-cols-2 gap-10 p-4 text-sm ">
              <ProductItem
                title="Thi thử IELTS"
                href="/dang-ky-thi-thu-ielts"
                src="/images/avatar.png"
                description="Thi thử IELTS giúp người học luyện tập và cải thiện kỹ năng Nghe, Đọc, Viết và Nói, tất cả những kỹ năng quan trọng được đánh giá trong bài thi IELTS."
              />
              <ProductItem
                title="Đăng ký IELTS"
                href="/ielts-writing"
                src="/images/avatar.png"
                description="Đăng ký IELTS là bước quan trọng cho những người muốn tham gia kỳ thi này để đánh giá kỹ năng tiếng Anh của mình. "
              />
            </div>
          </MenuItem>
          <MenuItem
            setActive={setActive}
            active={active}
            scrolling={scrolling}
            item="Bí kíp"
            href="/bi-kip"
          >
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/tieng-anh-giao-tiep">Tiếng anh giao tiếp</HoveredLink>
              <HoveredLink href="/phuong-phap-hoc">Phương pháp học</HoveredLink>
              <HoveredLink href="/tai-lieu">Tài liệu</HoveredLink>
            </div>
          </MenuItem>
          {userInfo && (
            <div className="hidden md:absolute md:inset-y-0 md:right-0 md:flex md:items-center md:justify-end">
              <Dropdown placement="bottom-end">
                <DropdownTrigger>
                  <div className="flex items-center p-2 text-xl font-semibold bg-white rounded-md cursor-pointer">
                    <User
                      name={'Hi, ' + session?.user?.name}
                      description={<Link href="#">{session?.user?.email}</Link>}
                      avatarProps={{
                        src:
                          session?.user?.image ||
                          'https://avatars.githubusercontent.com/u/30373425?v=4',
                      }}
                    />
                  </div>
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile Actions" variant="flat">
                  <DropdownItem
                    key="redirectHome"
                    startContent={
                      <Image src="/svg/dashboard.svg" alt="logo" height={20} width={20} />
                    }
                    onClick={() => {
                      if (pathname === '/') {
                        if (userInfo.typeUser !== 'admin') {
                          router.push('/student')
                        } else {
                          router.push('/teacher')
                        }
                      } else {
                        router.push('/')
                      }
                    }}
                  >
                    {pathname === '/' ? 'Chuyển về trang chủ' : 'Chuyển đến landing page'}
                  </DropdownItem>
                  <DropdownItem
                    key="settings"
                    showDivider
                    startContent={
                      <Image src="/svg/setting.svg" alt="logo" height={20} width={20} />
                    }
                    onClick={() => {
                      router.push('/ho-so')
                  }}
                  >
                    Hồ sơ
                  </DropdownItem>
                  <DropdownItem
                    key="logout"
                    color="danger"
                    onClick={() => signOut({ callbackUrl: '/' })}
                    startContent={<Image src="/svg/logout.svg" alt="logo" height={20} width={20} />}
                  >
                    Đăng xuất
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          )}
          {!userInfo && (
            <div className="hidden md:absolute md:inset-y-0 md:right-0 md:flex md:items-center md:justify-end">
              <span className="inline-flex">
                <a
                  href="/login"
                  className={`inline-flex items-center border border-transparent px-4 py-2 ${
                    scrolling ? 'text-red-500' : 'text-white'
                  } font-medium leading-6 transition duration-150 ease-in-out hover:text-red-100 focus:outline-none`}
                >
                  Đăng nhập
                </a>
              </span>
              <span className="inline-flex ml-2 rounded-md shadow">
                <a
                  href="/signup"
                  className="inline-flex items-center px-4 py-2 font-medium leading-6 text-red-500 transition duration-150 ease-in-out bg-white border border-red-500 rounded-md hover:bg-red-100 focus:border-blue-700 focus:outline-none"
                >
                  Đăng ký
                </a>
              </span>
            </div>
          )}
        </Menu>
      </div>
    </header>
  )
}
