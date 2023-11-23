'use client'

import Barchart from '@/components/Chart/Barchart'
import Piechart from '@/components/Chart/Piechart'
import CardHello from '@/components/dashboard/Card/CardHello'
import CardMini from '@/components/dashboard/Card/CardMini'
import CardWeather from '@/components/dashboard/Card/CardWeather'
import { Accordion, AccordionItem, Avatar, Button } from '@nextui-org/react'
import { BsCalendar2Date } from 'react-icons/bs'

const Dashboard = () => {
  const defaultContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  return (
    // <PageContainer title='teacher' description='this is Dashboard'>
    <section className="h-full w-full bg-[#f1f1f1]">
      <div className="rounded-lg bg-white p-10 ">
        <div className="grid grid-cols-4 gap-4">
          {/* <CardWeather /> */}
          <CardHello />
          <CardMini title="ATTEMPTED" des="Attempt Test to your Performance" data="8" />
          <CardMini title="COMPLETED TEST" des="Analyse your Completed Tests and Retake" data="5" />
          <CardMini title="TOTAL PENDING TEST" des="Scored/ Unscored Tests" data="1" />
        </div>
        <div className="my-6 rounded-lg bg-content1 px-10 py-6 shadow-medium">
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2">
              <div className="flex items-center justify-between">
                <p className="text-xl font-semibold">Lượt đăng ký mới </p>
                <Button
                  startContent={<BsCalendar2Date />}
                  size="md"
                  color="default"
                  variant="ghost"
                >
                  Lọc theo thời gian
                </Button>
              </div>
              <p className="font-extralight text-gray-500">
                Hệ thống đã có hơn 5,030 người sử dụng ⭐
              </p>
              <Barchart />
            </div>

            <div className="col-span-1 border-l-2 pl-6">
              <div className="flex w-full items-center justify-between ">
                <p className="text-xl font-semibold">Bài thi</p>
                <Button
                  startContent={<BsCalendar2Date />}
                  size="md"
                  color="default"
                  variant="ghost"
                >
                  Lọc theo thời gian
                </Button>
              </div>
              <p className="font-extralight text-gray-500">
                Hệ thống đã có hơn 5,030 người sử dụng ⭐
              </p>
              <Piechart />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6">
          <div className="mt-6 rounded-lg bg-content1 p-6 shadow-medium"></div>
          <div></div>
          <div className="mt-6 rounded-lg bg-content1 p-6 shadow-medium">
            <div className="-pl-6 -border-l-2">
              <p className="text-xl font-semibold">Top điểm 🥇</p>
              <p className="font-extralight text-gray-500">
                Hệ thống đã có hơn 5,030 người sử dụng ⭐
              </p>
              <Accordion selectionMode="multiple">
                <AccordionItem
                  key="1"
                  aria-label="Chung Miller"
                  startContent={
                    <Avatar
                      isBordered
                      color="primary"
                      radius="lg"
                      src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                    />
                  }
                  subtitle="4 unread messages"
                  title="Chung Miller"
                >
                  {defaultContent}
                </AccordionItem>
                <AccordionItem
                  key="2"
                  aria-label="Janelle Lenard"
                  startContent={
                    <Avatar
                      isBordered
                      color="success"
                      radius="lg"
                      src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                    />
                  }
                  subtitle="3 incompleted steps"
                  title="Janelle Lenard"
                >
                  {defaultContent}
                </AccordionItem>
                <AccordionItem
                  key="3"
                  aria-label="Zoey Lang"
                  startContent={
                    <Avatar
                      isBordered
                      color="warning"
                      radius="lg"
                      src="https://i.pravatar.cc/150?u=a04258114e29026702d"
                    />
                  }
                  subtitle={
                    <p className="flex">
                      2 issues to<p className="text-primary ml-1">fix now</p>
                    </p>
                  }
                  title="Zoey Lang"
                >
                  {defaultContent}
                </AccordionItem>
                <AccordionItem
                  key="4"
                  aria-label="Chung Miller"
                  startContent={
                    <Avatar
                      isBordered
                      color="primary"
                      radius="lg"
                      src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                    />
                  }
                  subtitle="4 unread messages"
                  title="Chung Miller"
                >
                  {defaultContent}
                </AccordionItem>
                <AccordionItem
                  key="5"
                  aria-label="Chung Miller"
                  startContent={
                    <Avatar
                      isBordered
                      color="primary"
                      radius="lg"
                      src="https://i.pravatar.cc/150?u=a04258114e29026702d"
                    />
                  }
                  subtitle="4 unread messages"
                  title="Chung Miller"
                >
                  {defaultContent}
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
        <div className="mt-6 rounded-lg bg-content1 p-6 shadow-medium"></div>
      </div>
    </section>
    // </PageContainer>
  )
}

export default Dashboard
