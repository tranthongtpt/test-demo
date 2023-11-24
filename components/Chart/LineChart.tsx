import React from 'react'
import ReactEcharts from 'echarts-for-react'
import * as echarts from 'echarts'

const LineChart = () => {
  const option = {
    tooltip: {
      trigger: 'item',
      formatter: 'Tổng thể:&nbsp; 1<br/> Câu trả lời đúng:&nbsp;2<br/>Câu trả lời sai:&nbsp;3<br/>Chưa trả lời:&nbsp;4'
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value',
      min: 0,
      max: 9
    },
    series: [
      {
        data: [1,2,3,4,5,6,7,8,9],
        type: 'line',
        smooth: true
      }
    ]
  }
  return (
    <>
      <ReactEcharts style={{ height: '450px' }} option={option} />
    </>
  )
}

export default LineChart
