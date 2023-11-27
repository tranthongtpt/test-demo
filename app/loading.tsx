'use client'
import { Spinner } from '@nextui-org/react'

const Loading = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='load'>
        <hr />
        <hr />
        <hr />
        <hr />
      </div>
      {/* <Spinner /> */}
    </div>
  )
}

export default Loading
