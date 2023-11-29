'use client'
import TableStudentTeacher from '@/components/dashboard/teacher/Table/TableStudentTeacher'
import { Card, CardBody, CardHeader, Divider } from '@nextui-org/react'
import React from 'react'

const History = () => {
  return (
    <div className="p-10">
      <Card shadow="sm" radius="sm">
        <CardHeader>
          <h1 className="text-xl font-bold">Lịch sử đăng ký</h1>
        </CardHeader>
        <Divider />
        <CardBody className="!p-0">
          <TableStudentTeacher />
        </CardBody>
      </Card>
    </div>
  )
}

export default History
