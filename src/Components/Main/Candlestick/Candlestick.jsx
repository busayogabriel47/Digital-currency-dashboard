import React from 'react'
import candlestick from '../../../assets/images/candlestick.png'
import Orderbook from '../Orderbook/Orderbook'

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import TimeInterval from '../TimeInterval/index';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Candlestick Data',
      data: [
        { x: 'Jan', y: [3000, 4000, 2000, 3500] },
        { x: 'Feb', y: [3500, 4200, 3200, 4100] },
        { x: 'Mar', y: [4100, 4600, 3900, 4400] },
        { x: 'Apr', y: [4400, 5000, 4300, 4800] },
        { x: 'May', y: [4800, 5200, 4500, 5100] },
        { x: 'Jun', y: [5100, 5500, 4700, 5300] },
      ],
      backgroundColor: (context) => {
        const index = context.dataIndex;
        const open = context.raw.y[0];
        const close = context.raw.y[3];
        return open > close ? 'rgba(255, 99, 132, 0.5)' : 'rgba(75, 192, 192, 0.5)';
      },
      borderColor: (context) => {
        const index = context.dataIndex;
        const open = context.raw.y[0];
        const close = context.raw.y[3];
        return open > close ? 'rgb(255, 99, 132)' : 'rgb(75, 192, 192)';
      },
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Crypto Financial Candlestick Chart',
    },
  },
  scales: {
    x: {
      type: 'category',
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    },
    y: {
      beginAtZero: true,
    },
  },
};


const Candlestick = () => {
  return (
    <>
            
        <div className='main__candlestick'>
                
            <div className='main__candlestick--first'>
                <TimeInterval/>
                <Bar data={data} options={options}/>
                </div>
                <Orderbook/>
         </div>
    </>
  )
}

export default Candlestick