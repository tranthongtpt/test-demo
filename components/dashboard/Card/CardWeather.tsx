import axios from 'axios'
import { useEffect, useState } from 'react'

function CardWeather() {
  const [dataweather, setDataWeather] = useState<any>()

  useEffect(() => {
    ;(async () => {
      try {
        const response = await axios.get(
          'https://api.openweathermap.org/data/2.5/weather?appid=57772fdcae171780103d7dcdb0f2a865&units=metric&lang=vi&lat=21.027&lon=105.8'
        )
        setDataWeather(response?.data)
      } catch (err) {
        console.error(err)
      }
    })()
  }, [])

  const iconurl =
    'https://openweathermap.org/img/wn/' + `${dataweather?.cod !== 404 ? dataweather?.weather[0].icon : null}` + '.png'

  return (
    <div className='h-full font-semibold rounded-md shadow-medium bg-content1 '>
      <div className='flex items-center justify-center w-full'>
        <div className='items-center justify-center p-4 truncate lg:block xl:flex'>
          <div className='text-center'>
            <p className='mb-2 text-xl'>{dataweather?.name}</p>
            <p className='text-[#666] font-medium text-sm whitespace-pre-wrap'>
              Hôm nay, Trời có {dataweather?.weather[0].description}
            </p>
          </div>
          <div className='flex items-center justify-center'>
            <img className='w-20 weather-icon' src={iconurl} alt='' />
            <p>
              {Math.floor(dataweather?.main.temp)}
              <sup>o</sup>
            </p>
          </div>
        </div>
      </div>
      {/* <p className='p-3 text-sm text-center'>Chúc bạn có một ngày làm việc thật hiệu quả 💪</p> */}
    </div>
  )
}

export default CardWeather
