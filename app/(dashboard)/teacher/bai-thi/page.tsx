'use client'
import { Card, CardBody, Tab, Tabs } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import TableAcademic from '@/components/dashboard/teacher/Table/TableAcademic'
import TableExams from '@/components/dashboard/teacher/Table/TableExams'

const Page = () => {
  const router = useRouter()
  return (
    <div className="p-10">
      <Tabs aria-label="Options" variant="bordered">
        <Tab
          key="Academic "
          title={
            <div className="flex items-center mr-2 space-x-2">
              <Image
                src="/svg/class.svg"
                alt="logo"
                height={20}
                width={20}
                className="text-white"
              />
              <p>Academic</p>
            </div>
          }
        >
          <Card>
            <CardBody className="!p-0">
              <TableAcademic />
            </CardBody>
          </Card>
        </Tab>
        <Tab
          key="listening"
          title={
            <div className="flex items-center space-x-2">
              <Image
                src="/svg/listening.svg"
                alt="logo"
                height={20}
                width={20}
                className="text-white"
              />
              <p>Listening</p>
            </div>
          }
        >
          <Card>
            <CardBody className="!p-0">
              <TableExams type="listening" />
            </CardBody>
          </Card>
        </Tab>
        <Tab
          key="writing"
          title={
            <div className="flex items-center space-x-2">
              <Image
                src="/svg/pencil.svg"
                alt="logo"
                height={20}
                width={20}
                className="text-white"
              />
              <p>Writing</p>
            </div>
          }
        >
          <Card>
            <CardBody className="!p-0">
              <TableExams type="writing" />
            </CardBody>
          </Card>
        </Tab>
        <Tab
          key="reading"
          title={
            <div className="flex items-center space-x-2">
              <Image
                src="/svg/reading.svg"
                alt="logo"
                height={20}
                width={20}
                className="text-white"
              />
              <p>Reading</p>
            </div>
          }
        >
          <Card>
            <CardBody className="!p-0">
              <TableExams type="reading" />
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  )
}
export default Page
