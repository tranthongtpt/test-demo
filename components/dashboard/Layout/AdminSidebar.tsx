'use client'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { admin, user } from '@/data/dummy'
import Link from 'next/link'

function AdminSidebar() {
  const pathname = usePathname()
  const { data: session } = useSession()
  const userInfo = session?.user as User

  console.log('pathname', pathname)

  const activeLink =
    'bg-rose-100  flex gap-2 w-full min-h-[44px] h-full items-center px-3.5 rounded-xl cursor-pointer transition-all duration-150 active:scale-[0.98]'
  const normalLink =
    'hover:bg-rose-100 flex gap-2 w-full min-h-[44px] h-full items-center px-3.5 rounded-xl cursor-pointer transition-all duration-150 active:scale-[0.98]'
  return (
    <aside className="sticky top-0 z-[202] h-screen">
      <div className="fixed z-[202] h-full w-64 shrink-0 -translate-x-full flex-col overflow-y-auto border-r border-divider bg-background px-3 py-2 transition-transform md:static md:ml-0 md:flex md:h-screen md:translate-x-0">
        <div className="flex justify-center px-6">
          <Image
            src="/images/Logo-dream.png"
            alt="logo"
            height={100}
            width={100}
            className="h-25 text-white"
          />
        </div>
        <div className="flex h-full flex-col justify-between">
          <div className="mt-9 flex flex-col gap-6 px-2">
            {userInfo?.typeUser !== 'admin' && (
              <>
                {user.map((item, index) => (
                  <Link
                    className="max-w-full text-default-900 active:bg-none"
                    href={item.link}
                    key={index}
                  >
                    <div className={pathname === item.link ? activeLink : normalLink}>
                      {item.icon}
                      <span className="text-red-900">{item.name}</span>
                    </div>
                  </Link>
                ))}
              </>
            )}
            {userInfo?.typeUser === 'admin' && (
              <>
                {admin.map((item, index) => (
                  <Link
                    className="max-w-full text-default-900 active:bg-none"
                    href={item.link}
                    key={index}
                  >
                    <div className={pathname === item.link ? activeLink : normalLink}>
                      {item.icon}
                      <span className="text-red-900">{item.name}</span>
                    </div>
                  </Link>
                ))}
              </>
            )}
          </div>
          <div className="flex items-center justify-center gap-6 px-8 pb-8 pt-16 md:pb-0 md:pt-10">
            <p className="text-center text-xs">© 2023 All Rights Reserved Developed by TTH</p>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default AdminSidebar
