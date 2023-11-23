'use client'

import { Avatar, Button, Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react'
import React, { useState } from 'react'

interface DataProps {
  data: string
}

const API_KEY = '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'
const systemMessage = {
  role: 'system',
  content: 'Correct the spelling and grammatical errors in the following text:\n\n'
}

const CheckGrammarGPT = ({ data }: DataProps) => {
  const [messages, setMessages] = useState<any>([])
  const [isTyping, setIsTyping] = useState(false)

  const handleSend = async (message: any) => {
    const newMessage = {
      message,
      direction: 'outgoing',
      sender: 'user',
      sentTime: 'just now'
    }

    const newMessages = [...messages, newMessage]

    setMessages(newMessages)
    setIsTyping(true)
    await processMessageToChatGPT(newMessages)
  }
  const userPrompt = 'Correct the spelling and grammatical errors in the following text:\n\n'
  const userPrompts = 'comment on the above passage:\n\n'

  async function processMessageToChatGPT(chatMessages: Array<any>) {
    let apiMessages = chatMessages.map((messageObject) => {
      let role = ''
      if (messageObject.sender === 'ChatGPT') {
        role = 'assistant'
      } else {
        role = 'user'
      }
      return {
        role: role,
        content: userPrompt + messageObject.message + userPrompts
      }
    })

    const apiRequestBody = {
      model: 'gpt-3.5-turbo-0613',
      messages: [systemMessage, ...apiMessages],
      functions: [
        {
          name: 'makeCorrections',
          description: 'Make spelling or grammar corrections to text content and provide general comments',
          parameters: {
            type: 'object',
            properties: {
              replacements: {
                type: 'array',
                description: 'Array of corrections',
                items: {
                  type: 'object',
                  properties: {
                    changeFrom: {
                      type: 'string',
                      description: 'The word or phrase to change'
                    },
                    changeTo: {
                      type: 'string',
                      description: 'The new word or phrase to replace it with'
                    },
                    reason: {
                      type: 'string',
                      description: 'The reason this change is being made',
                      enum: ['Grammar', 'Spelling']
                    },
                    comment: {
                      type: 'string',
                      description: 'Kiểm tra và nhận xét đoạn văn trên',
                      language: ['vi']
                    }
                  }
                }
              }
            }
          }
        }
      ],
      function_call: { name: 'makeCorrections' }
    }
    const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
    await delay(1000)
    await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + API_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(apiRequestBody)
    })
      .then((data) => {
        return data.json()
      })
      .then((data) => {
        const [responseChoice] = data.choices
        const parsedArguments = JSON.parse(responseChoice.message.function_call.arguments)
        // console.log(responseChoice)
        setMessages([
          ...chatMessages,
          {
            message: parsedArguments,
            sender: 'ChatGPT'
          }
        ])
        setIsTyping(false)
      })
  }
  return (
    <div className='flex flex-col items-center justify-center'>
      {/* {messages.slice(1).map((message: any, i: number) => {
        console.log('message=>', message)
        return <Chat key={i} data={message} />
      })} */}
      {messages
        .filter((_: any, i: number) => i % 2 !== 0)
        .map((message: any, i: number) => {
          console.log('message=>', message)
          return <Chat key={i} data={message} />
        })}
      {isTyping && (
        <div className='flex items-center my-2'>
          <div className='dot-pulse'></div>
          <p className='ml-6 text-sm text-gray-600'>ChatGPT is typing, please wait... </p>
        </div>
      )}
      {!isTyping && (
        <Button onClick={() => handleSend(data)} color='primary'>
          ChatGPT check grammar
        </Button>
      )}
    </div>
  )
}

export default CheckGrammarGPT

const Chat = (data: any) => {
  console.log('DATA', data)
  return (
    <>
      <Card className='w-full my-2'>
        <CardHeader className='justify-between'>
          <div className='flex gap-5'>
            <Avatar isBordered radius='full' size='md' src='https://i.pravatar.cc/300' />
            <div className='flex flex-col items-start justify-center gap-1'>
              <h4 className='font-semibold leading-none text-small text-default-600'>ChatGPT</h4>
              <h5 className='tracking-tight text-small text-default-400'>@gpt-3.5-turbo</h5>
            </div>
          </div>
          <p className='text-small text-default-400'>just now</p>
        </CardHeader>
        <CardBody className='px-3 py-2 text-small text-default-500'>
          {data.data.message.replacements && <p>Tổng số lỗi mắc phải: {data.data.message.replacements?.length}</p>}
          {data.data.message.replacements?.map((item: any, i: number) => (
            <div key={i} className='my-1'>
              <p>Lỗi mắc phải: {item.reason}</p>
              <span className='pt-2'>
                Đổi <span className='py-2 underline underline-offset-2'>{item.changeFrom}</span> thành{' '}
                <span className='py-2 underline underline-offset-2'>{item.changeTo}</span>
              </span>
              <p>#Comment: {item.comment}</p>
            </div>
          ))}
        </CardBody>
      </Card>
    </>
  )
}
