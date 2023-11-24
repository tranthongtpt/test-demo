'use client'
import TableStudentTeacher from '@/components/Table/TableStudentTeacher'
import { Card, CardBody, CardHeader, Divider } from '@nextui-org/react'
import React from 'react'

const Student = () => {
  return (
    <div className='p-10'>
      <Card shadow='sm' radius='md'>
        <CardHeader>
          <h1 className='text-xl font-bold'>Học viên đăng ký</h1>
        </CardHeader>
        <Divider />
        <CardBody className='!p-0'>
          <TableStudentTeacher />
        </CardBody>
      </Card>
    </div>
  )
}

export default Student
