import React from 'react'

const LoadingScreen: () => React.JSX.Element = () => {
  return (
    <div className='block fixed top-0 bottom-0 left-0 w-[100vw] h-[100vh] bg-[#6e6e6e34] z-[1050]'>
      <div className='flex items-center justify-center h-screen'>
        <div className='load'>
          <hr />
          <hr />
          <hr />
          <hr />
        </div>
      </div>
    </div>
  )
}

export default LoadingScreen
