// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import { fetchMarketSummary, fetchSectorPerformance, fetchMarketsOverview } from '../api/marketData';
import MarketSummary from './MarketSummary';
import SectorPerformance from './SectorPerformance';
import MarketsOverview from './MarketsOverview';
import Chart from './Chart';
import Header from './Header';
import CandlestickChart from './CandlestickChart';

const Dashboard = () => {
  const [sectorPerformance, setSectorPerformance] = useState([]);
  const [userName] = useState('User');
  
  console.log(process.env.REACT_APP_API_KEY,"process.env.REACT_APP_API_KEY")
  useEffect(() => {
    const fetchData = async () => {
        try {
            const sectors = await fetchSectorPerformance();
            setSectorPerformance(sectors);
            
        } catch (error) {
            console.error(error);
        }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header userName={userName} />
      <main className="p-4 gap-2 grid grid-cols-2 max-sm:grid-cols-1">
        <MarketSummary />
        <SectorPerformance sectors={sectorPerformance} />
        <MarketsOverview  />
        {/* <Chart symbol="IBM" /> */}
        <CandlestickChart symbol="IBM" />
      </main>
    </div>
  );
};

export default Dashboard;
