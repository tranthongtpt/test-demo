'use client'
import React, { useState } from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from '@nextui-org/react'
import { BsPlusSquareDotted } from 'react-icons/bs'

import Split from 'react-split'

interface PropsData {
  title: string
  type: string
}

const ModalCreateExams = ({ title, type }: PropsData) => {
  const [inputValues, setInputValues] = useState({})
  // const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        color='danger'
        size='md'
        endContent={<BsPlusSquareDotted className='w-5 h-5' />}
      >
        {title}
      </Button>
      <Modal
        isOpen={open}
        onOpenChange={() => setOpen(!open)}
        placement='top-center'
        isDismissable={false}
        size='5xl'
        className='!max-h-[80vh] overflow-y-auto z-[203]'
        scrollBehavior='inside'
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className='flex flex-col gap-1'>{title}</ModalHeader>
              <ModalBody>
                <Split
                  sizes={[50, 50]}
                  minSize={300}
                  expandToMin={false}
                  direction='horizontal'
                  className='flex min-h-[50vh]'
                >
                  <div>
                    <p className='mb-4 text-xl font-semibold text-center'>Đề thi</p>
                  </div>
                  <div>
                    <p className='mb-4 text-xl font-semibold text-center'>Câu hỏi</p>
                  </div>
                </Split>
              </ModalBody>
              <ModalFooter>
                <Button color='danger' variant='flat' onClick={() => setOpen(false)}>
                  Close
                </Button>
                <Button color='danger'>Create</Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalCreateExams
