'use client'
import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  Select,
  SelectItem,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow
} from '@nextui-org/react'
import Link from 'next/link'
const status = ['Tất cả', 'Chưa giải quyết', 'Hoàn thành']
function Exem() {
  return (
    <div className='p-10'>
      <Card shadow='sm' radius='sm'>
        <CardHeader>
          <h1 className='text-xl font-bold'>Ielts Prep Services</h1>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className='flex items-center justify-start'>
            <p className='p-2 text-sm'>Trạng thái bài kiểm tra</p>
            <Select className='max-w-xs' labelPlacement={'outside-left'}>
              {status.map((item, index) => (
                <SelectItem key={index} value={item}>
                  {item}
                </SelectItem>
              ))}
            </Select>
          </div>
          <Table aria-label='Example static collection table' className='pt-5'>
            <TableHeader>
              <TableColumn>Bài kiểm tra</TableColumn>
              <TableColumn>Ngày hết hạn</TableColumn>
              <TableColumn>Hoàn thành</TableColumn>
              <TableColumn>Tổng số câu hỏi</TableColumn>
              <TableColumn>Số điểm</TableColumn>
              <TableColumn>Hoạt động</TableColumn>
            </TableHeader>
            <TableBody emptyContent={'No rows to display.'}>
              <TableRow key='1'>
                <TableCell>Tony Reichert</TableCell>
                <TableCell>CEO</TableCell>
                <TableCell>Active</TableCell>
                <TableCell>CEO</TableCell>
                <TableCell>CEO</TableCell>
                <TableCell>
                  <Link href='/exam' className='underline'>
                    Làm bài
                  </Link>
                </TableCell>
              </TableRow>
              <TableRow key='2'>
                <TableCell>Tony Reichert</TableCell>
                <TableCell>CEO</TableCell>
                <TableCell>Active</TableCell>
                <TableCell>CEO</TableCell>
                <TableCell>CEO</TableCell>
                <TableCell>
                  <Link href='/exam' className='underline'>
                    Làm bài
                  </Link>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardBody>
      </Card>
    </div>
  )
}

export default Exem
