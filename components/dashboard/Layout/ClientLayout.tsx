'use client'
import AdminNavbar from './AdminNavbar'
import AdminSidebar from './AdminSidebar'

function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className='flex w-full h-screen overflow-hidden bg-gray-50'>
      <AdminSidebar />
      <div className='w-full h-full overflow-y-auto'>
        <AdminNavbar />
        <div className=''> {children}</div>
      </div>
    </section>
  )
}

export default ClientLayout
