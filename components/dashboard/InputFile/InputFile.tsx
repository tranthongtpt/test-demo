'use client'
import React, { useState, ChangeEvent } from 'react'
import { MdAttachment } from 'react-icons/md'
import { RiDeleteBin6Line } from 'react-icons/ri'

interface InputFileProps {
  setInputValues: (values: { files: File[] }) => void
  setFileBefore: (files: File[]) => void
  fileAfter: File[]
  multi?: boolean
}

function InputFile({ setInputValues, setFileBefore, fileAfter, multi }: InputFileProps) {
  console.log('file>>', fileAfter)
  const [maxSize, setMaxSize] = useState<boolean>(false)
  const maxSizePerFile: number = 30 * 1024 * 1024 // 30MB in bytes

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles: FileList | null = e.target.files
    if (selectedFiles) {
      let validFiles: File[] = []
      let invalidFiles: File[] = []

      // Separate valid and invalid files based on size
      for (let i = 0; i < selectedFiles.length; i++) {
        if (selectedFiles[i].size <= maxSizePerFile) {
          validFiles.push(selectedFiles[i])
        } else {
          invalidFiles.push(selectedFiles[i])
        }
      }

      if (invalidFiles.length > 0) {
        setMaxSize(true)
        console.log('Some files exceed the 30MB limit.')
        // You can show an error message to the user here
      } else {
        setMaxSize(false)
        // setInputValues((prev) => ({ ...prev, files: validFiles }))
        // setFileBefore((prev) => [...prev.concat(validFiles)])
        setInputValues({ files: validFiles }) // Update the state with the selected files
        setFileBefore((prev: File[]) => [...prev, ...validFiles])
      }
    }
  }

  const handleFileRemove = (fileName: string) => {
    setFileBefore((prev: File[]) => prev.filter((file) => file.name !== fileName))
  }

  return (
    <>
      <p className='flex text-sm'>
        <MdAttachment className='mr-2 text-xl' />
        File nghe (mp3, mp4)
      </p>
      <div className='flex items-center justify-between mt-0'>
        <input
          accept='.mp3, .mp4'
          type='file'
          multiple={multi}
          id='uploadInput'
          className='hidden'
          name='files'
          onChange={handleFileChange}
        />
        <div className='flex items-center'>
          <label
            htmlFor='uploadInput'
            className='block px-4 py-2 mr-4 text-sm font-semibold border-0 rounded-full w-fit bg-violet-50 text-violet-700 hover:bg-violet-100'
          >
            Choose Files
          </label>
          <>
            {fileAfter.length > 0 && fileAfter.length < 5 && (
              <div className='text-sm text-center'>
                <label htmlFor='fileNum'>Số file đã chọn</label>
                <output id='fileNum' className='ml-2 font-bold'>
                  {fileAfter.length}
                </output>
              </div>
            )}
            {fileAfter.length > 4 && (
              <p className='px-2 py-1 text-xs font-semibold text-center text-red-500 bg-red-100 rounded-lg'>
                Tối đa 4 file đính kèm
              </p>
            )}
          </>
          {fileAfter.length > 0 && (
            <a href='#/' className='ml-2 text-xs' onClick={() => setFileBefore([])}>
              <RiDeleteBin6Line className='text-lg text-red-600' />
            </a>
          )}
          {maxSize && (
            <p
              className='px-2 py-1 text-xs font-semibold text-center text-red-500 bg-red-100 rounded-lg'
              onClick={() => setMaxSize(false)}
              onMouseLeave={() => setMaxSize(false)}
            >
              File tải lên không được quá 30MB
            </p>
          )}
        </div>
      </div>
      <div className='py-1 ml-5'>
        {fileAfter?.map((item) => (
          <div className='flex items-center' key={item.name}>
            <p className='mr-2 text-xs'>{item.name}</p>
            <a href='#/' className='text-xs' onClick={() => handleFileRemove(item.name)}>
              ❌
            </a>
          </div>
        ))}
      </div>
    </>
  )
}

export default InputFile
