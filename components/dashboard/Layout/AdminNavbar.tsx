import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Popover,
  PopoverContent,
  PopoverTrigger,
  User
} from '@nextui-org/react'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Breadcrumbs from './Breadcrumbs'

type TypeUser = {
  typeUser: string
  // Other user properties
}

function AdminNavbar() {
  const { data: session } = useSession()
  // const session123 = useSelector((state: any) => state.session.session)
  const pathname = usePathname()
  const user = session?.user as TypeUser
  return (
    <div className='flex items-center justify-between px-5 py-2 bg-white border-b navbar border-divider'>
      <Breadcrumbs />
      <div className='flex items-center'>
        {user && user.typeUser !== 'admin' && (
          <div className='flex items-center p-1 mr-5 rounded-md bg-rose-100'>
            <Image src='/svg/wallet.svg' alt='wallet' height={40} width={40} className='text-red-500' />{' '}
            <span className='text-red-500'>Points</span>
          </div>
        )}
        <Dropdown placement='bottom-end'>
          <DropdownTrigger>
            <div className='flex items-center text-xl font-semibold cursor-pointer'>
              <User
                name={'Hi, ' + session?.user?.name}
                description={<Link href='#'>{session?.user?.email}</Link>}
                avatarProps={{
                  src: session?.user?.image || 'https://avatars.githubusercontent.com/u/30373425?v=4'
                }}
              />
            </div>
          </DropdownTrigger>
          <DropdownMenu aria-label='Profile Actions' variant='flat'>
            <DropdownItem key='settings'>Hồ sơ</DropdownItem>
            <DropdownItem
              key='logout'
              color='danger'
              onClick={() =>
                // signOut({ redirect: false }).then(() => {
                //   router.push('/') // Redirect to the dashboard page after signing out
                // })
                signOut({ callbackUrl: '/' })
              }
            >
              Đăng xuất
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  )
}

export default AdminNavbar
