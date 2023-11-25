'use client'
import { Card, CardBody, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Tab, Tabs } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import TableExams from '@/components/Table/TableExams'
import { useRouter } from 'next/navigation'
import TableAcademic from '@/components/Table/TableAcademic'

const Page = () => {
  const router = useRouter()
  return (

    <div className='p-10'>
      <Tabs aria-label='Options' variant='bordered'>
        <Tab
          key='Academic '
          title={
            <div className='flex items-center mr-2 space-x-2'>
              <Image src='/svg/class.svg' alt='logo' height={20} width={20} className='text-white' />
              <p>Academic</p>
            </div>
          }
        >
          <Card>
            <CardBody className='!p-0'>
              <TableAcademic />
            </CardBody>
          </Card>
        </Tab>
        <Tab
          key='listening'
          title={
            <div className='flex items-center space-x-2'>
              <Image src='/svg/listening.svg' alt='logo' height={20} width={20} className='text-white' />
              <p>Listening</p>
            </div>
          }
        >
          <Card>
            <CardBody className='!p-0'>
              <TableExams type='listening' />
            </CardBody>
          </Card>
        </Tab>
        <Tab
          key='writing'
          title={
            <div className='flex items-center space-x-2'>
              <Image src='/svg/pencil.svg' alt='logo' height={20} width={20} className='text-white' />
              <p>Writing</p>
            </div>
          }
        >
          <Card>
            <CardBody className='!p-0'>
              <TableExams type='writing' />
            </CardBody>
          </Card>
        </Tab>
        <Tab
          key='reading'
          title={
            <div className='flex items-center space-x-2'>
              <Image src='/svg/reading.svg' alt='logo' height={20} width={20} className='text-white' />
              <p>Reading</p>
            </div>
          }
        >
          <Card>
            <CardBody className='!p-0'>
              <TableExams type='reading' />
            </CardBody>
          </Card>
        </Tab>
        <Tab
          // key='create'
          className='!p-0 !min-w-fit'
          title={
            <Dropdown>
              <DropdownTrigger className='!mx-0 !py-2 !px-3 '>
                <div className='flex items-center mx-3 space-x-2'>
                  <Image src='/svg/plus.svg' alt='logo' height={20} width={20} className='text-white' />
                  <p>Tạo bài thi</p>
                </div>
              </DropdownTrigger>
              <DropdownMenu variant='faded' aria-label='Dropdown menu with icons'>
                <DropdownItem
                  key='new'
                  shortcut='⌘A'
                  // startContent={<AddNoteIcon className={iconClasses} />}
                  onClick={() => router.push('/teacher/bai-thi/create-academic')}
                >
                  <div className='flex items-center mr-2 space-x-2'>
                    <Image src='/svg/class.svg' alt='logo' height={20} width={20} className='text-white' />
                    <p>Academic</p>
                  </div>
                </DropdownItem>
                <DropdownItem
                  key='new'
                  shortcut='⌘L'
                  // startContent={<AddNoteIcon className={iconClasses} />}
                  onClick={() => router.push('/teacher/bai-thi/create-listening')}
                >
                  <div className='flex items-center space-x-2'>
                    <Image src='/svg/listening.svg' alt='logo' height={20} width={20} className='text-white' />
                    <p>Listening</p>
                  </div>
                </DropdownItem>
                <DropdownItem
                  key='edit'
                  shortcut='⌘W'
                  // startContent={<EditDocumentIcon className={iconClasses} />}
                  onClick={() => router.push('/teacher/bai-thi/create-writing')}
                >
                  <div className='flex items-center space-x-2'>
                    <Image src='/svg/pencil.svg' alt='logo' height={20} width={20} className='text-white' />
                    <p>Writing</p>
                  </div>
                </DropdownItem>
                <DropdownItem
                  key='copy'
                  shortcut='⌘R'
                  // startContent={<CopyDocumentIcon className={iconClasses} />}
                  onClick={() => router.push('/teacher/bai-thi/create-reading')}
                >
                  <div className='flex items-center space-x-2'>
                    <Image src='/svg/reading.svg' alt='logo' height={20} width={20} className='text-white' />
                    <p>Reading</p>
                  </div>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          }
        />
      </Tabs>
    </div>
  )
}
export default Page
