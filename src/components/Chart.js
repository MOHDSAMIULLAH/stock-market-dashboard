// src/components/Chart.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactApexChart from "react-apexcharts";

const Chart = ({ symbol }) => {
  const [data, setData] = useState({});
  const [timeRange, setTimeRange] = useState('TIME_SERIES_DAILY');
  console.log(data,"data");

  useEffect(() => {
    const fetchData = async () => {
    //   const response = await axios.get(`https://www.alphavantage.co/query?function=${timeRange}&symbol=${symbol}&apikey=${process.env.REACT_APP_API_KEY}`);
    //   console.log(response.data);
    //   const chartData = processChartData(response.data); // You need to implement processChartData
    //   setData(chartData);
    };

    fetchData();
  }, [symbol, timeRange]);

  return (
    <section className="p-4 bg-white shadow rounded-lg">
      <h2 className="text-lg font-bold">{symbol} Chart</h2>
      <div className='gap-4'>
        <button className='' onClick={() => setTimeRange('TIME_SERIES_DAILY')}>1D</button>
        <button onClick={() => setTimeRange('TIME_SERIES_WEEKLY')}>1W</button>
        <button onClick={() => setTimeRange('TIME_SERIES_MONTHLY')}>1M</button>
        {/* <button onClick={() => setTimeRange('3M')}>3M</button>
        <button onClick={() => setTimeRange('1Y')}>1Y</button>
        <button onClick={() => setTimeRange('All')}>All</button> */}
      </div>
      {/* <ReactApexChart data={data} /> */}
    </section>
  );
};

export default Chart;
