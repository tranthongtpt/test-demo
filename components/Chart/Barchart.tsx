import React from 'react'
import ReactEcharts from 'echarts-for-react'
import * as echarts from 'echarts'

const Barchart = () => {
  const option = {
    // xAxis: {
    //   type: 'category',
    //   data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    // },
    xAxis: {
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
      axisLabel: {
        inside: true,
        color: '#fff'
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      z: 10
    },
    yAxis: {
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        color: '#999'
      }
    },
    tooltip: {
      trigger: 'axis',
      valueFormatter: (value: any) => value + ' user'
    },
    calculable: true,
    series: [
      {
        data: [120, 300, 150, 350, 470, 510, 1000, 600, 400, 480, 1200, 1500, 1300],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(189, 189, 189, 0.2)'
        },
        itemStyle: {
          barBorderRadius: 15,
          barWidth: 20,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#F6BDC0' },
            { offset: 0.5, color: '#f77285' },
            { offset: 1, color: '#f77285' }
          ])
        },
        emphasis: {
          itemStyle: {
            barWidth: 20,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#f77285' },
              { offset: 0.7, color: '#f77285' },
              { offset: 1, color: '#F6BDC0' }
            ])
          }
        },
        dataZoom: [
          {
            type: 'inside'
          }
        ]
      }
    ]
  }
  return (
    <>
      <ReactEcharts style={{ height: '450px' }} option={option} />
    </>
  )
}

export default Barchart
