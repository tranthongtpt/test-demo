'use client'
import {
  Button,
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
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineDelete } from 'react-icons/ai'
import { BsBookmark } from 'react-icons/bs'
const dataskill = ['Listening', 'Speaking', 'Writing', 'Reading']
const datastatus = ['Hoàn thành', 'Chưa hoàn thành']
function History() {
  return (
    <div className='p-10'>
      <Card shadow='sm' radius='sm'>
        <CardHeader>
          <h1 className='text-xl font-bold'>Lịch sử làm bài</h1>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className='flex items-center justify-start gap-5'>
            <Select className='max-w-[150px]' labelPlacement={'outside-left'} placeholder='Select skill'>
              {dataskill.map((item, index) => (
                <SelectItem key={index} value={item}>
                  {item}
                </SelectItem>
              ))}
            </Select>
            <Select className='max-w-[200px]' labelPlacement={'outside-left'} placeholder='Select status'>
              {datastatus.map((item, index) => (
                <SelectItem key={index} value={item}>
                  {item}
                </SelectItem>
              ))}
            </Select>
            <Button color='danger' variant="ghost">Bộ lọc</Button>
          </div>
          <Table aria-label='Example static collection table' className='pt-5'>
            <TableHeader>
              <TableColumn className='text-base	'>Ngày tháng</TableColumn>
              <TableColumn className='text-base	'>Đề thi</TableColumn>
              <TableColumn className='text-base	'>Phân loại</TableColumn>
              <TableColumn className='text-base	'>Điểm</TableColumn>
              <TableColumn className='text-base	'>Thời gian hoàn thành</TableColumn>
              <TableColumn className='text-base	'>Trạng thái</TableColumn>
            </TableHeader>
            <TableBody emptyContent={'No rows to display.'}>
              <TableRow key='1'>
                <TableCell>08/09/2023</TableCell>
                <TableCell>IELTS Mock Test 2023 January_Listening Practice Test 1 </TableCell>
                <TableCell>Academic</TableCell>
                <TableCell>0</TableCell>
                <TableCell>00:03</TableCell>
                <TableCell className='flex gap-2'>
                  {' '}
                  <Button color='danger' variant='ghost' startContent={<BsBookmark />}>
                    Xem lại
                  </Button>{' '}
                  <Button isIconOnly color='danger' variant='ghost' aria-label='Like'>
                    <AiOutlineDelete
                      size='
                    small'
                    />
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow key='2'>
                <TableCell>08/09/2023</TableCell>
                <TableCell>IELTS Mock Test 2023 January_Listening Practice Test 1 </TableCell>
                <TableCell>Academic</TableCell>
                <TableCell>0</TableCell>
                <TableCell>00:03</TableCell>
                <TableCell className='flex gap-2'>
                  {' '}
                  <Button color='danger' variant='ghost' startContent={<BsBookmark />}>
                    Xem lại
                  </Button>{' '}
                  <Button isIconOnly color='danger' variant='ghost' aria-label='Like'>
                    <AiOutlineDelete
                      size='
                    small'
                    />
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardBody>
      </Card>
    </div>
  )
}

export default History
