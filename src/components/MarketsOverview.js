// src/components/MarketsOverview.js
import React, { useEffect, useState } from 'react';
import { fetchMarketsOverview } from '../api/marketData';

const MarketsOverview = () => {
    const [marketsOverview, setMarketsOverview] = useState([]);
    console.log(marketsOverview,"marketsOverview")
    console.log(process.env.REACT_APP_API_KEY,"process.env.REACT_APP_API_KEY")

    useEffect(() => {
      const fetchData = async () => {
          try {
              const markets = await fetchMarketsOverview();
              setMarketsOverview(markets);
              
          } catch (error) {
              console.error(error);
          }
      };
  
      fetchData();
    }, []);

    const marketsUpdated = marketsOverview?.most_actively_traded?.slice(0, 10);
    console.log(marketsUpdated,"marketsUpdated");
  return (
    <section className="p-4 bg-gray-800 text-white shadow rounded-lg">
    <h2 className="text-lg font-bold mb-4">Markets Overview</h2>
    <table className="w-full">
    <tbody className=''>
      {marketsUpdated && marketsUpdated.map((market) => (
        <tr key={market.ticker} className="p-4 bg-gray-700 rounded-lg shadow">
          <td className="text-md px-auto font-semibold">{market.ticker}</td>
          <td> ${market.price}</td>
          <td className={market.change_amount >= 0 ? 'text-green-500' : 'text-red-500'}> {market.change_amount}</td>
          <td className={market.change_percentage.slice(0,-1) >= 0 ? 'text-green-500' : 'text-red-500'}> {market.change_percentage}</td>
          {/* <span>Volume: {market.volume}</span> */}
        </tr>
      ))}
      </tbody>
    </table>
  </section>
  );
};

export default MarketsOverview;
