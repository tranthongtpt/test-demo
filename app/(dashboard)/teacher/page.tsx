'use client'

import Barchart from '@/components/Chart/Barchart'
import Piechart from '@/components/Chart/Piechart'
import PageContainer from '@/components/container/PageContainer'
import CardHello from '@/components/dashboard/Card/CardHello'
import CardMini from '@/components/dashboard/Card/CardMini'
import CardWeather from '@/components/dashboard/Card/CardWeather'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { Accordion, AccordionItem, Avatar, Button, Card, CardBody, CardHeader, Divider, Image } from '@nextui-org/react'
import { AiFillClockCircle, AiOutlineClockCircle } from 'react-icons/ai'
import { BsCalendar2Date } from 'react-icons/bs'

const Dashboard = () => {
  const defaultContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  return (
    // <PageContainer title='teacher' description='this is Dashboard'>
    <section className='bg-[#f1f1f1] h-full w-full'>
      <div className='p-10 bg-white rounded-lg '>
        <div className='grid grid-cols-4 gap-4'>
          {/* <CardWeather /> */}
          <CardHello />
          <CardMini title='ATTEMPTED' des='Attempt Test to your Performance' data='8' />
          <CardMini title='COMPLETED TEST' des='Analyse your Completed Tests and Retake' data='5' />
          <CardMini title='TOTAL PENDING TEST' des='Scored/ Unscored Tests' data='1' />
        </div>
        <div className='px-10 py-6 my-6 rounded-lg shadow-medium bg-content1'>
          <div className='grid grid-cols-3 gap-6'>
            <div className='col-span-2'>
              <div className='flex items-center justify-between'>
                <p className='text-xl font-semibold'>Lượt đăng ký mới </p>
                <Button startContent={<BsCalendar2Date />} size='md' color='default' variant='ghost'>
                  Lọc theo thời gian
                </Button>
              </div>
              <p className='text-gray-500 font-extralight'>Hệ thống đã có hơn 5,030 người sử dụng ⭐</p>
              <Barchart />
            </div>

            <div className='col-span-1 pl-6 border-l-2'>
              <div className='flex items-center justify-between w-full '>
                <p className='text-xl font-semibold'>Bài thi</p>
                <Button startContent={<BsCalendar2Date />} size='md' color='default' variant='ghost'>
                  Lọc theo thời gian
                </Button>
              </div>
              <p className='text-gray-500 font-extralight'>Hệ thống đã có hơn 5,030 người sử dụng ⭐</p>
              <Piechart />
            </div>
          </div>
        </div>
        <div className='grid grid-cols-3 gap-6'>
          <div className='p-6 mt-6 rounded-lg shadow-medium bg-content1'></div>
          <div></div>
          <div className='p-6 mt-6 rounded-lg shadow-medium bg-content1'>
            <div className='-pl-6 -border-l-2'>
              <p className='text-xl font-semibold'>Top điểm 🥇</p>
              <p className='text-gray-500 font-extralight'>Hệ thống đã có hơn 5,030 người sử dụng ⭐</p>
              <Accordion selectionMode='multiple'>
                <AccordionItem
                  key='1'
                  aria-label='Chung Miller'
                  startContent={
                    <Avatar
                      isBordered
                      color='primary'
                      radius='lg'
                      src='https://i.pravatar.cc/150?u=a042581f4e29026024d'
                    />
                  }
                  subtitle='4 unread messages'
                  title='Chung Miller'
                >
                  {defaultContent}
                </AccordionItem>
                <AccordionItem
                  key='2'
                  aria-label='Janelle Lenard'
                  startContent={
                    <Avatar
                      isBordered
                      color='success'
                      radius='lg'
                      src='https://i.pravatar.cc/150?u=a042581f4e29026704d'
                    />
                  }
                  subtitle='3 incompleted steps'
                  title='Janelle Lenard'
                >
                  {defaultContent}
                </AccordionItem>
                <AccordionItem
                  key='3'
                  aria-label='Zoey Lang'
                  startContent={
                    <Avatar
                      isBordered
                      color='warning'
                      radius='lg'
                      src='https://i.pravatar.cc/150?u=a04258114e29026702d'
                    />
                  }
                  subtitle={
                    <p className='flex'>
                      2 issues to<p className='ml-1 text-primary'>fix now</p>
                    </p>
                  }
                  title='Zoey Lang'
                >
                  {defaultContent}
                </AccordionItem>
                <AccordionItem
                  key='4'
                  aria-label='Chung Miller'
                  startContent={
                    <Avatar
                      isBordered
                      color='primary'
                      radius='lg'
                      src='https://i.pravatar.cc/150?u=a042581f4e29026024d'
                    />
                  }
                  subtitle='4 unread messages'
                  title='Chung Miller'
                >
                  {defaultContent}
                </AccordionItem>
                <AccordionItem
                  key='5'
                  aria-label='Chung Miller'
                  startContent={
                    <Avatar
                      isBordered
                      color='primary'
                      radius='lg'
                      src='https://i.pravatar.cc/150?u=a04258114e29026702d'
                    />
                  }
                  subtitle='4 unread messages'
                  title='Chung Miller'
                >
                  {defaultContent}
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
        <div className='p-6 mt-6 rounded-lg shadow-medium bg-content1'></div>
      </div>
    </section>
    // </PageContainer>
  )
}

export default Dashboard
