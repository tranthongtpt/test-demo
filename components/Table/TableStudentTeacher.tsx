import {
  Chip,
  Input,
  Pagination,
  Select,
  SelectItem,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow
} from '@nextui-org/react'
import React from 'react'
import { BsSearch } from 'react-icons/bs'
import DateRangePickerComponent from '../DateRangePicker'

const TableStudentTeacher = () => {
  const [page, setPage] = React.useState(1)
  const [date, setDate] = React.useState({ fromDate: 0, toDate: 5550000000000 })
  const [filterValue, setFilterValue] = React.useState('')
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  const data = ['Tất cả', 'Đang giải quyết', 'Đã hoàn thành', 'Quá hạn']
  // const pages = Math.ceil(listReading.length / rowsPerPage)

  const onRowsPerPageChange = React.useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(Number(e.target.value))
    setPage(1)
  }, [])

  const onSearchChange = React.useCallback((value: any) => {
    if (value) {
      setFilterValue(value)
      setPage(1)
    } else {
      setFilterValue('')
    }
  }, [])

  const hasSearchFilter = Boolean(filterValue)

  // const items = React.useMemo(() => {
  //   const start = (page - 1) * rowsPerPage
  //   const end = start + rowsPerPage
  //   let filteredName = listReading
  //   if (hasSearchFilter) {
  //     filteredName = filteredName.filter((item) => item.name.toLowerCase().includes(filterValue.toLowerCase()))
  //     return filteredName
  //   } else {
  //     return listReading.slice(start, end)
  //   }
  // }, [page, listReading, rowsPerPage, filterValue])

  const topContent = React.useMemo(() => {
    return (
      <>
        <div className='flex items-center justify-between'>
          <Input
            isClearable
            classNames={{
              base: ' max-w-[50%]',
              inputWrapper: 'border-1'
            }}
            placeholder='Tìm kiếm theo tên'
            size='md'
            startContent={<BsSearch className='text-default-300' />}
            // value={filterValue}
            variant='bordered'
            // onClear={() => setFilterValue('')}
            // onValueChange={onSearchChange}
          />
          <div className='flex items-center justify-end w-full'>
            <DateRangePickerComponent setDate={setDate} />
            <Select className='max-w-[200px] ml-4' labelPlacement={'outside-left'} placeholder='Trạng thái' size='md'>
              {data.map((item, index) => (
                <SelectItem key={index} value={item}>
                  {item}
                </SelectItem>
              ))}
            </Select>
          </div>
        </div>
        <div className='flex items-center justify-between'>
          <span className='text-default-400 text-small'>Có 3 hoá đơn</span>
          <label className='flex items-center text-default-400 text-small'>
            Số lượng hiển thị:
            <select className='bg-transparent outline-none text-default-400 text-small' onChange={onRowsPerPageChange}>
              <option value='10'>10</option>
              <option value='15'>15</option>
              <option value='20'>20</option>
            </select>
          </label>
        </div>
      </>
    )
  }, [filterValue, onSearchChange, onRowsPerPageChange, hasSearchFilter])
  return (
    <div>
      <>
        <Table
          aria-label='Example table with client side pagination'
          topContent={topContent}
          bottomContent={
            <div className='flex justify-center w-full'>
              <Pagination
                isCompact
                showControls
                showShadow
                color='secondary'
                page={page}
                total={1}
                // total={pages}
                onChange={(page) => setPage(page)}
              />
            </div>
          }
          classNames={{
            wrapper: 'min-h-[222px] !rounded-none !py-5'
          }}
        >
          <TableHeader>
            <TableColumn className='text-base '>Mã hóa đơn</TableColumn>
            <TableColumn className='text-base '>Học viên</TableColumn>
            <TableColumn className='text-base '>Tên đơn hàng</TableColumn>
            <TableColumn className='text-base '>Ngày phát hành</TableColumn>
            <TableColumn className='text-base '>Ngày thanh toán</TableColumn>
            <TableColumn className='text-base '>Tổng tiền</TableColumn>
            <TableColumn className='text-base '>Phương thức thanh toán</TableColumn>
            <TableColumn className='text-base '>Trạng thái</TableColumn>
          </TableHeader>
          <TableBody emptyContent={'No rows to display.'}>
            <TableRow key='1'>
              <TableCell>DEV5437</TableCell>
              <TableCell>Nguyễn Mai</TableCell>
              <TableCell>Thi combo Speaking + Listening + Reading</TableCell>
              <TableCell>30 Sep 2023</TableCell>
              <TableCell>07 Oct 2023</TableCell>
              <TableCell>2,400,000 VNĐ</TableCell>
              <TableCell> Credit Card</TableCell>
              <TableCell>
                <Chip color='success' size='sm' variant='flat' className='min-w-[116px] text-center capitalize'>
                  Đã thanh toán
                </Chip>
              </TableCell>
            </TableRow>
            <TableRow key='2'>
              <TableCell>DEV5437</TableCell>
              <TableCell>Nguyễn Long</TableCell>
              <TableCell>Thi combo Speaking + Listening + Reading</TableCell>
              <TableCell>30 Sep 2023</TableCell>
              <TableCell>07 Oct 2023</TableCell>
              <TableCell>2,400,000 VNĐ</TableCell>
              <TableCell> Credit Card</TableCell>
              <TableCell>
                <Chip color='warning' size='sm' variant='flat' className='min-w-[116px] text-center capitalize'>
                  Đang giải quyết
                </Chip>
              </TableCell>
            </TableRow>
            <TableRow key='3'>
              <TableCell>DEV5437</TableCell>
              <TableCell>Nguyễn Long</TableCell>
              <TableCell>Thi combo Speaking + Listening + Reading</TableCell>
              <TableCell>30 Sep 2023</TableCell>
              <TableCell>07 Oct 2023</TableCell>
              <TableCell>2,400,000 VNĐ</TableCell>
              <TableCell> Credit Card</TableCell>
              <TableCell>
                <Chip color='danger' size='sm' variant='flat' className='min-w-[116px] text-center capitalize'>
                  Quá hạn
                </Chip>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </>
    </div>
  )
}

export default TableStudentTeacher
