import React, { useEffect, useState } from 'react'

interface InputValues {
  content: string
}

interface TextEditorProps {
  setInputValues: React.Dispatch<React.SetStateAction<InputValues>>
  // passage: number
  name: string
  value: string
}

const TextEditor: React.FC<TextEditorProps> = ({ setInputValues, name, value }) => {
  const handleEditorChange = () => {
    const editor = CKEDITOR.instances[name]
    const content = editor.getData()
    // setInputValues((prevData): any => [...prevData, newData])
    setInputValues(content)
    console.log(content)
  }

  useEffect(() => {
    const script = document.createElement('script')
    script.src = '/ckeditor4/ckeditor.js'
    script.async = true
    script.onload = () => {
      CKEDITOR.replace(name, {
        height: 400,
        on: {
          change: handleEditorChange
        }
      })
      CKEDITOR.instances[name].setData(value || '')
    }

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    // <>
    //   {!CKEDITOR.instances[name] ? (
    //     <Skeleton className='rounded-lg'>
    //       <div className='min-h-[524px] rounded-lg bg-default-300'></div>
    //     </Skeleton>
    //   ) : (
    //     <div className='TextEditor'>
    //       <textarea id={name} name={name}></textarea>
    //     </div>
    //   )}
    // </>
    <div className='TextEditor min-h-[524px]'>
      <textarea id={name} name={name}></textarea>
    </div>
  )
}

export default TextEditor
