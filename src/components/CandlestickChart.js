// src/components/CandlestickChart.js
import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import axios from 'axios';
import { processChartData } from '../utils/processChartData';
import { candlestickOptions } from '../constants';

const buttonOptions = [
    {key:"1D",value:"TIME_SERIES_DAILY"},
    {key:"1w",value:"TIME_SERIES_WEEKLY"},
    {key:"1M",value:"TIME_SERIES_MONTHLY"}
]

const CandlestickChart = ({ symbol }) => {
  const [chartData, setChartData] = useState();
  const [timeRange, setTimeRange] = useState('TIME_SERIES_DAILY');
  console.log(chartData,"chartData");

  useEffect(() => {
    const fetchChartData = async () => {
      const response = await axios.get(`https://www.alphavantage.co/query?function=${timeRange}&symbol=${symbol}&apikey=${process.env.REACT_APP_API_KEY}`);
      setChartData(response.data);
      console.log(response.data)
    };
    
    fetchChartData();
}, [symbol, timeRange]);

const seriesData = processChartData(chartData);
console.log(seriesData);

  return (
    <section className="p-4 bg-gray-800 text-white shadow rounded-lg">
      <h2 className="text-lg font-bold">{symbol} Chart</h2>
      <div className="flex space-x-2 mb-4">
        {buttonOptions.map(range => (
          <button
            key={range.key}
            onClick={() => setTimeRange(range.value)}
            className={`px-3 py-1 rounded ${timeRange === range.value ? 'bg-gray-700' : 'bg-gray-600'}`}
          >
            {range.key}
          </button>
        ))}
      </div>

      <ReactApexChart
        series={[
            {
                data:seriesData
            }
        ]}
        options={candlestickOptions}
        type="candlestick"
        height={350}
      />
    </section>
  );
};

export default CandlestickChart;
