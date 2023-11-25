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
const data = ['Tất cả', 'Đang giải quyết', 'Đã hoàn thành', 'Quá hạn']
function HistoryPayment() {
  return (
    <div className='p-10'>
      <Card shadow='sm' radius='sm'>
        <CardHeader>
          <h1 className='text-xl font-bold'>Lịch sử làm bài</h1>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className='flex flex-col'>
            <form className=''>
              <div className='relative mb-10 w-full flex  items-center justify-between rounded-md'>
                <svg
                  className='absolute left-2 block h-5 w-5 text-gray-400'
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <circle cx='11' cy='11' r='8' className=''></circle>
                  <line x1='21' y1='21' x2='16.65' y2='16.65' className=''></line>
                </svg>
                <input
                  type='name'
                  name='search'
                  className='h-12 w-full cursor-text rounded-md border border-gray-100 bg-gray-100 py-4 pr-40 pl-12 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50'
                  placeholder='Tìm kiếm theo mã đơn hàng hoặc theo tên'
                />
              </div>

              <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                <div className='flex flex-col'>
                  <label htmlFor='date' className='text-sm font-medium text-stone-600'>
                    Từ ngày
                  </label>
                  <input
                    type='date'
                    id='date'
                    className='mt-2 block w-full cursor-pointer rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50'
                  />
                </div>
                <div className='flex flex-col'>
                  <label htmlFor='date' className='text-sm font-medium text-stone-600'>
                    Đến ngày
                  </label>
                  <input
                    type='date'
                    id='date'
                    className='mt-2 block w-full cursor-pointer rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50'
                  />
                </div>

                <div className='flex flex-col'>
                  <label htmlFor='status' className='text-sm font-medium text-stone-600'>
                    Trạng thái
                  </label>

                  <select
                    id='status'
                    className='h-11 mt-2 block w-full cursor-pointer rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50'
                  >
                    {data.map((item, index) => (
                      <option value={item} key={index}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </form>
          </div>

          <Table aria-label='Example static collection table' className='pt-5'>
            <TableHeader>
              <TableColumn className='text-base	'>Mã hóa đơn</TableColumn>
              <TableColumn className='text-base	'>Tên đơn hàng</TableColumn>
              <TableColumn className='text-base	'>Ngày phát hành</TableColumn>
              <TableColumn className='text-base	'>Ngày thanh toán</TableColumn>
              <TableColumn className='text-base	'>Tổng tiền</TableColumn>
              <TableColumn className='text-base	'>Phương thức thanh toán</TableColumn>
              <TableColumn className='text-base	'>Trạng thái</TableColumn>
            </TableHeader>
            <TableBody emptyContent={'No rows to display.'}>
              <TableRow key='1'>
                <TableCell>DEV5437</TableCell>
                <TableCell>Thi combo Speaking + Listening + Reading</TableCell>
                <TableCell>30 Sep 2023</TableCell>
                <TableCell>07 Oct 2023</TableCell>
                <TableCell>2,400,000 VNĐ</TableCell>
                <TableCell> Credit Card</TableCell>
                <TableCell>
                  <span className='text-green-600 bg-green-100 p-1 rounded-md'>Đã thanh toán</span>
                </TableCell>
              </TableRow>
              <TableRow key='2'>
                <TableCell>DEV5437</TableCell>
                <TableCell>Thi combo Speaking + Listening + Reading</TableCell>
                <TableCell>30 Sep 2023</TableCell>
                <TableCell>07 Oct 2023</TableCell>
                <TableCell>2,400,000 VNĐ</TableCell>
                <TableCell> Credit Card</TableCell>
                <TableCell>
                  <span className='text-yellow-600 bg-yellow-200 p-1 rounded-md'>Đang giải quyết</span>
                </TableCell>
              </TableRow>
              <TableRow key='3'>
                <TableCell>DEV5437</TableCell>
                <TableCell>Thi combo Speaking + Listening + Reading</TableCell>
                <TableCell>30 Sep 2023</TableCell>
                <TableCell>07 Oct 2023</TableCell>
                <TableCell>2,400,000 VNĐ</TableCell>
                <TableCell> Credit Card</TableCell>
                <TableCell>
                  <span className='text-red-600 bg-red-100 p-1 rounded-md'>Quá hạn</span>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardBody>
      </Card>
    </div>
  )
}

export default HistoryPayment
