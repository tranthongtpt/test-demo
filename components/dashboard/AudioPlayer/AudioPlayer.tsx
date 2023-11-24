import styled from '@emotion/styled'
import { Button, Popover, PopoverContent, PopoverTrigger, Progress, Tooltip } from '@nextui-org/react'
import Image from 'next/image'
import React, { useState, useRef, useEffect } from 'react'
import { BsSpeaker } from 'react-icons/bs'
import { FaPlay, FaPause } from 'react-icons/fa'

interface AudioPlayerProps {
  data: [
    {
      audio: string
    }
  ]
}
const Styled = styled.div`
  .custom-range-audio {
    width: 5px !important;
    height: 100%;
    transform: rotate(270deg) !important;
  }
`
const AudioPlayer: React.FC<AudioPlayerProps> = ({ data }: AudioPlayerProps) => {
  // state
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [duration, setDuration] = useState<number>(0)
  const [currentTime, setCurrentTime] = useState<number>(0)
  const [valuePercent, setValuePercent] = useState<number>(0)
  const [volume, setVolume] = useState<number>(1)
  const [audio, setAudio] = useState<string>()
  // references
  const audioPlayer = useRef<HTMLAudioElement>(null)
  const progressBar = useRef<HTMLInputElement>(null)
  const animationRef = useRef<number>()

  useEffect(() => {
    setAudio(data?.[0]?.audio)
  }, [data])

  useEffect(() => {
    togglePlayPause()
  }, [audio])

  useEffect(() => {
    if (audioPlayer.current) {
      const seconds = Math.floor(audioPlayer.current.duration)
      if (!isNaN(seconds)) {
        setDuration(seconds)
      }

      if (!isNaN(audioPlayer.current.currentTime) && !isNaN(audioPlayer.current.duration)) {
        const percent = (audioPlayer.current.currentTime / audioPlayer.current.duration) * 100
        setValuePercent(percent)
      }
      progressBar.current!.max = seconds.toString()
    }
  }, [audioPlayer?.current?.onloadedmetadata, audioPlayer?.current?.readyState])

  // functions
  const togglePlayPause = () => {
    const prevValue = isPlaying
    setIsPlaying(!prevValue)
    if (!prevValue) {
      audioPlayer.current!.play()
      animationRef.current = requestAnimationFrame(whilePlaying)
    } else {
      audioPlayer.current!.pause()
      cancelAnimationFrame(animationRef.current!)
    }
  }

  const whilePlaying = () => {
    if (audioPlayer.current && progressBar.current) {
      progressBar.current.value = audioPlayer.current.currentTime.toString()
      changePlayerCurrentTime()
      animationRef.current = requestAnimationFrame(whilePlaying)
    }
  }

  const changeRange = () => {
    if (audioPlayer.current && progressBar.current) {
      const newValue = parseFloat(progressBar.current.value)
      audioPlayer.current.currentTime = newValue
      changePlayerCurrentTime()
    }
  }

  const changePlayerCurrentTime = () => {
    setCurrentTime(audioPlayer.current!.currentTime)
  }

  const changeVolume = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(event.target.value)
    setVolume(newVolume)
    if (audioPlayer.current) {
      audioPlayer.current.volume = newVolume
    }
  }

  const calculateTime = (secs: any) => {
    const minutes = Math.floor(secs / 60)
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`
    const seconds = Math.floor(secs % 60)
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`
    return `${returnedMinutes}:${returnedSeconds}`
  }

  const backTenSecond = () => {
    if (progressBar.current) {
      progressBar.current.value = (Number(progressBar.current.value) - 10).toString()
      changeRange()
    }
    changeRange()
  }

  const forwardTenSecond = () => {
    if (progressBar.current) {
      progressBar.current.value = (Number(progressBar.current.value) + 10).toString()
      changeRange()
    }
  }
  return (
    <Styled>
      <div className='flex items-center justify-center p-2 backdrop-blur-sm bottom-8'>
        <div className='flex items-center justify-center w-full bg-white border rounded-lg shadow border-white/10 backdrop-blur-md'>
          <audio ref={audioPlayer} src={data?.[0]?.audio} preload='metadata' />
          <div className='flex items-center justify-center gap-2'>
            <button
              className='flex items-center justify-center gap-1 p-2 mx-2 font-mono rounded'
              onClick={backTenSecond}
            >
              <Image
                src='/svg/dashboard/replay10.svg'
                alt='logo'
                height={50}
                width={50}
                className='text-white min-w-fit'
              />
            </button>
            <button
              onClick={togglePlayPause}
              className='flex items-center justify-center w-10 h-10 p-2 text-2xl rounded-full text-rose-100 bg-rose-600 hover:bg-rose-100 hover:text-rose-500'
            >
              {isPlaying ? <FaPause /> : <FaPlay className='relative left-0.5' />}
            </button>
            <button
              className='flex items-center justify-center gap-1 p-2 mx-2 font-mono rounded'
              onClick={forwardTenSecond}
            >
              <Image
                src='/svg/dashboard/forward10.svg'
                alt='logo'
                height={50}
                width={50}
                className='text-white min-w-fit'
              />
            </button>
          </div>

          <div className='flex items-center justify-center w-full px-5'>
            {/* current time */}
            <div className='mr-4 font-mono font-normal'>{calculateTime(currentTime)}</div>

            {/* progress bar */}
            <div className='flex items-center justify-center w-full'>
              <input
                type='range'
                className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer '
                defaultValue='0'
                ref={progressBar}
                onChange={changeRange}
              />
              {/* <Progress value={valuePercent} color='danger' /> */}
            </div>

            <div className='ml-4 font-mono font-normal'>{duration && !isNaN(duration) && calculateTime(duration)}</div>
          </div>
          <Popover placement='top'>
            <PopoverTrigger>
              <button className='flex items-center justify-center gap-1 p-2 mx-2 font-mono rounded'>
                <Image src='/svg/speaker.svg' alt='logo' height={30} width={30} className='text-white min-w-fit' />
              </button>
            </PopoverTrigger>
            <PopoverContent className='!p-2 !rounded-md -rotate-90 !mb-16'>
              <input
                type='range'
                className='h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer custom-range-audio'
                value={volume}
                min='0'
                max='1'
                step='0.01'
                onChange={changeVolume}
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </Styled>
  )
}

export { AudioPlayer }
