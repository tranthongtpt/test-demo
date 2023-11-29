import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import React from 'react'

const ModalResult = ({ isOpen, onOpen, onOpenChange }: any) => {
  // const router = useRouter()
  // const handleClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  //   e.preventDefault()
  //   onOpen()
  //   router.push('/student')
  // }

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} size='5xl'>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className='flex flex-col gap-1'>
              <p className='text-3xl font-semibold text-center text-gray-500'>Xem lại đáp án của bạn</p>
              <p className='text-sm font-light text-center text-gray-600 '>
                * Cửa sổ này chỉ dùng để xem lại câu trả lời của bạn, bạn không thể thay đổi câu trả lời tại đây
              </p>
            </ModalHeader>
            <ModalBody>
              <table className='border-collapse w-full'>
                <tbody>
                  <tr className='bg-white  flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0'>
                    <td className='w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static'>
                      Q1:
                    </td>
                    <td className='w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static'>
                      Q2:
                    </td>
                    <td className='w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static'>
                      Q3:
                    </td>
                    <td className='w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static'>
                      Q4:
                    </td>
                  </tr>
                  <tr className='bg-white  flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0'>
                    <td className='w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static'>
                      Q1:
                    </td>
                    <td className='w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static'>
                      Q2:
                    </td>
                    <td className='w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static'>
                      Q3:
                    </td>
                    <td className='w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static'>
                      Q4:
                    </td>
                  </tr>
                  <tr className='bg-white  flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0'>
                    <td className='w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static'>
                      Q5:
                    </td>
                    <td className='w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static'>
                      Q6:
                    </td>
                    <td className='w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static'>
                      Q7:
                    </td>
                    <td className='w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static'>
                      Q8:
                    </td>
                  </tr>
                  <tr className='bg-white  flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0'>
                    <td className='w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static'>
                      Q9:
                    </td>
                    <td className='w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static'>
                      Q10:
                    </td>
                    <td className='w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static'>
                      Q11:
                    </td>
                    <td className='w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static'>
                      Q12:
                    </td>
                  </tr>
                  <tr className='bg-white  flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0'>
                    <td className='w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static'>
                      Q13:
                    </td>
                    <td className='w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static'>
                      Q14:
                    </td>
                    <td className='w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static'>
                      Q15:
                    </td>
                    <td className='w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static'>
                      Q16:
                    </td>
                  </tr>
                  <tr className='bg-white  flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0'>
                    <td className='w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static'>
                      Q17:
                    </td>
                    <td className='w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static'>
                      Q18:
                    </td>
                    <td className='w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static'>
                      Q19:
                    </td>
                    <td className='w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static'>
                      Q20:
                    </td>
                  </tr>
                  <tr className='bg-white  flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0'>
                    <td className='w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static'>
                      Q21:
                    </td>
                    <td className='w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static'>
                      Q22:
                    </td>
                    <td className='w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static'>
                      Q23:
                    </td>
                    <td className='w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static'>
                      Q24:
                    </td>
                  </tr>
                  <tr className='bg-white  flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0'>
                    <td className='w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static'>
                      Q25:
                    </td>
                    <td className='w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static'>
                      Q26:
                    </td>
                    <td className='w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static'>
                      Q27:
                    </td>
                    <td className='w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static'>
                      Q28:
                    </td>
                  </tr>
                  <tr className='bg-white  flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0'>
                    <td className='w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static'>
                      Q29:
                    </td>
                    <td className='w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static'>
                      Q30:
                    </td>
                    <td className='w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static'>
                      Q31:
                    </td>
                    <td className='w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static'>
                      Q32:
                    </td>
                  </tr>
                  <tr className='bg-white  flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0'>
                    <td className='w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static'>
                      Q33:
                    </td>
                    <td className='w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static'>
                      Q34:
                    </td>
                    <td className='w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static'>
                      Q35:
                    </td>
                    <td className='w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static'>
                      Q36:
                    </td>
                  </tr>
                  <tr className='bg-white  flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0'>
                    <td className='w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static'>
                      Q37:
                    </td>
                    <td className='w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static'>
                      Q38:
                    </td>
                    <td className='w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static'>
                      Q39:
                    </td>
                    <td className='w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static'>
                      Q40:
                    </td>
                  </tr>
                </tbody>
              </table>
            </ModalBody>
            <ModalFooter className='justify-center'>
              <button
                onClick={(e) => {
                  onClose()
                  // handleClose(e)
                }}
                className='inline-block px-12 py-3 text-sm font-medium bg-red-500 text-white border border-red-600 rounded hover:bg-red-700 hover:text-white'
              >
                Đóng
              </button>
              {/* <Button
                color='danger'
                variant='solid'
                onClick={(e) => {
                  onClose()
                  // handleClose(e)
                }}
              >
                Đóng
              </Button> */}
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}

export default ModalResult
