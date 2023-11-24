import React from 'react'
import ReactEcharts from 'echarts-for-react'
import * as echarts from 'echarts'

const Piechart = () => {
  const option = {
    tooltip: {
      trigger: 'item'
    },
    // legend: {
    //   top: '5%',
    //   left: 'center',
    //   // doesn't perfectly work with our tricks, disable it
    //   selectedMode: false
    // },
    legend: {
      show: true,
      itemGap: 5,
      icon: 'circle',
      left: 'right',
      top: 0,
      orient: 'vertical',
      textStyle: {
        fontSize: 14,
        fontFamily: 'roboto'
      }
    },
    series: [
      {
        name: 'Số lượng bài test',
        type: 'pie',
        radius: ['0%', '60%'],
        color: ['#FDF4F5', '#E8A0BF', '#BA90C6', '#C0DBEA'],
        data: [
          { value: 1048, name: 'Listening' },
          { value: 735, name: 'Writing' },
          { value: 580, name: 'Reading' },
          { value: 484, name: 'Full Test' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }
  return (
    <>
      <ReactEcharts style={{ height: '450px' }} option={option} />
    </>
  )
}

export default Piechart
