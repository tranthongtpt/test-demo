'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { listReading } from '@/data/dummy'
import {
  Button,
  Chip,
  ChipProps,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
  Pagination,
  Select,
  SelectItem,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
  getKeyValue
} from '@nextui-org/react'
import { BsSearch, BsThreeDotsVertical } from 'react-icons/bs'
import { FiDelete, FiEdit, FiGlobe, FiLock, FiTrash, FiTrash2 } from 'react-icons/fi'
import { format } from 'date-fns'
import { vi } from 'date-fns/locale'
import DateRangePickerComponent from '../DateRangePicker'

type ListReading = (typeof listReading)[0]
interface TableProps {
  type: string
}

const statusColorMap: Record<string, ChipProps['color']> = {
  active: 'success',
  locked: 'warning'
}

const dataStatus = ['Hoạt động', 'Khoá']

const columns = [
  { name: 'Tên bài thi', uid: 'name' },
  { name: 'Ngày tạo', uid: 'createAt' },
  { name: 'Trạng thái', uid: 'status' },
  { name: '', uid: 'actions' }
]

const TableExams: React.FC<TableProps> = ({ type }) => {
  const [page, setPage] = React.useState(1)
  const [date, setDate] = React.useState({ fromDate: 0, toDate: 5550000000000 })
  const [filterValue, setFilterValue] = React.useState('')
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  const pathname = usePathname()

  const pages = Math.ceil(listReading.length / rowsPerPage)

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

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage
    const end = start + rowsPerPage
    let filteredName = listReading
    if (hasSearchFilter) {
      filteredName = filteredName.filter((item) => item.name.toLowerCase().includes(filterValue.toLowerCase()))
      return filteredName
    } else {
      return listReading.slice(start, end)
    }
  }, [page, listReading, rowsPerPage, filterValue])

  const topContent = React.useMemo(() => {
    return (
      <>
        <div className='flex items-center justify-between'>
          <Input
            isClearable
            classNames={{
              base: 'w-full sm:max-w-[44%]',
              inputWrapper: 'border-1'
            }}
            placeholder='Tìm kiếm theo tên đề thi'
            size='md'
            startContent={<BsSearch className='text-default-300' />}
            value={filterValue}
            variant='bordered'
            onClear={() => setFilterValue('')}
            onValueChange={onSearchChange}
          />
          <div className='flex items-center justify-end w-full'>
            <DateRangePickerComponent setDate={setDate} />
            <Select className='max-w-[200px] ml-4' labelPlacement={'outside-left'} placeholder='Trạng thái' size='md'>
              {dataStatus.map((item, index) => (
                <SelectItem key={index} value={item}>
                  {item}
                </SelectItem>
              ))}
            </Select>
          </div>
        </div>
        <div className='flex items-center justify-between'>
          <span className='text-default-400 text-small'>Có {listReading.length} bài thi</span>
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
  }, [filterValue, onSearchChange, onRowsPerPageChange, listReading.length, hasSearchFilter])

  const renderCell = React.useCallback((listReading: ListReading, columnKey: React.Key) => {
    const cellValue = listReading[columnKey as keyof ListReading]

    switch (columnKey) {
      case 'name':
        return (
          <div>
            <Link href={`${pathname}/${type}?${encodeURIComponent(listReading.key)}`}>{cellValue}</Link>
          </div>
        )
      case 'createAt':
        return (
          <div className='flex flex-col'>
            <p className='text-sm capitalize text-bold'>
              {format(parseInt(cellValue), 'dd/MM/yyyy hh:mm aa', { locale: vi })}
            </p>
          </div>
        )
      case 'status':
        return (
          <Chip
            color={statusColorMap[cellValue]}
            size='sm'
            variant='flat'
            className='min-w-[90px] text-center capitalize'
          >
            {cellValue === 'active' ? 'Hoạt động' : 'Locked 🔒'}
          </Chip>
        )
      case 'actions':
        return (
          <div className='relative flex items-center justify-end gap-2'>
            <Dropdown>
              <DropdownTrigger>
                <Button isIconOnly size='sm' variant='light'>
                  <BsThreeDotsVertical className='w-4 h-4 text-default-300' />
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem endContent={<FiEdit className='w-4 h-4' />}>Chỉnh sửa</DropdownItem>
                {listReading.status === 'active' ? (
                  <DropdownItem color='warning' endContent={<FiLock className='w-4 h-4' />}>
                    Khoá bài thi
                  </DropdownItem>
                ) : (
                  <DropdownItem color='success' endContent={<FiGlobe className='w-4 h-4' />}>
                    Công khai
                  </DropdownItem>
                )}
                <DropdownItem color='danger' endContent={<FiTrash2 className='w-4 h-4' />}>
                  Xoá bài thi
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        )
      default:
        return cellValue
    }
  }, [])

  return (
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
              total={pages}
              onChange={(page) => setPage(page)}
            />
          </div>
        }
        classNames={{
          wrapper: 'min-h-[222px]'
        }}
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.uid} align={'start'}>
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={items}>
          {(item) => (
            <TableRow key={item.key}>{(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}</TableRow>
          )}
        </TableBody>
      </Table>
    </>
  )
}

export default TableExams
